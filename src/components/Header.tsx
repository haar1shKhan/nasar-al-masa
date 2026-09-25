"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1XIcxJIinhVXFSzw1SNnQcffs7q8__sW8MZF9MxnmGYZB-D9ZLqF4ExuokiHr-gqAV-q9rcANWrNN_cSQlHWswstXzOchx_K8PwuufeM3n5JllXIsjxPX9q9Mqm9CHsQGwTRDSC-JP_NpSIaGWcDiVhzccz069yzO1seNX-Ukr1jrdOvxpvtQeGuon6XKZdHWXT4QgbIEsZxG6IO0biNn_rGquaYer0BzGASz_dFIvVXcc4Sg23KYaKgQ";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          isScrolled 
            ? "bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(10,32,96,0.06)] py-2" 
            : "bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-3"
        }`}
      >
        <div className="h-16 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              alt="Nasar Al Masa Technical Services Logo" 
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105" 
              src={LOGO_URL} 
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base sm:text-lg tracking-tight text-primary font-bold leading-none">
                NASAR AL MASA
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase mt-1">
                Technical Services LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-surface-container text-on-surface font-semibold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Phone quick link */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium" 
                href="tel:+97142888490"
              >
                <span className="material-symbols-outlined text-[#8d4f00] text-[18px]">call</span>
                <span>+971 4 288 8490</span>
              </a>

              {/* WhatsApp VIP */}
              <a 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-xs font-semibold" 
                href="https://wa.me/97142888490" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f39222] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f39222]"></span>
                </span>
                <span className="font-label-caps uppercase text-on-surface tracking-wider">WhatsApp</span>
              </a>
            </div>

            {/* Request Consultation CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 bg-secondary-container hover:bg-secondary text-on-secondary rounded-lg font-label-md text-xs sm:text-sm font-semibold transition-all shadow-[0_4px_24px_-2px_rgba(15,23,42,0.04)]"
            >
              <span className="material-symbols-outlined text-[18px] mr-1.5">engineering</span>
              <span>Request Consultation</span>
            </button>

            {/* Portal / Engineer badge */}
            <div 
              title="Certified UAE Engineering Contractor"
              className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary shadow-xs cursor-default"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-t border-surface-container px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? "bg-surface-container text-on-surface font-semibold"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-outline" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-surface-container space-y-3">
              <a 
                className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-surface-container-low text-sm font-medium text-on-surface" 
                href="tel:+97142888490"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8d4f00] text-[20px]">call</span>
                  <span>+971 4 288 8490</span>
                </div>
                <span className="text-xs uppercase font-label-caps text-on-surface-variant">Dubai Hotline</span>
              </a>

              <a 
                className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#25d366]/10 text-sm font-medium text-on-surface" 
                href="https://wa.me/97142888490" 
                target="_blank" 
                rel="noreferrer"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#128c7e] text-[20px]">chat</span>
                  <span>WhatsApp Direct Line</span>
                </div>
                <span className="text-xs uppercase font-label-caps text-[#8d4f00] font-bold">Online</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-secondary-container text-on-secondary rounded-lg font-semibold text-sm shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">engineering</span>
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
