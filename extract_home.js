const fs = require('fs');
const content = fs.readFileSync('stitch_sources/home.html', 'utf8');
const main = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
console.log("Length of main in home.html:", main.length);
fs.writeFileSync('home_main_extracted.html', main);
