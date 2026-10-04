import { cn } from "@/lib/cn";

export default function Eyebrow({
  n,
  children,
  className,
}: {
  n?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      {n && <span className="opacity-50">{n} / </span>}
      {children}
    </p>
  );
}
