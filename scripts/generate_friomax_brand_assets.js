const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputLogo = 'C:/Users/matheus/.gemini/antigravity/brain/9ef74c55-6860-4a8e-9485-fbcbf14f88ce/.user_uploaded/media_1794088622404_cd534517.jpg';

async function createTransparentBuffer(filePath, threshold = 22) {
  const img = sharp(filePath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    rgba[j] = data[i];
    rgba[j + 1] = data[i + 1];
    rgba[j + 2] = data[i + 2];
    rgba[j + 3] = 255;
  }

  // Flood fill from outer borders to isolate exterior black background
  const visited = new Uint8Array(w * h);
  const queue = [];

  function isBg(idx) {
    const r = rgba[idx * 4];
    const g = rgba[idx * 4 + 1];
    const b = rgba[idx * 4 + 2];
    // Dark enough to be exterior background
    return r <= threshold && g <= threshold && b <= threshold;
  }

  for (let x = 0; x < w; x++) {
    const topIdx = x;
    const botIdx = (h - 1) * w + x;
    if (isBg(topIdx) && !visited[topIdx]) { visited[topIdx] = 1; queue.push(topIdx); }
    if (isBg(botIdx) && !visited[botIdx]) { visited[botIdx] = 1; queue.push(botIdx); }
  }
  for (let y = 0; y < h; y++) {
    const leftIdx = y * w;
    const rightIdx = y * w + (w - 1);
    if (isBg(leftIdx) && !visited[leftIdx]) { visited[leftIdx] = 1; queue.push(leftIdx); }
    if (isBg(rightIdx) && !visited[rightIdx]) { visited[rightIdx] = 1; queue.push(rightIdx); }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    rgba[curr * 4 + 3] = 0; // Alpha 0
    const cx = curr % w;
    const cy = Math.floor(curr / w);

    if (cx > 0) {
      const n = curr - 1;
      if (!visited[n] && isBg(n)) { visited[n] = 1; queue.push(n); }
    }
    if (cx < w - 1) {
      const n = curr + 1;
      if (!visited[n] && isBg(n)) { visited[n] = 1; queue.push(n); }
    }
    if (cy > 0) {
      const n = curr - w;
      if (!visited[n] && isBg(n)) { visited[n] = 1; queue.push(n); }
    }
    if (cy < h - 1) {
      const n = curr + w;
      if (!visited[n] && isBg(n)) { visited[n] = 1; queue.push(n); }
    }
  }

  return { rgba, width: w, height: h };
}

async function run() {
  console.log('--- Generating Friomax Brand Assets ---');
  fs.mkdirSync('public', { recursive: true });
  fs.mkdirSync('app', { recursive: true });

  // 1. Copy raw original
  fs.copyFileSync(inputLogo, 'public/logo-original.jpg');

  // 2. Full transparent logo
  const { rgba, width, height } = await createTransparentBuffer(inputLogo, 24);
  const fullTransparent = sharp(rgba, { raw: { width, height, channels: 4 } });
  
  await fullTransparent.clone().png().toFile('public/logo-transparent.png');
  await fullTransparent.clone().png().toFile('public/logo.png');
  console.log('Saved public/logo.png and public/logo-transparent.png');

  // 3. Extract Mascot (Ice Cube Character with Cap)
  // Bounding box for mascot: top 0 to 570, x from 200 to 760
  await fullTransparent.clone()
    .extract({ left: 200, top: 5, width: 560, height: 565 })
    .png()
    .toFile('public/mascot.png');
  console.log('Saved public/mascot.png');

  // 4. Extract Emblem / Stars + Pill + Slogan (from Y=430 to 965, full width)
  await fullTransparent.clone()
    .extract({ left: 10, top: 430, width: 1004, height: 535 })
    .png()
    .toFile('public/logo-badge.png');
  console.log('Saved public/logo-badge.png');

  // 5. Extract Pill Badge only (with pyramid & FRIOMAX text, from Y=730 to 885)
  await fullTransparent.clone()
    .extract({ left: 10, top: 735, width: 1004, height: 150 })
    .png()
    .toFile('public/logo-pill.png');
  console.log('Saved public/logo-pill.png');

  // 6. Generate Favicon & App Icons
  // Using the high-resolution logo on a balanced rounded-corner dark navy badge with blue rim for crisp visibility in both dark and light browser tabs
  const iconCanvas = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 7, g: 21, b: 43, alpha: 1 } // Deep Navy #07152B
    }
  }).png().toBuffer();

  const logoResizedForIcon = await fullTransparent.clone()
    .resize(460, 460, { fit: 'contain' })
    .png()
    .toBuffer();

  const compositeIcon = await sharp(iconCanvas)
    .composite([{ input: logoResizedForIcon, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save all icon sizes
  await sharp(compositeIcon).toFile('public/icon.png');
  await sharp(compositeIcon).toFile('public/icon-512.png');
  await sharp(compositeIcon).resize(192, 192).toFile('public/icon-192.png');
  await sharp(compositeIcon).resize(180, 180).toFile('public/apple-icon.png');
  await sharp(compositeIcon).resize(32, 32).toFile('public/icon-32x32.png');
  await sharp(compositeIcon).resize(16, 16).toFile('public/icon-16x16.png');
  await sharp(compositeIcon).resize(48, 48).toFile('public/favicon.ico');

  // Also sync to app/ folder for Next.js convention
  fs.copyFileSync('public/icon.png', 'app/icon.png');
  fs.copyFileSync('public/apple-icon.png', 'app/apple-icon.png');
  fs.copyFileSync('public/favicon.ico', 'app/favicon.ico');
  console.log('Saved all favicons and app icons in public/ and app/!');

  // 7. Generate OpenGraph Image (1200x630)
  const ogCanvas = await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 5, g: 15, b: 35, alpha: 1 }
    }
  }).png().toBuffer();

  // Create an SVG overlay for the OG card with professional typography and badges
  const ogLogoResized = await fullTransparent.clone()
    .resize(500, 500, { fit: 'contain' })
    .png()
    .toBuffer();

  const svgText = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="25%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#0052CC" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#050F23" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="50%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#D97706"/>
        </linearGradient>
      </defs>
      
      <rect width="1200" height="630" fill="#07152B"/>
      <circle cx="320" cy="315" r="450" fill="url(#glow)"/>
      
      <!-- Right column texts -->
      <g transform="translate(620, 140)">
        <!-- Badge -->
        <rect x="0" y="0" width="360" height="36" rx="18" fill="#0052CC" fill-opacity="0.25" stroke="#3B82F6" stroke-width="1.5"/>
        <text x="18" y="24" font-family="Montserrat, Arial, sans-serif" font-size="14" font-weight="bold" fill="#60A5FA" letter-spacing="1.5">
          FÁBRICA PRÓPRIA DESDE 1991
        </text>

        <!-- Main Title -->
        <text x="0" y="85" font-family="Montserrat, Arial, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">
          FRIOMAX
        </text>
        <text x="0" y="130" font-family="Montserrat, Arial, sans-serif" font-size="30" font-weight="700" fill="#93C5FD">
          Refrigeração Comercial
        </text>

        <!-- Slogan -->
        <text x="0" y="180" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="20" font-style="italic" fill="#E2E8F0">
          "Friomax, a diferença está na qualidade!"
        </text>

        <!-- Stars & Google Reviews -->
        <g transform="translate(0, 220)">
          <rect x="0" y="0" width="480" height="64" rx="12" fill="#0B1E3F" stroke="#1E40AF" stroke-width="1"/>
          <text x="20" y="38" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="900" fill="#FACC15">★ 4,4</text>
          <text x="90" y="38" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="15" fill="#E2E8F0">
            41 Avaliações no Google · Vespasiano - MG
          </text>
        </g>

        <!-- Products highlight -->
        <text x="0" y="340" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="16" fill="#94A3B8">
          Freezers • Expositores • Câmaras Frias • Balcões Térmicos
        </text>
        <text x="0" y="375" font-family="Montserrat, Arial, sans-serif" font-size="18" font-weight="700" fill="#38BDF8">
          Tel: (31) 3503-2400 · www.friomax.com.br
        </text>
      </g>
    </svg>
  `;

  await sharp(ogCanvas)
    .composite([
      { input: Buffer.from(svgText), top: 0, left: 0 },
      { input: ogLogoResized, top: 65, left: 60 }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/og-image.jpg');

  console.log('Saved public/og-image.jpg successfully!');
}

run().catch(console.error);
