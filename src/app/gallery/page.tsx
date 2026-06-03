import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <Section bg="surface" className="pt-32 md:pt-40">
        <Container>
          <FadeIn>
            <h1 className="text-headline-xl-mobile md:text-headline-xl max-w-3xl">
              Work Done Right.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl">
              No-nonsense debris removal across Springfield and the Pioneer
              Valley. Browse our photographic record of estate cleanouts,
              construction site clearing, and heavy furniture haul-offs.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Gallery Grid */}
      <Section bg="default">
        <Container>
          <GalleryGrid />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section bg="surface">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-headline-md md:text-headline-lg">
                Ready to clear the space?
              </h2>
              <p className="mt-6 text-lg text-on-surface-variant leading-relaxed">
                Stop looking at the pile. We provide same-day quotes and
                next-day removal for most items in the Pioneer Valley. Industrial
                strength, local grit.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get a Quote Now
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-block border-2 border-near-black text-near-black px-8 py-4 text-label-lg hover:bg-near-black hover:text-inverse-on-surface transition-colors"
                >
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Decorative Text */}
      <div className="bg-near-black py-20 md:py-28 overflow-hidden">
        <Container>
          <p className="text-[80px] md:text-[160px] lg:text-[200px] font-headline font-black leading-none text-inverse-on-surface/5 tracking-tighter select-none">
            HAUL / OFF
          </p>
        </Container>
      </div>
    </>
  );
}
