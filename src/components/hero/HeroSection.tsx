"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { whenUncovered } from "@/lib/transition-state";
import { Arrow } from "@/components/ui/ArrowLink";

/**
 * Hero — the existing layered composition is kept: background photo, headline BEHIND the
 * transparent elevator cutout so the elevator breaks the letters.
 * Refined: solid-white type (no gradient fill), shorter mobile height, copy that says what
 * the company does, square CTAs, scroll parallax, and an entrance that waits for any page curtain.
 */
export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    let stop = () => {};

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      stop = whenUncovered(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.set(".hero-reveal", { clipPath: "inset(0 0 100% 0)" })
          .set(".hero-fade", { opacity: 0, y: 20 })
          .set(".hero-kicker", { opacity: 0, y: 12 })
          .fromTo(".hero-bg", { scale: 1.12 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0)
          .fromTo(".hero-cutout", { scale: 1.12 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0)
          .to(".hero-kicker", { opacity: 1, y: 0, duration: 1, delay: 0.15 }, 0.1)
          .to(".hero-reveal", { clipPath: "inset(0 0 0% 0)", duration: 1.3, stagger: 0.12 }, 0.35)
          .to(".hero-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.9);
      });

      // Slow drift as the hero scrolls away — transform only
      const scrub = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero-bg-wrap", { yPercent: 8, ease: "none", scrollTrigger: scrub });
      gsap.to(".hero-cutout-wrap", { yPercent: 4, ease: "none", scrollTrigger: scrub });
      gsap.to(".hero-headline", { yPercent: -6, ease: "none", scrollTrigger: scrub });
    });

    return () => {
      stop();
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink md:min-h-[720px]"
    >
      {/* Layer 0 — background photo */}
      <div className="hero-bg-wrap absolute inset-0 z-0">
        <Image
          src="/images/hero-section3.png"
          alt="An elevator standing in the desert dunes under a clear blue sky"
          fill
          priority
          sizes="100vw"
          className="hero-bg object-cover"
        />
      </div>
      {/* Light scrim only — keeps the nav readable without dulling the photo */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/45 via-transparent to-black/25" />

      {/* Layer 1 — kicker */}
      <p className="hero-kicker eyebrow pointer-events-none absolute inset-x-0 top-[17%] z-[6] text-center text-white md:top-[16.5%]">
        Elevators &nbsp;·&nbsp; Escalators &nbsp;·&nbsp; HVAC
      </p>

      {/* Layer 2 — headline, BEHIND the cutout so the elevator breaks the letters */}
      <div className="hero-headline pointer-events-none absolute inset-x-0 top-[21%] z-[5] flex flex-col items-center px-4 md:top-[20%]">
        <h1 className="text-center font-medium uppercase leading-[0.9] tracking-[-0.03em] text-white">
          <span className="hero-reveal block text-[14vw] md:text-[clamp(3rem,9.3vw,10rem)]">Built for</span>
          <span className="hero-reveal block text-[14vw] md:text-[clamp(3rem,9.3vw,10rem)]">Tomorrow</span>
        </h1>
      </div>

      {/* Layer 3 — transparent-background elevator, above the headline */}
      <div className="hero-cutout-wrap absolute inset-0 z-10">
        <Image
          src="/images/hero-section-3-cutout.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="hero-cutout object-cover"
        />
      </div>

      {/* Layer 4 — one line of copy, two CTAs */}
      <div className="gutter absolute inset-x-0 bottom-[6vh] z-20 md:bottom-auto md:top-[57%]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="hero-fade max-w-[20rem] text-[clamp(0.95rem,1.15vw,1.125rem)] leading-relaxed text-white">
            Supply, installation and maintenance of elevators, escalators and HVAC systems across the UAE.
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/services"
              className="group inline-flex min-h-12 items-center gap-3 border border-white/90 px-6 text-[0.9375rem] font-medium text-white transition-colors duration-500 hover:bg-white hover:text-ink"
            >
              Explore Services
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
            <Link href="/projects" className="arrow-link min-h-12 text-[0.9375rem] font-medium text-white">
              <span className="arrow-link__label">View Projects</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
