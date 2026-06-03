import { Star, Calendar, Shield, DollarSign } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { icon: Star, label: "4.9 stars (300+ Reviews)" },
  { icon: Calendar, label: "Hauling since 2009" },
  { icon: Shield, label: "Licensed and insured" },
  { icon: DollarSign, label: "Up-front flat rates" },
];

export function TrustStrip() {
  return (
    <section className="bg-near-black text-inverse-on-surface py-5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 px-4 py-3 text-center"
            >
              <item.icon className="w-5 h-5 shrink-0 text-accent" />
              <span className="text-label-md">{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
