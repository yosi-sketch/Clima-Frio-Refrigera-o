const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const inputPath = 'C:/Users/matheus/.gemini/antigravity/brain/5aa29738-7b0a-4d12-95c4-67ac8b1c49ac/.user_uploaded/media_1793886995407_1a268e10.jpg';
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  function isWhite(x, y) {
    const idx = (y * width + x) * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r > 245 && g > 245 && b > 245;
  }

  // BFS Flood Fill from edges
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Enqueue edges
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

  // Create RGBA
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    // If it was reached by outer flood fill, make transparent (0), otherwise opaque (255)
    rgba[i * 4 + 3] = isBg[i] ? 0 : 255;
  }

  const publicDir = path.resolve(__dirname, '../public');
  const appDir = path.resolve(__dirname, '../app');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  // 1. Save base transparent logo
  const transparentPngBuffer = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toBuffer();

  const trimmedBuffer = await sharp(transparentPngBuffer)
    .trim()
    .png()
    .toBuffer();

  const trimmedSharp = sharp(trimmedBuffer);
  const trimmedMeta = await trimmedSharp.metadata();

  console.log('Trimmed dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Save transparent trimmed logo
  await sharp(trimmedBuffer)
    .png()
    .toFile(path.join(publicDir, 'logo-trimmed.png'));

  // Save standard logo (with comfortable transparent padding)
  await sharp(trimmedBuffer)
    .extend({
      top: 30,
      bottom: 30,
      left: 30,
      right: 30,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // Also save a white-background square card version for social share / og-image
  await sharp(trimmedBuffer)
    .resize(800, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'logo-square.png'));

  // Create high-res OG Image (1200x630)
  // Let's create an elegant og-image with Aguazul Sete Lagoas / Quatro Estações Piscinas
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#07172C"/>
          <stop offset="60%" stop-color="#0B2344"/>
          <stop offset="100%" stop-color="#0A6DB0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1000" cy="150" r="350" fill="#0A6DB0" opacity="0.15" filter="blur(60px)"/>
      <circle cx="200" cy="500" r="250" fill="#EE8220" opacity="0.08" filter="blur(50px)"/>
      <rect x="60" y="60" width="1080" height="510" rx="24" fill="#FFFFFF" fill-opacity="0.03" stroke="#BAE6FD" stroke-opacity="0.2" stroke-width="1.5"/>
    </svg>
  `;

  const ogLogo = await sharp(trimmedBuffer)
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const ogTextSvg = `
    <svg width="650" height="400" viewBox="0 0 650 400" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="45" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="bold" fill="#00D0FF" letter-spacing="4">SETE LAGOAS &#8226; MINAS GERAIS</text>
      <text x="0" y="115" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">QUATRO ESTAÇÕES</text>
      <text x="0" y="165" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" fill="#FFD200">PISCINAS &#8226; AGUAZUL</text>
      <text x="0" y="225" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="500" fill="#E2E8F0">Piscinas de Fibra, Saunas, Aquecimento Solar e Manutenção</text>
      <rect x="0" y="275" width="460" height="52" rx="12" fill="#0A6DB0" fill-opacity="0.5" stroke="#00D0FF" stroke-width="1.5"/>
      <text x="24" y="308" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="bold" fill="#FFFFFF">★ 4,9 no Google &#8226; 67 Avaliações Reais</text>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .composite([
      { input: Buffer.from(ogTextSvg), top: 120, left: 100 },
      { input: ogLogo, top: 125, left: 740 }
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'og-image.jpg'));

  // Generate app icons and favicons
  // The heart sun emblem by itself or the whole logo:
  // For small favicons (16x16, 32x32, 48x48), the heart/sun emblem is ultra-distinctive and visible!
  // Let's create an icon focusing on the emblem with circle/rounded background
  const emblemCrop = await sharp(inputPath)
    .extract({ left: 180, top: 80, width: 660, height: 600 })
    .toBuffer();

  const iconBase = await sharp(trimmedBuffer)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toBuffer();

  // 512x512 icon
  await sharp(iconBase)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon.png'));

  await sharp(iconBase)
    .resize(512, 512)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // 192x192
  await sharp(iconBase)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192x192.png'));

  // 180x180 apple icon
  await sharp(iconBase)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-icon.png'));

  await sharp(iconBase)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // 48x48, 32x32, 16x16
  await sharp(iconBase)
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'icon-48x48.png'));

  await sharp(iconBase)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'icon-32x32.png'));

  await sharp(iconBase)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'icon-16x16.png'));

  // Favicon.ico
  // A standard 32x32 or 48x48 PNG can be saved as favicon.ico or converted
  const ico32 = await sharp(iconBase).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), ico32);

  console.log('All logo and icon assets generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
