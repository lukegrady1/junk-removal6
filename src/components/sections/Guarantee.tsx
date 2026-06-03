import { ShieldCheck, Gavel, Recycle } from "lucide-react";

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
    <section className="border-y-2 border-on-surface bg-surface-container-high">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-on-surface">
        <div className="p-16">
          <h2 className="font-headline text-3xl uppercase mb-6">
            The Ironclad Guarantee
          </h2>
          <ul className="space-y-4">
            {guarantees.map((g) => (
              <li key={g.title} className="flex items-start gap-3">
                <span className="w-3 h-3 bg-primary mt-2 shrink-0" />
                <p className="text-xl">
                  <strong>{g.title}:</strong> {g.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-16 flex flex-col justify-center">
          <div className="flex flex-wrap gap-8 opacity-70 grayscale">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-3"
              >
                <badge.icon className="w-10 h-10" strokeWidth={1.5} />
                <span className="uppercase font-bold text-sm tracking-wider">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
