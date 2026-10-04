import Link from "next/link";
import Media from "@/components/ui/Media";
import { ArrowCue } from "@/components/ui/ArrowLink";
import { categoryLabel, type Project } from "@/data/projects";

/** Compact project entry for grids (index, related projects). Category is always stated. */
export default function ProjectTile({
  project,
  ratio = "4 / 5",
  mobileRatio,
  className,
  reveal = true,
}: {
  project: Project;
  ratio?: string;
  mobileRatio?: string;
  className?: string;
  /** Set false for tiles that mount after the page has loaded (filtered lists) */
  reveal?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className={`group block ${className ?? ""}`}>
      <Media
        src={project.coverImage}
        alt={`${project.title}${project.location ? `, ${project.location}` : ""}`}
        ratio={ratio}
        mobileRatio={mobileRatio ?? "4 / 3"}
        reveal={reveal}
        sizes="(min-width: 768px) 45vw, 100vw"
      />
      <div className="mt-6 transition-transform duration-700 ease-out md:group-hover:translate-x-1">
        <p className="eyebrow text-smoke">{categoryLabel[project.category]}</p>
        <h3 className="t-sub mt-3">{project.title}</h3>
        <p className="mt-2 text-[0.9375rem] text-smoke">
          {[project.location, project.scope].filter(Boolean).join(" · ")}
        </p>
        <div className="mt-5">
          <ArrowCue>View Project</ArrowCue>
        </div>
      </div>
    </Link>
  );
}
