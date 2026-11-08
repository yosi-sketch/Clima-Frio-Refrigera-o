const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');
const m = content.match(/['\"][^'\"]+\.(?:png|jpg|jpeg|svg|webp)[^'\"]*['\"]/gi) || [];
console.log('Unique assets referenced in page.tsx:');
console.log([...new Set(m)]);
