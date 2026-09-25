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
    .replace(/onsubmit="[^"]*"/gi, '')
    
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

// 1. HOME PAGE
const homeRaw = fs.readFileSync('stitch_sources/home.html', 'utf8');
const homeMain = homeRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
const homeClean = processNavigationAndActions(sanitizeHtmlForReact(homeMain));

const homeCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem, index) => {
          if (index > 0) {
            gsap.fromTo(
              elem,
              { y: 24, opacity: 0.95 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: elem,
                  start: "top 85%",
                  toggleActions: "play none none none"
                }
              }
            );
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      ${homeClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Turnkey HVAC & Elevators" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/page.tsx', homeCode);

// 2. SERVICES PAGE
const servicesRaw = fs.readFileSync('stitch_sources/services.html', 'utf8');
const servicesMain = servicesRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
const servicesClean = processNavigationAndActions(sanitizeHtmlForReact(servicesMain));

const servicesCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("HVAC & District Cooling");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem) => {
          gsap.fromTo(
            elem,
            { y: 20, opacity: 0.95 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
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
fs.writeFileSync('src/app/services/page.tsx', servicesCode);

// 3. ABOUT PAGE
const aboutRaw = fs.readFileSync('stitch_sources/about.html', 'utf8');
const aboutMain = aboutRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
const aboutClean = processNavigationAndActions(sanitizeHtmlForReact(aboutMain));

const aboutCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem) => {
          gsap.fromTo(
            elem,
            { y: 20, opacity: 0.95 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      ${aboutClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="General Inquiry" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/about/page.tsx', aboutCode);

// 4. PROJECTS PAGE
const projectsRaw = fs.readFileSync('stitch_sources/projects.html', 'utf8');
const projectsMain = projectsRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
const projectsClean = processNavigationAndActions(sanitizeHtmlForReact(projectsMain));

const projectsCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem) => {
          gsap.fromTo(
            elem,
            { y: 20, opacity: 0.95 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      ${projectsClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Project Specifications" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/projects/page.tsx', projectsCode);

// 5. CONTACT PAGE
const contactRaw = fs.readFileSync('stitch_sources/contact.html', 'utf8');
const contactMain = contactRaw.match(/<main[^>]*>([\s\S]*?)<\/main>/i)[1];
const contactClean = processNavigationAndActions(sanitizeHtmlForReact(contactMain));

const contactCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationModal from "@/components/ConsultationModal";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("section").forEach((elem) => {
          gsap.fromTo(
            elem,
            { y: 20, opacity: 0.95 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="flex flex-col w-full">
      ${contactClean}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Technical Inquiry" />
    </div>
  );
}
`;
fs.writeFileSync('src/app/contact/page.tsx', contactCode);

console.log('Clean generation of all 5 pages with GSAP complete!');
