"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import ArrowLink from "@/components/ui/ArrowLink";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "./links";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // On the home page the header floats over the hero until it has scrolled past
        const threshold = isHome ? window.innerHeight * 0.8 : 24;
        setScrolled(window.scrollY > threshold);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [isHome, pathname]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const overHero = isHome && !scrolled;
  const light = overHero || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-500",
          light ? "text-bone" : "text-ink",
          !overHero && !menuOpen && scrolled && "bg-bone border-b hairline",
          !overHero && !menuOpen && !scrolled && "bg-transparent",
          (overHero || menuOpen) && "border-b border-transparent",
        )}
      >
        <div className="gutter flex h-[4.5rem] items-center justify-between md:h-20">
          <Link href="/" aria-label="Nasar Al Masa — home">
            <Logo size={34} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-2 text-[0.875rem] tracking-tight"
                >
                  <span className={cn("transition-opacity duration-300", active ? "opacity-100" : "opacity-65 group-hover:opacity-100")}>
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px origin-left bg-current transition-transform duration-500 ease-out",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-[0.35]",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-8">
            <div className="hidden lg:block"><ArrowLink href="/contact">
              Let&rsquo;s Talk
            </ArrowLink></div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="eyebrow -mr-2 inline-flex min-h-11 items-center px-2 lg:hidden"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
