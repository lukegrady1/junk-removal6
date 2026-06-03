import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { StatementBlock } from "@/components/sections/StatementBlock";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GalleryMosaic } from "@/components/sections/GalleryMosaic";
import { Testimonials } from "@/components/sections/Testimonials";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <div className="mt-[64px]">
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <StatementBlock />
      <ProcessSection />
      <GalleryMosaic />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <ClosingCTA />
    </div>
  );
}
