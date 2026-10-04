import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CatalogueBrowser from "@/components/catalogue/CatalogueBrowser";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { isProductCategory, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "HVAC equipment from GAMI, and elevators and escalators from FUJI Universal, supplied by Nasar Al Masa. Enquire on any product by WhatsApp or email.",
};

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Equipment supplied by Nasar Al Masa."
        intro="HVAC equipment from GAMI, and elevators and escalators from FUJI Universal. Choose a product to see what is available and enquire by WhatsApp or email."
      />
      <CatalogueBrowser products={products} initial={isProductCategory(category) ? category : "all"} />
      <ClosingCTA heading="Need a specific model?" topic="equipment from your catalogue" />
    </>
  );
}
