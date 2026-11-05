const sharp = require('sharp');

sharp('public/logo.png').raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const colorMap = {};
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 150) {
      const r = Math.round(data[i] / 16) * 16;
      const g = Math.round(data[i + 1] / 16) * 16;
      const b = Math.round(data[i + 2] / 16) * 16;
      const key = r + ',' + g + ',' + b;
      colorMap[key] = (colorMap[key] || 0) + 1;
    }
  }
  const sorted = Object.entries(colorMap).sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log(sorted.map(([k, v]) => {
    const [r, g, b] = k.split(',').map(Number);
    const hex = '#' + [r, g, b].map(x => Math.min(255, x).toString(16).padStart(2, '0')).join('');
    return { rgb: k, hex, count: v };
  }));
});
