"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        index: "01",
        tag: "Commercial Tower",
        location: "Business Bay • Dubai",
        title: "Vertex Horizon",
        titleAccent: "Tower",
        description:
            "Supply and commissioning of 8 high-speed gearless passenger elevators (3.5 m/s) with destination dispatch and 2,400 TR central water-cooled chiller plant.",
        year: "2023",
        scope: "Turnkey MEP & VT",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBm_d6xIyjoXhrkZWCYqSnzKSF-Xkm3p5K1rWQn0-tNJ4TIDSgkO7DR7cHuLdWE25m-rsVvqy5cZfuByn1hXFswrqKXLcDjV7ermtiPJQz0k25muH1nrDFzu2RplVbheNbeXVm4M3gAPw2x3iAmkBhR-FqVd9TmJzdKTX23qkcdhGizR35LSs3hMm_ioulSLxlxF9dWnwtc98LjzYp91chjcuTKKD9V_LqLjkXeNSYm1_ZvFkoifK7I",
    },
    {
        index: "02",
        tag: "Luxury Hospitality",
        location: "Saadiyat • Abu Dhabi",
        title: "The Grand Azure",
        titleAccent: "Resort",
        description:
            "Custom scenic panoramic elevator shafts traversing a 7-story marble atrium, combined with quiet-running acoustic fan coil systems in 320 guest suites.",
        year: "2023",
        scope: "Acoustic VRF & Lifts",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_ykli5APUuXEpYFEI4t5mMq9xm80VpR1T2kEtkaAe8Hba4twRrSbq5jY6-H1sYYhgEl8kyH2ZzCKiZjryq2jhHkVP4ejp_d-bPxga_MLFHhcMm9At-Eh8BT5qZfD5_k18_ywLY3laWJkmwY77aXUYUu8vWUxVmvEnorkO64D1LncujsjookmpMFq-NlwPmKEFh3KIKojxzKG8PW32QAe3xMbcQ-MUtIv_jEVGaUBayGbM6EEpsNE",
    },
    {
        index: "03",
        tag: "Infrastructure Hub",
        location: "Dubai Industrial City",
        title: "Emirates Logistics",
        titleAccent: "Hub II",
        description:
            "Four 5,000 kg heavy freight hydraulic elevators with automated bi-parting doors, paired with 650,000 CFM temperature-controlled distribution air handling.",
        year: "2024",
        scope: "Industrial Freight & AHU",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDcjomq5z1ApSgsXZnAuhx8iyGDoshStkwGtDPWnNpbgEV-fowP4pwBj04ZlXgf1IpHx625_CJD5UGu6t3RGSkJmF5xzE8MtzU-78lnYymarbGZdw-GXSWU__upgRCsTczIG5S48aAdbW5OrE2E30r-H_ljbBq1DJnFh1mCf0WVOOsstGZegI4ZMggUoI7NdzJEoKvoGmKYI_i9-9ZxR-flBnnDg4Y-LJn_O_9il64-1-aOBqN624iP",
    },
];

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const track = trackRef.current!;
            const section = sectionRef.current!;

            const getScrollDistance = () => track.scrollWidth - window.innerWidth;

            const tween = gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollDistance()}`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        gsap.set(progressRef.current, { scaleX: self.progress });
                    },
                },
            });

            return () => {
                tween.scrollTrigger?.kill();
                tween.kill();
            };
        });

        const handleLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", handleLoad);

        return () => {
            mm.revert();
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative z-10 w-full bg-surface-container-lowest lg:h-screen lg:overflow-hidden"
        >
            {/* Header — stays fixed within the pinned viewport on desktop */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-margin pt-20 lg:pt-14 pb-10 lg:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-on-surface/10">
                <div>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em] block mb-space-xs">
                        Track Record
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-[0.95]">
                        Landmark <em className="font-serif-display not-italic italic text-secondary">Installations</em>
                    </h2>
                </div>
                <div className="flex items-center gap-space-lg pb-space-sm">
                    <Link
                        className="hidden md:inline-flex items-center font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                        href="/projects"
                    >
                        View All Projects
                        <span className="material-symbols-outlined text-[16px] ml-space-xs">arrow_forward</span>
                    </Link>
                    <span className="hidden lg:flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface-variant/60 uppercase tracking-[0.15em]">
                        <span className="material-symbols-outlined text-[16px]">swipe</span>
                        Scroll to explore
                    </span>
                </div>
            </div>

            {/* Horizontal track */}
            <div
                ref={trackRef}
                className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-margin lg:px-0 lg:w-max lg:will-change-transform overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pt-10 lg:pt-10 pb-16 lg:pb-0"
            >
                {projects.map((p) => (
                    <div
                        key={p.index}
                        className="group relative shrink-0 w-full sm:w-[85vw] lg:w-[62vw] xl:w-[54vw] h-[70vh] lg:h-[calc(100vh-16rem)] lg:mr-8 snap-start overflow-hidden rounded-sm"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url("${p.image}")` }}
                        />
                        {/* Darker overlay than before — images still need it even on a light page shell, since the card content itself stays light-on-dark */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5" />

                        <span className="absolute top-6 right-6 font-serif-display text-[6rem] lg:text-[8rem] leading-none text-on-primary/15 select-none pointer-events-none">
                            {p.index}
                        </span>

                        <div className="absolute top-6 left-6">
                            <span className="font-label-caps text-label-caps px-space-sm py-1.5 rounded bg-white/90 text-on-surface uppercase tracking-wider backdrop-blur-md border border-black/5">
                                {p.tag}
                            </span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-space-lg lg:p-space-xl">
                            <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-[0.15em] block mb-space-xs">
                                {p.location}
                            </span>
                            <h3 className="font-headline-md text-headline-md text-on-primary leading-[1.02] mb-space-sm">
                                {p.title} <em className="font-serif-display not-italic italic">{p.titleAccent}</em>
                            </h3>
                            <p className="font-body-sm text-body-sm text-on-primary/75 max-w-[440px] mb-space-lg opacity-0 max-h-0 lg:group-hover:opacity-100 lg:group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                                {p.description}
                            </p>
                            <div className="flex items-center justify-between border-t border-on-primary/20 pt-space-sm">
                                <span className="font-body-sm text-body-sm text-on-primary/70">Commissioned {p.year}</span>
                                <span className="font-label-md text-label-md text-secondary-fixed font-semibold">{p.scope}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Closing panel — CTA to full project list, desktop only, ends the horizontal run */}
                <div className="hidden lg:flex shrink-0 w-[28vw] h-[calc(100vh-16rem)] items-center justify-center border border-on-surface/10 rounded-sm">
                    <Link
                        href="/projects"
                        className="flex flex-col items-center gap-space-md text-on-surface-variant hover:text-secondary transition-colors"
                    >
                        <span className="material-symbols-outlined text-[40px]">arrow_forward</span>
                        <span className="font-label-caps text-label-caps uppercase tracking-[0.15em]">View All Projects</span>
                    </Link>
                </div>
            </div>

            {/* Progress bar — desktop only, reflects horizontal scroll position */}
            <div className="hidden lg:block absolute bottom-6 left-margin right-margin h-px bg-on-surface/10">
                <div ref={progressRef} className="h-full bg-secondary origin-left scale-x-0" />
            </div>
        </section>
    );
}