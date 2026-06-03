import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About",
};

const stats = [
  { value: "06+", label: "Years Hauling" },
  { value: "4.2K", label: "Loads Cleared" },
  { value: "24", label: "Towns Covered" },
];

const values = [
  {
    number: "01",
    title: "Flat-Rate Pricing",
    description:
      "No estimates, no games. We price by the load volume, and that price stays locked the moment we confirm it. Full transparency for every resident in the Pioneer Valley.",
  },
  {
    number: "02",
    title: "Property Respect",
    description:
      "We treat your home like our own. We don't drag items across floors or scuff walls. If we leave a mark, we fix it. Professionalism is our baseline, not an extra.",
  },
  {
    number: "03",
    title: "Waste Diversion",
    description:
      "Your junk doesn't just go to the dump. We sort through every load to donate usable items and recycle metals and electronics, minimizing our impact on MA landfills.",
  },
];

export default function AboutPage() {
  return (
    <main className="mt-[64px]">
      {/* Hero Section: Identity */}
      <section className="py-32 px-4 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8">
          <span className="font-label-lg text-primary uppercase tracking-widest block mb-4">
            The Pioneer Valley Standard
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase">
            More than just a truck.
            <br />A mission to clear space.
          </h1>
        </div>
        <div className="lg:col-span-4 border-l-2 border-on-surface pl-8 mb-4">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We started with one mission: make junk removal in Springfield
            honest, fast, and heavy-duty.
          </p>
        </div>
      </section>

      {/* Main Story Block */}
      <section className="mb-32 px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-t-2 border-on-surface pt-6">
          <div className="lg:col-span-4 py-8">
            <h2 className="font-headline-md text-headline-md uppercase mb-8">
              The Springfield Roots
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              In {siteConfig.founded}, {siteConfig.businessName} began with a
              single used flatbed and a simple promise: show up on time and
              out-work everyone else. Founded by Springfield native{" "}
              {siteConfig.founder}, the company was born out of a realization
              that the Pioneer Valley needed a junk removal service that
              didn&apos;t hide behind confusing quotes or &ldquo;hidden
              fees.&rdquo;
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Today, we&apos;ve grown into a full crew with a fleet of
              heavy-duty vehicles, but the grit remains the same. Every load is
              a chance to prove we&apos;re the hardest working team in Western
              Mass.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[16/9] border-2 border-on-surface overflow-hidden group">
              <Image
                src="/images/about/team.jpg"
                alt={`${siteConfig.businessName} crew in Springfield`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                preload
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-on-surface text-surface py-20 px-4 md:px-16 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center",
                index === 1 &&
                  "border-y-2 md:border-y-0 md:border-x-2 border-surface-variant py-12 md:py-0"
              )}
            >
              <span className="font-headline-xl text-primary-fixed-dim block mb-2">
                {stat.value}
              </span>
              <span className="font-label-lg uppercase tracking-widest text-surface-variant">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-16 mb-32">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-headline-lg text-headline-lg uppercase">
            Our Hard-Line Values
          </h2>
          <div className="h-[2px] bg-on-surface flex-grow" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.number}
              className="border-2 border-on-surface p-6 flex flex-col justify-between hover:bg-surface-container transition-colors min-h-[300px]"
            >
              <div>
                <span className="font-headline-md text-primary mb-4 block">
                  {value.number}
                </span>
                <h3 className="font-headline-sm uppercase mb-4">
                  {value.title}
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA Band */}
      <section className="px-4 md:px-16 pb-32">
        <div className="bg-primary text-white p-12 flex flex-col md:flex-row justify-between items-center gap-6 border-2 border-on-surface">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg uppercase mb-4">
              Ready to clear the clutter?
            </h2>
            <p className="font-body-lg text-body-lg opacity-90">
              Same-day service available in Springfield, Holyoke, and
              Northampton. Let the crew handle the heavy lifting.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="bg-on-surface text-primary-fixed-dim px-12 py-6 font-headline-sm uppercase hover:bg-surface hover:text-on-surface transition-all active:translate-y-1 inline-block"
            >
              Book Your Haul
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
