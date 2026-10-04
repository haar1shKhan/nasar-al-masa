import HeroSection from "@/components/hero/HeroSection";
import Intro from "@/components/sections/Intro";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Capabilities from "@/components/sections/Capabilities";
import CatalogueTeaser from "@/components/sections/CatalogueTeaser";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Intro />
      <ServicesPreview />
      <FeaturedProjects />
      <Capabilities />
      <CatalogueTeaser />
      <ClosingCTA />
    </>
  );
}
