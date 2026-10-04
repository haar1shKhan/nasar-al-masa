"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { setCovered } from "@/lib/transition-state";

/**
 * Barba.js + Next.js
 * ------------------
 * Next's App Router owns routing, history and the DOM, so Barba is NOT allowed to fetch pages,
 * swap containers in the React tree, or push history. Instead Barba runs as the transition
 * *orchestrator*:
 *
 *   - It lives on a hidden stage (wrapper + container) outside React.
 *   - Its own click/popstate handling is disabled.
 *   - Its page request is replaced by a stub, so no network fetch happens.
 *   - We drive it with `barba.page()`, and its lifecycle (beforeLeave → leave → beforeEnter →
 *     enter → afterEnter) animates the curtain with GSAP. The actual route change happens
 *     *inside* `leave`, while the curtain covers the screen.
 *
 * Page-level animations live in React effects (PageAnimations / Hero) wrapped in gsap contexts,
 * so they are reverted on unmount. Barba's `afterEnter` only refreshes ScrollTrigger.
 */

export type TransitionJob = {
  href: string;
  label: string;
  /** Performs the Next.js navigation and resolves once the new route has rendered */
  navigate: () => Promise<void>;
};

type Elements = { curtain: HTMLElement; label: HTMLElement };

let initialised = false;
let barba: any = null; // loaded lazily: @barba/core touches `Element` at import time, which breaks SSR
export const isBarbaReady = () => barba !== null;
let elements: Elements | null = null;
let job: TransitionJob | null = null;

const STUB_HTML = (title: string) =>
  `<!doctype html><html><head><title>${title}</title></head><body>` +
  `<div data-barba="wrapper"><div data-barba="container" data-barba-namespace="route"></div></div>` +
  `</body></html>`;

function ensureStage() {
  let wrapper = document.querySelector<HTMLElement>('[data-barba="wrapper"]');
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.setAttribute("data-barba", "wrapper");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.style.display = "none";
    const container = document.createElement("div");
    container.setAttribute("data-barba", "container");
    container.setAttribute("data-barba-namespace", "route");
    wrapper.appendChild(container);
    document.body.appendChild(wrapper);
  }
}

export async function initBarba(els: Elements) {
  elements = els;
  if (initialised) return;
  initialised = true;
  barba = (await import("@barba/core")).default;

  ensureStage();

  barba.init({
    // Barba must never intercept links itself — the transition controller does.
    prevent: () => true,
    prefetchIgnore: true,
    cacheIgnore: true,
    timeout: 10000,
    transitions: [
      {
        name: "curtain",
        async beforeLeave() {
          elements!.label.textContent = job?.label ?? "";
        },
        async leave() {
          const { curtain, label } = elements!;
          gsap.set(curtain, { clipPath: "inset(100% 0% 0% 0%)", visibility: "visible" });
          await gsap
            .timeline()
            .to(curtain, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power3.inOut" })
            .fromTo(label, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" }, "-=0.2")
            .then();
          setCovered(true);
          // Route change happens while the screen is covered.
          await job?.navigate();
        },
        async beforeEnter() {
          // New page is mounted; make sure it starts at the top before the curtain lifts.
          window.scrollTo(0, 0);
          ScrollTrigger.clearScrollMemory?.();
        },
        async enter() {
          const { curtain, label } = elements!;
          const tl = gsap.timeline();
          tl.to(label, { y: -12, autoAlpha: 0, duration: 0.25, ease: "power2.in" })
            .to(curtain, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6, ease: "power3.inOut" }, "-=0.05")
            // Incoming page's animations start as the curtain begins to lift
            .call(() => setCovered(false), undefined, "-=0.45");
          await tl.then();
          gsap.set(curtain, { visibility: "hidden", clipPath: "inset(100% 0% 0% 0%)" });
        },
        async afterEnter() {
          ScrollTrigger.refresh();
        },
      },
    ],
  });

  // Next owns navigation: disable Barba's own `popstate` → page-load handler and replace its
  // network request with a stub so a transition never triggers a fetch or a history push.
  const b = barba as unknown as Record<string, unknown> & {
    url: { parse: (href: string) => unknown };
  };
  b.go = () => undefined;
  b.request = (href: string) => {
    const abs = new URL(href, location.href).href;
    return Promise.resolve({
      html: STUB_HTML(document.title),
      url: { href: abs, ...(b.url.parse(abs) as object) },
    });
  };
}

/** Run a Barba transition for a route change. Resolves when the incoming page is revealed. */
export async function runTransition(next: TransitionJob) {
  job = next;
  try {
    const page = (barba as unknown as { page: (...args: unknown[]) => Promise<void> }).page;
    await page.call(barba, new URL(next.href, location.href).href, "barba", undefined, false);
  } finally {
    job = null;
    setCovered(false);
  }
}
