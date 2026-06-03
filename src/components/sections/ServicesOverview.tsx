import Image from "next/image";
import { Armchair, Monitor, Warehouse, HardHat } from "lucide-react";

const smallCards = [
  { icon: Armchair, title: "Furniture and mattress removal" },
  { icon: Monitor, title: "Appliance and e-waste" },
  { icon: Warehouse, title: "Garage and basement clear-outs" },
  { icon: HardHat, title: "Construction debris" },
];

export function ServicesOverview() {
  return (
    <section className="px-16 py-32">
      <h2 className="font-headline text-5xl mb-12 uppercase">
        Professional Removal Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-2 border-on-surface bg-on-surface">
        {/* Large feature: 2 cols, 2 rows */}
        <div className="md:col-span-2 md:row-span-2 bg-surface p-0 border-b-2 md:border-b-0 md:border-r-2 border-on-surface relative group">
          <div className="relative w-full h-80 md:h-[600px] overflow-hidden">
            <Image
              src="/images/home/estate-cleanout.jpg"
              alt="Whole-property and estate cleanouts"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-surface p-6 border-t-2 border-on-surface">
            <h3 className="font-headline text-xl uppercase">
              Whole-property and estate cleanouts
            </h3>
            <p className="text-on-surface-variant mt-1">
              Complete evacuation of residential and commercial contents.
            </p>
          </div>
        </div>

        {/* 4 smaller cells in 2x2 grid */}
        {smallCards.map((card, i) => (
          <div
            key={card.title}
            className={`bg-surface p-8 flex flex-col justify-end min-h-[300px] ${
              i < 2 ? "border-b-2 border-on-surface" : ""
            } ${i % 2 === 0 ? "md:border-r-2 md:border-on-surface" : ""}`}
          >
            <card.icon className="w-10 h-10 mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="font-headline uppercase leading-tight text-lg">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
