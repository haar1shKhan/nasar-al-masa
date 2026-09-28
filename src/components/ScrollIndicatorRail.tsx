"use client";

import React, { useEffect, useRef } from "react";

type Stop = { id: string; label: string };

const STOPS: Stop[] = [
    { id: "services", label: "S" },
    { id: "about", label: "AB" },
    { id: "projects", label: "P" },
    { id: "cta", label: "CTA" },
];

const HEIGHT = 180;
const SPACING = HEIGHT / (STOPS.length - 1);

export default function ScrollIndicatorRail({
    heroId = "hero",
    footerId = "footer",
}: {
    heroId?: string;
    footerId?: string;
}) {
    const railRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<SVGPathElement>(null);
    const tickRefs = useRef<(SVGLineElement | null)[]>([]);
    const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        function setActive(index: number) {
            const y = index * SPACING;
            lineRef.current?.setAttribute("d", `M 20 0 L 20 ${y}`);

            tickRefs.current.forEach((t, i) => {
                if (t) t.style.opacity = i <= index ? "1" : "0";
            });

            labelRefs.current.forEach((l, i) => {
                if (!l) return;
                l.classList.remove("reached", "active");
                if (i === index) l.classList.add("active");
                else if (i < index) l.classList.add("reached");
            });
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = STOPS.findIndex((s) => s.id === entry.target.id);
                        if (idx !== -1) setActive(idx);
                    }
                });
            },
            { threshold: 0.5 }
        );

        STOPS.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        let pastHero = false;
        let inFooter = false;

        function updateVisibility() {
            railRef.current?.classList.toggle("visible", pastHero && !inFooter);
        }

        const heroEl = document.getElementById(heroId);
        let heroObserver: IntersectionObserver | undefined;
        if (heroEl) {
            heroObserver = new IntersectionObserver(
                ([entry]) => {
                    pastHero = !entry.isIntersecting;
                    updateVisibility();
                },
                { threshold: 0.1 }
            );
            heroObserver.observe(heroEl);
        }

        const footerEl = document.getElementById(footerId);
        let footerObserver: IntersectionObserver | undefined;
        if (footerEl) {
            footerObserver = new IntersectionObserver(
                ([entry]) => {
                    inFooter = entry.isIntersecting;
                    updateVisibility();
                },
                { threshold: 0.05 }
            );
            footerObserver.observe(footerEl);
        }

        return () => {
            observer.disconnect();
            heroObserver?.disconnect();
            footerObserver?.disconnect();
        };
    }, [heroId, footerId]);

    return (
        <div className="scroll-rail" ref={railRef}>
            <svg width="140" height={HEIGHT + 20} viewBox={`0 0 140 ${HEIGHT + 20}`}>
                <path className="rail-line" ref={lineRef} d="M 20 0 L 20 0" />
                <g>
                    {STOPS.map((s, i) => (
                        <line
                            key={s.id}
                            ref={(el) => {
                                tickRefs.current[i] = el;
                            }}
                            className="rail-tick"
                            x1={20}
                            y1={i * SPACING}
                            x2={34}
                            y2={i * SPACING}
                            style={{ opacity: 0 }}
                        />
                    ))}
                </g>
            </svg>
            <div className="rail-labels-wrap">
                {STOPS.map((s, i) => (
                    <div
                        key={s.id}
                        ref={(el) => {
                            labelRefs.current[i] = el;
                        }}
                        className="rail-label"
                        style={{ top: i * SPACING, left: 34 }}
                    >
                        {s.label}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .scroll-rail {
          position: fixed;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          height: ${HEIGHT + 20}px;
          width: 140px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .scroll-rail.visible {
          opacity: 1;
        }
        .scroll-rail svg {
          position: absolute;
          top: 0;
          left: 0;
          overflow: visible;
        }
        /* White source + difference blend = auto-adapts to whatever
           is behind it: reads dark on light sections, light on dark
           sections, with no need to track which section is active. */
        .scroll-rail :global(.rail-line) {
          stroke: #000;
          mix-blend-mode: difference;
          stroke-width: 2;
          stroke-linecap: round;
          fill: none;
          transition: d 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-rail :global(.rail-tick) {
          stroke: #000;
          mix-blend-mode: difference;
          stroke-width: 2;
          stroke-linecap: round;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .rail-labels-wrap {
          position: relative;
        }
        .scroll-rail :global(.rail-label) {
          position: absolute;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          line-height: 1;
          transform: translate(10px, -50%);
          color: #000000;
          mix-blend-mode: difference;
          opacity: 0.55;
          transition: opacity 0.3s ease, font-size 0.3s ease, font-weight 0.3s ease;
          white-space: nowrap;
        }
        .scroll-rail :global(.rail-label.reached) {
          opacity: 0.85;
        }
        /* Active label breaks out of the blend trick — gold is legible
           against both light and dark sections on its own, and gives
           the "current" stop a real accent color instead of just contrast. */
        .scroll-rail :global(.rail-label.active) {
          color: #f39522;
          mix-blend-mode: normal;
          opacity: 1;
          font-size: 13px;
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .scroll-rail {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}