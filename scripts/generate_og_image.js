const sharp = require('sharp');
const fs = require('fs');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Create an industrial high-tech deep blue cold background with SVG
  const svgBg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#02142B" />
        <stop offset="50%" stop-color="#0A2A54" />
        <stop offset="100%" stop-color="#001833" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00B4D8" />
        <stop offset="100%" stop-color="#0077B6" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <!-- Decorative industrial grid -->
    <circle cx="100" cy="100" r="300" fill="#0096E6" opacity="0.08" filter="blur(80px)" />
    <circle cx="1100" cy="500" r="350" fill="#00C4FF" opacity="0.08" filter="blur(90px)" />
    <!-- Card container for logo -->
    <rect x="150" y="80" width="900" height="470" rx="24" fill="#FFFFFF" fill-opacity="0.04" stroke="#0096E6" stroke-opacity="0.3" stroke-width="2" />
  </svg>
  `;

  // Overlay logo in the center
  const logoBuffer = await sharp('public/logo-transparent.png')
    .resize(680, null, { fit: 'inside' })
    .toBuffer();

  const svgText = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { font-family: 'Montserrat', sans-serif; font-size: 28px; font-weight: 700; fill: #FFFFFF; text-anchor: middle; }
      .badge { font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 600; fill: #38BDF8; text-anchor: middle; letter-spacing: 2px; }
      .sub { font-family: 'sans-serif'; font-size: 20px; fill: #94A3B8; text-anchor: middle; }
    </style>
    <text x="600" y="375" class="badge">INDÚSTRIA &amp; COMÉRCIO DE ISOPAINEIS E REFRIGERAÇÃO</text>
    <text x="600" y="420" class="title">Isopainéis EPS &amp; PUR · Câmaras Frias · Portas Frigoríficas · Telhas Térmicas</text>
    <text x="600" y="465" class="sub">Fábrica Própria com 10.000m² · 15+ Anos de Excelência · Ribeirão das Neves / BH - MG</text>
  </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(svgBg)).png().toBuffer();

  await sharp(bgBuffer)
    .composite([
      { input: logoBuffer, top: 120, left: Math.round((width - 680) / 2) },
      { input: Buffer.from(svgText), top: 0, left: 0 }
    ])
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');

  console.log('Saved public/og-image.jpg');
}

createOgImage().catch(console.error);
