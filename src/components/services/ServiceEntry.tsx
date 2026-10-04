import Link from "next/link";
import Media from "@/components/ui/Media";
import { ArrowCue } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/cn";
import type { Service } from "@/data/services";

export type ServiceLayout = "wide-left" | "portrait-right" | "square-left";

const layouts: Record<
  ServiceLayout,
  { image: string; text: string; ratio: string; mobile: string }
> = {
  "wide-left": {
    image: "md:col-span-7",
    text: "md:col-span-4 md:col-start-9 md:self-end",
    ratio: "5 / 4",
    mobile: "4 / 3",
  },
  "portrait-right": {
    image: "md:col-span-5 md:col-start-8 md:order-2",
    text: "md:col-span-4 md:col-start-2 md:order-1 md:self-center",
    ratio: "4 / 5",
    mobile: "4 / 3",
  },
  "square-left": {
    image: "md:col-span-6",
    text: "md:col-span-4 md:col-start-8 md:self-start md:pt-[12%]",
    ratio: "1 / 1",
    mobile: "4 / 3",
  },
};

export default function ServiceEntry({
  service,
  layout,
  className,
}: {
  service: Service;
  layout: ServiceLayout;
  className?: string;
}) {
  const l = layouts[layout];
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn("group grid-12 items-start gap-y-8", className)}
    >
      <div className={cn("col-span-12", l.image)}>
        <Media
          src={service.image}
          alt={service.imageAlt}
          ratio={l.ratio}
          mobileRatio={l.mobile}
          parallax
          sizes="(min-width: 768px) 58vw, 100vw"
        />
      </div>
      <div data-reveal="fade" className={cn("col-span-12", l.text)}>
        <p className="eyebrow opacity-50">{service.number}</p>
        <h3 className="t-title mt-5">{service.title}</h3>
        <p className="t-body mt-5 text-smoke">{service.summary}</p>
        <div className="mt-8">
          <ArrowCue>{service.comingSoon ? "Read more" : "View service"}</ArrowCue>
        </div>
      </div>
    </Link>
  );
}
