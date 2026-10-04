import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import ProjectTile from "./ProjectTile";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/projects";

/** Projects for a service or "more like this". Shows a quiet empty state when there are none. */
export default function RelatedProjects({
  projects,
  eyebrow = "Projects",
  heading,
  emptyText,
  viewAllHref = "/projects",
  limit = 4,
}: {
  projects: Project[];
  eyebrow?: string;
  heading: string;
  emptyText?: string;
  viewAllHref?: string;
  limit?: number;
}) {
  const shown = projects.slice(0, limit);
  return (
    <section className="gutter py-section">
      <div className="grid-12 items-end gap-y-10">
        <Eyebrow className="col-span-12 md:col-span-3">{eyebrow}</Eyebrow>
        <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-6">
          {heading}
        </h2>
        {shown.length > 0 && (
          <div className="col-span-12 md:col-span-3 md:justify-self-end">
            <ArrowLink href={viewAllHref}>All projects</ArrowLink>
          </div>
        )}
      </div>

      {shown.length > 0 ? (
        <div className="grid-12 mt-16 gap-y-16 md:mt-28">
          {shown.map((project, i) => (
            <div
              key={project.slug}
              className={cn(
                "col-span-12 md:col-span-5",
                i % 2 === 0 ? "md:col-start-1" : "md:col-start-7 md:mt-32",
              )}
            >
              <ProjectTile project={project} ratio={i % 2 === 0 ? "4 / 5" : "5 / 4"} />
            </div>
          ))}
        </div>
      ) : (
        <p data-reveal="fade" className="t-body-lg mt-16 border-t hairline pt-8 text-smoke md:mt-28">
          {emptyText ?? "Projects will be added here."}
        </p>
      )}
    </section>
  );
}
