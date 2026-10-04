"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import ProductTile from "./ProductTile";
import { productCategories, type Product, type ProductCategory } from "@/data/products";

type Filter = "all" | ProductCategory;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  ...productCategories.map((c) => ({ key: c.key, label: c.label })),
];

export default function CatalogueBrowser({
  products,
  initial = "all",
}: {
  products: Product[];
  initial?: Filter;
}) {
  const [filter, setFilter] = useState<Filter>(initial);
  const body = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  // A link to /catalogue?category=… while already on the catalogue changes the prop, not the mount
  useEffect(() => setFilter(initial), [initial]);

  const select = (key: Filter) => {
    setFilter(key);
    // Keep the URL shareable without triggering a navigation
    const url = key === "all" ? "/catalogue" : `/catalogue?category=${key}`;
    window.history.replaceState(null, "", url);
  };

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!body.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.fromTo(
      body.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", clearProps: "opacity,transform" },
    );
    return () => {
      tween.kill();
    };
  }, [filter]);

  const groups = (filter === "all" ? productCategories : productCategories.filter((c) => c.key === filter))
    .map((c) => ({ ...c, items: products.filter((p) => p.category === c.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="gutter pb-section">
      <div role="group" aria-label="Filter catalogue" className="flex flex-wrap gap-x-8 gap-y-3 border-b hairline pb-5">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => select(f.key)}
            aria-pressed={filter === f.key}
            className={cn(
              "eyebrow relative min-h-11 py-3 transition-opacity duration-300",
              filter === f.key ? "opacity-100" : "opacity-45 hover:opacity-100",
            )}
          >
            {f.label}
            <span
              className={cn(
                "absolute inset-x-0 -bottom-[1.3rem] h-px bg-ink transition-transform duration-500 ease-out",
                filter === f.key ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        ))}
      </div>

      <div ref={body} className="space-y-section-sm pt-16 md:pt-24">
        {groups.map((group) => (
          <div key={group.key}>
            {filter === "all" && (
              <div className="mb-12 flex items-baseline justify-between gap-6 md:mb-16">
                <h2 className="t-title">{group.label}</h2>
                <p className="eyebrow hidden text-smoke sm:block">{group.blurb}</p>
              </div>
            )}
            <div className="grid-12 gap-y-16 md:gap-y-24">
              {group.items.map((product) => (
                <div
                  key={product.slug}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 lg:[&:nth-child(3n+2)]:mt-16"
                >
                  <ProductTile product={product} reveal={false} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
