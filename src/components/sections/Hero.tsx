import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 min-h-[819px] border-b-2 border-on-surface">
      {/* Image takes 2 columns */}
      <div className="md:col-span-2 relative h-[512px] md:h-auto border-r-0 md:border-r-2 border-on-surface overflow-hidden">
        <Image
          src="/images/home/hero.jpg"
          alt={`${siteConfig.businessName} junk removal crew at work`}
          fill
          preload={true}
          sizes="(min-width: 768px) 66vw, 100vw"
          className="object-cover"
        />
      </div>
      {/* Text panel takes 1 column with primary/orange background */}
      <div className="md:col-span-1 bg-primary p-12 flex flex-col justify-center text-on-primary">
        <h1 className="font-headline text-4xl md:text-6xl font-black mb-4 uppercase">
          We take it. You&rsquo;re done.
        </h1>
        <p className="text-xl mb-10 opacity-90">
          Heavy lifting, flat pricing, and a clean space by the time we pull away.
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="/contact"
            className="bg-[#1A1A1A] text-[#CC5500] px-8 py-5 uppercase font-black text-lg border border-on-surface text-center hover:bg-[#CC5500] hover:text-[#1A1A1A] transition-colors"
          >
            Schedule a haul
          </Link>
          <p className="font-headline text-center text-2xl">
            {siteConfig.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
