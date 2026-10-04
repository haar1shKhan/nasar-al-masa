import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import Media from "@/components/ui/Media";

export default function Intro() {
  return (
    <section>
      <div className="gutter pb-section-sm pt-section">
        <div className="grid-12 gap-y-10">
          <Eyebrow n="01" className="col-span-12 md:col-span-3">
            About
          </Eyebrow>
          <h2 data-scrub="words" className="t-statement col-span-12 font-light text-ink/45 md:col-span-9 lg:col-span-8">
            We supply, install and maintain the <strong className="font-bold text-ink">Elevators, Escalators and Air-conditioning</strong> that buildings across the UAE depend on.
          </h2>
        </div>

        <div className="grid-12 mt-16 gap-y-8 md:mt-28">
          <div data-reveal="fade" className="col-span-12 md:col-span-5 md:col-start-7">
            <p className="t-body text-smoke">
              Nasar Al Masa is the sole supplier of FUJI Universal elevators and escalators in the Gulf, and the
              authorised supplier and installer of GAMI air conditioning, built for UAE summers.
            </p>
            <div className="mt-8">
              <ArrowLink href="/about">About the company</ArrowLink>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed image, slow parallax */}
      <Media
        src="/images/hero-section.png"
        alt="Elevator lobby with a stone-clad core, an escalator behind and a view toward the Dubai skyline"
        ratio="21 / 9"
        mobileRatio="4 / 5"
        parallax
        scrub="expand"
        reveal={false}
        hover={false}
        sizes="100vw"
      />
    </section>
  );
}
