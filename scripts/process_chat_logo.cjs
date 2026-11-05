const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processOriginalLogo() {
  const src = 'C:/Users/matheus/.gemini/antigravity/brain/5aa29738-7b0a-4d12-95c4-67ac8b1c49ac/.user_uploaded/media_1793886995407_1a268e10.jpg';
  const publicDir = path.resolve(__dirname, '../public');
  const appDir = path.resolve(__dirname, '../app');

  // 1. Copy exact original file to public/logo.jpg and public/logo-chat.jpg
  fs.copyFileSync(src, path.join(publicDir, 'logo.jpg'));
  fs.copyFileSync(src, path.join(publicDir, 'logo-chat.jpg'));
  fs.copyFileSync(src, path.join(publicDir, 'logo-original.jpg'));

  // 2. Create high-resolution PNG with pure white background preserved (crisp antialiasing)
  await sharp(src)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-white-bg.png'));

  // 3. Create a clean trimmed version
  await sharp(src)
    .trim({ threshold: 10 })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo-trimmed.png'));

  // 4. Overwrite public/logo.png with the crisp high-res version with slight white padding
  await sharp(src)
    .trim({ threshold: 10 })
    .extend({
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png({ quality: 100 })
    .toFile(path.join(publicDir, 'logo.png'));

  // 5. Update icon.png, apple-icon.png, and favicon.ico directly from this logo!
  const iconBase = await sharp(src)
    .trim({ threshold: 10 })
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

  console.log('Successfully processed original logo and generated all icons!');
}

processOriginalLogo().catch(console.error);
