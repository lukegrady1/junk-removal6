import { ShieldCheck, Gavel, Recycle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const guarantees = [
  {
    title: "Broom-Clean Finish",
    body: "We don\u2019t just haul; we sweep the area before we leave.",
  },
  {
    title: "Hard Quote Policy",
    body: "The price we quote is the price you pay. Period.",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Insured" },
  { icon: Gavel, label: "Licensed" },
  { icon: Recycle, label: "Eco-Friendly" },
];

export function Guarantee() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-headline-lg font-headline mb-12">
            The Ironclad Guarantee
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.1}>
              <div className="border border-near-black p-8">
                <h3 className="text-headline-sm font-headline mb-3">
                  {g.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {g.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-3"
              >
                <badge.icon
                  className="w-10 h-10 text-accent"
                  strokeWidth={1.5}
                />
                <span className="text-label-lg">{badge.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
