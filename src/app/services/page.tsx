"use client";

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
      <div className="flex flex-col w-full">

<section className="relative w-full bg-surface-container-lowest overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-24 md:pb-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded-DEFAULT self-start">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Engineering Division // Scope Document 2024.B</span>
</div>
<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary tracking-tight font-bold">
            End-to-End Mechanical &amp; Vertical Transit Engineering.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs">
            Nasar Al Masa delivers turnkey supply, precision installation, regulatory commissioning, and 24/7 predictive maintenance across high-density UAE commercial centers, luxury residential high-rises, and mission-critical industrial hubs.
          </p>
<div className="pt-space-md flex flex-wrap items-center gap-space-md">
<a className="px-space-lg py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm flex items-center gap-space-xs" href="#hvac-section">
<span>Explore Technical Disciplines</span>
<span className="material-symbols-outlined text-[18px]">south</span>
</a>
<a className="px-space-lg py-space-sm bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all flex items-center gap-space-xs" href="#amc-section">
<span className="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
<span>Lifecycle &amp; AMC Schedules</span>
</a>
</div>
</div>
<div className="lg:col-span-4 mt-space-lg lg:mt-0">
<div className="p-space-lg bg-surface-container-low rounded-xl flex flex-col space-y-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Operations Telemetry</span>
<span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> ACTIVE DISPATCH
              </span>
</div>
<div className="space-y-space-sm">
<div className="flex justify-between items-baseline py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Active Monitored Shafts</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">1,840+</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"92%"}}></div>
</div>
<div className="flex justify-between items-baseline py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">District Cooling Capacity</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">42,500 <span className="font-body-sm text-body-sm text-on-surface-variant">TR</span></span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary-container h-full rounded-full" style={{"width":"84%"}}></div>
</div>
<div className="flex justify-between items-baseline py-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Mean Critical Dispatch</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">&lt; 28 <span className="font-body-sm text-body-sm text-on-surface-variant">MIN</span></span>
</div>
</div>
<div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">gavel</span>
<span>Fully certified under Dubai Civil Defense (DCD) &amp; ISO 9001:2015 codes.</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-20 pt-space-lg">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[22px]">domain</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Class-A Commercial</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Grade-A corporate developments requiring seamless vertical dispatch and peak chiller performance.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[22px]">local_hospital</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Cleanroom &amp; Clinical</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Positive-pressure isolation, HEPA laminar flow filtration, and acoustic sound dampeners.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[22px]">factory</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary">Heavy Logistics</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ruggedized 10,000 kg freight lifts and explosion-proof ducted ventilation systems.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-28 md:py-36" id="hvac-section">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-20">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">Discipline 01 // Thermal Dynamics</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-space-xs">
            Industrial HVAC, Cleanroom &amp; Thermal Distribution
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Engineered for extreme ambient conditions (+52°C) with zero coefficient degradation, maximum thermal efficiency, and ASHRAE compliant indoor air quality.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16 items-stretch">
<div className="lg:col-span-7 rounded-xl overflow-hidden shadow-sm relative min-h-[420px] bg-surface-container">
<div className="bg-cover bg-center w-full h-full min-h-[400px]"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpfvHNH7fvj-0_sPPcMY48zuuZeTmZN4yI7w7C48CaOKXL2vO6z_UnEjIlmSysOAqbVKNVMEpQNLDLsIQw_j1uwMmYO3mdi_8pc5eOj7OOm_9P7ZtrIZvbXmYt0NPyrWrTOZDmEFBq_3zYO-ErWFcdPm6vtn8I5ZoHsPe70BfQQCJci1MpoP0RYpZjEk9xdqRLPe3j3OMxfgABW419y9ZFxskxMZrh3rHGX-WJtR6TEp0WVCBudXAT')"}}></div>
<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-space-lg text-on-primary">
<span className="font-label-caps text-label-caps uppercase text-secondary-fixed tracking-wider">Project Telemetry Archive</span>
<h3 className="font-headline-sm text-headline-sm text-on-primary font-semibold mt-1">Dubai Maritime Hub — 8,400 TR District Hydronic Loop</h3>
<p className="font-body-sm text-body-sm text-on-primary/80 mt-1">Complete mechanical hookup, variable frequency secondary pump manifolds, and integrated SCADA thermal balancing.</p>
</div>
</div>
<div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Key Supply Partners &amp; Compliance</span>
<span className="font-label-caps text-label-caps bg-surface-container px-2 py-0.5 rounded text-primary">ASHRAE 90.1 / DCL</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Standard Equipment Matrix</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              All installations utilize certified tier-1 primary machinery matched with precision custom ductworks manufactured at our Dubai Industrial City facility.
            </p>
</div>
<div className="space-y-space-xs my-space-md">
<div className="flex justify-between items-center py-2 bg-surface-container-low px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Centrifugal / Screw Chillers</span>
<span className="font-label-caps text-label-caps text-primary font-bold">Trane, Carrier, York</span>
</div>
<div className="flex justify-between items-center py-2 bg-surface-container-lowest px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface font-medium">VRV / VRF Variable Systems</span>
<span className="font-label-caps text-label-caps text-primary font-bold">Daikin, Mitsubishi Electric</span>
</div>
<div className="flex justify-between items-center py-2 bg-surface-container-low px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Air Handling &amp; Energy Recovery</span>
<span className="font-label-caps text-label-caps text-primary font-bold">Systemair, Trox, VTS</span>
</div>
<div className="flex justify-between items-center py-2 bg-surface-container-lowest px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface font-medium">VFD Pump Sets &amp; Valves</span>
<span className="font-label-caps text-label-caps text-primary font-bold">Grundfos, Armstrong, Belimo</span>
</div>
</div>
<div className="p-space-sm bg-surface-container-high/40 rounded-lg flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">thermostat</span>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Air Quality Certification</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium">ISO 14644-1 Cleanroom Grade 5-8 Verification Available</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">water_drop</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.1</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Chilled Water &amp; District Cooling Hookups</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Complete Energy Transfer Station (ETS) hookups, primary/secondary hydronic distribution, differential pressure regulation, plate heat exchanger maintenance, and high-integrity welded carbon steel piping.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>ETS Room Turnkey Supply</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Ultrasonic Flow Meter Testing</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Pressure Deaeration Vessels</li>
</ul>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">mode_fan</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.2</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">VRV / VRF Variable Heat Recovery</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Simultaneous cooling and heating zones with inverter driven compressor plants. Designed for multi-tenant high rises, luxury villas, and modular commercial complexes with low lifecycle operating expenses.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Dual &amp; Triple Pipe Systems</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Refrigerant Leak Detection Auto-Shutoff</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Localized Room Sub-Metering</li>
</ul>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">air</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.3</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Duct Fabrication &amp; Acoustic Attenuation</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              In-house automated CNC plasma ductwork fabrication meeting SMACNA class C &amp; D specifications. Fire-rated ducting, silencers, acoustic baffles, and anti-vibration spring isolation hangers.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>GI &amp; Phenolic Pre-insulated Ducts</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>BS 476 Part 24 Fire Rated Ducting</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Sound Power Attenuation Studies</li>
</ul>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">sanitizer</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.4</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Cleanroom &amp; Clinical Environments</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Absolute biocontainment and hyperbaric pressure management for operating theatres, semiconductor labs, and pharmaceutical compounding clean zones with certified laminar terminal diffusers.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>H14 ULPA &amp; HEPA Filtration</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Precise +/- 0.5°C Humidity Rigor</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>DOH / DHA Health Audit Compliance</li>
</ul>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">memory</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.5</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">BMS Integration &amp; Smart Sensors</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              BACnet and Modbus direct digital control (DDC) architecture linking multi-chiller sequences, variable air volume (VAV) dampers, CO2 indoor sensors, and enterprise energy analytics.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Energy Optimization Algorithms</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Automated Fault Detection (FDD)</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Mobile Remote Engineering Overrides</li>
</ul>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[28px]">speed</span>
</div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">Sub-System 1.6</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Testing, Adjusting &amp; Balancing (TAB)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
              Certified NEBB / AABC standard TAB execution across complex high-rise duct shafts and hydronic loops. Full duct leakage testing (DLT) and smoke evacuation pressure verification.
            </p>
</div>
<div className="mt-space-md pt-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core Capabilities</span>
<ul className="font-body-sm text-body-sm text-on-surface mt-1 space-y-1">
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Pre-Commissioning Air Pitot Audits</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Stairwell Pressurization Verification</li>
<li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Full Municipality Stamped Certs</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-28 md:py-36" id="vertical-transit-section">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-20">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">Discipline 02 // Vertical Logistics</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-space-xs">
            Elevator &amp; Escalator Structural Mobility
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Compliant with EN 81-20/50 and EN 115 safety codes. Delivering quiet, high-acceleration passenger transit and ultra-heavy industrial payload freight movements.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-20">
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-64 overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEKCoE8bvMQbHHza1meb47KFrREXksEWWKYg_Um1IzBspXOpsVgpHUGtpmspA6h0fJ-0dAwb7Xe_hRWB4rLoTrqHW8s6avlNFElxu9-zFe1mkftlSnIO1R5qxk_iP-eo-JULW3tvGYH6ZgjWZgnmzzDgZTuoIZCclJQlU22ZgFom5JcUwf8GYe2KE7qAcC6bojWIE3EC8Cios7RRpS1Q_X25H2Xx6rkz9Atinb--VKuRcplj6mRX3n')"}}></div>
<div className="absolute top-4 left-4 bg-primary text-on-primary px-space-sm py-0.5 rounded font-label-caps text-label-caps uppercase">
              Speed: up to 6.0 m/s
            </div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Passenger Transit</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">High-Speed Gearless Passenger Elevators</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Permanent magnet synchronous motor (PMSM) machinery engineered for 40+ floor skyscraper towers. Destination dispatch integration reduces wait times by 35% during morning peak surges.
              </p>
</div>
<div className="mt-space-md pt-space-sm space-y-1">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Ride Quality ISO 18738</span>
<span className="text-on-surface font-semibold">&lt; 10 mg Peak Vibration</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Capacity Range</span>
<span className="text-on-surface font-semibold">630 kg to 2,500 kg</span>
</div>
</div>
</div>
</div>
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-64 overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyWN_qaAlG_1KfLHLopMq4QENlXT9Vjtby0Msf9_6Ef0Wm3wa_90E4-ICyyudFe-mXaL-Dae1sqO_0LhWL3RA-ehdPaLOPGET-Bf6CCGEDCbDh1PAChsmZhxrk5fIQT118d41jh2QhSK-wFDKzebSUgfsMtRXHSyvitpr4uVrzy9eUCPnDB7ARnk2l5Hsj1g9A9iJAURo0PzlYoD7qKcGO6iQ2TbwGzWAhmF7qY48iCV_W6u5Gxtvu')"}}></div>
<div className="absolute top-4 left-4 bg-primary text-on-primary px-space-sm py-0.5 rounded font-label-caps text-label-caps uppercase">
              Zero Machine Room Required
            </div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Architectural Modernism</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Machine Room-Less (MRL) Architectural Lifts</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Ultra-compact hoistway configuration placing drive equipment directly within shaft head. Maximum usable floor space for architects, boutique hotels, and luxury commercial offices.
              </p>
</div>
<div className="mt-space-md pt-space-sm space-y-1">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Overhead Clearance</span>
<span className="text-on-surface font-semibold">Down to 3,400 mm</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Energy Classification</span>
<span className="text-on-surface font-semibold">VDI 4707 Class A</span>
</div>
</div>
</div>
</div>
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-64 overflow-hidden relative">
<div className="bg-cover bg-center w-full h-full"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJbGvGzW8ubdNwP-sg_mzA8NVqnSb2WW_J-APj1As2X8E8S0LLBBsdVLEbaTYme5JbPqgbgajr3zUVgQrRpijiDvzYBgdYpzdh_yJWOZDfGVZL4UkpFj5oIRV6mzslwY4dj3TOTE5K7vpGcwSeCSCxRnnOCnNVlYgC1xdc0w31jvuIYvbZ-_9mihwBbHQcRC_YylzIjHsRLRIPkGxA06v84LbaaCYIsBeJAGtLEbCpfi9J9AjlyLYq')"}}></div>
<div className="absolute top-4 left-4 bg-primary text-on-primary px-space-sm py-0.5 rounded font-label-caps text-label-caps uppercase">
              Heavy Transit Duty
            </div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Public Infrastructure</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">Heavy Transit Public Escalators &amp; Travelators</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Built for continuous 24/7 passenger throughput at transport hubs, rail stations, and mega shopping malls. Solid truss galvanization, anti-slip step inserts, and variable regenerative drives.
              </p>
</div>
<div className="mt-space-md pt-space-sm space-y-1">
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Standard Step Widths</span>
<span className="text-on-surface font-semibold">800 mm / 1000 mm</span>
</div>
<div className="flex justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Duty Cycle</span>
<span className="text-on-surface font-semibold">140+ hours / week sustained</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-lg">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold">Engineering Spec Sheet</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">Vertical Mobility Range &amp; Heavy Capabilities</h3>
</div>
<div className="inline-flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-primary">download_for_offline</span>
<span>EN 81-20/50 Design Stamped</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container text-on-surface font-label-md text-label-md">
<th className="py-space-sm px-space-md rounded-l">Category</th>
<th className="py-space-sm px-space-md">Payload Range</th>
<th className="py-space-sm px-space-md">Rated Speed</th>
<th className="py-space-sm px-space-md">Drive &amp; Control Architecture</th>
<th className="py-space-sm px-space-md rounded-r">Key Architectural Applications</th>
</tr>
</thead>
<tbody className="text-on-surface-variant">
<tr className="bg-surface-container-lowest/80">
<td className="py-space-md px-space-md font-semibold text-primary">Panoramic Scenic Lifts</td>
<td className="py-space-md px-space-md">800 – 1,600 kg</td>
<td className="py-space-md px-space-md">1.0 – 2.5 m/s</td>
<td className="py-space-md px-space-md">Under-slung / Gearless VVVF</td>
<td className="py-space-md px-space-md">Luxury Atriums, Five-Star Resorts, Malls</td>
</tr>
<tr className="bg-surface-container-low">
<td className="py-space-md px-space-md font-semibold text-primary">Industrial Freight &amp; Goods</td>
<td className="py-space-md px-space-md">2,000 – 10,000 kg</td>
<td className="py-space-md px-space-md">0.5 – 1.0 m/s</td>
<td className="py-space-md px-space-md">Heavy Duty Dual Roped / Direct Hydraulic</td>
<td className="py-space-md px-space-md">Logistics Warehouses, Cold Storage, Factories</td>
</tr>
<tr className="bg-surface-container-lowest/80">
<td className="py-space-md px-space-md font-semibold text-primary">Hospital Bed &amp; Stretcher</td>
<td className="py-space-md px-space-md">1,600 – 2,500 kg</td>
<td className="py-space-md px-space-md">1.0 – 2.0 m/s</td>
<td className="py-space-md px-space-md">Micro-leveling (+/- 2mm) Microprocessor</td>
<td className="py-space-md px-space-md">Surgical Centers, Speciality Clinics, Trauma Centers</td>
</tr>
<tr className="bg-surface-container-low">
<td className="py-space-md px-space-md font-semibold text-primary">Modernization &amp; Retrofit</td>
<td className="py-space-md px-space-md">Existing Enclosure Matched</td>
<td className="py-space-md px-space-md">Upgraded to 2.5 m/s</td>
<td className="py-space-md px-space-md">Regenerative Drives, Open-Protocol Controllers</td>
<td className="py-space-md px-space-md">Aging Towers, Pre-2010 High Rises, Hotel Refurbishments</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface py-28 md:py-36" id="amc-section">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-20">
<div className="lg:col-span-7">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">Guaranteed Reliability // 99.98% Uptime SLA</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-space-xs">
            Predictive Lifecycle AMC &amp; Mission-Critical Protocols
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm max-w-xl">
            Mechanical systems in desert climates degrade up to 40% faster without rigorous preventative upkeep. Nasar Al Masa provides comprehensive, non-comprehensive, and emergency SLA-backed contracts.
          </p>
</div>
<div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex items-center gap-space-sm mb-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">sos</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-primary font-bold">24/7 Rapid Passenger Rescue</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Guaranteed under 30-minute onsite rescue team across Dubai &amp; Sharjah.</p>
</div>
</div>
<div className="w-full bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Emergency Dispatch Desk</span>
<a className="font-label-md text-label-md text-secondary font-bold hover:underline flex items-center gap-1" href="tel:+97142888490">
<span className="material-symbols-outlined text-[16px]">phone_in_talk</span>
              +971 4 288 8490
            </a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex justify-between items-center pb-space-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Contract Tier 01</span>
<span className="font-label-caps text-label-caps bg-surface-container-low px-2 py-0.5 rounded text-on-surface font-semibold">Standard Care</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Preventative Quarterly</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Essential periodic inspections, fluid top-offs, belt tensions, and mechanical safety circuit tests designed for light-use buildings and commercial low-rises.
            </p>
<div className="space-y-space-xs mt-space-md">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Scheduled 12-visit annual checklist</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Lubrication, brake shoe calibration</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Air filter cleansing &amp; coil disinfection</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Dubai Civil Defense annual renewal audit</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<a className="w-full py-space-sm text-center block bg-surface-container text-primary hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" href="#consultation-form">
              Request Tier 1 Assessment
            </a>
</div>
</div>

<div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
<div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary-container/40 pointer-events-none"></div>
<div>
<div className="flex justify-between items-center pb-space-sm">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase font-bold tracking-wider">Contract Tier 02 // Recommended</span>
<span className="font-label-caps text-label-caps bg-secondary px-2 py-0.5 rounded text-on-secondary font-bold">Comprehensive</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">Predictive Comprehensive (All-Inclusive)</h3>
<p className="font-body-sm text-body-sm text-on-primary/80 mt-2">
              Full parts and labor indemnity. Real-time vibration diagnostics, thermographic electrical panel scanning, and unlimited emergency dispatch calls with strict SLA.
            </p>
<div className="space-y-space-xs mt-space-md">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
<span>100% parts replacement included (Zero hidden costs)</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
<span>Infrared thermal scan of chiller electrical cubicles</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
<span>Acoustic shaft bearing wear analysis</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
<span>Under 2-hour breakdown dispatch guarantee</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<a className="w-full py-space-sm text-center block bg-secondary-container text-on-secondary hover:bg-secondary rounded-lg font-label-md text-label-md transition-colors font-semibold shadow-sm" href="#consultation-form">
              Select Comprehensive Contract
            </a>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex justify-between items-center pb-space-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Contract Tier 03</span>
<span className="font-label-caps text-label-caps bg-surface-container-low px-2 py-0.5 rounded text-on-surface font-semibold">Critical Site</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Resident Engineering Station</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Full-time stationed engineering technician crew embedded directly on facility grounds for 24/7 industrial plants, hospital campuses, and mega transit hubs.
            </p>
<div className="space-y-space-xs mt-space-md">
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Dedicated on-site licensed technicians</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Instantaneous zero-delay breakdown triage</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Dedicated on-premise consignment spare parts stock</span>
</div>
<div className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span>Continuous SCADA &amp; BMS monitoring station</span>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md">
<a className="w-full py-space-sm text-center block bg-surface-container text-primary hover:bg-surface-container-high rounded-lg font-label-md text-label-md transition-colors" href="#consultation-form">
              Custom Enterprise RFP
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-24 md:py-32" id="consultation-form">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
<div className="bg-surface-container-low rounded-2xl p-space-lg md:p-20 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-7 flex flex-col space-y-space-md">
<span className="font-label-caps text-label-caps text-secondary uppercase font-bold tracking-widest">Direct Engineering Hotline</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight font-bold">
              Require an Engineering Audit or Turnkey Proposal?
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Connect with our licensed MEP &amp; vertical transit project consultants. Receive a preliminary compliance review, schematic load estimates, and transparent price schedules within 24 business hours.
            </p>
<div className="pt-space-xs flex flex-wrap gap-space-md items-center">
<a className="px-space-lg py-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md transition-all shadow-sm flex items-center gap-space-xs" href="https://wa.me/97142888490" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
<span>Fast-Track WhatsApp Desk</span>
</a>
<a className="px-space-lg py-space-sm bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md transition-all shadow-sm flex items-center gap-space-xs" href="mailto:info@nasaralmasa.com">
<span className="material-symbols-outlined text-[20px]">mark_email_read</span>
<span>Submit Technical Tender (RFP)</span>
</a>
</div>
<div className="pt-space-sm grid grid-cols-2 sm:grid-cols-3 gap-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>Civil Defense Approved</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>ISO 9001:2015 Cert</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>100% UAE Owned LLC</span>
</div>
</div>
</div>
<div className="lg:col-span-5 mt-space-lg lg:mt-0">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col space-y-space-md">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Consultation Inquiry</span>
<span className="font-label-caps text-label-caps text-secondary font-bold">24-HR SLA</span>
</div>
<form className="space-y-space-sm" id="techConsultForm" >
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="orgName">Organization / Developer Name</label>
<input className="w-full px-space-sm py-2 bg-surface rounded text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" id="orgName" placeholder="e.g. Emaar Properties / Dubai Holding" required type="text"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="scopeSelect">Primary Discipline Required</label>
<select className="w-full px-space-sm py-2 bg-surface rounded text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" id="scopeSelect">
<option value="hvac">HVAC / Central Chilled Water &amp; VRV Systems</option>
<option value="elevators">Elevator &amp; Escalator Turnkey Supply</option>
<option value="amc">Annual Maintenance Contract (AMC) Audit</option>
<option value="modernization">Shaft Modernization &amp; Controller Retrofits</option>
<option value="turnkey_mep">Complete Turnkey MEP Project Integration</option>
</select>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="contactEmail">Work Email</label>
<input className="w-full px-space-sm py-2 bg-surface rounded text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" id="contactEmail" placeholder="name@company.ae" required type="email"/>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="contactPhone">Phone / Mobile</label>
<input className="w-full px-space-sm py-2 bg-surface rounded text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" id="contactPhone" placeholder="+971 50 000 0000" required type="tel"/>
</div>
</div>
<button className="w-full mt-space-sm py-space-sm bg-secondary-container hover:bg-secondary text-on-secondary rounded font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-space-xs" type="submit">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Dispatch Technical Request</span>
</button>
</form>
<div className="hidden p-space-md bg-surface-container-low rounded-lg text-center space-y-space-xs" id="consultSuccess">
<span className="material-symbols-outlined text-secondary text-[36px]">task_alt</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Request Dispatched</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">An engineering director will review your submission and connect within 24 hours.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
      <ConsultationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultService={selectedService} 
      />
    </div>
  );
}
