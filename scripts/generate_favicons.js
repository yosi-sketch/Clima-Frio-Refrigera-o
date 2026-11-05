const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const symbolSrc = path.join(__dirname, '../public/logo-symbol.png');
  const fullSrc = path.join(__dirname, '../public/logo-trimmed.png');

  console.log('Generating crisp favicons from emblem symbol:', symbolSrc);

  // 1. Square base for icons (emblem with minimal comfortable padding)
  const meta = await sharp(symbolSrc).metadata();
  const maxDim = Math.max(meta.width, meta.height);
  
  // Create a 512x512 square canvas with centered symbol
  const symbolBase512 = await sharp(symbolSrc)
    .resize(470, 470, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 21,
      bottom: 21,
      left: 21,
      right: 21,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), symbolBase512);
  fs.writeFileSync(path.join(__dirname, '../public/icon-512x512.png'), symbolBase512);
  fs.writeFileSync(path.join(__dirname, '../app/icon.png'), symbolBase512);

  // 192x192
  const img192 = await sharp(symbolBase512).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-192x192.png'), img192);

  // Apple icon 180x180 with navy background
  const appleNavyBg = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 7, g: 13, b: 36, alpha: 1 } // #070D24
    }
  }).png().toBuffer();

  const appleLogo = await sharp(symbolSrc)
    .resize(140, 140, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const appleIcon = await sharp(appleNavyBg)
    .composite([{ input: appleLogo, gravity: 'center' }])
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(__dirname, '../app/apple-icon.png'), appleIcon);

  // 48x48, 32x32, 16x16
  const img48 = await sharp(symbolBase512).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-48x48.png'), img48);

  const img32 = await sharp(symbolBase512).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-32x32.png'), img32);

  const img16 = await sharp(symbolBase512).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/icon-16x16.png'), img16);

  // Favicon.ico (standard 32x32)
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), img32);
  fs.writeFileSync(path.join(__dirname, '../app/favicon.ico'), img32);

  console.log('Crisp symbol favicons generated successfully!');
}

generateFavicons().catch(console.error);
