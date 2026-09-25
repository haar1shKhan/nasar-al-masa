"use client";

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
      <div className="flex flex-col w-full">

<section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none">
<svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="48" id="arch-grid" patternUnits="userSpaceOnUse" width="48">
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" stroke-width="1"></path>
</pattern>
</defs>
<rect fill="url(#arch-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
<div className="flex flex-col max-w-4xl space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low w-fit shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Certified Infrastructure Showcase • 2020–2024</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
          Engineered Landmarks <br className="hidden sm:inline"/>
<span className="text-primary-container">Across the UAE &amp; GCC</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A curated portfolio of high-capacity HVAC installations, architectural elevators, and high-traffic transit escalators engineered for absolute thermal balance and vertical continuity.
        </p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-gutter pt-space-md">
<div className="flex flex-col bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Commissioned</span>
<span className="font-headline-md text-headline-md text-primary mt-1 font-bold">140+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Elevator Shafts &amp; AHUs</span>
</div>
<div className="flex flex-col bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Chilled Capacity</span>
<span className="font-headline-md text-headline-md text-primary mt-1 font-bold">28,500</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tons of Refrigeration (TR)</span>
</div>
<div className="flex flex-col bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">DCD Compliance</span>
<span className="font-headline-md text-headline-md text-secondary-container mt-1 font-bold">100%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">First-Pass Safety Signoff</span>
</div>
<div className="flex flex-col bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Uptime Reliability</span>
<span className="font-headline-md text-headline-md text-primary mt-1 font-bold">99.98%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Across Active SLAs</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest shadow-[0_4px_24px_-2px_rgba(15,23,42,0.02)] sticky top-20 z-30">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-sm">
<div className="flex items-center justify-between gap-space-md overflow-x-auto no-scrollbar py-1">
<div className="flex items-center gap-space-xs shrink-0" id="filter-container">
<button className="filter-btn active-pill px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-primary bg-primary shadow-sm transition-all duration-200 cursor-pointer" data-filter="all">
            All Projects
          </button>
<button className="filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 cursor-pointer" data-filter="commercial">
            Commercial Towers
          </button>
<button className="filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 cursor-pointer" data-filter="residential">
            Residential High-Rises
          </button>
<button className="filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 cursor-pointer" data-filter="hospitality">
            Hospitality &amp; Luxury
          </button>
<button className="filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 cursor-pointer" data-filter="industrial">
            Industrial &amp; Logistics
          </button>
<button className="filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-all duration-200 cursor-pointer" data-filter="healthcare">
            Healthcare Facilities
          </button>
</div>
<div className="hidden md:flex items-center gap-space-xs text-on-surface-variant text-body-sm shrink-0">
<span className="material-symbols-outlined text-[16px] text-secondary">tune</span>
<span className="font-label-caps text-label-caps uppercase" id="project-count">Displaying 5 Case Studies</span>
</div>
</div>
</div>
</section>

<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl" id="projects-grid">

<article className="project-card flex flex-col lg:flex-row items-stretch bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all duration-300 overflow-hidden group" data-category="commercial">
<div className="lg:w-7/12 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Futuristic glass commercial skyscraper in Dubai against a clear azure sky, featuring bold geometric curtain walls, sleek structural engineering details, architectural shadows, and modern urban surrounding infrastructure in clean daylight photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nkS2xClgvOFW7ARmjRDm9Mnrr079OA_q7C51QE3nFgHXq7Q7FKjNKaqoMf0ftXu2VxtzDClKFNrzIWM9YXGrhT86iZPxlG2pihvWtQebLLaCV1QluxBzTvptbCbi24WTUANeEtzE8wP5X9WvQ4T48zUb8YYkDBO90_Gsnj7r8QHmQV4pfE0oLP8DdcRdn3g31jW63lbFVNbOrDpzwLQMa2a_837SwHSZi8J6G0sLRzD0w8aPiqjw"/>
<div className="absolute top-space-md left-space-md flex gap-space-xs">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm">COMMERCIAL TOWER</span>
<span className="px-space-sm py-space-xs rounded bg-primary text-on-primary font-label-caps text-label-caps shadow-sm">DUBAI MARINA DISTRICT</span>
</div>
<div className="absolute bottom-space-md right-space-md">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/95 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm">COMPLETED 2023</span>
</div>
</div>
<div className="lg:w-5/12 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Project ID: DXB-CR-089</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-container">
<span className="material-symbols-outlined text-[14px]">verified</span> Turnkey Scope
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              Al Reem Commercial Tower
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Design, high-altitude rigging, and integration of high-speed passenger vertical transport alongside an ultra-efficient central chilled water HVAC plant for a 52-story corporate landmark.
            </p>

<div className="mt-space-md pt-space-xs space-y-space-xs bg-surface-container-low rounded-lg p-space-md">
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Elevator Fleet</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">4x Gearless Passenger Units</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Travel Velocity</span>
<span className="font-body-md text-body-md text-primary font-semibold">2.5 m/s Variable Frequency</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Cooling Capacity</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">800 TR Centrifugal Chiller</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Acoustic Rating</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">&lt; 42 dBA Quiet Core</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">domain_verification</span>
<span>DCD &amp; Dubai Municipality Approved</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://wa.me/97142888490?text=Inquiry%20regarding%20Al%20Reem%20Commercial%20Tower%20Specs" rel="noopener noreferrer" target="_blank">
<span>View Data Sheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="project-card flex flex-col lg:flex-row-reverse items-stretch bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all duration-300 overflow-hidden group" data-category="residential hospitality">
<div className="lg:w-7/12 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Luxury beachfront high-rise residential structure on Palm Jumeirah during golden hour, reflecting calm turquoise ocean waters, showcasing elegant glass panoramic balconies and precision engineered exterior elevator column." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzFO4DC6_4v4IHZD5ldYTtE6Dn9HGOZTkoevAaLq03dX2KpZjca0zqXVdp1-pCPm7yXKkT2jgyBfCvBfLcDJZuYpD451lbSW_j7xsKcfWIgzGToWhM1vgD9fc8ZVdLQz5LKwdAySFleT5qcVLlzM-m9NqkRuwMOqmmljitI6zwTpPLz37KZGHlIQn6P_SCVgJq_LNLQ23N-pKNMPJnsRSrU4bDnEv6u49zeU8KnYEVsji5hBsdvlwD"/>
<div className="absolute top-space-md left-space-md flex gap-space-xs">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm">RESIDENTIAL HIGH-RISE</span>
<span className="px-space-sm py-space-xs rounded bg-primary text-on-primary font-label-caps text-label-caps shadow-sm">PALM JUMEIRAH</span>
</div>
<div className="absolute bottom-space-md right-space-md">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/95 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm">COMPLETED 2024</span>
</div>
</div>
<div className="lg:w-5/12 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Project ID: PJM-RS-104</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-container">
<span className="material-symbols-outlined text-[14px]">hotel_class</span> Architectural Grade
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              The Palm Horizon Luxury Residences
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Curved panoramic scenic elevators operating in seaside marine conditions, coupled with an intelligent multi-zone VRF climate distribution system ensuring pristine indoor air quality and zero condensation.
            </p>
<div className="mt-space-md pt-space-xs space-y-space-xs bg-surface-container-low rounded-lg p-space-md">
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Lifting Array</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">6x Panoramic Laminated Glass</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Climate Topology</span>
<span className="font-body-md text-body-md text-primary font-semibold">Heat Recovery VRF Multi-Zone</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Marine Corrosion Defense</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Grade 316 Stainless Guide Rails</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Filtration Standard</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">MERV-13 Dynamic Air Scrubbers</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">speed</span>
<span>Ultra-Smooth Direct Traction</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://wa.me/97142888490?text=Inquiry%20regarding%20Palm%20Horizon%20Glass%20Elevator%20Specs" rel="noopener noreferrer" target="_blank">
<span>View Data Sheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="project-card flex flex-col lg:flex-row items-stretch bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all duration-300 overflow-hidden group" data-category="industrial">
<div className="lg:w-7/12 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Expansive industrial mega warehouse and logistics distribution hub in Dubai Industrial City, showing polished concrete floors, heavy automated freight hoist equipment, and large-scale industrial spiral ventilation ductwork under bright high-bay illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgtuL8nWGy8JXZGQFeoGSUOTYsO54so5HX5BRRooPLBrPscDAWrd_iRcoLvGyMOyKbMgI0Bk7I-q-UKYF596JjZ7dRPiYy1mWJH8W52WHhW9BC6b3Ym8ii-g4Yqh1oNt8unN9sZ423q2dsKYSOvSiooKE_IKGwdHI8YbSyuhE-vO7SOmmUAy-DTkMdw0xQRc3M8tcqnzC6clWk6QHKPwboQfZ83bwF6Qd7ugPtQH4MF2DM0sCsG4h-"/>
<div className="absolute top-space-md left-space-md flex gap-space-xs">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm">INDUSTRIAL &amp; LOGISTICS</span>
<span className="px-space-sm py-space-xs rounded bg-primary text-on-primary font-label-caps text-label-caps shadow-sm">DUBAI INDUSTRIAL CITY</span>
</div>
<div className="absolute bottom-space-md right-space-md">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/95 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm">COMPLETED 2023</span>
</div>
</div>
<div className="lg:w-5/12 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Project ID: DIC-IN-220</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-container">
<span className="material-symbols-outlined text-[14px]">precision_manufacturing</span> Heavy Load Spec
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              Dubai Logistics Corridor Facility
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Industrial-grade vertical freight infrastructure built for round-the-clock automated pallet loading, reinforced with specialized smoke extraction systems and high-throughput fresh air induction.
            </p>
<div className="mt-space-md pt-space-xs space-y-space-xs bg-surface-container-low rounded-lg p-space-md">
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Freight Capacity</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">4x 5,000 kg Heavy Hydraulic Lifts</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Car Dimensions</span>
<span className="font-body-md text-body-md text-primary font-semibold">3.2m (W) x 4.8m (D) x 3.0m (H)</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Emergency Exhaust</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">60,000 CFM Smoke Evacuation</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Floor Threshold</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Diamond-plate Heavy Rigging Plate</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">local_shipping</span>
<span>24/7 Duty Cycle Certified</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://wa.me/97142888490?text=Inquiry%20regarding%20Industrial%20Freight%20Lift%20Specifications" rel="noopener noreferrer" target="_blank">
<span>View Data Sheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="project-card flex flex-col lg:flex-row-reverse items-stretch bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all duration-300 overflow-hidden group" data-category="commercial hospitality">
<div className="lg:w-7/12 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Spacious contemporary retail atrium with multi-tier glass escalators stretching across expansive architectural voids, soft natural skylight washing over smooth white marble floors and modern commercial storefronts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJz0KWp93yW64NGkTuM1ju2WmibvW-8EvapSBJtfk8bCQmfpIdvMRQRniJEPl8bpqpkxw6x4qUNyuhGxjCW3nA5ijYPwvfMBMbQ6cU_be6lFBHGczsBnV7pYQdzU7O4I5XQAHP5WHWuRAH0F479GCVQUnpn64zBkp6sZ4sBScNtr-ExNx7aYUSvA3izMh2-ZIwYf2pssTj9PKaWWOYVNTHJWtRIEG6j_MBlAtVAJY1swsgzC_yzQFB"/>
<div className="absolute top-space-md left-space-md flex gap-space-xs">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm">COMMERCIAL &amp; RETAIL</span>
<span className="px-space-sm py-space-xs rounded bg-primary text-on-primary font-label-caps text-label-caps shadow-sm">DOWNTOWN DUBAI</span>
</div>
<div className="absolute bottom-space-md right-space-md">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/95 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm">COMPLETED 2022</span>
</div>
</div>
<div className="lg:w-5/12 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Project ID: DWT-RC-044</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-container">
<span className="material-symbols-outlined text-[14px]">groups</span> High-Footfall Transit
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              Metropolitan Retail Center
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Installation of 12 commercial escalators engineered for sustained high traffic density across 4 retail galleria levels, harmonized with high-volume AHUs utilizing active electrostatic dust filtration.
            </p>
<div className="mt-space-md pt-space-xs space-y-space-xs bg-surface-container-low rounded-lg p-space-md">
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Escalator Units</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">12x Public Transit Duty (30° &amp; 35°)</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Step Width &amp; Speed</span>
<span className="font-body-md text-body-md text-primary font-semibold">1,000mm Steps at 0.5 m/s</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Safety Integration</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Optical Skirt Guard Sensors</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Air Distribution</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">14x Rooftop Packaged AHUs</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">eco</span>
<span>Variable Inverter Energy Savers</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://wa.me/97142888490?text=Inquiry%20regarding%20Metropolitan%20Escalator%20Engineering" rel="noopener noreferrer" target="_blank">
<span>View Data Sheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="project-card flex flex-col lg:flex-row items-stretch bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all duration-300 overflow-hidden group" data-category="healthcare">
<div className="lg:w-7/12 relative min-h-[380px] lg:min-h-[460px] overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Sterile high-tech hospital corridor in Dubai Healthcare City, featuring seamless medical vinyl floors, recessed indirect circadian LED lighting, pristine stainless elevator doors, and high-efficiency surgical air ceiling diffusers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1qiUSIKuQjXoe4YeXkEuYJmWZf0hP5tdWmb5F1ejC-1p9Dr4fawUpLc9LwHA4cffP0xFVEI-244WAdZhG3PmqcG5kGKstPpXRBqXx-ih1ldmKXmj5uk1uWL_csclw3eDg16HY011hPcinTkw4XSwUIi9IDXLt7wBbL6kspDERPmuSKxa0ils5rJ_YZ87GkRZ4sa9gUS--ucXNYPCEGmhOwWQ2nqxUxLXs6EJR5Z1vUvqjfwhfUpvP"/>
<div className="absolute top-space-md left-space-md flex gap-space-xs">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm">HEALTHCARE FACILITY</span>
<span className="px-space-sm py-space-xs rounded bg-primary text-on-primary font-label-caps text-label-caps shadow-sm">DUBAI HEALTHCARE CITY</span>
</div>
<div className="absolute bottom-space-md right-space-md">
<span className="px-space-sm py-space-xs rounded bg-surface-container-lowest/95 backdrop-blur font-label-caps text-label-caps text-secondary font-bold shadow-sm">COMPLETED 2024</span>
</div>
</div>
<div className="lg:w-5/12 p-space-lg lg:p-space-xl flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">Project ID: DHC-HC-312</span>
<span className="flex items-center gap-1 font-label-caps text-label-caps text-secondary-container">
<span className="material-symbols-outlined text-[14px]">sanitizer</span> Cleanroom Grade
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              Elite Specialized Medical Clinic
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Ultra-gentle medical bed lifts equipped with zero-jerk acceleration curves, paired with hospital cleanroom ventilation maintaining positive room air pressure and HEPA-14 biological filtration.
            </p>
<div className="mt-space-md pt-space-xs space-y-space-xs bg-surface-container-low rounded-lg p-space-md">
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Stretcher Lifts</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">3x 2,500 kg Extended Bed Cabins</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Leveling Precision</span>
<span className="font-body-md text-body-md text-primary font-semibold">± 1.0mm Flush Floor Alignment</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Air Exchange Standard</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">ISO Class 7 Cleanroom Compliance</span>
</div>
<div className="flex items-center justify-between py-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Standby Protocol</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Auto-Return Emergency Bed Priority</span>
</div>
</div>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">health_and_safety</span>
<span>DHA Strict Compliance Standard</span>
</div>
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://wa.me/97142888490?text=Inquiry%20regarding%20Medical%20Clinic%20Elevator%20and%20Cleanroom%20Specs" rel="noopener noreferrer" target="_blank">
<span>View Data Sheet</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="w-full py-space-xl bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin space-y-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Systematic Quality Assurance</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Execution Methodology</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            From preliminary shaft laser scanning to Dubai Civil Defense final inspection, each phase is conducted under strict ISO 9001:2015 protocol.
          </p>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-space-xs rounded bg-surface-container-low font-label-caps text-label-caps text-primary">
            AVERAGE LEAD TIME: 12-16 WEEKS
          </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">

<div className="relative flex flex-col p-space-lg bg-surface-container-low rounded-xl space-y-space-md transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30">01</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">architecture</span>
</div>
</div>
<div className="space-y-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Shaft &amp; Thermal Survey</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              3D spatial lidar measurement of lift cores, structural hoist-way plumb analysis, and building thermodynamic load profiling.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>BIM Coordination</span>
</div>
</div>

<div className="relative flex flex-col p-space-lg bg-surface-container-low rounded-xl space-y-space-md transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30">02</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
</div>
</div>
<div className="space-y-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Procurement &amp; Rigging</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Factory certification, craning of heavy chiller plants, and synchronized hoistway bracket positioning with millimeter tolerance.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>Heavy Hoisting Plan</span>
</div>
</div>

<div className="relative flex flex-col p-space-lg bg-surface-container-low rounded-xl space-y-space-md transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30">03</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">tune</span>
</div>
</div>
<div className="space-y-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Precision Assembly</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Guide rail laser squaring, direct-drive machine alignment, VRF copper piping brazing, and ductwork leak-testing under pressure.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>Acoustic Damping</span>
</div>
</div>

<div className="relative flex flex-col p-space-lg bg-surface-container-low rounded-xl space-y-space-md transition-all duration-300 hover:bg-surface-container hover:shadow-sm">
<div className="flex items-center justify-between">
<span className="font-headline-lg text-headline-lg text-primary font-bold opacity-30">04</span>
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</div>
</div>
<div className="space-y-space-xs">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Testing &amp; Handover</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Full load drops, overspeed safety tripping tests, air balancing (TAB), and official DCD / Municipality handover certification.
            </p>
</div>
<div className="pt-space-xs flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span>Authority Signoff</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-space-lg bg-surface border-y-0">
<div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
<div className="bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg shadow-sm">
<div className="space-y-space-xs max-w-xl">
<span className="font-label-caps text-label-caps text-secondary-container uppercase tracking-wider">Engineering Compliance</span>
<h3 className="font-headline-md text-headline-md text-on-primary">Need Exact Technical Specifications for Your Project?</h3>
<p className="font-body-md text-body-md text-primary-fixed-dim">
            Our principal MEP and elevator systems engineers can provide CAD drawings, shaft tolerance limits, and BTU load calculations tailored to your tender documents.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full lg:w-auto shrink-0">
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-secondary-container hover:bg-secondary text-on-secondary rounded-lg font-label-md text-label-md transition-colors shadow-sm" href="https://wa.me/97142888490?text=Hello%20Nasar%20Al%20Masa,%20I%20would%20like%20to%20request%20engineering%20consultation%20for%20a%20project." rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>WhatsApp Project Desk</span>
</a>
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary-container text-on-primary hover:bg-primary-fixed-variant rounded-lg font-label-md text-label-md transition-colors" href="tel:+97142888490">
<span className="material-symbols-outlined text-[18px]">call</span>
<span>+971 4 288 8490</span>
</a>
</div>
</div>
</div>
</section>


</div>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Project Specifications" />
    </div>
  );
}
