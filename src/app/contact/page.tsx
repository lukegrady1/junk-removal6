import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

const infoCards = [
  {
    label: "Inquiry Line",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    label: "Dispatch Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Service Hours",
    value: (
      <>
        Mon&ndash;Fri: 6am&ndash;7pm
        <br />
        Saturday: 7am&ndash;4pm
        <br />
        Sunday: Closed
      </>
    ),
  },
  {
    label: "Headquarters",
    value: siteConfig.address.full,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <Section bg="surface" className="pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <FadeIn>
            <h1 className="text-headline-xl-mobile md:text-headline-xl text-near-black max-w-3xl">
              Contact the Yard
            </h1>
            <p className="mt-6 text-lg text-on-surface-variant max-w-2xl">
              Direct service. No-nonsense pricing. Professional junk removal for
              Springfield and the Pioneer Valley.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Form + Sidebar */}
      <Section bg="surface" className="pt-0" id="contact-form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form — 2 cols */}
            <FadeIn className="lg:col-span-2">
              <ContactForm />
            </FadeIn>

            {/* Sidebar — 1 col */}
            <FadeIn delay={0.15} className="space-y-0">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="border-2 border-near-black p-6 -mt-[2px] first:mt-0"
                >
                  <p className="text-label-lg mb-2">{card.label}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-base text-near-black hover:text-accent transition-colors font-bold"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-base text-near-black">{card.value}</p>
                  )}
                </div>
              ))}
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section bg="default" className="py-0">
        <Container className="px-0 md:px-0">
          <FadeIn>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/contact/map.jpg"
                alt="Service area map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-near-black/60 flex items-center justify-center">
                <p className="text-headline-md md:text-headline-lg text-white text-center font-headline">
                  Service Radius: 30 Miles
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Service Area */}
      <Section bg="surface">
        <Container>
          <FadeIn>
            <h2 className="text-headline-md md:text-headline-lg text-near-black mb-10">
              Pioneer Valley Service Area
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {siteConfig.serviceAreaCities.map((city) => (
                <div
                  key={city}
                  className="border-2 border-near-black p-4 text-center font-bold text-near-black text-sm uppercase tracking-wider"
                >
                  {city}
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Band */}
      <Section bg="dark">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline-md md:text-headline-lg text-accent mb-6">
                Tired of looking at it?
              </h2>
              <p className="text-lg text-inverse-on-surface mb-10">
                Most hauls are completed within 24 hours of contact. Let us
                handle the heavy lifting today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={siteConfig.phoneHref}
                >
                  Call {siteConfig.phone}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="#contact-form"
                  className="text-inverse-on-surface border-inverse-on-surface hover:text-accent hover:border-accent"
                >
                  Fill the form &uarr;
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
