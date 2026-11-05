const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const meta = await sharp('public/logo.png').metadata();
  console.log('Original:', meta.width, meta.height);

  // 1. Trimmed full logo
  await sharp('public/logo.png')
    .trim()
    .png()
    .toFile('public/logo-trimmed.png');

  // Let's also inspect where the text starts.
  // In a 969x603 image:
  // The text "MODELO PISCINAS" is located at the bottom ~25-30% of the image.
  // The emblem (M + droplet) is located in the top ~70-75% of the image.
  const trimmed = sharp('public/logo-trimmed.png');
  const tMeta = await sharp('public/logo-trimmed.png').metadata();
  console.log('Trimmed:', tMeta.width, tMeta.height);

  // Emblem crop (top ~75%)
  const emblemHeight = Math.round(tMeta.height * 0.72);
  await sharp('public/logo-trimmed.png')
    .extract({ left: 0, top: 0, width: tMeta.width, height: emblemHeight })
    .trim()
    .png()
    .toFile('public/logo-symbol.png');

  const sMeta = await sharp('public/logo-symbol.png').metadata();
  console.log('Symbol:', sMeta.width, sMeta.height);

  // Text crop (bottom ~30%)
  const textTop = Math.round(tMeta.height * 0.68);
  const textHeight = tMeta.height - textTop;
  await sharp('public/logo-trimmed.png')
    .extract({ left: 0, top: textTop, width: tMeta.width, height: textHeight })
    .trim()
    .png()
    .toFile('public/logo-text.png');

  console.log('Logo parts extracted successfully!');
}

processLogo().catch(console.error);
