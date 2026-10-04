import { cn } from "@/lib/cn";

/** Numbered hairline rows: title left, description right. Used for capabilities and service scope. */
export default function RowList({
  items,
  className,
}: {
  items: { title: string; text: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("border-t hairline", className)}>
      {items.map((item, i) => (
        <li key={item.title} data-reveal="fade" className="group grid-12 gap-y-3 border-b hairline py-7 md:py-10">
          <span className="eyebrow col-span-2 pt-2 opacity-50 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="t-sub col-span-10 transition-transform duration-500 ease-out md:col-span-4 md:group-hover:translate-x-2">
            {item.title}
          </h3>
          <p className="t-body col-span-12 text-smoke md:col-span-6 md:col-start-7">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
