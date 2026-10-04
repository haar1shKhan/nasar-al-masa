import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import RowList from "@/components/ui/RowList";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nasar Al Masa supplies, installs and maintains elevators, escalators and HVAC systems in the UAE.",
};

// Source: "About Us", "Our Strength Points" and "About Founder" in the company brochures.
const strengths = [
  {
    title: "Two named manufacturers",
    text: "Sole supplier of FUJI Universal elevators and escalators in the Gulf countries. Authorised supplier and installer of GAMI air conditioners.",
  },
  {
    title: "Every major brand maintained",
    text: "Lift maintenance covers Kone, Mitsubishi, Otis, Schindler, Hitachi, Thyssenkrupp and others. HVAC service covers systems from any manufacturer.",
  },
  {
    title: "Problem first, responsibility after",
    text: "The stated service standard: be prepared to solve the problem first, then divide the responsibility.",
  },
  {
    title: "Tested before handover",
    text: "HVAC equipment follows AHRI, Eurovent, ESMA, SASO and QCC standards, with coil testing, run testing and final inspection.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Elevators and air-conditioning, supplied and kept running."
        intro="Nasar Al Masa works in two disciplines, vertical transport and HVAC, covering supply, installation and maintenance for homes, commercial buildings and industrial sites in the UAE."
      />

      <section className="gutter py-section-sm">
        <div className="grid-12 gap-y-16">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow n="01">Elevators & Escalators</Eyebrow>
            <h2 className="t-title mt-6">{company.partners.elevators}</h2>
            <p data-reveal="fade" className="t-body mt-6 text-smoke">
              FUJI Universal elevators and escalators are installed in more than 20 countries and carry CE and TUV
              certification. Nasar Al Masa supplies them across the Gulf, from design and supply through installation
              to maintenance, and runs a modernisation team for existing lifts.
            </p>
            <div className="mt-8">
              <ArrowLink href="/services/elevators-escalators">Elevators &amp; Escalators</ArrowLink>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Eyebrow n="02">HVAC</Eyebrow>
            <h2 className="t-title mt-6">{company.partners.hvac}</h2>
            <p data-reveal="fade" className="t-body mt-6 text-smoke">
              GAMI is a GCC manufacturer whose chillers, air handling units, fan coil units and rooftop packaged units
              are built for ambient temperatures of 52 to 56 °C. Nasar Al Masa plans, installs, tests and maintains
              the systems, and has completed major projects in joint venture with Golden Rocks.
            </p>
            <div className="mt-8">
              <ArrowLink href="/services/hvac">HVAC</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="gutter py-section">
          <div className="grid-12 mb-16 gap-y-10 md:mb-24">
            <Eyebrow className="col-span-12 md:col-span-3">How we work</Eyebrow>
            <h2 data-reveal="heading" className="t-statement col-span-12 md:col-span-7">
              What the work is built on.
            </h2>
          </div>
          <RowList items={strengths} />
        </div>
      </section>

      <section className="gutter py-section">
        <div className="grid-12 gap-y-10">
          <Eyebrow className="col-span-12 md:col-span-3">Leadership</Eyebrow>
          <div data-reveal="fade" className="col-span-12 md:col-span-6 md:col-start-6">
            <p className="t-body-lg">
              The company was founded by Khan Salim Yasin, a construction leader with more than 25 years of experience
              delivering residential, commercial and government projects across the UAE.
            </p>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
