import Image from "next/image";
import { cn } from "@/lib/cn";

/** Brand mark (the favicon artwork) with the wordmark beside it. Inherits text colour from its parent. */
export default function Logo({
  size = 32,
  showName = true,
  className,
}: {
  size?: number;
  showName?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/images/logo.png"
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
        priority
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      {showName && (
        <span className="text-[0.8125rem] font-medium uppercase tracking-[0.22em]">Nasar Al Masa</span>
      )}
    </span>
  );
}
