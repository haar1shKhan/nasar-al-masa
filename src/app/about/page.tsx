"use client";

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
      <div className="flex flex-col w-full">

<section className="relative w-full py-24 bg-surface overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-xl">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container-high text-primary mb-space-md">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-caps text-label-caps uppercase tracking-wider">Corporate Profile • UAE Division</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-none mb-space-lg">
            Building the Backbone of Modern Structures.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Nasar Al Masa Technical Services LLC engineers the critical mechanical and kinetic lifelines of premier commercial towers, industrial terminals, and luxury developments across the Emirates.
          </p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-space-md min-w-[260px]">
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Operational Uptime</span>
<span className="material-symbols-outlined text-secondary text-[20px]">speed</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">99.98%</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Across 420+ connected vertical &amp; HVAC assets</p>
</div>
<div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Compliance Matrix</span>
<span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
</div>
<div className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">100%</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">DCD &amp; Dubai Municipality audit clearance</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">

<div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs">Our Heritage &amp; Trajectory</span>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-md leading-tight">
            From precision mechanical interventions to total infrastructural engineering.
          </h2>
<div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
<p>
              Founded in the industrial and architectural hub of the United Arab Emirates, Nasar Al Masa Technical Services began with a singular mandate: elevate the standard of mechanical reliability within demanding desert microclimates. What originated as a specialized mechanical team servicing high-stress hydraulic elevators has matured into a premier, full-scope MEP contractor.
            </p>
<p>
              Today, our teams engineer bespoke HVAC industrial ducting, super-tall vertical mobility solutions, and multi-zone thermal dynamics for marquee residential, commercial, and governmental complexes in Dubai, Abu Dhabi, and the Northern Emirates.
            </p>
</div>

<div className="mt-space-lg grid grid-cols-3 gap-space-md pt-space-md bg-surface-container-low rounded-xl p-space-md">
<div>
<span className="font-headline-md text-headline-md text-primary block font-bold">2012</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">UAE Operations Commenced</span>
</div>
<div>
<span className="font-headline-md text-headline-md text-primary block font-bold">1,800+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Elevator Shafts Commissioned</span>
</div>
<div>
<span className="font-headline-md text-headline-md text-primary block font-bold">250k+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">TR Cooling Plant Capacity</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative mt-space-lg lg:mt-0">
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] bg-surface-container">
<img className="w-full h-full object-cover" alt="A clean, modern architectural view looking upward through an ultra-tall glass elevator shaft inside a high-end Dubai corporate skyscraper. Steel cable rigging, illuminated brass counterweights, and polished reflective glass panels. Cool navy-blue daylight tones balanced with surgical amber emergency indicator lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBarTZyEJrgBgr8uinyJeSXhaJC-4LqJiyuGgs9teLnzcsabUw8UE_Fgvy7eNUu01MHUAsvRRdoThYOXfFlixvRoejMKVzh2pDErvhkI_-5gYM595SnDLLTMAyRKq91XJRYPrR7S8qOe-GJPCN0HtKdWt4VgXiJrTQWlHU3AorvLlJQ28M2iVC_4KG6GzzwqvX3mCZScFV2zNWUyEoRiIleyQ8rBtvv641WwqYjfATi7h85btd_t0tr"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
<div className="absolute bottom-space-md left-space-md right-space-md p-space-md bg-surface-container-lowest/90 backdrop-blur-md rounded-lg flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary block uppercase">Commissioning Portfolio</span>
<span className="font-label-md text-label-md text-primary font-semibold">Burj Crown &amp; Business Bay Corporate High-Rises</span>
</div>
<span className="material-symbols-outlined text-primary text-[24px]">architecture</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-surface">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Structural Doctrine</span>
<h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs">Our Uncompromising Values</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Every bolt tightened, duct insulated, and motor calibrated follows our four-pillar engineering constitution.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all flex flex-col justify-between h-full group">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-headline-md text-headline-md text-secondary-container font-bold opacity-80 group-hover:opacity-100 transition-opacity">01</span>
<span className="material-symbols-outlined text-primary text-[28px]">square_foot</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Precision Tolerances</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Zero-compromise dynamic calibration. Laser-aligned elevator guide rails measured to sub-millimeter allowances eliminate cabin vibration and wear.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low rounded p-space-xs flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">TOLERANCE SPEC</span>
<span className="font-label-md text-label-md font-semibold text-primary">≤ 0.25 mm/m</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all flex flex-col justify-between h-full group">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-headline-md text-headline-md text-secondary-container font-bold opacity-80 group-hover:opacity-100 transition-opacity">02</span>
<span className="material-symbols-outlined text-primary text-[28px]">health_and_safety</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Life-Safety Compliance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Full adherence to UAE Fire &amp; Life Safety codes and EN81-20/50 international directives. Integrated smoke control and automatic evacuation logic.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low rounded p-space-xs flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">SAFETY CODE</span>
<span className="font-label-md text-label-md font-semibold text-primary">DCD Annex-4</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all flex flex-col justify-between h-full group">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-headline-md text-headline-md text-secondary-container font-bold opacity-80 group-hover:opacity-100 transition-opacity">03</span>
<span className="material-symbols-outlined text-primary text-[28px]">energy_savings_leaf</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Energy Efficiency</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Green building LEED-compliant thermal ratings. Regenerative elevator drives and variable-refrigerant-flow (VRF) climate automation reducing power load.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low rounded p-space-xs flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">POWER RECOVERY</span>
<span className="font-label-md text-label-md font-semibold text-primary">Up to 35%</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(37,55,119,0.08)] transition-all flex flex-col justify-between h-full group">
<div>
<div className="flex items-center justify-between mb-space-lg">
<span className="font-headline-md text-headline-md text-secondary-container font-bold opacity-80 group-hover:opacity-100 transition-opacity">04</span>
<span className="material-symbols-outlined text-primary text-[28px]">emergency_home</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">24/7 Lifeline Support</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Rapid field response teams staged across strategic zones in Dubai and Abu Dhabi. Guaranteed trapped-passenger rescue and critical HVAC emergency dispatch.
            </p>
</div>
<div className="pt-space-md mt-space-md bg-surface-container-low rounded p-space-xs flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant">SLA DISPATCH</span>
<span className="font-label-md text-label-md font-semibold text-primary">≤ 28 Mins</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">

<div className="lg:col-span-5">
<div className="relative rounded-xl overflow-hidden bg-primary text-on-primary p-space-xl shadow-xl">
<div className="flex items-center justify-between mb-space-lg">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider">Field Standards Bench</span>
<span className="font-headline-sm text-headline-sm">Engineers &amp; Specialists</span>
</div>
<span className="material-symbols-outlined text-secondary-fixed text-[36px]">badge</span>
</div>
<p className="font-body-md text-body-md text-on-primary/90 mb-space-lg leading-relaxed">
              Every field supervisor and system programmer at Nasar Al Masa maintains dual certification under international statutory bodies and UAE municipality frameworks.
            </p>
<div className="space-y-space-sm">
<div className="flex items-center justify-between p-space-sm bg-primary-container rounded">
<span className="font-body-sm text-body-sm">Mechanical Engineers (B.Sc / M.Sc)</span>
<span className="font-label-caps text-label-caps text-secondary-fixed bg-primary px-space-xs py-0.5 rounded">ASHRAE Cert</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-primary-container rounded">
<span className="font-label-caps text-label-caps text-on-primary">Vertical Transport Inspectors</span>
<span className="font-label-caps text-label-caps text-secondary-fixed bg-primary px-space-xs py-0.5 rounded">EN81-20 / TUV</span>
</div>
<div className="flex items-center justify-between p-space-sm bg-primary-container rounded">
<span className="font-label-caps text-label-caps text-on-primary">Civil Defense Competent Persons</span>
<span className="font-label-caps text-label-caps text-secondary-fixed bg-primary px-space-xs py-0.5 rounded">DCD Certified</span>
</div>
</div>

<div className="mt-space-lg pt-space-md border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="font-label-caps text-label-caps text-white/80">Active Crews Mobilized</span>
</div>
<span className="font-label-md text-label-md font-semibold text-white">48 On-Field Technicians</span>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center lg:pl-space-lg">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-space-xs">Institutional Competence</span>
<h2 className="font-headline-lg text-headline-lg text-primary mb-space-md">
            Engineered by professionals who understand regional thermal &amp; mechanical stress.
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            Operating in the Arabian Gulf means confronting ambient summer heat exceeding 50°C, heavy humidity, and high particulate ingress. Standard manufacturer presets fail without targeted regional adaptation. Our technical leadership team formulates custom thermal dissipation matrices and specialized shaft ventilation geometries tested for desert conditions.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="p-space-md bg-surface rounded-xl">
<div className="flex items-center gap-space-xs mb-space-xs text-primary">
<span className="material-symbols-outlined text-secondary text-[20px]">engineering</span>
<h4 className="font-headline-sm text-headline-sm">HVAC Engineering</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Chilled water networks, primary/secondary pumping packages, multi-zone VRF arrays, and precision clean-room air handlers.
              </p>
</div>
<div className="p-space-md bg-surface rounded-xl">
<div className="flex items-center gap-space-xs mb-space-xs text-primary">
<span className="material-symbols-outlined text-secondary text-[20px]">elevator</span>
<h4 className="font-headline-sm text-headline-sm">Vertical Systems</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                High-speed traction lifts, panoramic hydraulic glass cabs, heavy commercial escalators, and automotive freight lifts.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="text-center max-w-xl mx-auto mb-space-xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Accreditations &amp; Clearances</span>
<h2 className="font-headline-md text-headline-md text-primary mt-space-xs">Recognized Authority &amp; Approvals</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
          Committed to continuous regulatory adherence with Dubai and federal UAE building oversight authorities.
        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-xl text-center flex flex-col items-center justify-center shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[28px]">verified</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary mb-1">ISO 9001:2015</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Quality Management System</span>
<span className="text-secondary font-label-caps text-label-caps mt-space-xs font-semibold">Certified Audit</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl text-center flex flex-col items-center justify-center shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[28px]">local_fire_department</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary mb-1">DCD Approved</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Fire &amp; Life Safety Contractor</span>
<span className="text-secondary font-label-caps text-label-caps mt-space-xs font-semibold">Tier-1 Registered</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl text-center flex flex-col items-center justify-center shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[28px]">apartment</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary mb-1">Dubai Municipality</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Building Services Authority</span>
<span className="text-secondary font-label-caps text-label-caps mt-space-xs font-semibold">Licensed &amp; Bonded</span>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl text-center flex flex-col items-center justify-center shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]">
<div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-sm">
<span className="material-symbols-outlined text-[28px]">ac_unit</span>
</div>
<span className="font-headline-sm text-headline-sm text-primary mb-1">ASHRAE Standards</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Thermal Comfort Compliant</span>
<span className="text-secondary font-label-caps text-label-caps mt-space-xs font-semibold">Falcon Chapter UAE</span>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-surface">
<div className="max-w-[1440px] mx-auto px-margin">
<div className="bg-primary text-on-primary rounded-xl p-space-xl lg:p-24 relative overflow-hidden shadow-2xl">

<div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary-container opacity-40 blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest block mb-space-xs">
            Direct Technical Engagement
          </span>
<h2 className="font-headline-lg text-headline-lg text-white mb-space-md tracking-tight">
            Consult with our engineering directors for your upcoming tender or facility upgrade.
          </h2>
<p className="font-body-lg text-body-lg text-white/80 mb-space-xl">
            Whether evaluating vertical transit passenger wait times or auditing industrial cooling load profiles, we provide rigorous peer reviews and verified submittals.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
<a className="inline-flex items-center justify-center px-space-lg py-space-sm bg-secondary-container hover:bg-secondary text-on-secondary rounded font-label-md text-label-md transition-all font-semibold shadow-md" href="mailto:info@nasaralmasa.com">
<span className="material-symbols-outlined text-[20px] mr-space-xs">download</span>
              Request Pre-Qualification Dossier
            </a>
<a className="inline-flex items-center justify-center px-space-lg py-space-sm bg-white/10 hover:bg-white/20 text-white rounded font-label-md text-label-md transition-all backdrop-blur-sm" href="https://wa.me/97142888490" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-secondary-fixed text-[20px] mr-space-xs">chat</span>
              WhatsApp Technical Desk
            </a>
</div>
<div className="mt-space-lg pt-space-lg border-t border-white/10 flex flex-wrap items-center gap-space-lg font-body-sm text-body-sm text-white/70">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">schedule</span> Typical Review: ≤ 24h
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">shield_lock</span> Non-Disclosure Guaranteed
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">location_city</span> Business Bay • Dubai Industrial City
            </span>
</div>
</div>
</div>
</div>
</section>
</div>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="General Inquiry" />
    </div>
  );
}
