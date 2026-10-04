import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink, { ArrowCue } from "@/components/ui/ArrowLink";
import Media from "@/components/ui/Media";
import { productCategories, productsByCategory } from "@/data/products";
import { cn } from "@/lib/cn";

// Staggered columns, different proportions
const columns = [
  { span: "md:col-span-4", offset: "", ratio: "4 / 5", speed: "0.05" },
  { span: "md:col-span-4 md:col-start-6", offset: "md:mt-28", ratio: "1 / 1", speed: "0.18" },
  { span: "md:col-span-3 md:col-start-10", offset: "md:mt-12", ratio: "3 / 4", speed: "0.32" },
];

export default function CatalogueTeaser() {
  return (
    <section className="gutter py-section">
      <div className="grid-12 items-end gap-y-10">
        <Eyebrow n="05" className="col-span-12 md:col-span-3">
          Catalogue
        </Eyebrow>
        <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-6">
          The equipment behind the work.
        </h2>
        <div className="col-span-12 md:col-span-3 md:justify-self-end">
          <ArrowLink href="/catalogue">Explore Catalogue</ArrowLink>
        </div>
      </div>

      <div className="grid-12 mt-20 gap-y-16 md:mt-32">
        {productCategories.map((cat, i) => {
          const col = columns[i];
          const items = productsByCategory(cat.key);
          const count = items.length;
          const cover = items.find((p) => p.image);
          return (
            <Link
              key={cat.key}
              data-speed={col.speed}
              href={`/catalogue?category=${cat.key}`}
              className={cn("group col-span-12 block", col.span, col.offset)}
            >
              <Media
                src={cover?.image}
                alt={cover?.name}
                position={cover?.imagePosition}
                fit={cover?.imageFit}
                ratio={col.ratio}
                mobileRatio="4 / 3"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="t-sub">{cat.label}</h3>
                <span className="eyebrow text-smoke">{count} products</span>
              </div>
              <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-smoke">{cat.blurb}</p>
              <div className="mt-5">
                <ArrowCue>Browse {cat.label}</ArrowCue>
              </div>
            </Link>
          );
        })}
      </div>

      <p data-reveal="fade" className="eyebrow mt-24 text-smoke md:mt-32">
        Service &nbsp;→&nbsp; Equipment &nbsp;→&nbsp; Enquiry
      </p>
    </section>
  );
}
