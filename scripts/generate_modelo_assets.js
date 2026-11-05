const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../public/logo.png');

async function generateAll() {
  if (!fs.existsSync(src)) {
    console.error('Source logo not found at', src);
    process.exit(1);
  }

  console.log('Generating Modelo Piscinas assets from', src);

  // Get metadata
  const meta = await sharp(src).metadata();
  console.log(`Source dimensions: ${meta.width}x${meta.height}`);

  // Create square icon base with transparent background and comfortable padding (512x512)
  const iconBase = await sharp(src)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Save 512x512
  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), iconBase);
  fs.writeFileSync(path.join(__dirname, '../public/icon-512x512.png'), iconBase);
  fs.writeFileSync(path.join(__dirname, '../app/icon.png'), iconBase);

  // 192x192
  const img192 = await sharp(iconBase).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-192x192.png'), img192);

  // 180x180 Apple icon (with subtle luxury dark navy background or transparent)
  // Let's create an apple touch icon with dark navy background so it looks stunning on iOS home screens
  const appleNavyBg = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 10, g: 17, b: 56, alpha: 1 } // #0A1138
    }
  }).png().toBuffer();

  const appleLogo = await sharp(src)
    .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const appleIcon = await sharp(appleNavyBg)
    .composite([{ input: appleLogo, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(__dirname, '../app/apple-icon.png'), appleIcon);

  // 48x48, 32x32, 16x16
  const img48 = await sharp(iconBase).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-48x48.png'), img48);

  const img32 = await sharp(iconBase).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-32x32.png'), img32);

  const img16 = await sharp(iconBase).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-16x16.png'), img16);

  // Favicon.ico (standard 32x32 PNG inside or 32x32 ico buffer)
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), img32);
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), img32);

  // Open Graph Image (1200x630) - high impact deep navy banner with gradient feel and logo
  const bgNavy = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 10, g: 17, b: 56, alpha: 1 } // #0A1138 deep navy
    }
  }).png().toBuffer();

  const logoForOg = await sharp(src)
    .resize(700, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogComposite = await sharp(bgNavy)
    .composite([{ input: logoForOg, gravity: 'center' }])
    .jpeg({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/og-image.jpg'), ogComposite);

  console.log('All Modelo Piscinas assets generated successfully!');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
