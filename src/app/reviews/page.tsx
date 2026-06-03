import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Reviews",
};

const reviews = [
  {
    name: "Sandra Koch",
    location: "Holyoke, MA",
    rating: 5,
    text: "Fast, professional, and took everything we needed gone.",
    variant: "light" as const,
  },
  {
    name: "Jim Miller",
    location: "Springfield, MA",
    rating: 5,
    text: "They cleared a whole basement in 3 hours. Incredible work ethic.",
    variant: "dark" as const,
  },
  {
    name: "Carlos Mendez",
    location: "Chicopee, MA",
    rating: 5,
    text: "Fair price. No surprises. Will use them for all my rental cleanouts.",
    variant: "light" as const,
  },
  {
    name: "Lisa Reynolds",
    location: "West Springfield, MA",
    rating: 5,
    text: "Best junk removal in the Valley. Period.",
    variant: "primary" as const,
  },
  {
    name: "Patricia Chen",
    location: "Longmeadow, MA",
    rating: 5,
    text: "Easy scheduling and they even swept up the driveway after loading the truck.",
    variant: "light" as const,
  },
  {
    name: "Derrick Thompson",
    location: "Agawam, MA",
    rating: 5,
    text: "No hidden fees. What they quoted was what I paid. Highly recommend.",
    variant: "muted" as const,
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-4 h-4", className)}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({
  count,
  className,
}: {
  count: number;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="mt-[64px]">
      {/* Hero / Stats Section */}
      <section className="py-32 px-4 md:px-16 bg-surface-container-low border-b-2 border-on-surface">
        <div className="max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase mb-8">
            REAL LABOR.
            <br />
            REAL RESULTS.
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex flex-col gap-2">
              <Stars count={5} className="text-primary" />
              <div className="font-headline-md text-headline-md">
                {siteConfig.stats.rating} / 5.0
              </div>
            </div>
            <div className="h-px w-12 bg-on-surface hidden md:block" />
            <div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Trusted by {siteConfig.stats.totalClients} residential and
                commercial clients across Springfield and the Pioneer Valley.
                Our reputation is built on heavy lifting and transparent
                pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Reviews Section */}
      <section className="py-32 px-4 md:px-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {reviews.map((review) => {
            const isDark = review.variant === "dark";
            const isPrimary = review.variant === "primary";
            const isMuted = review.variant === "muted";

            return (
              <div
                key={review.name}
                className={cn(
                  "break-inside-avoid border-2 border-on-surface p-8 mb-6",
                  isDark && "bg-on-surface text-surface",
                  isPrimary && "bg-primary text-on-primary",
                  isMuted && "bg-surface-container-high",
                  !isDark && !isPrimary && !isMuted && "bg-surface"
                )}
              >
                <Stars
                  count={review.rating}
                  className={cn(
                    "mb-4",
                    isDark
                      ? "text-primary-fixed"
                      : isPrimary
                        ? "text-on-primary"
                        : "text-primary"
                  )}
                />
                <blockquote className="font-headline-sm text-headline-sm mb-6 leading-tight">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div
                  className={cn(
                    "font-body-md text-body-md pt-4",
                    isDark
                      ? "border-t border-surface-variant"
                      : isPrimary
                        ? "border-t border-on-primary"
                        : "border-t border-on-surface"
                  )}
                >
                  <span className="font-bold uppercase block">
                    {review.name}
                  </span>
                  <span
                    className={cn(
                      isDark
                        ? "text-surface-variant"
                        : isPrimary
                          ? "text-on-primary/80"
                          : "text-on-surface-variant"
                    )}
                  >
                    {review.location}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Band Interstitial */}
      <section className="h-64 md:h-96 w-full border-y-2 border-on-surface relative overflow-hidden">
        <Image
          src="/images/reviews/truck.jpg"
          alt={`${siteConfig.businessName} truck on the road`}
          fill
          sizes="100vw"
          className="object-cover grayscale brightness-75"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-surface border-2 border-on-surface px-8 py-4">
            <span className="font-headline-md text-headline-md uppercase tracking-tighter">
              Springfield&apos;s Hardest Working Crew
            </span>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-32 px-4 md:px-16 bg-surface">
        <div className="max-w-4xl mx-auto text-center border-2 border-on-surface p-12 bg-primary-fixed">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg uppercase mb-6">
            READY TO CLEAR THE CLUTTER?
          </h2>
          <p className="font-body-lg text-body-lg mb-10 text-on-secondary-fixed max-w-2xl mx-auto">
            Stop looking at it. We&apos;ll be there within 24 hours to haul it
            off for good. No fluff, just heavy lifting.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-on-primary border-2 border-on-surface px-12 py-4 font-headline-sm text-headline-sm uppercase hover:bg-on-surface hover:text-surface transition-all active:translate-y-1 inline-block"
            >
              GET A FREE QUOTE
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="bg-surface text-on-surface border-2 border-on-surface px-12 py-4 font-headline-sm text-headline-sm uppercase hover:bg-primary hover:text-on-primary transition-all active:translate-y-1 inline-block"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
