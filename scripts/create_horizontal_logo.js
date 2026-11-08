const sharp = require('sharp');
const fs = require('fs');

async function main() {
  console.log('Creating horizontal logo assets...');

  // 1. Ensure public/logo.png is the FULL, clean, trimmed logo (mascot + stars + badge + slogan)
  await sharp('public/logo-transparent.png')
    .trim()
    .png()
    .toFile('public/logo.png');

  // Also overwrite logo-badge.png with the full logo so NO broken/chopped image is ever served
  fs.copyFileSync('public/logo.png', 'public/logo-badge.png');

  // 2. Now let's also construct a horizontal brand lockup:
  // Mascot on left, Stars + Pill + Slogan on right
  const mascot = await sharp('public/mascot-trimmed.png')
    .resize({ height: 260, fit: 'contain' })
    .png()
    .toBuffer({ resolveWithObject: true });

  // Pill badge + Slogan (from Y=730 to 967)
  const pillAndSlogan = await sharp('public/logo.png')
    .extract({ left: 0, top: 700, width: 1007, height: 248 })
    .trim()
    .png()
    .toBuffer({ resolveWithObject: true });

  console.log('Mascot resized for horizontal:', mascot.info.width, 'x', mascot.info.height);
  console.log('Pill/Slogan for horizontal:', pillAndSlogan.info.width, 'x', pillAndSlogan.info.height);

  // Resize pill and slogan to match height
  const pillResized = await sharp(pillAndSlogan.data)
    .resize({ height: 160, fit: 'contain' })
    .png()
    .toBuffer({ resolveWithObject: true });

  // Create canvas for horizontal lockup
  const totalW = mascot.info.width + 25 + pillResized.info.width + 20;
  const totalH = 280;

  const canvas = await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).png().toBuffer();

  const mascotTop = Math.round((totalH - mascot.info.height) / 2);
  const pillTop = Math.round((totalH - pillResized.info.height) / 2);

  await sharp(canvas)
    .composite([
      { input: mascot.data, top: mascotTop, left: 10 },
      { input: pillResized.data, top: pillTop, left: mascot.info.width + 25 }
    ])
    .png()
    .toFile('public/logo-horizontal.png');

  console.log('Saved public/logo-horizontal.png (' + totalW + 'x' + totalH + ')');
}

main().catch(console.error);
