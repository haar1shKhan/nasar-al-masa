"use client";

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
      <div className="flex flex-col w-full">

<div className="w-full relative overflow-hidden bg-surface-container-lowest">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded bg-surface-container text-on-surface-variant font-label-caps text-label-caps mb-space-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            UAE REGIONAL TECHNICAL DESK • DUBAI HEADQUARTERS
          </div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Connect with Our Engineering Desk</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Direct coordination for MEP consulting, tender bid submissions, infrastructure contracts, and 24/7 priority vertical transportation emergency callouts across the Emirates.
          </p>
</div>

<div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant">DISPATCH STATUS</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Active Deployment</span>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-[1440px] mx-auto w-full px-margin-mobile md:px-margin -mt-6 z-10">
<div className="rounded-xl p-space-lg md:p-space-xl bg-surface-container-lowest shadow-md relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none hidden lg:flex items-center justify-end pr-space-lg text-primary">
<span className="material-symbols-outlined text-[280px]">chat</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg relative z-10">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-xs">
<span className="px-space-xs py-0.5 rounded bg-[#25D366]/15 text-[#075E54] font-label-caps text-label-caps flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
              RAPID RESPONSE CHANNEL
            </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">• Dedicated On-Duty Engineers</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
            Instant Technical Dispatch &amp; Quotes via WhatsApp
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Bypass general ticketing. Transmit structural elevator logs, equipment photos, architectural schematics, or urgent chiller breakdown alerts directly to our field supervisors.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
<div className="flex flex-col text-left sm:text-right font-body-sm text-body-sm text-on-surface-variant">
<span className="font-headline-sm text-headline-sm text-primary font-semibold">+971 50 123 4567</span>
<span className="flex items-center gap-1 sm:justify-end text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              Typically replies within 15 minutes
            </span>
</div>
<a className="group inline-flex items-center justify-center gap-space-sm px-space-lg py-space-md rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-[#ffffff] font-headline-sm text-headline-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]" href="https://wa.me/971501234567" rel="noopener noreferrer" target="_blank">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
<path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.589 1.22.772 1.393.858.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.044.072.044.419-.1 1.024z"></path>
<path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2 22l4.957-1.401C8.423 21.498 10.151 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.663 0-3.21-.527-4.479-1.424l-.322-.228-2.934.828.847-2.859-.247-.354A8.132 8.132 0 0 1 3.833 12c0-4.503 3.664-8.167 8.167-8.167 4.502 0 8.167 3.664 8.167 8.167 0 4.504-3.665 8.167-8.167 8.167z"></path>
</svg>
<span>Chat on WhatsApp Now</span>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto w-full px-margin-mobile md:px-margin py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">COMMUNICATION DIRECTORY</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">Direct Technical Touchpoints</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Formal inquiries, regulatory filings, and maintenance escalation channels routed directly to regional operations.
          </p>
</div>

<div className="rounded-xl p-space-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">call</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-caps text-label-caps text-on-surface-variant">VOICE &amp; DISPATCH CHANNELS</span>
<div className="mt-space-xs space-y-space-xs">
<div>
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Head Office Switchboard</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Mon-Fri 8AM-6PM</span>
</div>
<a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors block" href="tel:+97142888490">
                    +971 4 288 8490
                  </a>
</div>
<div className="pt-space-xs">
<div className="flex items-center justify-between">
<span className="font-body-sm text-body-sm text-error font-medium">24/7 Emergency Dispatch</span>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-caps text-label-caps">Priority</span>
</div>
<a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors block" href="tel:+971501234567">
                    +971 50 123 4567
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl p-space-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">mark_email_read</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-caps text-label-caps text-on-surface-variant">DIRECT CORRESPONDENCE</span>
<div className="mt-space-xs space-y-space-xs">
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant block">General Inquiries &amp; Corporate</span>
<a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors block truncate" href="mailto:info@nasaralmasa.com">
                    info@nasaralmasa.com
                  </a>
</div>
<div className="pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Tenders, BOQ &amp; RFP Submissions</span>
<a className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors block truncate" href="mailto:projects@nasaralmasa.com">
                    projects@nasaralmasa.com
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl p-space-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-caps text-label-caps text-on-surface-variant">PHYSICAL HEADQUARTERS</span>
<p className="font-headline-sm text-headline-sm text-on-surface mt-space-xs leading-snug">
                Unit 402, Al Masa Engineering Tower
              </p>
<p className="font-body-md text-body-md text-on-surface-variant">
                Business Bay, Dubai, United Arab Emirates
              </p>
<div className="flex items-center gap-space-xs mt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">markunread_mailbox</span>
<span>P.O. Box 94231 • Makani ID: 29482 88102</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl p-space-lg bg-surface-container-low shadow-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[24px]">schedule</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<span className="font-label-caps text-label-caps text-on-surface-variant">OPERATING CYCLES</span>
<div className="mt-space-xs space-y-space-xs font-body-md text-body-md">
<div className="flex justify-between items-center">
<span className="text-on-surface">Administrative Desk:</span>
<span className="font-semibold text-primary">Mon – Fri: 8:00 AM – 6:00 PM</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-body-sm text-body-sm">
<span>Saturday Workshop:</span>
<span>9:00 AM – 2:00 PM (By Appointment)</span>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="text-secondary font-medium">Emergency Response:</span>
<span className="font-bold text-on-surface">24/7 Rapid Deployment</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between gap-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[22px]">verified</span>
<span className="font-label-caps text-label-caps text-primary">DCD CERTIFIED CONTRACTOR</span>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">ISO 9001:2015</span>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-xl p-space-lg md:p-space-xl bg-surface-container-lowest shadow-md h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">PROJECT PROCUREMENT</span>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                Secure Architectural Portal
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-semibold">
              Submit Technical RFP &amp; General Inquiries
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-lg">
              Provide project specifications or equipment requirements. Our chief estimators review submissions within one business day.
            </p>
<form className="space-y-space-md" id="technicalInquiryForm" >

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="fullName">
                    Full Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="fullName" name="fullName" placeholder="Eng. Tariq Al Mansoori" required type="text"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="companyName">
                    Company / Organization Name <span className="text-error">*</span>
</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="companyName" name="companyName" placeholder="Emaar Properties / Private Developer" required type="text"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="phone">
                    Contact Phone Number <span className="text-error">*</span>
</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="phone" name="phone" placeholder="+971 50 000 0000" required type="tel"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="email">
                    Corporate Email Address <span className="text-error">*</span>
</label>
<input className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container" id="email" name="email" placeholder="procurement@organization.ae" required type="email"/>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="serviceInterest">
                  Service of Interest <span className="text-error">*</span>
</label>
<div className="relative">
<select className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary-container pr-10 cursor-pointer" id="serviceInterest" name="serviceInterest" required>
<option disabled  value="">Select Primary Engineering Domain</option>
<option value="hvac">HVAC Supply, Ducting &amp; Industrial Installation</option>
<option value="elevators">Elevator Systems (Traction, Hydraulic, MRL)</option>
<option value="escalators">Escalators &amp; Heavy-Duty Moving Walks</option>
<option value="amc">Annual Maintenance Contract (Comprehensive AMC)</option>
<option value="modernization">Modernization, Retrofit &amp; Controller Overhaul</option>
<option value="audit">Safety Inspection, Testing &amp; Commissioning</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                    expand_more
                  </span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex justify-between items-center">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="message">
                    Project Scope / Technical Specifications <span className="text-error">*</span>
</label>
<span className="font-body-sm text-body-sm text-on-surface-variant">Max 1500 chars</span>
</div>
<textarea className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container resize-y" id="message" name="message" placeholder="Detail project requirements: e.g., 40-floor commercial building, 4x 1600kg 2.5m/s elevators, rooftop VRF units required for Q3 2025..." required rows={4}></textarea>
</div>

<div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">security</span>
<span>Confidentiality &amp; NDA standard honored</span>
</div>
<button className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary-container hover:bg-primary text-on-primary rounded font-label-md text-label-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer" id="submitBtn" type="submit">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Submit Technical Inquiry</span>
</button>
</div>
<div className="hidden p-space-md rounded-lg bg-surface-container text-on-surface font-body-md text-body-md items-center gap-space-sm" id="formSuccessMessage">
<span className="material-symbols-outlined text-secondary text-[24px]">task_alt</span>
<div>
<span className="font-semibold block text-primary">Inquiry Transmitted to Engineering Desk</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Reference Code #NTS-2025-089. An assigned project engineer will contact you shortly.</span>
</div>
</div>
</form>
</div>

<div className="mt-space-lg pt-space-md border-t border-surface-container-high flex flex-wrap items-center justify-between gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
<span>Direct Dispatch Backup: +971 50 123 4567</span>
<span>Average Tender Turnaround: 24-48 Hours</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-lowest py-space-xl">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">REGIONAL OPERATIONAL FOOTPRINT</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">UAE Coverage &amp; Service Hubs</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-2xl">
             strategically decentralized mobile maintenance units and certified workshops serving major commercial, residential, and industrial corridors across all emirates.
          </p>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            Primary Hub
          </div>
<div className="flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            Rapid Hub
          </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-caps text-label-caps">HQ • HUB 01</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">&lt; 30m Response</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Dubai Metro &amp; Bay</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Business Bay, Downtown, DIFC, Dubai South &amp; Dubai Industrial City. Full fabrication facility &amp; central spare parts inventory.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>UNITS MONITORED</span>
<span className="font-semibold text-primary">1,450+ Active</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary font-label-caps text-label-caps">HUB 02</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">&lt; 45m Response</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Abu Dhabi &amp; Al Ain</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Al Reem Island, Yas Marina, Mussafah Industrial &amp; Government District. Dedicated chiller service rigs &amp; escalators team.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>UNITS MONITORED</span>
<span className="font-semibold text-primary">780+ Active</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-caps text-label-caps">HUB 03</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">&lt; 35m Response</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Sharjah &amp; Ajman</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Industrial Areas 1-18, Al Majaz, Hamriyah Free Zone. High-rise passenger traction maintenance and industrial ventilation specialists.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>UNITS MONITORED</span>
<span className="font-semibold text-primary">520+ Active</span>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between hover:bg-surface-container transition-colors">
<div>
<div className="flex items-center justify-between mb-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-caps text-label-caps">HUB 04</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">&lt; 60m Response</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-semibold">Northern Emirates</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Ras Al Khaimah, Fujairah, and Umm Al Quwain. Coastal facility climate conditioning, resort elevators, and quarry conveyor lifters.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>UNITS MONITORED</span>
<span className="font-semibold text-primary">310+ Active</span>
</div>
</div>
</div>

<div className="relative rounded-xl overflow-hidden shadow-lg">
<div className="w-full h-80 md:h-96 bg-cover bg-center rounded-xl" data-location="Business Bay, Dubai, United Arab Emirates" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEDnXt4teF5-yZ6V0qudyd55-jNRZREmadBqdLSFjx5dU71yJOE0N9MMUge2-4cL1RSQ6lzAs-UPH3iTkTLHb8jdli5Z5zeHMepmGQfvWJbHVVLYi2Y-KGVqGxUS1Btbb9US3g9Ge8bj9Al7scV5S_p7Uz-5XiVtF9K8-84FuNz_0bZS7UI1fNlOQ1uHcp4Qu96pjhkVmUbELzvHN-IIkPCz2_QLb9uETw4cGm_oEXgp3WK09Src7a')"}}></div>

<div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-md p-space-md rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-md">
<div className="flex items-center gap-space-xs mb-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-caps text-label-caps text-primary">CENTRAL UAE ENGINEERING DISPATCH</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Al Masa Engineering Tower • Unit 402
          </p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Business Bay • 4 mins from Sheikh Zayed Road (Exit 47). Direct underground technical loading dock access for heavy machinery deliveries.
          </p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between">
<a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="https://maps.google.com/?q=Business+Bay+Dubai" rel="noopener noreferrer" target="_blank">
<span>Open in Google Maps</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
<span className="font-body-sm text-body-sm text-secondary font-medium">GPS: 25.1857° N, 55.2678° E</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto w-full px-margin-mobile md:px-margin py-space-xl">
<div className="p-space-lg md:p-space-xl rounded-xl bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-xl">
<div className="space-y-space-xs text-center md:text-left">
<div className="inline-flex items-center gap-space-xs px-2.5 py-0.5 rounded bg-on-primary/10 text-secondary-fixed font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[14px]">warning</span>
          PASSENGER ENTRAPMENT / CRITICAL CHILLER SHUTDOWN
        </div>
<h3 className="font-headline-md text-headline-md text-on-primary">
          Need Immediate Emergency Assistance?
        </h3>
<p className="font-body-md text-body-md text-on-primary/80 max-w-xl">
          Our certified technicians are stationed across Dubai, Sharjah, and Abu Dhabi for round-the-clock rapid response.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded bg-secondary-container hover:bg-secondary text-on-secondary font-headline-sm text-headline-sm transition-all shadow-md" href="tel:+971501234567">
<span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
<span>Call Emergency Hotline</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded bg-on-primary/10 hover:bg-on-primary/20 text-on-primary font-headline-sm text-headline-sm transition-all" href="https://wa.me/971501234567" rel="noopener noreferrer" target="_blank">
<span>WhatsApp Emergency</span>
</a>
</div>
</div>
</section>
</div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService="Technical Inquiry" />
    </div>
  );
}
