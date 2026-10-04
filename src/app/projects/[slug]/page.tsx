import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Media from "@/components/ui/Media";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { categoryLabel, getProject, projects, projectsByCategory } from "@/data/projects";
import { getServiceByCategory } from "@/data/services";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description:
      project.description ??
      `${categoryLabel[project.category]} project${project.location ? ` in ${project.location}` : ""} by Nasar Al Masa.`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const service = getServiceByCategory(project.category);
  const details = (
    [
      ["Location", project.location],
      ["Scope", project.scope],
      ["Year", project.year],
      ["Client", project.client],
      ["Consultant", project.consultant],
    ] as [string, string | undefined][]
  ).filter(([, v]) => v);

  const gallery = project.images ?? [];
  const more = projectsByCategory(project.category).filter((p) => p.slug !== project.slug);

  return (
    <>
      <header className="gutter pb-section-sm pt-36 md:pt-52">
        <p className="eyebrow">
          <Link href="/projects" className="opacity-50 transition-opacity hover:opacity-100">
            Projects
          </Link>
          <span className="opacity-50"> / </span>
          {service ? (
            <Link href={`/services/${service.slug}`}>{categoryLabel[project.category]}</Link>
          ) : (
            categoryLabel[project.category]
          )}
        </p>
        <h1 data-reveal="heading" className="t-headline mt-8 max-w-[18ch] md:mt-12">
          {project.title}
        </h1>

        <div className="grid-12 mt-14 gap-y-12 md:mt-24">
          <dl data-reveal="fade" className="col-span-12 md:col-span-5">
            {details.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-t hairline py-4 text-[0.9375rem] last:border-b">
                <dt className="eyebrow pt-1 text-smoke">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          {project.description && (
            <p data-reveal="fade" data-delay="0.1" className="t-body-lg col-span-12 text-smoke md:col-span-5 md:col-start-7">
              {project.description}
            </p>
          )}
        </div>
      </header>

      {/* Cover — fixed ratio; a real image drops in without moving the layout */}
      <Media
        src={project.coverImage}
        alt={`${project.title}${project.location ? `, ${project.location}` : ""}`}
        ratio="16 / 9"
        mobileRatio="4 / 3"
        parallax={Boolean(project.coverImage)}
        hover={false}
        priority
        sizes="100vw"
      />

      {/* Gallery — composed, not a thumbnail strip */}
      {gallery.length > 0 && (
        <section className="gutter py-section-sm">
          <div className="grid-12 gap-y-16 md:gap-y-28">
            {gallery.map((src, i) => {
              const pattern = [
                "md:col-span-12",
                "md:col-span-5 md:col-start-1",
                "md:col-span-6 md:col-start-7 md:mt-32",
              ][i % 3];
              const ratio = ["16 / 9", "4 / 5", "5 / 4"][i % 3];
              return (
                <div key={src} className={`col-span-12 ${pattern}`}>
                  <Media src={src} alt={`${project.title}, image ${i + 1}`} ratio={ratio} mobileRatio="4 / 3" hover={false} />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {more.length > 0 && (
        <RelatedProjects
          projects={more}
          heading={`More ${categoryLabel[project.category]} projects.`}
          limit={2}
        />
      )}
      <ClosingCTA heading="Planning something similar?" topic={`a project similar to ${project.title}`} />
    </>
  );
}
