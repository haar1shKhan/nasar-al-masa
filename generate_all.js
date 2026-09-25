const fs = require('fs');
const path = require('path');

function parseStyleString(styleStr) {
  let s = styleStr.replace(/&quot;/g, '"');
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
  return JSON.stringify(obj);
}

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
    .replace(/required="[^"]*"/gi, 'required')
    .replace(/disabled="[^"]*"/gi, 'disabled')
    .replace(/readonly="[^"]*"/gi, 'readOnly')
    .replace(/checked="[^"]*"/gi, 'defaultChecked')
    
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
    return 'style={' + parseStyleString(p1) + '}';
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

  // Generic link conversion
  res = res.replace(/<a([^>]*?)href="#"([^>]*?)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    if (p3.toLowerCase().includes('consultation') || p3.toLowerCase().includes('proposal') || p3.toLowerCase().includes('quote') || p3.toLowerCase().includes('contract') || p3.toLowerCase().includes('select tier') || p3.toLowerCase().includes('rfq') || p3.toLowerCase().includes('audit')) {
      return `<button onClick={() => setModalOpen(true)}${p1}${p2}>${p3}</button>`;
    }
    return `<Link href="/contact"${p1}${p2}>${p3}</Link>`;
  });

  return res;
}

// 1. HOME
let homeRaw = fs.readFileSync('stitch_sources/home.html', 'utf8');
let homeMain = homeRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
let homeClean = processNavigationAndActions(sanitizeHtmlForReact(homeMain));

const homeFile = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${homeClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Turnkey HVAC & Elevators" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/page.tsx', homeFile);

// 2. SERVICES
let servicesRaw = fs.readFileSync('stitch_sources/services.html', 'utf8');
let servicesMain = servicesRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
let servicesClean = processNavigationAndActions(sanitizeHtmlForReact(servicesMain));

const servicesFile = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("HVAC & District Cooling");

  return (
    <div className="flex flex-col w-full">
      ${servicesClean}
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultService={selectedService} 
      />
    </div>
  );
}
`;
fs.writeFileSync('src/app/services/page.tsx', servicesFile);

// 3. ABOUT
let aboutRaw = fs.readFileSync('stitch_sources/about.html', 'utf8');
let aboutMain = aboutRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
let aboutClean = processNavigationAndActions(sanitizeHtmlForReact(aboutMain));

const aboutFile = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${aboutClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="General Inquiry" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/about/page.tsx', aboutFile);

// 4. PROJECTS
let projectsRaw = fs.readFileSync('stitch_sources/projects.html', 'utf8');
let projectsMain = projectsRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
let projectsClean = processNavigationAndActions(sanitizeHtmlForReact(projectsMain));

const projectsFile = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${projectsClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Project Specifications" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/projects/page.tsx', projectsFile);

// 5. CONTACT
let contactRaw = fs.readFileSync('stitch_sources/contact.html', 'utf8');
let contactMain = contactRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
let contactClean = processNavigationAndActions(sanitizeHtmlForReact(contactMain));

const contactFile = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${contactClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Technical Inquiry" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/contact/page.tsx', contactFile);

console.log('All 5 pages re-generated with fixed styles and attributes.');
