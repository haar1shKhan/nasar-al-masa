const fs = require('fs');
const path = require('path');

const files = ['home.html', 'services.html', 'about.html', 'projects.html', 'contact.html'];
const summary = {};

files.forEach(f => {
  const content = fs.readFileSync(path.join(__dirname, 'stitch_sources', f), 'utf8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const headerMatch = content.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
  const footerMatch = content.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
  
  summary[f] = {
    totalLength: content.length,
    hasHeader: !!headerMatch,
    hasFooter: !!footerMatch,
    hasMain: !!mainMatch,
    mainLength: mainMatch ? mainMatch[1].length : 0
  };
});

console.log(JSON.stringify(summary, null, 2));
