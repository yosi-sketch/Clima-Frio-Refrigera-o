const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogoAndIcons() {
  const inputPath = 'C:/Users/matheus/.gemini/antigravity/brain/571603af-641f-4ced-9920-6bfec21fee63/.user_uploaded/media_1793894530521_26893fda.jpg';
  const publicDir = path.resolve(__dirname, '../public');
  const appDir = path.resolve(__dirname, '../app');

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

  console.log('Loading input:', inputPath);

  // 1. Copy exact original file to public/logo.jpg
  fs.copyFileSync(inputPath, path.join(publicDir, 'logo.jpg'));
  fs.copyFileSync(inputPath, path.join(publicDir, 'logo-original.jpg'));

  // 2. Flood-fill white background to make crisp transparent PNG
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;

  function isWhite(x, y) {
    const idx = (y * width + x) * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Background in JPEG has slight compression artifacts around 245-255
    return r > 240 && g > 240 && b > 240;
  }

  // BFS Flood Fill from all 4 boundaries
  const isBg = new Uint8Array(width * height);
  const queue = [];

  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) { isBg[0 * width + x] = 1; queue.push(x, 0); }
    if (isWhite(x, height - 1)) { isBg[(height - 1) * width + x] = 1; queue.push(x, height - 1); }
  }
  for (let y = 0; y < height; y++) {
    if (isWhite(0, y)) { isBg[y * width + 0] = 1; queue.push(0, y); }
    if (isWhite(width - 1, y)) { isBg[y * width + (width - 1)] = 1; queue.push(width - 1, y); }
  }

  let head = 0;
  while (head < queue.length) {
    const cx = queue[head++];
    const cy = queue[head++];

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nidx = ny * width + nx;
        if (!isBg[nidx] && isWhite(nx, ny)) {
          isBg[nidx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }

  // Create RGBA with smooth antialiased outer alpha
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = isBg[i] ? 0 : 255;
  }

  const transparentPngBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();

  const trimmedBuffer = await sharp(transparentPngBuffer)
    .trim()
    .png()
    .toBuffer();

  // Save transparent trimmed logo
  await sharp(trimmedBuffer)
    .png()
    .toFile(path.join(publicDir, 'logo-trimmed.png'));

  // Save logo.png with comfortable padding
  await sharp(trimmedBuffer)
    .extend({
      top: 24,
      bottom: 24,
      left: 24,
      right: 24,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // Save white-background logo badge for contrast places
  await sharp(trimmedBuffer)
    .extend({
      top: 30,
      bottom: 30,
      left: 30,
      right: 30,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.join(publicDir, 'logo-white-bg.png'));

  // 3. Generate square icons centered for Favicon and Touch Icons
  const iconBase = await sharp(trimmedBuffer)
    .resize(460, 460, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toBuffer();

  await sharp(iconBase).resize(512, 512).png().toFile(path.join(publicDir, 'icon.png'));
  await sharp(iconBase).resize(512, 512).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(iconBase).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192x192.png'));
  await sharp(iconBase).resize(180, 180).png().toFile(path.join(publicDir, 'apple-icon.png'));
  await sharp(iconBase).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));
  await sharp(iconBase).resize(32, 32).png().toFile(path.join(publicDir, 'icon-32x32.png'));
  await sharp(iconBase).resize(16, 16).png().toFile(path.join(publicDir, 'icon-16x16.png'));

  const ico32 = await sharp(iconBase).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico32);

  // 4. Generate OG Social Share Card (1200x630)
  const ogCanvas = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 4, g: 66, b: 150, alpha: 1 } // Deep brand blue #044296
    }
  });

  const logoResized = await sharp(trimmedBuffer)
    .resize(500, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Composite logo onto OG image
  await ogCanvas
    .composite([
      {
        input: logoResized,
        top: 125,
        left: 350
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  console.log('Successfully generated all logos, icons, favicons and OG images!');
}

processLogoAndIcons().catch(console.error);
