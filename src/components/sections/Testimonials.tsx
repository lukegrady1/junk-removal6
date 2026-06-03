import { Quote } from "lucide-react";

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

export function Testimonials() {
  return (
    <section className="px-16 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border-2 border-on-surface p-12 bg-surface"
          >
            <Quote className="w-12 h-12 text-primary mb-6" />
            <p className="text-2xl font-bold mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t-2 border-on-surface pt-6">
              <p className="uppercase font-bold text-sm tracking-wider">
                {t.name}
              </p>
              <p className="text-on-surface-variant">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
