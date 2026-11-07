const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const userLogoPath = 'C:/Users/matheus/.gemini/antigravity/brain/b70ccb6d-0923-47f5-b65c-18f75ecdfe79/.user_uploaded/media_1794080782569_f064d310.png';

async function main() {
  console.log('Reading uploaded logo:', userLogoPath);
  const metadata = await sharp(userLogoPath).metadata();
  console.log('Metadata:', metadata);

  // Analyze dominant colors using raw pixel buffer
  const { data, info } = await sharp(userLogoPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const colorCounts = {};
  const step = 4; // Sample every 4th pixel for speed
  for (let i = 0; i < data.length; i += 4 * step) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (a < 50) continue; // ignore transparent
    // ignore pure whites (near 255)
    if (r > 240 && g > 240 && b > 240) continue;

    // group colors slightly to find dominant shades
    const rBin = Math.round(r / 8) * 8;
    const gBin = Math.round(g / 8) * 8;
    const bBin = Math.round(b / 8) * 8;
    const key = `#${rBin.toString(16).padStart(2, '0')}${gBin.toString(16).padStart(2, '0')}${bBin.toString(16).padStart(2, '0')}`;
    colorCounts[key] = (colorCounts[key] || 0) + 1;
  }

  const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
  console.log('Top non-white logo colors:');
  sortedColors.slice(0, 15).forEach(([c, cnt]) => console.log(`${c}: ${cnt}`));

  // Make sure public directory exists
  fs.mkdirSync('public', { recursive: true });
  fs.mkdirSync('public/images', { recursive: true });

  // 1. Save original logo in public
  await sharp(userLogoPath).toFile('public/logo.png');
  console.log('Saved public/logo.png');

  // Let's create a transparent background version of the logo if the background is pure white
  // Let's check top-left pixel
  const cornerR = data[0];
  const cornerG = data[1];
  const cornerB = data[2];
  console.log(`Corner pixel: rgb(${cornerR}, ${cornerG}, ${cornerB})`);

  // Create transparent logo: convert pure white/off-white background to transparent
  // We can also create a high-contrast white-lettering version for dark backgrounds if needed
  const transparentLogoBuffer = await sharp(userLogoPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const tData = transparentLogoBuffer.data;
  for (let i = 0; i < tData.length; i += 4) {
    const r = tData[i];
    const g = tData[i + 1];
    const b = tData[i + 2];
    // If pixel is white / background
    if (r > 245 && g > 245 && b > 245) {
      tData[i + 3] = 0; // Transparent
    }
  }

  await sharp(tData, {
    raw: {
      width: transparentLogoBuffer.info.width,
      height: transparentLogoBuffer.info.height,
      channels: 4
    }
  }).png().toFile('public/logo-transparent.png');
  console.log('Saved public/logo-transparent.png');

  // Also extract the snowflake / 'O' symbol to create an iconic brand mark / favicon
  // Let's find the bounding box of the circular snowflake emblem
  // In "ISOMINAS", "ISO" -> the O is around 25-35% from the left, middle vertically
  // Let's also create the favicon using the snowflake
  // We can crop the "O" with snowflake or create a square icon with the logo
  
  // Create square icon for favicon, apple-touch-icon, etc.
  const size = Math.max(metadata.width, metadata.height);
  await sharp(userLogoPath)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile('public/icon-512.png');

  await sharp('public/icon-512.png').resize(192, 192).toFile('public/icon-192.png');
  await sharp('public/icon-512.png').resize(180, 180).toFile('public/apple-icon.png');
  await sharp('public/icon-512.png').resize(32, 32).toFile('public/icon-32x32.png');
  await sharp('public/icon-512.png').resize(16, 16).toFile('public/icon-16x16.png');
  await sharp('public/icon-512.png').resize(48, 48).toFile('public/favicon.ico');
  await sharp('public/icon-512.png').toFile('public/icon.png');

  // Copy to app/ for Next.js app directory conventions
  fs.copyFileSync('public/favicon.ico', 'app/favicon.ico');
  fs.copyFileSync('public/apple-icon.png', 'app/apple-icon.png');
  fs.copyFileSync('public/icon.png', 'app/icon.png');

  console.log('Favicons and app icons generated successfully!');
}

main().catch(console.error);
