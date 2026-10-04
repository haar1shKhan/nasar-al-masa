import Eyebrow from "./Eyebrow";

/** Page opening: eyebrow, large headline, optional supporting copy offset to the right. */
export default function PageHeader({
  eyebrow,
  n,
  title,
  intro,
  children,
}: {
  eyebrow: React.ReactNode;
  n?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="gutter pb-section-sm pt-36 md:pt-52">
      <Eyebrow n={n}>{eyebrow}</Eyebrow>
      <h1 data-reveal="heading" className="t-display mt-8 max-w-[16ch] md:mt-12 md:max-w-[18ch]">
        {title}
      </h1>
      {(intro || children) && (
        <div className="grid-12 mt-12 md:mt-20">
          <div data-reveal="fade" className="col-span-12 md:col-span-5 md:col-start-7">
            {intro && <p className="t-body-lg text-smoke">{intro}</p>}
            {children}
          </div>
        </div>
      )}
    </header>
  );
}
