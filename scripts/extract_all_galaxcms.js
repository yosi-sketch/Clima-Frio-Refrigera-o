const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('outputs').filter(f => f.endsWith('.html'));
const urls = new Set();

files.forEach(f => {
  const content = fs.readFileSync(path.join('outputs', f), 'latin1');
  const matches = content.match(/https?:\/\/[^\s"'()<>]+galaxcms[^\s"'()<>]+/gi) || [];
  matches.forEach(u => urls.add(u));
});

console.log(`Found ${urls.size} unique GalaxCMS image URLs:`);
Array.from(urls).forEach(u => console.log(u));
