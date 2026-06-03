import Image from "next/image";
import Link from "next/link";
import { Armchair, Monitor, Warehouse, HardHat } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const smallCards = [
  { icon: Armchair, title: "Furniture and mattress removal" },
  { icon: Monitor, title: "Appliance and e-waste" },
  { icon: Warehouse, title: "Garage and basement clear-outs" },
  { icon: HardHat, title: "Construction debris" },
];

export function ServicesOverview() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-headline-lg font-headline mb-12">
            Professional Removal Services
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Link
            href="/services"
            className="group block border border-near-black"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src="/images/home/estate-cleanout.jpg"
                  alt="Whole-property and estate cleanouts"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-headline-md font-headline">
                  Whole-property and estate cleanouts
                </h3>
                <p className="mt-4 text-on-surface-variant leading-relaxed">
                  From single rooms to entire estates, we clear everything out
                  and leave the property broom-clean. Ideal for estate
                  settlements, foreclosures, and move-outs.
                </p>
                <span className="mt-6 text-label-lg text-accent group-hover:underline">
                  View all services
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-0">
          {smallCards.map((card, i) => (
            <FadeIn key={card.title} delay={0.15 + i * 0.05}>
              <div className="border border-near-black border-t-0 p-6 md:p-8 flex flex-col items-start gap-4 h-full">
                <card.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                <h3 className="text-label-lg">{card.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
