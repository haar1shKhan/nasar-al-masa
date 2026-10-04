"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { company } from "@/data/company";
import { generalEnquiry } from "@/lib/contact";
import { NAV_LINKS } from "./links";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-menu-line]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 0 : 1;

    gsap.killTweensOf([el, items]);

    if (open) {
      document.documentElement.style.overflow = "hidden";
      gsap.set(el, { visibility: "visible" });
      gsap
        .timeline({ defaults: { ease: "power3.inOut" } })
        .fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.65 * duration })
        .fromTo(
          items,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.8 * duration, ease: "power3.out", stagger: 0.06 * duration },
          "-=0.3",
        );
    } else {
      document.documentElement.style.overflow = "";
      if (first.current) {
        gsap.set(el, { visibility: "hidden", clipPath: "inset(0% 0% 100% 0%)" });
      } else {
        gsap.to(el, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5 * duration,
          ease: "power3.inOut",
          onComplete: () => gsap.set(el, { visibility: "hidden" }),
        });
      }
    }
    first.current = false;
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const contact = generalEnquiry();

  return (
    <div
      id="mobile-menu"
      ref={root}
      aria-hidden={!open}
      className="gutter fixed inset-0 z-40 flex flex-col justify-between bg-ink pb-8 pt-28 text-bone lg:hidden"
      style={{ visibility: "hidden", clipPath: "inset(0% 0% 100% 0%)" }}
    >
      <nav aria-label="Mobile">
        <ul>
          {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link, i) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="overflow-hidden border-b border-bone/15">
                <div data-menu-line>
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-[3.75rem] items-baseline gap-5 py-3 text-[clamp(1.875rem,9vw,3rem)] font-medium leading-none tracking-tight"
                  >
                    <span className="eyebrow w-6 opacity-40">{String(i).padStart(2, "0")}</span>
                    <span className={active ? "" : "opacity-80"}>{link.label}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="overflow-hidden">
        <div data-menu-line className="flex flex-col gap-3 text-[0.9375rem]">
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1} className="min-h-11 py-2">
            WhatsApp &nbsp;{company.phone}
          </a>
          <a href={contact.email} tabIndex={open ? 0 : -1} className="min-h-11 py-2">
            {company.email}
          </a>
        </div>
      </div>
    </div>
  );
}
