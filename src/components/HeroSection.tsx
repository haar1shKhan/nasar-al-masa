"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.set(".hero-reveal", { clipPath: "inset(0 0 100% 0)" })
                .set(".hero-fade", { opacity: 0, y: 24 })
                .to(".hero-kicker", { opacity: 1, y: 0, duration: 1, delay: 0.2 })
                .to(".hero-reveal", { clipPath: "inset(0 0 0% 0)", duration: 1.4, stagger: 0.12 }, "-=0.7")
                .to(".hero-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, "-=0.9")
                .fromTo(".hero-bg", { scale: 1.15 }, { scale: 1, duration: 2.4, ease: "power2.out" }, 0)
                .fromTo(".hero-cutout", { scale: 1.15 }, { scale: 1, duration: 2.4, ease: "power2.out" }, 0);
        }, rootRef);

        return () => ctx.revert();
    }, []);

    const magnetize = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
    };
    const resetMagnet = (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    return (
        <section ref={rootRef} id="hero" className="relative w-full h-screen min-h-[940px] overflow-hidden">

            {/* Layer 0 — background photo */}
            <img
                src="/images/hero-section3.png"
                alt="Panoramic elevator lobby overlooking the Dubai skyline"
                className="hero-bg absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Light scrim only — keeps the nav readable without dulling the photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 z-[1]" />

            {/* Layer 1 — kicker, centred above the headline */}
            <p className="hero-kicker absolute top-[16.5%] inset-x-0 z-[6] text-center pl-[0.45em] text-[clamp(10px,0.9vw,14px)] font-normal uppercase tracking-[0.45em] text-white opacity-0 translate-y-4 pointer-events-none">
                Modern Elevation Solutions
            </p>

            {/* Layer 2 — headline, BEHIND the elevator cutout so the elevator breaks the letters */}
            <div className="absolute inset-x-0 top-[20%] z-[5] flex flex-col items-center pointer-events-none px-margin">
                <h1 className="text-center uppercase font-display-hero font-semibold leading-[0.88] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white from-30% to-[#c3d8ec]">
                    <span className="hero-reveal block text-[13vw] md:text-[clamp(3rem,9.3vw,10rem)]">Built for</span>
                    <span className="hero-reveal block text-[13vw] md:text-[clamp(3rem,9.3vw,10rem)]">Tomorrow</span>
                </h1>
            </div>

            {/* Layer 3 — transparent-bg elevator, above the headline */}
            <img
                src="/images/hero-section-3-cutout.png"
                alt=""
                aria-hidden="true"
                className="hero-cutout absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Layer 4 — tagline left, pill CTA right, on the elevator's mid-line (bottom on mobile) */}
            <div className="absolute inset-x-0 bottom-[7vh] md:bottom-auto md:top-[56%] z-20">
                <div className="max-w-[1440px] mx-auto px-margin flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="hero-fade max-w-[19rem] text-white font-light leading-relaxed text-[clamp(0.95rem,1.25vw,1.2rem)]">
                        Smarter, safer, and more sustainable vertical mobility for a changing world.
                    </p>

                    <Link
                        onMouseMove={magnetize}
                        onMouseLeave={resetMagnet}
                        href="/services"
                        className="hero-fade self-start md:self-auto inline-flex items-center gap-3 rounded-full border border-white/85 px-6 py-4 text-[15px] text-white transition-colors hover:bg-white hover:text-primary"
                    >
                        Explore Our Solutions
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}