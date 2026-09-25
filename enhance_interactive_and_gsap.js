const fs = require('fs');

// Enhance Home Page with GSAP ScrollTrigger animations
let homeContent = fs.readFileSync('src/app/page.tsx', 'utf8');
if (!homeContent.includes('useEffect')) {
  homeContent = homeContent.replace(
    'import React, { useState } from "react";',
    'import React, { useState, useEffect, useRef } from "react";\nimport { gsap } from "gsap";\nimport { ScrollTrigger } from "gsap/ScrollTrigger";'
  );
  homeContent = homeContent.replace(
    'export default function HomePage() {',
    `export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((elem) => {
          gsap.fromTo(
            elem,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
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
  }, []);`
  );
  homeContent = homeContent.replace(
    '<div className="flex flex-col w-full">',
    '<div ref={containerRef} className="flex flex-col w-full">'
  );
  // Add gsap-reveal class to major sections
  homeContent = homeContent.replace(/<section /g, '<section className="gsap-reveal" ');
  fs.writeFileSync('src/app/page.tsx', homeContent);
  console.log('Home page enhanced with GSAP.');
}

// Enhance Projects Page with interactive category filtering
let projectsContent = fs.readFileSync('src/app/projects/page.tsx', 'utf8');
if (!projectsContent.includes('filterProjects')) {
  projectsContent = projectsContent.replace(
    'export default function ProjectsPage() {',
    `export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const cards = document.querySelectorAll("#projects-grid > div");
    cards.forEach((card: any) => {
      const category = card.getAttribute("data-category") || "";
      if (filter === "all" || category.includes(filter) || filter === "") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }, [filter]);`
  );
  fs.writeFileSync('src/app/projects/page.tsx', projectsContent);
  console.log('Projects page enhanced with interactive filtering.');
}

// Enhance Contact Page with form submission feedback
let contactContent = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
if (!contactContent.includes('handleTechnicalSubmit')) {
  contactContent = contactContent.replace(
    'export default function ContactPage() {',
    `export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleTechnicalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };`
  );
  contactContent = contactContent.replace(
    'id="technicalInquiryForm"',
    'id="technicalInquiryForm" onSubmit={handleTechnicalSubmit}'
  );
  contactContent = contactContent.replace(
    'id="formSuccessMessage"',
    'id="formSuccessMessage" style={{ display: submitted ? "flex" : "none" }}'
  );
  fs.writeFileSync('src/app/contact/page.tsx', contactContent);
  console.log('Contact page enhanced with dynamic form feedback.');
}
