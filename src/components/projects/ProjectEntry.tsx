import Link from "next/link";
import Media from "@/components/ui/Media";
import { ArrowCue } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/cn";
import { categoryLabel, type Project } from "@/data/projects";

export type ProjectLayout = "wide" | "portrait" | "square" | "panorama";

const layouts: Record<
  ProjectLayout,
  { image: string; meta: string; ratio: string; mobile: string }
> = {
  wide: {
    image: "md:col-span-8",
    meta: "md:col-span-3 md:col-start-10 md:self-end",
    ratio: "16 / 10",
    mobile: "4 / 3",
  },
  portrait: {
    image: "md:col-span-5 md:col-start-7 md:order-2",
    meta: "md:col-span-3 md:col-start-2 md:order-1 md:self-start md:pt-[18%]",
    ratio: "4 / 5",
    mobile: "4 / 5",
  },
  square: {
    image: "md:col-span-6",
    meta: "md:col-span-3 md:col-start-8 md:self-center",
    ratio: "1 / 1",
    mobile: "4 / 3",
  },
  panorama: {
    image: "md:col-span-10 md:col-start-2",
    meta: "md:col-span-10 md:col-start-2",
    ratio: "21 / 9",
    mobile: "4 / 3",
  },
};

const serviceName = (p: Project) => categoryLabel[p.category];

function Meta({ project, index }: { project: Project; index: number }) {
  const rows = [
    ["Location", project.location],
    ["Scope", project.scope],
    ["Service", serviceName(project)],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <>
      <p className="eyebrow">
        <span className="opacity-50">{String(index).padStart(2, "0")} / </span>
        {serviceName(project)}
      </p>
      <h3 className="t-title mt-5">{project.title}</h3>
      <dl className="mt-7 space-y-2 text-[0.9375rem]">
        {rows.map(([k, v]) => (
          <div key={k} className="flex gap-6">
            <dt className="w-20 shrink-0 text-smoke">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8">
        <ArrowCue>View Project</ArrowCue>
      </div>
    </>
  );
}

/** Large editorial project entry for the home page. */
export default function ProjectEntry({
  project,
  index,
  layout,
  className,
}: {
  project: Project;
  index: number;
  layout: ProjectLayout;
  className?: string;
}) {
  const l = layouts[layout];
  const wideMeta = layout === "panorama";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group grid-12 items-start gap-y-8", className)}
    >
      <div className={cn("col-span-12", l.image)}>
        <Media
          src={project.coverImage}
          alt={`${project.title}, ${project.location ?? ""}`}
          ratio={l.ratio}
          mobileRatio={l.mobile}
          parallax
          sizes="(min-width: 768px) 66vw, 100vw"
        />
      </div>
      <div
        data-reveal="fade"
        className={cn(
          "col-span-12 transition-transform duration-700 ease-out md:group-hover:translate-x-1",
          l.meta,
          wideMeta && "md:flex md:items-end md:justify-between md:gap-12",
        )}
      >
        {wideMeta ? (
          <>
            <div>
              <p className="eyebrow">
                <span className="opacity-50">{String(index).padStart(2, "0")} / </span>
                {serviceName(project)}
              </p>
              <h3 className="t-title mt-5">{project.title}</h3>
            </div>
            <div className="mt-6 flex flex-col gap-6 md:mt-0 md:items-end">
              <p className="text-[0.9375rem] text-smoke">
                {[project.location, project.scope].filter(Boolean).join(" · ")}
              </p>
              <ArrowCue>View Project</ArrowCue>
            </div>
          </>
        ) : (
          <Meta project={project} index={index} />
        )}
      </div>
    </Link>
  );
}
