"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { whenUncovered } from "@/lib/transition-state";

/**
 * Scroll-driven reveals for the whole site, declared in markup with data attributes:
 *   data-reveal="heading"  masked line-by-line headline reveal
 *   data-reveal="fade"     short upward fade (data-delay optional)
 *   data-reveal="image"    masked image reveal (see <Media/>)
 *   data-parallax          slow drift on a Media inner layer
 *   data-scrub="words"     words light up as the statement scrolls through (scrubbed)
 *   data-scrub="expand"    frame opens from an inset to full-bleed (scrubbed)
 *   data-speed="0.2"       element drifts upward at its own rate (md and up, scrubbed)
 *
 * One gsap.matchMedia context per route: everything created here (ScrollTriggers, SplitText)
 * is reverted when the route changes or the component unmounts, so nothing goes stale.
 * Nothing is registered for prefers-reduced-motion; CSS leaves content visible in that case.
 */
export default function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();
    let frame = 0;

    const stop = whenUncovered(() => {
      frame = requestAnimationFrame(() => {
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          // Headlines
          gsap.utils.toArray<HTMLElement>('[data-reveal="heading"]').forEach((el) => {
            SplitText.create(el, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                // keep descenders from being clipped by the line masks
                self.masks.forEach((m) => {
                  (m as HTMLElement).style.paddingBottom = "0.12em";
                  (m as HTMLElement).style.marginBottom = "-0.12em";
                });
                gsap.set(el, { visibility: "visible" });
                return gsap.from(self.lines, {
                  yPercent: 108,
                  duration: 1.05,
                  ease: "power3.out",
                  stagger: 0.09,
                  scrollTrigger: { trigger: el, start: "top 90%", once: true },
                });
              },
            });
          });

          // Short fades
          gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power2.out",
                delay: Number(el.dataset.delay ?? 0),
                scrollTrigger: { trigger: el, start: "top 92%", once: true },
              },
            );
          });

          // Image mask reveals
          gsap.utils.toArray<HTMLElement>('[data-reveal="image"]').forEach((el) => {
            const inner = el.querySelector<HTMLElement>("[data-reveal-inner]");
            const tl = gsap.timeline({
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            });
            tl.fromTo(
              el,
              { clipPath: "inset(0% 0% 100% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power3.inOut" },
            );
            if (inner && !inner.hasAttribute("data-parallax")) {
              tl.fromTo(inner, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: "power2.out" }, 0);
            }
          });

          // Parallax drift
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((inner) => {
            gsap.fromTo(
              inner,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: inner.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });

          // Scrubbed statement: words go from dim to full as you read down the page
          gsap.utils.toArray<HTMLElement>('[data-scrub="words"]').forEach((el) => {
            SplitText.create(el, {
              type: "words",
              autoSplit: true,
              onSplit(self) {
                gsap.set(el, { visibility: "visible" });
                return gsap.fromTo(
                  self.words,
                  { opacity: 0.14 },
                  {
                    opacity: 1,
                    ease: "none",
                    stagger: 0.12,
                    scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
                  },
                );
              },
            });
          });

          // Full-bleed frame opens as it scrolls in
          gsap.utils.toArray<HTMLElement>('[data-scrub="expand"]').forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(14% 8% 14% 8%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: { trigger: el, start: "top 95%", end: "top 20%", scrub: true },
              },
            );
          });

          // Fonts / images can shift layout; recalc once things settle
          const refresh = () => ScrollTrigger.refresh();
          document.fonts?.ready.then(refresh);
        });
      });
    });

    // Staggered drift for editorial columns (desktop only)
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const run = () => {
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = Number(el.dataset.speed);
          gsap.fromTo(
            el,
            { y: () => speed * window.innerHeight * 0.45 },
            {
              y: () => -speed * window.innerHeight * 0.45,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true },
            },
          );
        });
      };
      requestAnimationFrame(run);
    });

    return () => {
      stop();
      cancelAnimationFrame(frame);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
