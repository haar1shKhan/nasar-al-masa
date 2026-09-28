"use client";

import React from "react";
import Link from "next/link";

const LOGO_URL = "/images/logo.png"; 

const disciplineLinks = [
    { href: "/services#hvac", label: "HVAC Solutions & District Cooling" },
    { href: "/services#elevators", label: "Elevator & Escalator Dynamics" },
    { href: "/services#amc", label: "3-Tier Preventative AMC Contracts" },
    { href: "/services#specs", label: "Testing, Balancing & Commissioning" },
    { href: "/services#retrofit", label: "High-Rise Modernization & Retrofit" },
];

const corporateLinks = [
    { href: "/about", label: "About Our Authority & Legacy" },
    { href: "/projects", label: "Landmark UAE Engineering Projects" },
    { href: "/about#credentials", label: "Safety, ISO & Municipality Compliance" },
    { href: "/contact", label: "Contact Technical Engineering Desk" },
    { href: "/contact#hubs", label: "Regional Hubs: Dubai, Abu Dhabi & NE" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-lowest border-t border-on-surface/10">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-24 lg:pt-36 pb-16">

                {/* Brand row — icon mark only, no duplicate wordmark text beside it */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 mb-20 border-b border-on-surface/10">
                    <Link href="/" className="group inline-flex items-center gap-5 w-fit">
                        <img
                            alt="Nasar Al Masa"
                            className="h-9 lg:h-12 w-auto object-contain scale-150 transition-transform duration-500 group-hover:scale-105"
                            src={LOGO_URL}
                        />
                        <span className="font-display-hero text-[2.25rem] lg:text-[3.5rem] leading-none tracking-tight text-on-surface">
                            Nasar <em className="font-serif-display not-italic italic text-secondary">Al Masa</em>
                        </span>
                    </Link>

                    <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                            ISO 9001:2015 &amp; DCD Approved
                        </span>
                    </div>
                </div>

                {/* Link columns — real gutters, real line spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.2fr_1.3fr] gap-x-10 lg:gap-x-16 gap-y-14 mb-20">

                    <div className="flex flex-col lg:pr-10 lg:border-r lg:border-on-surface/15">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-[260px]">
                            Engineering authority in premium vertical transportation and large-scale industrial climate systems across the UAE and GCC.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 lg:px-10 lg:border-r lg:border-on-surface/15">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
                            Engineering Disciplines
                        </span>
                        <nav className="flex flex-col gap-5">
                            {disciplineLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors w-fit leading-snug"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6 lg:px-10 lg:border-r lg:border-on-surface/15">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
                            Corporate &amp; Projects
                        </span>
                        <nav className="flex flex-col gap-5">
                            {corporateLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors w-fit leading-snug"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6 lg:pl-10">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
                            Head Office &amp; Dispatch
                        </span>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">location_on</span>
                                <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                                    Business Bay &amp; Dubai Industrial City, UAE
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">mail</span>
                                
                                <a    className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
                                    href="mailto:info@nasaralmasa.com"
                                >
                                    info@nasaralmasa.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">phone</span>
                                
                                <a    className="font-body-sm text-body-sm text-on-surface font-medium hover:text-secondary transition-colors"
                                    href="tel:+97142888490"
                                >
                                    +971 4 288 8490
                                </a>
                            </div>
                            
                            <a    className="inline-flex items-center gap-2.5 mt-3 px-6 py-3.5 rounded border border-on-surface/15 hover:border-secondary text-on-surface font-label-md text-label-md transition-colors w-fit"
                                href="https://wa.me/97142888490"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <span className="material-symbols-outlined text-secondary text-[18px]">chat</span>
                                WhatsApp Direct Dispatch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-10 border-t border-on-surface/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <span className="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.1em] text-center md:text-left">
                        &copy; {new Date().getFullYear()} Nasar Al Masa Technical Services LLC. All rights reserved.
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.1em]">
                            <span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
                            Dubai Civil Defense Licensed
                        </span>
                        <span className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.1em]">
                            <span className="material-symbols-outlined text-[16px] text-secondary">task_alt</span>
                            ISO 9001 Certified Quality
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}