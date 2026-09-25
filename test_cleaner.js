const fs = require('fs');
const path = require('path');

function sanitizeHtmlForReact(html) {
  let res = html
    // Remove all scripts and inline comments
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    
    // Attributes
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/aria-current="[^"]*"/g, '')
    .replace(/data-alt=/g, 'alt=')
    
    // Self-closing tags
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');

  // Convert style strings to JSX style objects
  res = res.replace(/style="([^"]*)"/g, (match, p1) => {
    const styles = p1.split(';').filter(s => s.trim().length > 0);
    const obj = {};
    styles.forEach(s => {
      const idx = s.indexOf(':');
      if (idx !== -1) {
        let key = s.substring(0, idx).trim();
        let val = s.substring(idx + 1).trim();
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        obj[key] = val.replace(/&quot;/g, '"');
      }
    });
    return 'style={' + JSON.stringify(obj) + '}';
  });

  return res;
}

const files = ['home.html', 'services.html', 'about.html', 'projects.html', 'contact.html'];
files.forEach(f => {
  const content = fs.readFileSync('stitch_sources/' + f, 'utf8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.error('No main in ' + f);
    return;
  }
  const cleaned = sanitizeHtmlForReact(mainMatch[1]);
  console.log(`Cleaned ${f} - Length: ${cleaned.length}`);
});
