"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        index: "01",
        eyebrow: "Vibration & Acoustics",
        title: "Acoustic Isolation Engineering",
        description:
            "Elimination of structural harmonics in high-speed lift counterweights and mechanical penthouse chillers through dual-stage spring attenuation and laminar airflow ducting.",
        offset: "lg:mt-0",
    },
    {
        index: "02",
        eyebrow: "Thermal Yield",
        title: "High-Delta T Optimization",
        description:
            "Climate layouts calibrated to peak Gulf thermal loads (50°C+ ambient), operating at optimized delta temperatures to compress plant power draw by up to 28% annually.",
        offset: "lg:mt-16",
    },
    {
        index: "03",
        eyebrow: "Life Safety",
        title: "Redundant Life-Safety Protocols",
        description:
            "Full compliance with Dubai Civil Defense, EN 81, and NFPA fire dampers. Automated emergency recall descent and smoke exhaust pressurization sequences.",
        offset: "lg:mt-32",
    },
];

export default function AboutSection() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".about-mask", { clipPath: "inset(0 0 100% 0)" });
            gsap.set(".about-fade", { opacity: 0, y: 24 });
            gsap.set(".pillar-num", { opacity: 0 });

            ScrollTrigger.create({
                trigger: ".about-intro",
                start: "top 80%",
                once: true,
                onEnter: () =>
                    gsap.timeline({ defaults: { ease: "power4.out" } })
                        .to(".about-mask", { clipPath: "inset(0 0 0% 0)", duration: 1.2 })
                        .to(".about-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, "-=0.8"),
            });

            gsap.utils.toArray<HTMLElement>(".pillar").forEach((pillar) => {
                ScrollTrigger.create({
                    trigger: pillar,
                    start: "top 85%",
                    once: true,
                    onEnter: () =>
                        gsap
                            .timeline({ defaults: { ease: "power4.out" } })
                            .to(pillar.querySelector(".pillar-num"), { opacity: 1, duration: 1.2 })
                            .to(pillar.querySelectorAll(".pillar-fade"), { opacity: 1, y: 0, duration: 0.8, stagger: 0.06 }, "-=1"),
                });
                gsap.set(pillar.querySelectorAll(".pillar-fade"), { opacity: 0, y: 20 });
            });

            ScrollTrigger.create({
                trigger: ".about-strip",
                start: "top 85%",
                once: true,
                onEnter: () =>
                    gsap.to(".strip-fade", { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power4.out" }),
            });
            gsap.set(".strip-fade", { opacity: 0, y: 20 });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={rootRef} id="about" className="w-full bg-surface-container-lowest">
            <div className="about-intro max-w-[1440px] mx-auto px-margin pt-24 lg:pt-32 pb-20 lg:pb-28">
                <span className="about-fade font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em] block mb-space-md">
                    Our Discipline
                </span>
                <h2 className="max-w-[980px] leading-[1] mb-space-xl">
                    <span className="about-mask block">
                        <span className="font-headline-lg text-headline-lg text-on-surface">Architectural harmony meets</span>
                    </span>
                    <span className="about-mask block">
                        <span className="font-serif-display not-italic italic text-headline-lg text-secondary">
                            uncompromised safety.
                        </span>
                    </span>
                </h2>
                <p className="about-fade font-body-lg text-body-lg text-on-surface-variant max-w-[620px]">
                    We eliminate the friction between architectural vision and strict mechanical viability. Every installation conforms to international life-safety metrics with zero visual compromise.
                </p>
            </div>

            {/* Staggered pillar list — offset vertical rhythm instead of matched-height cards */}
            <div className="max-w-[1440px] mx-auto px-margin pb-24 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {pillars.map((p) => (
                        <div key={p.index} className={`pillar relative ${p.offset}`}>
                            <span className="pillar-num absolute -top-6 -left-2 font-serif-display text-[7rem] leading-none text-on-surface/[0.06] select-none pointer-events-none">
                                {p.index}
                            </span>
                            <div className="relative pt-space-lg border-t border-on-surface/15">
                                <span className="pillar-fade font-label-caps text-label-caps text-secondary uppercase tracking-[0.15em] block mb-space-sm">
                                    {p.eyebrow}
                                </span>
                                <h3 className="pillar-fade font-headline-sm text-headline-sm text-on-surface mb-space-md leading-[1.1]">
                                    {p.title}
                                </h3>
                                <p className="pillar-fade font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-bleed dark strip — dramatic contrast break */}
            <div className="about-strip w-full bg-[#0B0D12]">
                <div className="max-w-[1440px] mx-auto px-margin py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-y-10 items-center">
                    <div className="strip-fade lg:col-span-7 flex items-start gap-space-lg">
                        <span className="material-symbols-outlined text-[40px] text-secondary-fixed shrink-0">verified_user</span>
                        <div>
                            <h4 className="font-headline-sm text-headline-sm text-on-primary mb-space-xs leading-[1.1]">
                                Factory-Certified Technicians &amp; GCC Spares Hub
                            </h4>
                            <p className="font-body-sm text-body-sm text-on-primary/60 max-w-[440px]">
                                Over 15,000 OEM component lines stocked in our Dubai logistics center for immediate replacement dispatch.
                            </p>
                        </div>
                    </div>

                    <div className="strip-fade lg:col-span-5 flex lg:justify-end">
                        <div className="flex items-center gap-space-xl">
                            <div className="w-px h-14 bg-on-primary/15 hidden lg:block" />
                            <div>
                                <span className="font-label-caps text-label-caps text-on-primary/50 uppercase tracking-[0.15em] block mb-space-xs">
                                    Emergency Dispatch Time
                                </span>
                                <div className="font-headline-sm text-headline-sm text-secondary-fixed font-bold leading-none">
                                    &lt; 45 Minutes <span className="text-on-primary/70 font-normal text-[0.6em]">in Dubai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}