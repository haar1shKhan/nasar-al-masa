"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

const LOGO_URL = "/images/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// Desktop nav matches the reference (no "Home" — the logo already links there)
const DESKTOP_LINKS = NAV_LINKS.filter((l) => l.href !== "/");

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // One flag drives every colour: transparent + white over the hero, solid + dark elsewhere
  const solid = pathname !== "/" || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
          solid
            ? "bg-surface-container-lowest border-outline-variant/40"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-margin h-20 flex items-center justify-between">

          {/* Logo — spaced wordmark */}
          <Link href="/" className="flex items-center gap-4">
            <img src={LOGO_URL} alt="" className="h-7 w-auto" />
            <span
              className={`text-[15px] font-light uppercase tracking-[0.35em] transition-colors ${
                solid ? "text-on-surface" : "text-white"
              }`}
            >
              Nasar Al Masa
            </span>
          </Link>

          {/* Nav — plain links, right aligned */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-10">
              {DESKTOP_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[15px] transition-colors underline-offset-8 hover:underline ${
                      solid
                        ? active
                          ? "text-on-surface"
                          : "text-on-surface-variant hover:text-on-surface"
                        : active
                          ? "text-white underline"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href="tel:+97142888490"
              className={`hidden xl:block text-[15px] transition-colors ${
                solid
                  ? "text-on-surface-variant hover:text-on-surface"
                  : "text-white/90 hover:text-white"
              }`}
            >
              +971 4 288 8490
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className={`inline-flex items-center rounded-full border px-5 py-2.5 text-[14px] transition-colors ${
                solid
                  ? "border-on-surface/30 text-on-surface hover:bg-primary hover:text-on-primary hover:border-primary"
                  : "border-white/85 text-white hover:bg-white hover:text-primary"
              }`}
            >
              Request Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className={`lg:hidden transition-colors ${solid ? "text-on-surface" : "text-white"}`}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu — solid, sits below the fixed header */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 bg-surface-container-lowest border-b border-outline-variant/40 lg:hidden">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-[14px] font-medium border-b border-outline-variant/40 ${
                    active ? "text-on-surface" : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="tel:+97142888490" className="py-3 text-[14px] text-on-surface-variant">
              +971 4 288 8490
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className="mt-3 w-full py-3 bg-primary text-on-primary text-[13px] font-medium rounded"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}