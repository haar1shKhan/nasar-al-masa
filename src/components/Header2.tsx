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

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`absolute inset-x-0 z-50  transition-colors duration-300 border-b ${
          isHome
            ? "bg-transparent border-transparent"
            : "bg-surface-container-lowest border-outline-variant/40"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Nasar Al Masa" className="h-8 w-auto" />
            <span
              className={`text-[15px] font-semibold tracking-tight transition-colors ${
                isHome ? "text-white" : "text-on-surface"
              }`}
            >
              Nasar Al Masa
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    isHome
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-on-surface"
                        : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+97142888490"
              className={`hidden sm:block text-[13px] transition-colors ${
                isHome
                  ? "text-white/80 hover:text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              +971 4 288 8490
            </a>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className={`hidden sm:inline-flex items-center px-5 py-2.5 text-[13px] font-medium rounded transition-colors ${
                isHome
                  ? "bg-white text-neutral-900 hover:bg-white/90"
                  : "bg-primary text-on-primary hover:bg-primary/90"
              }`}
            >
              Request Consultation
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`lg:hidden transition-colors ${
                isHome ? "text-white" : "text-on-surface"
              }`}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — solid, sits directly below the header in normal flow */}
      {mobileMenuOpen && (
        <div className="inset-x-0 z-40 bg-surface-container-lowest border-b border-outline-variant/40 lg:hidden">
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
            <a
              href="tel:+97142888490"
              className="py-3 text-[14px] text-on-surface-variant"
            >
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