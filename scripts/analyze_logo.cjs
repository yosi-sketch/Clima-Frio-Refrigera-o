const sharp = require('sharp');
const path = require('path');

async function findColors() {
  const imgPath = 'C:/Users/matheus/.gemini/antigravity/brain/5aa29738-7b0a-4d12-95c4-67ac8b1c49ac/.user_uploaded/media_1793886995407_1a268e10.jpg';
  const { data, info } = await sharp(imgPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  function getPixel(x, y) {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  function toHex([r, g, b]) {
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  // Scan wave band
  for (let y = 780; y <= 805; y += 5) {
    for (let x = 300; x <= 700; x += 10) {
      const p = getPixel(x, y);
      if (p[0] < 200 || p[1] < 200 || p[2] < 200) {
        console.log('Wave color at ' + x + ',' + y + ':', toHex(p));
        break;
      }
    }
  }

  // Scan SETE LAGOAS text
  for (let y = 840; y <= 880; y += 5) {
    for (let x = 300; x <= 450; x += 5) {
      const p = getPixel(x, y);
      if (p[0] < 100 && p[1] < 150 && p[2] > 140) {
        console.log('SETE LAGOAS color at ' + x + ',' + y + ':', toHex(p));
        break;
      }
    }
  }
}

findColors();
