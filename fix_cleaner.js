const fs = require('fs');

function sanitizeHtmlForReact(html) {
  let res = html
    // Remove all scripts and inline comments
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    
    // Attributes fixes
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/autofocus/g, 'autoFocus')
    .replace(/aria-current="[^"]*"/g, '')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/patternunits=/gi, 'patternUnits=')
    .replace(/onsubmit="[^"]*"/gi, 'onSubmit={(e) => e.preventDefault()}')
    
    // Boolean attributes
    .replace(/selected="[^"]*"/gi, '')
    .replace(/selected/gi, '')
    .replace(/required="[^"]*"/gi, 'required')
    .replace(/disabled="[^"]*"/gi, 'disabled')
    .replace(/readonly="[^"]*"/gi, 'readOnly')
    .replace(/checked="[^"]*"/gi, 'defaultChecked')

    // Numeric attributes for React
    .replace(/rows="(\d+)"/gi, 'rows={$1}')
    .replace(/cols="(\d+)"/gi, 'cols={$1}')
    .replace(/maxlength="(\d+)"/gi, 'maxLength={$1}')
    .replace(/minlength="(\d+)"/gi, 'minLength={$1}')
    .replace(/tabindex="(\d+)"/gi, 'tabIndex={$1}')
    
    // Remove data-alt on non-img tags
    .replace(/<div([^>]*?)data-alt="[^"]*"/gi, '<div$1')
    .replace(/<span([^>]*?)data-alt="[^"]*"/gi, '<span$1')
    .replace(/<section([^>]*?)data-alt="[^"]*"/gi, '<section$1')
    .replace(/data-alt=/gi, 'alt=')
    
    // Self-closing tags
    .replace(/<img([^>]*[^\/])>/gi, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/gi, '<input$1 />')
    .replace(/<br>/gi, '<br />')
    .replace(/<hr([^>]*[^\/])>/gi, '<hr$1 />');

  // Convert style strings to JSX style objects with robust parser
  res = res.replace(/style="([^"]*)"/g, (match, p1) => {
    let s = p1.replace(/&quot;/g, '"');
    const obj = {};
    const declarations = s.split(/;(?![^(]*\))/).filter(x => x.trim().length > 0);
    declarations.forEach(decl => {
      const colonIdx = decl.indexOf(':');
      if (colonIdx !== -1) {
        let key = decl.slice(0, colonIdx).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        let val = decl.slice(colonIdx + 1).trim();
        obj[key] = val;
      }
    });
    return 'style={' + JSON.stringify(obj) + '}';
  });

  return res;
}

function processNavigationAndActions(jsx) {
  let res = jsx;
  res = res.replace(/<a([^>]*?)data-path="home"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="about-us"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/about"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="services"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/services"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="projects"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/projects"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="contact-us"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/contact"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="safety-standards"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<Link$1$2href="/about#credentials"$3>$4</Link>');
  res = res.replace(/<a([^>]*?)data-path="request-consultation"([^>]*?)href="[^"]*"([^>]*?)>([\s\S]*?)<\/a>/g, '<button onClick={() => setModalOpen(true)}$1$2$3>$4</button>');

  res = res.replace(/<a([^>]*?)href="#"([^>]*?)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    if (p3.toLowerCase().includes('consultation') || p3.toLowerCase().includes('proposal') || p3.toLowerCase().includes('quote') || p3.toLowerCase().includes('contract') || p3.toLowerCase().includes('select tier') || p3.toLowerCase().includes('rfq') || p3.toLowerCase().includes('audit')) {
      return `<button onClick={() => setModalOpen(true)}${p1}${p2}>${p3}</button>`;
    }
    return `<Link href="/contact"${p1}${p2}>${p3}</Link>`;
  });

  return res;
}

// Write 5 pages
const pages = [
  { src: 'home.html', dest: 'src/app/page.tsx', name: 'HomePage', service: 'Turnkey HVAC & Elevators' },
  { src: 'services.html', dest: 'src/app/services/page.tsx', name: 'ServicesPage', service: 'HVAC & District Cooling' },
  { src: 'about.html', dest: 'src/app/about/page.tsx', name: 'AboutPage', service: 'General Inquiry' },
  { src: 'projects.html', dest: 'src/app/projects/page.tsx', name: 'ProjectsPage', service: 'Project Specifications' },
  { src: 'contact.html', dest: 'src/app/contact/page.tsx', name: 'ContactPage', service: 'Technical Inquiry' }
];

pages.forEach(p => {
  const raw = fs.readFileSync('stitch_sources/' + p.src, 'utf8');
  const main = raw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
  const cleaned = processNavigationAndActions(sanitizeHtmlForReact(main));
  
  const content = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function ${p.name}() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${cleaned}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultService="${p.service}" 
      />
    </div>
  );
}
`;
  fs.writeFileSync(p.dest, content);
  console.log('Written:', p.dest);
});
