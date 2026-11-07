const sharp = require('sharp');
const fs = require('fs');

async function extractSnowflake() {
  // Let's crop the circular 'O' snowflake from the logo
  // 1024 width, 341 height
  // The 'O' is around x: 220 to 390, y: 35 to 225
  const cropped = await sharp('public/logo.png')
    .extract({ left: 225, top: 45, width: 155, height: 165 })
    .toBuffer();

  await sharp(cropped).toFile('public/snowflake-raw.png');
  console.log('Saved public/snowflake-raw.png');

  // Let's make an emblem version with circular background or clean transparent
  const meta = await sharp(cropped).metadata();
  console.log('Cropped meta:', meta);

  // Also create a high-res circular badge icon for favicon and app icons!
  await sharp('public/logo.png')
    .extract({ left: 220, top: 40, width: 165, height: 165 })
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/snowflake-icon.png');

  // Let's make this the primary favicon and app-icon! A snowflake emblem is 1000x more recognizable in browser tabs!
  await sharp('public/snowflake-icon.png').resize(192, 192).toFile('public/icon-192.png');
  await sharp('public/snowflake-icon.png').resize(512, 512).toFile('public/icon-512.png');
  await sharp('public/snowflake-icon.png').resize(180, 180).toFile('public/apple-icon.png');
  await sharp('public/snowflake-icon.png').resize(32, 32).toFile('public/icon-32x32.png');
  await sharp('public/snowflake-icon.png').resize(16, 16).toFile('public/icon-16x16.png');
  await sharp('public/snowflake-icon.png').resize(48, 48).toFile('public/favicon.ico');
  await sharp('public/snowflake-icon.png').toFile('public/icon.png');

  fs.copyFileSync('public/favicon.ico', 'app/favicon.ico');
  fs.copyFileSync('public/apple-icon.png', 'app/apple-icon.png');
  fs.copyFileSync('public/icon.png', 'app/icon.png');

  console.log('Snowflake emblem & favicons updated!');
}

extractSnowflake().catch(console.error);
