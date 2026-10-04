import Link from "next/link";
import { cn } from "@/lib/cn";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      className={cn("arrow-link__arrow shrink-0", className)}
    >
      <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** Non-interactive arrow label for use inside an entry that is itself a link (animates on the entry's hover). */
export function ArrowCue({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("arrow-link text-[0.9375rem] font-medium tracking-tight", className)}>
      <span className="arrow-link__label">{children}</span>
      <Arrow />
    </span>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Opens in a new tab (wa.me, mailto, tel and absolute URLs are treated as external automatically) */
  external?: boolean;
};

export default function ArrowLink({ href, children, className, external }: Props) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      <span className="arrow-link__label">{children}</span>
      <Arrow />
    </>
  );
  const cls = cn("arrow-link text-[0.9375rem] font-medium tracking-tight", className);

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
