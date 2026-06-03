import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "Hauled Off emptied a three-bedroom estate in four hours. The pricing was exactly what they quoted over the phone. No surprises, just hard work.",
    name: "Rich Bartolomeo",
    title: "Homeowner, Chicopee",
  },
  {
    quote:
      "I\u2019ve used other services that leave a mess behind or change the price when they see the truck is full. Hauled Off is different. They sweep up and stick to the rate.",
    name: "Sarah Jenkins",
    title: "Property Manager, Springfield",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-accent text-accent"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section bg="surface">
      <Container>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="border border-near-black p-8 md:p-10 h-full flex flex-col">
                <Stars />
                <blockquote className="text-lg leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-near-black/20">
                  <p className="font-bold">{t.name}</p>
                  <p className="text-on-surface-variant text-sm">{t.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
