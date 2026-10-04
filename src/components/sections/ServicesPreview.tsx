import Eyebrow from "@/components/ui/Eyebrow";
import ServiceEntry, { type ServiceLayout } from "@/components/services/ServiceEntry";
import { services } from "@/data/services";

const layouts: ServiceLayout[] = ["wide-left", "portrait-right", "square-left"];

export default function ServicesPreview() {
  return (
    <section className="gutter py-section">
      <div className="grid-12 gap-y-10">
        <Eyebrow n="02" className="col-span-12 md:col-span-3">
          Services
        </Eyebrow>
        <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-8">
          Engineering the spaces people move through.
        </h2>
      </div>

      <div className="mt-20 space-y-section-sm md:mt-32">
        {services.map((service, i) => (
          <ServiceEntry key={service.slug} service={service} layout={layouts[i % layouts.length]} />
        ))}
      </div>
    </section>
  );
}
