const fs = require('fs');
const content = fs.readFileSync('stitch_sources/home.html', 'utf8');
const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);
console.log("=== HEADER ===");
console.log(headerMatch ? headerMatch[0] : "NONE");
console.log("=== FOOTER ===");
console.log(footerMatch ? footerMatch[0] : "NONE");
