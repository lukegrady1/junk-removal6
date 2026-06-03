import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function ClosingCTA() {
  return (
    <section className="bg-primary py-24 border-t-2 border-on-surface">
      <div className="px-16 text-center flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-6xl font-black text-on-primary uppercase mb-6">
          Ready to clear the deck?
        </h2>
        <p className="font-headline text-3xl text-on-primary mb-12">
          {siteConfig.phone}
        </p>
        <Link
          href="/contact"
          className="bg-[#1A1A1A] text-[#CC5500] px-16 py-8 text-2xl font-black uppercase border-2 border-on-surface hover:bg-[#CC5500] hover:text-[#1A1A1A] transition-colors"
        >
          Schedule a haul
        </Link>
      </div>
    </section>
  );
}
