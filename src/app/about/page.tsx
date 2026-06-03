import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About",
};

const stats = [
  { value: "06+", label: "Years Hauling" },
  { value: "4.2K", label: "Loads Cleared" },
  { value: "24", label: "Towns Covered" },
];

const values = [
  {
    number: "01",
    title: "Flat-Rate Pricing",
    description:
      "No estimates, no games. We price by the load volume, and that price stays locked the moment we confirm it. Full transparency for every resident in the Pioneer Valley.",
  },
  {
    number: "02",
    title: "Property Respect",
    description:
      "We treat your home like our own. We don't drag items across floors or scuff walls. If we leave a mark, we fix it. Professionalism is our baseline, not an extra.",
  },
  {
    number: "03",
    title: "Waste Diversion",
    description:
      "Your junk doesn't just go to the dump. We sort through every load to donate usable items and recycle metals and electronics, minimizing our impact on MA landfills.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="surface" className="pt-32 md:pt-40">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-label-lg text-accent">
                  The Pioneer Valley Standard
                </p>
                <h1 className="mt-4 text-headline-xl-mobile md:text-headline-xl">
                  More than just a truck. A mission to clear space.
                </h1>
              </div>
              <div className="flex items-end">
                <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
                  We started with one mission: make junk removal in Springfield
                  honest, fast, and heavy-duty.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Story Block */}
      <Section bg="default">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/about/team.jpg"
                  alt={`${siteConfig.businessName} crew`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-headline-md md:text-headline-lg">
                  The Springfield Roots
                </h2>
                <p className="mt-6 text-lg text-on-surface-variant leading-relaxed">
                  In 2018, {siteConfig.businessName} began with a single used
                  flatbed and a simple promise: show up on time and out-work
                  everyone else. Founded by Springfield native Mike Russo, the
                  company was born out of a realization that the Pioneer Valley
                  needed a junk removal service that didn&rsquo;t hide behind
                  confusing quotes or &ldquo;hidden fees.&rdquo;
                </p>
                <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
                  Today, we&rsquo;ve grown into a full crew with a fleet of
                  heavy-duty vehicles, but the grit remains the same. Every load
                  is a chance to prove we&rsquo;re the hardest working team in
                  Western Mass.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Stats Row */}
      <Section bg="dark" className="py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-inverse-on-surface/20 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="px-8">
                  <p className="text-[56px] md:text-[72px] font-headline font-black leading-none text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-label-lg text-inverse-on-surface/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="surface">
        <Container>
          <FadeIn>
            <h2 className="text-headline-md md:text-headline-lg text-center">
              Our Hard-Line Values
            </h2>
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <FadeIn key={value.number}>
                <div>
                  <span className="text-[64px] font-headline font-black leading-none text-accent/20">
                    {value.number}
                  </span>
                  <h3 className="mt-2 text-headline-sm">{value.title}</h3>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline-lg md:text-headline-xl">
                Ready to clear the clutter?
              </h2>
              <p className="mt-6 text-lg text-inverse-on-surface/80">
                Same-day service available in Springfield, Holyoke, and
                Northampton. Let the crew handle the heavy lifting.
              </p>
              <div className="mt-10">
                <Button href="/contact" variant="primary" size="lg">
                  Book Your Haul
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
