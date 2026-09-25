const fs = require('fs');

['services.html', 'about.html', 'projects.html', 'contact.html'].forEach(f => {
  const html = fs.readFileSync('stitch_sources/' + f, 'utf8');
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`=== ${f} ===`);
  console.log("H1s:", h1s);
  console.log("H2s:", h2s);
  console.log("H3s:", h3s);
});
