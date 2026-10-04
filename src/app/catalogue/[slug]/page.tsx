import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/Eyebrow";
import ArrowLink from "@/components/ui/ArrowLink";
import Media from "@/components/ui/Media";
import ProductTile from "@/components/catalogue/ProductTile";
import { categoryName, getProduct, products, productsByCategory } from "@/data/products";
import { productEnquiry } from "@/lib/contact";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description ?? `${product.name} supplied by Nasar Al Masa.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const enquiry = productEnquiry(product.name, product.model);
  const category = categoryName(product.category);
  const gallery = (product.images ?? []).filter((src) => src !== product.image);
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const meta = (
    [
      ["Category", category],
      ["Brand", product.brand],
      ["Model", product.model],
    ] as [string, string | undefined][]
  ).filter(([, v]) => v);

  return (
    <>
      {/* Header */}
      <header className="gutter pb-section-sm pt-36 md:pt-48">
        <p className="eyebrow">
          <Link href="/catalogue" className="opacity-50 transition-opacity hover:opacity-100">
            Catalogue
          </Link>
          <span className="opacity-50"> / </span>
          <Link href={`/catalogue?category=${product.category}`}>{category}</Link>
        </p>

        <div className="grid-12 mt-10 items-end gap-y-12 md:mt-16">
          <div className="col-span-12 md:col-span-5">
            <h1 data-reveal="heading" className="t-headline">
              {product.name}
            </h1>
            {product.description && (
              <p data-reveal="fade" className="t-body-lg mt-8 text-smoke">
                {product.description}
              </p>
            )}
            <dl data-reveal="fade" className="mt-10 border-t hairline">
              {meta.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b hairline py-3.5 text-[0.9375rem]">
                  <dt className="eyebrow pt-1 text-smoke">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal="fade" className="mt-10 flex flex-col items-start gap-5">
              <ArrowLink href={enquiry.whatsapp} className="text-[1.125rem] md:text-[1.25rem]">
                Enquire About This Product
              </ArrowLink>
              <a href={enquiry.email} className="eyebrow text-smoke transition-colors hover:text-ink">
                Or enquire by email
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Media
              src={product.image ?? product.images?.[0]}
              alt={product.name}
              ratio={product.imageRatio ?? "4 / 5"}
              mobileRatio={product.imageRatio ?? "4 / 5"}
              position={product.imagePosition}
              fit={product.imageFit}
              hover={false}
              priority
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          </div>
        </div>
      </header>

      {/* Technical information — only what exists */}
      <section className="gutter py-section-sm">
        <div className="grid-12 gap-y-10">
          <Eyebrow className="col-span-12 md:col-span-3">Technical information</Eyebrow>
          <div className="col-span-12 md:col-span-9">
            {product.specifications && product.specifications.length > 0 ? (
              <dl className="border-t hairline">
                {product.specifications.map((s) => (
                  <div key={s.label} className="grid grid-cols-1 gap-1 border-b hairline py-5 md:grid-cols-[1fr_2fr] md:gap-8">
                    <dt className="eyebrow pt-1 text-smoke">{s.label}</dt>
                    <dd className="text-[1.0625rem] leading-relaxed">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="t-body-lg text-smoke">Technical details for this product are available on enquiry.</p>
            )}
          </div>
        </div>
      </section>

      {/* Gallery — only when more than the cover image exists */}
      {gallery.length > 0 && (
        <section className="gutter py-section-sm">
          <Eyebrow className="mb-10">Gallery</Eyebrow>
          <div className="grid-12 gap-y-6 md:gap-y-10">
            {gallery.map((src, i) => (
              <div key={src} className="col-span-6 md:col-span-4">
                <Media src={src} alt={`${product.name}, image ${i + 2}`} ratio="4 / 5" fit={product.imageFit} hover={false} sizes="(min-width: 768px) 30vw, 50vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="gutter border-t hairline py-section">
          <div className="grid-12 mb-16 items-end gap-y-8 md:mb-24">
            <Eyebrow className="col-span-12 md:col-span-3">More {category}</Eyebrow>
            <div className="col-span-12 md:col-span-3 md:col-start-10 md:justify-self-end">
              <ArrowLink href={`/catalogue?category=${product.category}`}>View all</ArrowLink>
            </div>
          </div>
          <div className="grid-12 gap-y-16">
            {related.map((p) => (
              <div key={p.slug} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <ProductTile product={p} />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
