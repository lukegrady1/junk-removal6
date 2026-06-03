import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    number: "01",
    title: "Whole-Property & Estate Cleanouts",
    description:
      "Full-scale removal services for entire residences, foreclosures, or estate transitions. We handle the sorting, lifting, and disposal of everything from attic to basement, leaving you with a pristine, empty shell ready for its next chapter.",
    image: "/images/services/estate-cleanout.jpg",
  },
  {
    number: "02",
    title: "Furniture & Mattress Removal",
    description:
      "Don't risk your back moving heavy sofas or awkward mattresses. Our crew specializes in maneuvering large furniture through tight hallways and doorways, ensuring no damage to your property while we haul it to proper recycling centers.",
    image: "/images/services/furniture.jpg",
  },
  {
    number: "03",
    title: "Appliance & E-Waste Disposal",
    description:
      "Environmentally responsible disposal of old refrigerators, washing machines, and electronic waste. We ensure all hazardous components are handled according to local Pioneer Valley regulations, prioritizing recycling and safe reclamation.",
    image: "/images/services/appliance.jpg",
  },
  {
    number: "04",
    title: "Garage, Basement & Attic Clear-Outs",
    description:
      "Reclaim your storage spaces. We remove years of accumulated clutter from your home's most neglected corners. From old holiday decorations to boxes of unidentified gear, we haul it all so you can actually use your square footage.",
    image: "/images/services/garage.jpg",
  },
  {
    number: "05",
    title: "Construction & Demolition Debris",
    description:
      "Post-renovation cleanup for contractors and homeowners. We haul away lumber, drywall, tiles, and old fixtures quickly, keeping your job site safe and clear for the next phase of work. Reliable scheduling that respects your project timeline.",
    image: "/images/services/construction.jpg",
  },
  {
    number: "06",
    title: "Yard & Shed Cleanups",
    description:
      "Removal of outdoor clutter including old yard furniture, rotted fencing, and full shed demolitions. We clear the debris so your landscape can shine. No job is too dirty for our crew--we leave your outdoor space completely clear.",
    image: "/images/services/yard.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="mt-[64px]">
      {/* Page Header */}
      <header className="px-4 md:px-16 py-16 border-b-2 border-on-surface bg-surface-container-low">
        <div className="max-w-4xl">
          <p className="font-label-lg text-label-lg text-primary uppercase mb-4">
            Professional Junk Removal
          </p>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase mb-6">
            Heavy Lifting.
            <br />
            No Excuses.
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl">
            We provide structured, reliable debris removal services for
            Springfield and the Pioneer Valley. If it&apos;s in your way, we
            haul it off. Simple as that.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="flex flex-col">
        {services.map((service, index) => {
          const isAlt = index % 2 !== 0;
          return (
            <article
              key={service.number}
              className={cn(
                "px-4 md:px-16 py-32 border-b-2 border-on-surface",
                isAlt && "bg-surface-container"
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                  <div className="aspect-square w-full md:max-w-2xl bg-surface-variant border-2 border-on-surface overflow-hidden mb-8">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 672px"
                        className="object-cover"
                        preload
                      />
                    </div>
                  </div>
                  <span className="font-headline-xl text-primary block mb-2">
                    {service.number}
                  </span>
                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg uppercase mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body-lg text-body-lg max-w-xl mb-12">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="bg-primary text-on-primary px-10 py-6 border-2 border-on-surface font-headline-sm uppercase hover:bg-on-surface hover:text-[#ffae87] active:translate-y-1 transition-all inline-block"
                  >
                    Schedule a haul
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Closing CTA Band */}
      <section className="bg-on-surface text-surface py-24 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase mb-6 text-primary-fixed">
              Your junk is
              <br />
              our mission.
            </h2>
            <p className="font-body-lg text-body-lg max-w-md text-surface-variant">
              Same-day service often available. Upfront pricing with zero hidden
              fees. Experience the relief of a clear space today.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-start md:items-end">
            <Link
              href="/contact"
              className="w-full md:w-auto bg-primary text-on-primary px-12 py-8 border-2 border-surface font-headline-sm uppercase hover:bg-on-surface hover:text-[#ffae87] active:translate-y-1 transition-all inline-block text-center"
            >
              Schedule a haul
            </Link>
            <div className="flex flex-col text-right">
              <a
                href={siteConfig.phoneHref}
                className="font-headline-sm text-headline-sm font-black uppercase text-surface"
              >
                {siteConfig.phone}
              </a>
              <span className="font-label-lg text-label-lg text-surface-variant uppercase">
                Serving the entire Pioneer Valley
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
