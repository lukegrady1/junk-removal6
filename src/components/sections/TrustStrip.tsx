import { Star, Calendar, Shield, DollarSign } from "lucide-react";

const items = [
  { icon: Star, label: "4.9 stars (300+ Reviews)" },
  { icon: Calendar, label: "Hauling since 2009" },
  { icon: Shield, label: "Licensed and insured" },
  { icon: DollarSign, label: "Up-front flat rates" },
];

export function TrustStrip() {
  return (
    <section className="bg-on-surface py-4 border-b-2 border-on-surface">
      <div className="px-16 flex flex-wrap justify-between items-center text-surface-container gap-4">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <div className="hidden md:block w-px h-4 bg-outline-variant mr-4" />
            )}
            <item.icon className="w-5 h-5 shrink-0 text-[#ffdbcc]" />
            <span className="uppercase tracking-widest text-sm font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
