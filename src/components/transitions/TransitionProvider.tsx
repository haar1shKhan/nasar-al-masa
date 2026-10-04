"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { initBarba, isBarbaReady, runTransition } from "./barba-runtime";

const LABELS: Record<string, string> = {
  "": "Home",
  services: "Services",
  projects: "Projects",
  catalogue: "Catalogue",
  about: "About",
  contact: "Contact",
};

const labelFor = (pathname: string) => {
  const [first = "", second] = pathname.split("/").filter(Boolean);
  if (second) {
    const name = second.replace(/-/g, " ");
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return LABELS[first] ?? "";
};

/**
 * Intercepts internal link clicks and runs them through Barba (see barba-runtime.ts).
 * Renders the curtain that the Barba transition animates.
 */
export default function TransitionProvider() {
  const router = useRouter();
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef(pathname);
  const waiters = useRef<Array<() => void>>([]);
  const busy = useRef(false);

  // Resolve pending navigations once the new route has committed.
  useEffect(() => {
    pathRef.current = pathname;
    const pending = waiters.current.splice(0);
    pending.forEach((resolve) => resolve());
  }, [pathname]);

  useEffect(() => {
    if (!curtainRef.current || !labelRef.current) return;
    initBarba({ curtain: curtainRef.current, label: labelRef.current }).catch(() => {});

    const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const waitForRoute = (target: string) =>
      new Promise<void>((resolve) => {
        if (pathRef.current === target) return resolve();
        const timer = window.setTimeout(resolve, 5000); // never hang the curtain
        waiters.current.push(() => {
          window.clearTimeout(timer);
          // one frame so the new page's DOM and effects are in place before the curtain lifts
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        });
      });

    const onClick = (event: MouseEvent) => {
      if (!isBarbaReady() || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download") || anchor.hasAttribute("data-no-transition")) return;

      const url = new URL(anchor.href, location.href);
      if (url.origin !== location.origin) return;
      // Same page (hash jumps, query-only changes like catalogue filters): leave to the default router.
      if (url.pathname === location.pathname) return;

      event.preventDefault();
      event.stopPropagation();

      const href = url.pathname + url.search + url.hash;
      if (busy.current) return;

      if (reduced()) {
        router.push(href);
        return;
      }

      busy.current = true;
      runTransition({
        href,
        label: labelFor(url.pathname),
        navigate: async () => {
          router.push(href);
          await waitForRoute(url.pathname);
        },
      })
        .catch(() => router.push(href))
        .finally(() => {
          busy.current = false;
        });
    };

    // Capture phase so we run before Next's <Link> handler.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] flex items-end bg-ink text-bone"
      style={{ clipPath: "inset(100% 0% 0% 0%)", visibility: "hidden" }}
    >
      <span ref={labelRef} className="eyebrow gutter pb-8 opacity-0" />
    </div>
  );
}
