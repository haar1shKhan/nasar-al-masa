import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServiceEntry, { type ServiceLayout } from "@/components/services/ServiceEntry";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Elevators and escalators, HVAC, and swimming pool construction. Supply, installation and maintenance across the UAE.",
};

const layouts: ServiceLayout[] = ["wide-left", "portrait-right", "square-left"];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What Nasar Al Masa does."
        intro="Two core disciplines, elevators and escalators, and HVAC, each handled from supply through installation to maintenance. Swimming pool construction is offered alongside."
      />
      <section className="gutter space-y-section-sm pb-section">
        {services.map((service, i) => (
          <ServiceEntry key={service.slug} service={service} layout={layouts[i % layouts.length]} />
        ))}
      </section>
      <ClosingCTA />
    </>
  );
}
