import Eyebrow from "@/components/ui/Eyebrow";
import RowList from "@/components/ui/RowList";

// Each line is taken from the company brochures — nothing here is a claim the documents don't make.
const capabilities = [
  {
    title: "Supply",
    text: "FUJI Universal elevators and escalators, and GAMI chillers, air handling units, fan coil units, rooftop packaged units and ducted split units.",
  },
  {
    title: "Installation",
    text: "Elevators, escalators and HVAC systems installed to the building's requirements. HVAC systems are tested and commissioned.",
  },
  {
    title: "Modernisation",
    text: "Upgrades to existing lifts by a dedicated team of experienced engineers.",
  },
  {
    title: "Maintenance",
    text: "Lifts of all major brands, including Kone, Mitsubishi, Otis, Schindler and Hitachi, and air-conditioning systems from any manufacturer.",
  },
  {
    title: "Project management",
    text: "Contract and project management across residential, commercial and industrial work.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-stone">
      <div className="gutter py-section">
        <div className="grid-12 mb-16 gap-y-10 md:mb-24">
          <Eyebrow n="04" className="col-span-12 md:col-span-3">
            Capabilities
          </Eyebrow>
          <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-7">
            What we handle, from first delivery to long-term service.
          </h2>
        </div>
        <RowList items={capabilities} />
      </div>
    </section>
  );
}
