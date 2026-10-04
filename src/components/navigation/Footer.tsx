import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { generalEnquiry } from "@/lib/contact";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "./links";

export default function Footer() {
  const contact = generalEnquiry();
  return (
    <footer className="on-dark gutter bg-ink pb-8 pt-section-sm text-bone">
      <div className="grid-12 gap-y-14">
        <div className="col-span-12 md:col-span-5">
          <Link href="/" aria-label="Nasar Al Masa — home" className="inline-block">
            <Logo size={44} />
          </Link>
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-bone/60">
            Elevators, escalators and HVAC. Supply and installation across the UAE.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2 md:col-start-7">
          <p className="eyebrow mb-6 text-bone/45">Services</p>
          <ul className="space-y-3 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="opacity-80 transition-opacity hover:opacity-100">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow mb-6 text-bone/45">Site</p>
          <ul className="space-y-3 text-[0.9375rem]">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2">
          <p className="eyebrow mb-6 text-bone/45">Contact</p>
          <ul className="space-y-3 text-[0.9375rem]">
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={contact.email} className="break-all opacity-80 transition-opacity hover:opacity-100">
                {company.email}
              </a>
            </li>
            <li className="text-bone/60">{company.phone}</li>
          </ul>
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-3 border-t border-bone/15 pt-6 text-[0.75rem] text-bone/45 md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {company.legalName}
        </p>
        <p>Dubai, United Arab Emirates</p>
      </div>
    </footer>
  );
}
