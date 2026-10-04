import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import Media from "@/components/ui/Media";
import RowList from "@/components/ui/RowList";
import ArrowLink from "@/components/ui/ArrowLink";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { getService, services } from "@/data/services";
import { projectsByCategory } from "@/data/projects";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const projects = projectsByCategory(service.category);
  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHeader eyebrow={service.label} n={service.number} title={service.headline} intro={service.summary} />

      <Media
        src={service.image}
        alt={service.imageAlt}
        ratio="21 / 9"
        mobileRatio="4 / 3"
        parallax={Boolean(service.image)}
        hover={false}
        priority
        sizes="100vw"
      />

      {/* Introduction */}
      <section className="gutter py-section">
        <div className="grid-12 gap-y-10">
          <Eyebrow className="col-span-12 md:col-span-3">Overview</Eyebrow>
          <div className="col-span-12 space-y-6 md:col-span-6 md:col-start-6">
            {service.intro.map((p, i) => (
              <p key={i} data-reveal="fade" className={i === 0 ? "t-body-lg" : "t-body text-smoke"}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {service.facts && (
          <dl className="mt-20 border-t hairline md:mt-32">
            {service.facts.map((f) => (
              <div key={f.label} className="grid-12 gap-y-1 border-b hairline py-5">
                <dt className="eyebrow col-span-12 text-smoke md:col-span-3">{f.label}</dt>
                <dd className="col-span-12 text-[1.0625rem] md:col-span-6 md:col-start-6">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      {/* Scope */}
      {service.scope.length > 0 && (
        <section className="bg-stone">
          <div className="gutter py-section">
            <div className="grid-12 mb-16 gap-y-10 md:mb-24">
              <Eyebrow className="col-span-12 md:col-span-3">Scope</Eyebrow>
              <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-7">
                What Nasar Al Masa handles.
              </h2>
            </div>
            <RowList items={service.scope} />

            {service.range && (
              <div className="grid-12 mt-section-sm gap-y-8">
                <Eyebrow className="col-span-12 md:col-span-3">{service.range.heading}</Eyebrow>
                <ul className="col-span-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 md:col-span-8 md:col-start-5">
                  {service.range.items.map((item) => (
                    <li key={item} className="border-t hairline py-4 text-[1.0625rem]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Projects — filtered from the shared data by category */}
      <RelatedProjects
        projects={projects}
        heading={service.comingSoon ? "Projects to follow." : `${service.label} projects.`}
        emptyText={
          service.comingSoon
            ? "Swimming pool projects will be published here as they are added."
            : "Projects will be added here."
        }
      />

      {/* Catalogue connection */}
      {service.catalogue && (
        <section className="gutter border-t hairline py-section-sm">
          <div className="grid-12 items-center gap-y-8">
            <Eyebrow className="col-span-12 md:col-span-3">Catalogue</Eyebrow>
            <div className="col-span-12 flex flex-col gap-6 md:col-span-9 md:flex-row md:gap-14">
              {service.catalogue.map((c) => (
                <ArrowLink key={c.href} href={c.href} className="text-[1.125rem] md:text-[1.5rem]">
                  {c.label}
                </ArrowLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="gutter border-t hairline py-section-sm">
        <div className="grid-12 items-center gap-y-6">
          <Eyebrow className="col-span-12 md:col-span-3">Next</Eyebrow>
          <div className="col-span-12 md:col-span-9">
            <ArrowLink href={`/services/${next.slug}`} className="t-title">
              {next.title}
            </ArrowLink>
          </div>
        </div>
      </section>

      <ClosingCTA topic={service.enquiry} />
    </>
  );
}
