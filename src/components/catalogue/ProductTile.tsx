import Link from "next/link";
import Media from "@/components/ui/Media";
import { ArrowCue } from "@/components/ui/ArrowLink";
import { categoryName, type Product } from "@/data/products";

export default function ProductTile({ product, reveal = true }: { product: Product; reveal?: boolean }) {
  return (
    <Link href={`/catalogue/${product.slug}`} className="group block">
      <Media
        src={product.image ?? product.images?.[0]}
        alt={product.name}
        ratio="4 / 5"
        mobileRatio="4 / 5"
        position={product.imagePosition}
        fit={product.imageFit}
        reveal={reveal}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
      />
      <div className="mt-6">
        <div className="eyebrow flex items-baseline justify-between gap-4 text-smoke">
          <span>{categoryName(product.category)}</span>
          {(product.model ?? product.brand) && <span className="text-right">{product.model ?? product.brand}</span>}
        </div>
        <h3 className="t-sub mt-4">{product.name}</h3>
        {product.description && (
          <p className="mt-3 line-clamp-2 max-w-sm text-[0.9375rem] leading-relaxed text-smoke">
            {product.description}
          </p>
        )}
        <div className="mt-6">
          <ArrowCue>View Product</ArrowCue>
        </div>
      </div>
    </Link>
  );
}
