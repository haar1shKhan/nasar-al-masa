"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".cta-mask", { clipPath: "inset(0 0 100% 0)" });
            gsap.set(".cta-fade", { opacity: 0, y: 24 });

            ScrollTrigger.create({
                trigger: rootRef.current,
                start: "top 75%",
                once: true,
                onEnter: () =>
                    gsap
                        .timeline({ defaults: { ease: "power4.out" } })
                        .to(".cta-mask", { clipPath: "inset(0 0 0% 0)", duration: 1.2, stagger: 0.1 })
                        .to(".cta-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.9"),
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    const magnetize = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
    };
    const resetMagnet = (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    };

    return (
        <section ref={rootRef} id="cta" className="relative w-full bg-[#0B0D12] overflow-hidden">
            {/* Faint radial glow, brand navy — depth without breaking the high-contrast base */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 15% 20%, rgba(37,55,119,0.5), transparent 55%), radial-gradient(circle at 85% 80%, rgba(243,149,34,0.08), transparent 50%)",
                }}
            />

            <div className="relative max-w-[1440px] mx-auto px-margin pt-24 lg:pt-32 pb-16">
                <div className="flex items-center gap-space-xs mb-space-xl cta-fade">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                    <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-[0.25em]">
                        Rapid Response Engineering Desk
                    </span>
                </div>

                <h2 className="max-w-[1100px] leading-[0.97] mb-space-xl">
                    <span className="cta-mask block">
                        <span className="font-headline-lg text-headline-lg text-on-primary">Consult on your next</span>
                    </span>
                    <span className="cta-mask block">
                        <span className="font-serif-display not-italic italic text-headline-lg text-secondary-fixed">
                            mechanical or vertical
                        </span>
                    </span>
                    <span className="cta-mask block">
                        <span className="font-headline-lg text-headline-lg text-on-primary">transport infrastructure.</span>
                    </span>
                </h2>

                <p className="cta-fade font-body-lg text-body-lg text-on-primary/60 max-w-[560px] mb-space-2xl">
                    Speak straight with our senior project engineers. We review drawings, assess load calculations, and issue certified technical proposals within 24 hours.
                </p>

                {/* Phone number as giant display type — the section's real focal point */}
                
                <a    href="tel:+97142888490"
                    className="cta-fade group block border-t border-b border-on-primary/15 py-space-lg mb-space-xl"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                        <span className="font-display-hero text-display-hero text-on-primary leading-none tracking-tight group-hover:text-secondary-fixed transition-colors duration-500 [font-variant-numeric:tabular-nums]">
                            +971 4 288 8490
                        </span>
                        <span className="flex items-center gap-space-sm font-label-caps text-label-caps text-on-primary/50 uppercase tracking-[0.15em] group-hover:text-on-primary/80 transition-colors shrink-0">
                            <span className="material-symbols-outlined text-[20px] transition-transform duration-500 group-hover:rotate-45">call</span>
                            24/7 Hotline
                        </span>
                    </div>
                </a>

                <div className="cta-fade flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
                    
                    <a    onMouseMove={magnetize}
                        onMouseLeave={resetMagnet}
                        href="https://wa.me/97142888490"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-space-sm px-space-xl py-space-md bg-secondary hover:bg-secondary-container text-on-secondary rounded font-label-md text-label-md transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                        Direct WhatsApp Dispatch
                    </a>

                    <div className="flex items-center gap-space-xs text-on-primary/50 font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">schedule</span>
                        Average initial response: &lt; 15 minutes
                    </div>
                </div>
            </div>
        </section>
    );
}