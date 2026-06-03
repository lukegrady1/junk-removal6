"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    q: "How do you determine the flat rate?",
    a: "We calculate based on the volume (how much space it takes in our truck) and the type of material. Heavy items like concrete or dirt are priced by weight. We give you a firm number after seeing a photo or visiting the site.",
  },
  {
    q: "What items do you NOT take?",
    a: "We cannot take hazardous waste such as chemicals, gasoline, oil, or medical waste. We can help direct you to local specialized disposal facilities for these items.",
  },
  {
    q: "Do I need to be there for the removal?",
    a: "No. As long as we have clear access to the items and payment is arranged beforehand, you don\u2019t need to take time off work. We\u2019ll send you photos of the clean space once we\u2019re done.",
  },
  {
    q: "How soon can you arrive?",
    a: "We often provide same-day or next-day service in Springfield and the Pioneer Valley. Our schedule fills up fast, especially on weekends, so early booking is recommended.",
  },
  {
    q: "What happens to my stuff?",
    a: "We prioritize recycling and donation. Items in good condition are brought to local charities. Recyclable materials are sorted, and only the remaining true trash goes to the landfill.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Section bg="surface">
      <Container>
        <FadeIn>
          <h2 className="text-headline-lg font-headline mb-12">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-near-black border-b-0 last:border-b">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-near-black/5 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-bold text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 shrink-0 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-6 text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
