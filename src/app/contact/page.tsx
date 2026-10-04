import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/ArrowLink";
import { company } from "@/data/company";
import { generalEnquiry } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nasar Al Masa by WhatsApp or email.",
};

function Route({ label, value, href, external }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group arrow-link grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 border-t hairline py-8 md:grid-cols-[12rem_1fr_auto] md:py-12"
    >
      <span className="eyebrow col-span-2 opacity-50 md:col-span-1">{label}</span>
      <span className="arrow-link__label break-all text-[clamp(1.5rem,3.6vw,3.25rem)] font-medium leading-none tracking-tight after:hidden">
        {value}
      </span>
      <Arrow className="h-4 w-6" />
    </a>
  );
}

export default function ContactPage() {
  const links = generalEnquiry();
  return (
    <>
      <header className="gutter pb-section-sm pt-36 md:pt-52">
        <Eyebrow>Contact</Eyebrow>
        <h1 data-reveal="heading" className="t-display mt-8 max-w-[12ch] md:mt-12">
          Talk to Nasar Al Masa.
        </h1>
        <p data-reveal="fade" className="t-body-lg mt-12 text-smoke md:mt-16">
          The quickest way to reach the team is WhatsApp. Send the project location and what you need, and we will
          reply there.
        </p>
      </header>

      <section className="gutter pb-section-sm">
        <Route label="WhatsApp" value={company.phone} href={links.whatsapp} external />
        <div className="border-b hairline">
          <Route label="Email" value={company.email} href={links.email} />
        </div>
      </section>

      <section className="gutter pb-section">
        <div className="grid-12 gap-y-12">
          <Eyebrow className="col-span-12 md:col-span-3">Offices</Eyebrow>
          <div className="col-span-12 grid gap-12 sm:grid-cols-2 md:col-span-8 md:col-start-5">
            {company.offices.map((o) => (
              <div key={o.label} data-reveal="fade">
                <p className="eyebrow text-smoke">{o.label}</p>
                <address className="mt-4 text-[1.0625rem] not-italic leading-relaxed">
                  {o.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
            <div data-reveal="fade">
              <p className="eyebrow text-smoke">Phone</p>
              <p className="mt-4 space-y-1 text-[1.0625rem] leading-relaxed">
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="block">
                  {company.phone}
                </a>
                <a href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`} className="block">
                  {company.phoneSecondary}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
