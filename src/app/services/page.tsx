import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    number: "01",
    title: "Whole-Property & Estate Cleanouts",
    description:
      "Full-scale removal services for entire residences, foreclosures, or estate transitions. We handle the sorting, lifting, and disposal of everything from attic to basement, leaving you with a pristine, empty shell ready for its next chapter.",
    image: "/images/services/estate-cleanout.jpg",
  },
  {
    number: "02",
    title: "Furniture & Mattress Removal",
    description:
      "Don't risk your back moving heavy sofas or awkward mattresses. Our crew specializes in maneuvering large furniture through tight hallways and doorways, ensuring no damage to your property while we haul it to proper recycling centers.",
    image: "/images/services/furniture.jpg",
  },
  {
    number: "03",
    title: "Appliance & E-Waste Disposal",
    description:
      "Environmentally responsible disposal of old refrigerators, washing machines, and electronic waste. We ensure all hazardous components are handled according to local Pioneer Valley regulations, prioritizing recycling and safe reclamation.",
    image: "/images/services/appliance.jpg",
  },
  {
    number: "04",
    title: "Garage, Basement & Attic Clear-Outs",
    description:
      "Reclaim your storage spaces. We remove years of accumulated clutter from your home's most neglected corners. From old holiday decorations to boxes of unidentified gear, we haul it all so you can actually use your square footage.",
    image: "/images/services/garage.jpg",
  },
  {
    number: "05",
    title: "Construction & Demolition Debris",
    description:
      "Post-renovation cleanup for contractors and homeowners. We haul away lumber, drywall, tiles, and old fixtures quickly, keeping your job site safe and clear for the next phase of work. Reliable scheduling that respects your project timeline.",
    image: "/images/services/construction.jpg",
  },
  {
    number: "06",
    title: "Yard & Shed Cleanups",
    description:
      "Removal of outdoor clutter including old yard furniture, rotted fencing, and full shed demolitions. We clear the debris so your landscape can shine. No job is too dirty for our crew--we leave your outdoor space completely clear.",
    image: "/images/services/yard.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <Section bg="surface" className="pt-32 md:pt-40">
        <Container>
          <FadeIn>
            <p className="text-label-lg text-accent">
              Professional Junk Removal
            </p>
            <h1 className="mt-4 text-headline-xl-mobile md:text-headline-xl max-w-3xl">
              Heavy Lifting. No Excuses.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl">
              From estate cleanouts to construction debris, we handle the loads
              nobody else wants. Flat pricing, same-day availability, and a crew
              that works until the job is done.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Services */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <Section
            key={service.number}
            bg={index % 2 === 0 ? "surface" : "default"}
          >
            <Container>
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Text Column */}
                  <div className={cn(!isEven && "lg:order-2")}>
                    <span className="text-[80px] md:text-[120px] font-headline font-black leading-none text-accent/20">
                      {service.number}
                    </span>
                    <h2 className="mt-2 text-headline-md md:text-headline-lg">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Button href="/contact" variant="primary" size="lg">
                        Schedule a haul
                      </Button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={cn(
                      "relative aspect-[4/3] w-full",
                      !isEven && "lg:order-1"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </Container>
          </Section>
        );
      })}

      {/* Closing CTA */}
      <Section bg="dark">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline-lg md:text-headline-xl">
                Your junk is our mission.
              </h2>
              <p className="mt-6 text-lg text-inverse-on-surface/80">
                Same-day service often available. Upfront pricing with zero
                hidden fees. Experience the relief of a clear space today.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Schedule a haul
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-block border-2 border-inverse-on-surface text-inverse-on-surface px-8 py-4 text-label-lg hover:bg-inverse-on-surface/10 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
