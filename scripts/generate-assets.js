const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcLogo = 'C:/Users/matheus/.gemini/antigravity/brain/480a1bb3-1fec-464b-9784-a8de0c43c473/.user_uploaded/media_1794065838547_8179d64f.png';
const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

async function processLogoAndIcons() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Perfectly cropped full logo (minX: 26, maxX: 997, minY: 73, maxY: 259)
  // Overall bounding box: width = 972, height = 187
  const croppedLogo = await sharp(srcLogo)
    .extract({ left: 26, top: 73, width: 972, height: 187 })
    .toBuffer();

  // Save tightly cropped and padded full logo
  await sharp(croppedLogo)
    .extend({ top: 16, bottom: 16, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Saved public/logo.png');

  // 2. Standalone FB emblem (x: 26 to 342, y: 73 to 259)
  const fbEmblem = await sharp(srcLogo)
    .extract({ left: 26, top: 73, width: 316, height: 187 })
    .toBuffer();

  await sharp(fbEmblem)
    .png()
    .toFile(path.join(publicDir, 'fb-mark.png'));
  console.log('Saved public/fb-mark.png');

  // 3. Create crisp favicons and app icons
  // A round-rect or clean circular card containing the FB emblem on crisp white or subtle slate
  const iconBase = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    {
      // resize emblem with proportional fit
      input: await sharp(fbEmblem).resize(420, 250, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
      gravity: 'centre'
    }
  ])
  .png()
  .toBuffer();

  // Save all standard icon formats to public/ and app/
  fs.writeFileSync(path.join(publicDir, 'icon-512x512.png'), iconBase);
  fs.writeFileSync(path.join(publicDir, 'icon-192x192.png'), await sharp(iconBase).resize(192, 192).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, 'icon-32x32.png'), await sharp(iconBase).resize(32, 32).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, 'icon-16x16.png'), await sharp(iconBase).resize(16, 16).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), await sharp(iconBase).resize(180, 180).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), await sharp(iconBase).resize(32, 32).png().toBuffer());
  fs.writeFileSync(path.join(publicDir, 'icon.png'), iconBase);

  // App router icons
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), await sharp(iconBase).resize(32, 32).png().toBuffer());
  fs.writeFileSync(path.join(appDir, 'icon.png'), iconBase);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), await sharp(iconBase).resize(180, 180).png().toBuffer());

  // 4. Create OG Image (1200x630) with rich navy background and bright branding card
  const ogCard = await sharp({
    create: {
      width: 960,
      height: 380,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    {
      input: await sharp(croppedLogo).resize(840, 240, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
      gravity: 'centre'
    }
  ])
  .png()
  .toBuffer();

  const ogImage = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 0, g: 26, b: 120, alpha: 1 } // Navy #001A78
    }
  })
  .composite([
    {
      input: ogCard,
      gravity: 'centre'
    }
  ])
  .jpeg({ quality: 90 })
  .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), ogImage);

  console.log('All icons, logos, and OG image generated with precision!');
}

processLogoAndIcons().catch(console.error);
