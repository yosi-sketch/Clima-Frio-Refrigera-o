const https = require('https');

function searchCommons(query, limit = 15) {
  return new Promise((resolve, reject) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|size&gsrlimit=${limit}&format=json`;
    https.get(url, {
      headers: {
        'User-Agent': 'PiscinasNaHoraBH_Bot/1.0 (https://piscinasnahorabh.com.br; dev@piscinasnahorabh.com.br)'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
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
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

const query = process.argv[2] || 'inflatable swimming pool';
searchCommons(query).then(res => {
  console.log(`Results for "${query}":`);
  res.forEach((r, i) => {
    console.log(`[${i}] ${r.title}`);
    console.log(`    URL: ${r.url}`);
  });
}).catch(console.error);
