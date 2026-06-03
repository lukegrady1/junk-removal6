import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <main className="mt-[64px]">
      {/* Page Header Section */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-surface-container-low border-b-2 border-on-surface">
        <div className="max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase mb-6">
            Work Done Right.
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
            No-nonsense debris removal across Springfield and the Pioneer
            Valley. Browse our photographic record of estate cleanouts,
            construction site clearing, and heavy furniture haul-offs.
          </p>
        </div>
      </section>

      {/* Gallery Grid (includes sticky filters) */}
      <GalleryGrid />

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-16 bg-primary text-on-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-8">
              Ready to clear the space?
            </h2>
            <p className="font-body-lg text-body-lg max-w-lg mb-12 opacity-90">
              Stop looking at the pile. We provide same-day quotes and next-day
              removal for most items in the Pioneer Valley. Industrial strength,
              local grit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-on-surface text-primary font-label-lg uppercase tracking-widest px-10 py-5 border-2 border-on-surface hover:bg-surface hover:text-on-surface transition-all active:translate-y-1 inline-block text-center"
              >
                Get a Quote Now
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="bg-transparent text-on-primary font-label-lg uppercase tracking-widest px-10 py-5 border-2 border-on-primary hover:bg-on-primary hover:text-primary transition-all active:translate-y-1 inline-block text-center"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="border-4 border-on-primary p-8 aspect-video flex flex-col justify-center">
              <div className="font-headline-xl text-[120px] leading-none opacity-20 select-none">
                HAUL
              </div>
              <div className="font-headline-xl text-[120px] leading-none text-right opacity-20 select-none">
                OFF
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
