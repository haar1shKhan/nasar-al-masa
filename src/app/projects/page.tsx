import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ProjectsBrowser from "@/components/projects/ProjectsBrowser";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Elevator, escalator and HVAC projects completed by Nasar Al Masa across the UAE.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What Nasar Al Masa has built."
        intro="Elevator and escalator installations across Fujairah and Dubai, and HVAC works for developments in Abu Dhabi and beyond."
      />
      <ProjectsBrowser projects={projects} />
      <ClosingCTA />
    </>
  );
}
