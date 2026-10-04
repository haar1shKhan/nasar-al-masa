"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import ProjectTile from "./ProjectTile";
import type { Project } from "@/data/projects";
import type { ProjectCategory } from "@/data/services";

type Filter = "all" | ProjectCategory;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "elevators", label: "Elevators" },
  { key: "hvac", label: "HVAC" },
  { key: "swimming-pool", label: "Pools" },
];

export default function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const grid = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const count = (key: Filter) => (key === "all" ? projects.length : projects.filter((p) => p.category === key).length);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!grid.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      grid.current.children,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.05, clearProps: "opacity,transform" },
    );
    return () => {
      tween.kill();
    };
  }, [filter]);

  return (
    <section className="gutter pb-section">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-8 gap-y-3 border-b hairline pb-5">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
            className={cn(
              "eyebrow relative min-h-11 py-3 transition-opacity duration-300",
              filter === f.key ? "opacity-100" : "opacity-45 hover:opacity-100",
            )}
          >
            {f.label}
            <span className="ml-2 opacity-50">{String(count(f.key)).padStart(2, "0")}</span>
            <span
              className={cn(
                "absolute inset-x-0 -bottom-[1.3rem] h-px bg-ink transition-transform duration-500 ease-out",
                filter === f.key ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div ref={grid} className="grid-12 mt-16 gap-y-20 md:mt-24">
          {visible.map((project, i) => (
            <div
              key={project.slug}
              className={cn(
                "col-span-12 md:col-span-5",
                i % 2 === 0 ? "md:col-start-1" : "md:col-start-7 md:mt-28",
              )}
            >
              <ProjectTile project={project} ratio={i % 2 === 0 ? "4 / 5" : "5 / 4"} reveal={false} />
            </div>
          ))}
        </div>
      ) : (
        <p className="t-body-lg mt-16 text-smoke md:mt-24">
          Swimming pool projects will be added here.
        </p>
      )}
    </section>
  );
}
