import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "4 / 5". Fixed so a real image can replace the placeholder without moving the layout. */
  ratio: string;
  /** Optional different ratio below the md breakpoint */
  mobileRatio?: string;
  sizes?: string;
  priority?: boolean;
  /** Slow vertical drift on scroll (use on large images only) */
  parallax?: boolean;
  /** Scroll-scrubbed clip-path that opens the frame as it enters (full-bleed images) */
  scrub?: "expand";
  /** Mask reveal on scroll */
  reveal?: boolean;
  /** Scale on hover — requires a `group` ancestor */
  hover?: boolean;
  /** object-position for the image, e.g. "70% 50%" */
  position?: string;
  /** "contain" for cut-out equipment shots on white: multiplies onto the stone background */
  fit?: "cover" | "contain";
  className?: string;
};

export default function Media({
  src,
  alt = "",
  ratio,
  mobileRatio,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority,
  parallax,
  scrub,
  reveal = true,
  hover = true,
  position,
  fit = "cover",
  className,
}: Props) {
  return (
    <div
      data-reveal={reveal ? "image" : undefined}
      data-scrub={scrub}
      className={cn(
        "relative w-full overflow-hidden bg-stone aspect-[var(--r-sm)] md:aspect-[var(--r)]",
        className,
      )}
      style={{ "--r": ratio, "--r-sm": mobileRatio ?? ratio } as React.CSSProperties}
    >
      <div
        data-reveal-inner
        data-parallax={parallax ? "" : undefined}
        className={cn("absolute inset-x-0 bg-stone", parallax ? "-top-[8%] h-[116%]" : "inset-0")}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            style={position ? { objectPosition: position } : undefined}
            className={cn(
              fit === "contain" ? "object-contain p-[7%] mix-blend-multiply" : "object-cover",
              hover && "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]",
            )}
          />
        ) : (
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 bg-stone",
              hover && "transition-colors duration-700 group-hover:bg-stone-deep/70",
            )}
          >
            <span className="eyebrow absolute bottom-4 left-4 text-[0.625rem] text-smoke/70">
              Image to follow
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
