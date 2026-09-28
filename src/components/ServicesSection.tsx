"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
    {
        index: "01",
        eyebrow: "Discipline 01 — Climate Systems",
        title: "Advanced HVAC",
        titleAccent: "Engineering",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuARaB7m6rDr5OyzIBANAnKqSb69d5SgPA_9XzNX5wEqIWKCq86m0l_VQ-Dx35BmmfpF5_Q0Uu2mx50zpwbBHqIDcl-7xw2a-DsyYuoBAdCioqVVDVU3yoecmAg5xCaST2_ukcx-DpGxwO8rBtUoRFnDlPqJ1iuGnJ26_3F5_xLC47cEBv9Nvar5Gt5Bh7bJhH86SyDKOCnAsdqevxJYdrCI-wLOtT3YP-urheCvoUfOWXRolz8KbFSq",
        description:
            "High-efficiency thermal management, central chilled water plants, and cleanroom air handling engineered to handle intense GCC ambient conditions while drastically reducing kilowatt-hour consumption.",
        specs: [
            { label: "Chilled Water Plant & District Cooling", meta: "Centrifugal & Air-Cooled" },
            { label: "VRV / VRF Inverter Multi-Split", meta: "Commercial Mixed-Use" },
            { label: "AHU, FAHU & High-Static FCUs", meta: "Heat Recovery 78%+" },
            { label: "Precision Duct Fabrication & BMS Automation", meta: "BACnet / Modbus" },
        ],
        cta: "HVAC Technical Specifications",
        stat: "Est. 120,000+ TR Deployed",
        icon: "ac_unit",
    },
    {
        index: "02",
        eyebrow: "Discipline 02 — Vertical Mobility",
        title: "Elevator & Escalator",
        titleAccent: "Dynamics",
        image: "images/hero-section.png",
        description:
            "Complete vertical transportation ecosystems engineered with machine room-less (MRL) gearless drives, high-capacity industrial cargo lifts, and heavy transit commercial escalator configurations.",
        specs: [
            { label: "High-Rise Passenger Lifts (MRL & Gearless)", meta: "Up to 4.0 m/s" },
            { label: "Heavy Freight & Vehicle Lift Platforms", meta: "Up to 10,000 kg" },
            { label: "Panoramic Architectural Custom Glass Cabs", meta: "Curved & Structural" },
            { label: "Public Transit Escalators & Autowalks", meta: "Outdoor Heavy Duty" },
        ],
        cta: "Mobility Engineering Portfolio",
        stat: "Civil Defense Approved",
        icon: "elevator",
    },
];

export default function ServicesSection() {
    const rootRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".discipline-row").forEach((row) => {
                gsap.set(row.querySelectorAll(".reveal-mask"), { clipPath: "inset(0 0 100% 0)" });
                gsap.set(row.querySelectorAll(".reveal-fade"), { opacity: 0, y: 20 });
                gsap.set(row.querySelector(".reveal-image"), { scale: 1.1 });

                ScrollTrigger.create({
                    trigger: row,
                    start: "top 75%",
                    onEnter: () => {
                        gsap.timeline({ defaults: { ease: "power4.out" } })
                            .to(row.querySelectorAll(".reveal-mask"), { clipPath: "inset(0 0 0% 0)", duration: 1.1, stagger: 0.1 })
                            .to(row.querySelectorAll(".reveal-fade"), { opacity: 1, y: 0, duration: 0.9, stagger: 0.06 }, "-=0.7")
                            .to(row.querySelector(".reveal-image"), { scale: 1, duration: 1.4, ease: "power2.out" }, "-=1");
                    },
                    once: true,
                });
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={rootRef} id="services" className="w-full bg-surface-container-low">
            <div className="max-w-[1440px] mx-auto px-margin pt-24 lg:pt-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-20 border-b border-on-surface/10">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em] block mb-space-xs">
                            Engineering Verticals
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface leading-[0.95]">
                            Dual Engineering <em className="font-serif-display not-italic italic">Disciplines</em>
                        </h2>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-[420px]">
                        Dedicated mechanical divisions providing unified project lifecycles from schematic load calculation to perpetual preventative lifecycle maintenance.
                    </p>
                </div>
            </div>

            {disciplines.map((d, i) => (
                <div
                    key={d.index}
                    className={`discipline-row w-full border-b border-on-surface/10 ${i % 2 === 1 ? "bg-surface-container" : ""}`}
                >
                    <div className="max-w-[1440px] mx-auto px-margin py-20 lg:py-28">
                        <div
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start ${
                                i % 2 === 1 ? "lg:[direction:rtl]" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className="lg:col-span-5 lg:[direction:ltr]">
                                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
                                    <div
                                        className="reveal-image reveal-mask w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url("${d.image}")` }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-7 lg:[direction:ltr] flex flex-col">
                                <div className="flex items-start justify-between mb-space-lg">
                                    <div className="reveal-fade flex items-center gap-space-md">
                                        <span className="material-symbols-outlined text-secondary text-[22px]">{d.icon}</span>
                                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.15em]">
                                            {d.eyebrow}
                                        </span>
                                    </div>
                                    <span className="reveal-fade font-serif-display text-[4rem] lg:text-[5.5rem] leading-none text-on-surface/10 select-none">
                                        {d.index}
                                    </span>
                                </div>

                                <h3 className="reveal-fade font-headline-md text-headline-md text-on-surface leading-[1.02] mb-space-lg">
                                    {d.title}
                                    <br />
                                    <em className="font-serif-display not-italic italic">{d.titleAccent}</em>
                                </h3>

                                <p className="reveal-fade font-body-md text-body-md text-on-surface-variant max-w-[540px] mb-space-xl">
                                    {d.description}
                                </p>

                                <div className="reveal-fade flex flex-col mb-space-xl">
                                    {d.specs.map((spec) => (
                                        <div
                                            key={spec.label}
                                            className="flex items-center justify-between py-space-md border-t border-on-surface/10 last:border-b group"
                                        >
                                            <span className="font-label-md text-label-md text-on-surface group-hover:text-secondary transition-colors">
                                                {spec.label}
                                            </span>
                                            <span className="font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap ml-space-lg">
                                                {spec.meta}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="reveal-fade flex flex-wrap items-center justify-between gap-space-md">
                                    <Link
                                        className="inline-flex items-center font-label-md text-label-md text-on-surface hover:text-secondary transition-colors underline decoration-1 underline-offset-4 decoration-on-surface/30 hover:decoration-secondary"
                                        href="/services"
                                    >
                                        {d.cta}
                                        <span className="material-symbols-outlined text-[16px] ml-space-xs">arrow_forward</span>
                                    </Link>
                                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.1em]">
                                        {d.stat}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}