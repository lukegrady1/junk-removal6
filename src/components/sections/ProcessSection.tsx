import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    num: "01",
    title: "Tell us what\u2019s going",
    body: "Send a photo or schedule a walkthrough. We assess the volume and weight of your haul immediately.",
  },
  {
    num: "02",
    title: "Lock in a flat price",
    body: "No estimates. We give you a hard number that includes labor, transport, and disposal fees.",
  },
  {
    num: "03",
    title: "We carry it all out",
    body: "Our crew arrives on time and does all the physical lifting. You don\u2019t move a single box.",
  },
  {
    num: "04",
    title: "We sweep and go",
    body: "We leave the space broom-clean. Your junk is gone, and your floors are clear.",
  },
];

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <h2 className="text-headline-lg font-headline mb-16">
            The Work Protocol
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div>
                <span className="text-headline-xl font-headline text-accent block mb-4">
                  {step.num}
                </span>
                <h3 className="text-headline-sm font-headline mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
