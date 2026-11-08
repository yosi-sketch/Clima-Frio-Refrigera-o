const https = require('https');

function wikiSearch(query, limit = 8) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(query) + '&gsrnamespace=6&gsrlimit=' + limit + '&prop=imageinfo&iiprop=url|size&format=json';
    const u = new URL(url);
    https.get({
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: { 'User-Agent': 'FriomaxRefrig/1.0 (https://friomax.com.br; contact@friomax.com.br)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const results = [];
          pages.forEach(p => {
            const ii = p.imageinfo ? p.imageinfo[0] : null;
            if (ii && ii.url && (ii.url.toLowerCase().includes('.jpg') || ii.url.toLowerCase().includes('.png') || ii.url.toLowerCase().includes('.jpeg'))) {
              results.push({ title: p.title, url: ii.url, w: ii.width, h: ii.height });
            }
          });
          resolve({ query, results });
        } catch(e) {
          resolve({ query, results: [] });
        }
      });
    }).on('error', () => resolve({ query, results: [] }));
  });
}

async function run() {
  const queries = [
    'refrigerator stainless steel',
    'commercial kitchen refrigerator',
    'stainless refrigerator kitchen',
    'blast chiller refrigerator',
    'walk-in freezer'
  ];
  for (const q of queries) {
    const res = await wikiSearch(q, 6);
    console.log('=== ' + res.query + ' (' + res.results.length + ') ===');
    res.results.forEach(r => console.log('  - ' + r.title + ' (' + r.w + 'x' + r.h + ')\n    ' + r.url));
  }
}
run();
