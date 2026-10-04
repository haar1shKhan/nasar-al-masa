import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";

export default function NotFound() {
  return (
    <section className="gutter min-h-[80svh] pb-section-sm pt-40 md:pt-56">
      <Eyebrow>404</Eyebrow>
      <h1 className="t-display mt-8 max-w-[14ch]">This page doesn&rsquo;t exist.</h1>
      <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
        <ArrowLink href="/">Home</ArrowLink>
        <ArrowLink href="/projects">Projects</ArrowLink>
        <ArrowLink href="/catalogue">Catalogue</ArrowLink>
      </div>
    </section>
  );
}
