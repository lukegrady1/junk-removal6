"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

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
    <section className="px-16 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-5xl mb-12 uppercase text-center">
          Frequently Asked Questions
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b-2 border-on-surface">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-lg pr-4">{faq.q}</span>
                <Plus
                  className={cn(
                    "w-6 h-6 shrink-0 transition-transform duration-300",
                    openIndex === i && "rotate-45"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-on-surface-variant leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
