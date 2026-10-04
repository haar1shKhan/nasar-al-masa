import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import ProjectEntry, { type ProjectLayout } from "@/components/projects/ProjectEntry";
import { featuredProjects } from "@/data/projects";

// Different proportions per entry so the section never reads as a repeating grid.
const layouts: ProjectLayout[] = ["wide", "portrait", "square", "panorama"];

export default function FeaturedProjects() {
  const projects = featuredProjects();
  return (
    <section className="gutter pb-section pt-section-sm">
      <div className="grid-12 items-end gap-y-10">
        <Eyebrow n="03" className="col-span-12 md:col-span-3">
          Projects
        </Eyebrow>
        <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-6">
          Work in the field.
        </h2>
        <div className="col-span-12 md:col-span-3 md:justify-self-end">
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>
      </div>

      <div className="mt-20 space-y-section-sm md:mt-32">
        {projects.map((project, i) => (
          <ProjectEntry key={project.slug} project={project} index={i + 1} layout={layouts[i % layouts.length]} />
        ))}
      </div>
    </section>
  );
}
