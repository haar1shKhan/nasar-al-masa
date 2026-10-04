import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import { company } from "@/data/company";
import { generalEnquiry } from "@/lib/contact";

/** Closing statement + the two ways to reach the company. Optional `topic` tailors the WhatsApp / email text. */
export default function ClosingCTA({
  heading = "Have a project in mind?",
  topic,
}: {
  heading?: string;
  topic?: string;
}) {
  const links = generalEnquiry(topic);
  return (
    <section className="on-dark gutter bg-ink py-section text-bone">
      <Eyebrow>Contact</Eyebrow>
      <h2 data-reveal="heading" className="t-display mt-10 max-w-[12ch] md:mt-14">
        {heading}
      </h2>

      <div className="grid-12 mt-16 gap-y-14 md:mt-24">
        <div className="col-span-12 md:col-span-5">
          <ArrowLink href="/contact" className="text-[1.125rem] md:text-[1.375rem]">
            Talk to Nasar Al Masa
          </ArrowLink>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 items-center justify-between gap-6 border-t hairline py-5"
          >
            <span className="eyebrow opacity-50">WhatsApp</span>
            <span className="arrow-link text-[1.0625rem]">
              <span>{company.phone}</span>
              <svg aria-hidden width="18" height="12" viewBox="0 0 18 12" fill="none" className="arrow-link__arrow">
                <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </span>
          </a>
          <a
            href={links.email}
            className="group flex min-h-16 items-center justify-between gap-6 border-y hairline py-5"
          >
            <span className="eyebrow opacity-50">Email</span>
            <span className="arrow-link text-[1.0625rem]">
              <span className="break-all">{company.email}</span>
              <svg aria-hidden width="18" height="12" viewBox="0 0 18 12" fill="none" className="arrow-link__arrow shrink-0">
                <path d="M0 6h16M11 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
