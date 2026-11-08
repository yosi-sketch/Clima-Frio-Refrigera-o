const https = require('https');

function searchCommons(query, limit = 8) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|size&gsrlimit=${limit}&format=json`;
    https.get(url, {
      headers: { 'User-Agent': 'FriomaxRefrig/1.0 (https://friomax.com.br; contact@friomax.com.br)' }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const results = [];
          for (const k in pages) {
            const p = pages[k];
            const info = p.imageinfo?.[0];
            if (info && (info.mime === 'image/jpeg' || info.mime === 'image/png')) {
              results.push({
                title: p.title,
                url: info.url,
                width: info.width,
                height: info.height,
                size: info.size
              });
            }
          }
          resolve(results);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

module.exports = { searchCommons };

if (require.main === module) {
  (async () => {
    console.log('Searching for industrial kitchen inox refrigerator...');
    const r1 = await searchCommons('commercial refrigerator restaurant', 10);
    r1.forEach(x => console.log('1:', x.title, '->', x.url));
    const r2 = await searchCommons('walk-in cooler commercial', 10);
    r2.forEach(x => console.log('2:', x.title, '->', x.url));
  })();
}
