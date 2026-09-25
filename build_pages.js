const fs = require('fs');
const path = require('path');

function cleanHtmlToJsx(html) {
  let jsx = html
    .replace(/<!--[\s\S]*?-->/g, '') // remove comments
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/aria-current="page"/g, '')
    .replace(/data-alt=/g, 'alt=')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');

  // Convert style strings to JSX style objects
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
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

  // Convert internal data-path links
  jsx = jsx.replace(/<a([^>]*?)data-path="home"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="about-us"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/about"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="services"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/services"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="projects"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/projects"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="contact-us"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/contact"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="safety-standards"([^>]*?)href="#"([^>]*?)>/g, '<Link$1$2href="/about#credentials"$3>');
  jsx = jsx.replace(/<a([^>]*?)data-path="request-consultation"([^>]*?)href="#"([^>]*?)>/g, '<button onClick={() => setModalOpen(true)}$1$2$3>');

  // Clean remaining href="#" if any to valid links or buttons
  jsx = jsx.replace(/href="#"/g, 'href="/contact"');

  return jsx;
}

function extractMainContent(filename) {
  const content = fs.readFileSync(path.join(__dirname, 'stitch_sources', filename), 'utf8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) throw new Error("No <main> found in " + filename);
  let mainInner = mainMatch[1].trim();
  // Remove wrapping div class="flex flex-col w-full" if present
  if (mainInner.startsWith('<div class="flex flex-col w-full">') && mainInner.endsWith('</div>')) {
    mainInner = mainInner.substring('<div class="flex flex-col w-full">'.length, mainInner.length - 6).trim();
  }
  return cleanHtmlToJsx(mainInner);
}

// 1. Generate Home Page
const homeJsx = extractMainContent('home.html');
const homeCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${homeJsx}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'src/app/page.tsx'), homeCode);
console.log('src/app/page.tsx generated.');

// 2. Generate Services Page
const servicesJsx = extractMainContent('services.html');
const servicesCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("HVAC & District Cooling");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      ${servicesJsx}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={selectedService} />
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'src/app/services/page.tsx'), servicesCode);
console.log('src/app/services/page.tsx generated.');

// 3. Generate About Page
const aboutJsx = extractMainContent('about.html');
const aboutCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      ${aboutJsx}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'src/app/about/page.tsx'), aboutCode);
console.log('src/app/about/page.tsx generated.');

// 4. Generate Projects Page with interactive filtering
const projectsJsx = extractMainContent('projects.html');
const projectsCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="flex flex-col w-full">
      ${projectsJsx}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Project Specifications" />
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'src/app/projects/page.tsx'), projectsCode);
console.log('src/app/projects/page.tsx generated.');

// 5. Generate Contact Page with interactive form
const contactJsx = extractMainContent('contact.html');
const contactCode = `"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "@/components/ConsultationModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Central Chilled Water & District Cooling",
    facility: "Commercial High-Rise",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      ${contactJsx}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'src/app/contact/page.tsx'), contactCode);
console.log('src/app/contact/page.tsx generated.');

console.log('All 5 pages generated successfully!');
