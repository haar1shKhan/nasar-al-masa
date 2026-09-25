"use client";

import React from "react";
import Link from "next/link";

const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1XIcxJIinhVXFSzw1SNnQcffs7q8__sW8MZF9MxnmGYZB-D9ZLqF4ExuokiHr-gqAV-q9rcANWrNN_cSQlHWswstXzOchx_K8PwuufeM3n5JllXIsjxPX9q9Mqm9CHsQGwTRDSC-JP_NpSIaGWcDiVhzccz069yzO1seNX-Ukr1jrdOvxpvtQeGuon6XKZdHWXT4QgbIEsZxG6IO0biNn_rGquaYer0BzGASz_dFIvVXcc4Sg23KYaKgQ";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-16 border-t border-surface-container">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-1 group">
              <img 
                alt="Nasar Al Masa Technical Services Logo" 
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
                src={LOGO_URL} 
              />
              <span className="font-headline-sm text-lg font-bold text-primary">
                NASAR AL MASA
              </span>
            </Link>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Engineering authority in premium vertical transportation and large-scale industrial climate systems across the UAE and GCC. Built on architectural rigor and certified safety standards.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="material-symbols-outlined text-[#8d4f00] text-[20px]">verified</span>
              <span className="font-label-caps text-xs text-on-surface-variant font-semibold">
                ISO 9001:2015 &amp; DCD Approved
              </span>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col space-y-3">
            <span className="font-label-caps text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Engineering Disciplines
            </span>
            <nav className="flex flex-col space-y-2">
              <Link href="/services#hvac" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                HVAC Solutions &amp; District Cooling
              </Link>
              <Link href="/services#elevators" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Elevator &amp; Escalator Dynamics
              </Link>
              <Link href="/services#amc" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                3-Tier Preventative AMC Contracts
              </Link>
              <Link href="/services#specs" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Testing, Balancing &amp; Commissioning
              </Link>
              <Link href="/services#retrofit" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                High-Rise Modernization &amp; Retrofit
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <span className="font-label-caps text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Corporate &amp; Projects
            </span>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                About Our Authority &amp; Legacy
              </Link>
              <Link href="/projects" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Landmark UAE Engineering Projects
              </Link>
              <Link href="/about#credentials" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Safety, ISO &amp; Municipality Compliance
              </Link>
              <Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Contact Technical Engineering Desk
              </Link>
              <Link href="/contact#hubs" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Regional Hubs: Dubai, Abu Dhabi &amp; NE
              </Link>
            </nav>
          </div>

          {/* Head Office & Contact */}
          <div className="flex flex-col space-y-3">
            <span className="font-label-caps text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Head Office &amp; Dispatch
            </span>
            <div className="flex flex-col space-y-2 text-sm text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">location_on</span>
                <span>Business Bay &amp; Dubai Industrial City, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">mail</span>
                <a className="hover:text-primary transition-colors" href="mailto:info@nasaralmasa.com">
                  info@nasaralmasa.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">phone</span>
                <a className="hover:text-primary transition-colors font-medium" href="tel:+97142888490">
                  +971 4 288 8490
                </a>
              </div>
              <div className="pt-2">
                <a 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-xs font-semibold transition-colors" 
                  href="https://wa.me/97142888490" 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[#8d4f00] text-[18px]">chat</span>
                  <span>WhatsApp Direct Dispatch</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant text-xs">
          <div className="flex items-center gap-4">
            <span className="font-label-caps">
              &copy; {new Date().getFullYear()} Nasar Al Masa Technical Services LLC. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#8d4f00]">shield</span>
              <span>Dubai Civil Defense Licensed</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#8d4f00]">task_alt</span>
              <span>ISO 9001 Certified Quality</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
