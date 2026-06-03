import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Reviews",
};

const reviews = [
  {
    name: "Sandra Koch",
    location: "Holyoke, MA",
    rating: 5,
    text: "Fast, professional, and took everything we needed gone.",
    style: "bg-white text-near-black",
  },
  {
    name: "Jim Miller",
    location: "Springfield, MA",
    rating: 5,
    text: "They cleared a whole basement in 3 hours. Incredible work ethic.",
    style: "bg-near-black text-inverse-on-surface",
  },
  {
    name: "Carlos Mendez",
    location: "Chicopee, MA",
    rating: 5,
    text: "Fair price. No surprises. Will use them for all my rental cleanouts.",
    style: "bg-white text-near-black",
  },
  {
    name: "Lisa Reynolds",
    location: "West Springfield, MA",
    rating: 5,
    text: "Best junk removal in the Valley. Period.",
    style: "bg-accent text-near-black",
  },
  {
    name: "Patricia Chen",
    location: "Longmeadow, MA",
    rating: 5,
    text: "Easy scheduling and they even swept up the driveway after loading the truck.",
    style: "bg-white text-near-black",
  },
  {
    name: "Derrick Thompson",
    location: "Agawam, MA",
    rating: 5,
    text: "No hidden fees. What they quoted was what I paid. Highly recommend.",
    style: "bg-surface-container-highest text-near-black",
  },
];

function Stars({ count, dark }: { count: number; dark?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className={cn("w-5 h-5", dark ? "text-accent" : "text-accent")}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Stats */}
      <Section bg="surface" className="pt-32 md:pt-40">
        <Container>
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-headline-xl-mobile md:text-headline-xl uppercase">
                Real Labor. Real Results.
              </h1>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-[56px] md:text-[72px] font-headline font-black leading-none text-accent">
                  4.9
                </span>
                <div>
                  <span className="text-2xl font-headline font-bold text-on-surface-variant">
                    /5.0
                  </span>
                  <div className="mt-1">
                    <Stars count={5} />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Trusted by {siteConfig.stats.totalClients} residential and
                commercial clients across Springfield and the Pioneer Valley.
                Our reputation is built on heavy lifting and transparent pricing.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Review Cards — Masonry */}
      <Section bg="default">
        <Container>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review) => {
              const isDark = review.style.includes("bg-near-black");
              return (
                <FadeIn key={review.name}>
                  <div
                    className={cn(
                      "break-inside-avoid border border-near-black p-8",
                      review.style
                    )}
                  >
                    <Stars count={review.rating} dark={isDark} />
                    <p className="mt-6 text-xl md:text-2xl font-headline font-bold leading-snug">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-6 pt-6 border-t border-current/20">
                      <p className="font-bold">{review.name}</p>
                      <p
                        className={cn(
                          "text-sm mt-1",
                          isDark
                            ? "text-inverse-on-surface/60"
                            : "text-on-surface-variant"
                        )}
                      >
                        {review.location}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Image Band */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/images/reviews/truck.jpg"
          alt={`${siteConfig.businessName} truck on the road`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-near-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Container>
            <FadeIn>
              <p className="text-headline-md md:text-headline-lg text-white text-center">
                Springfield&rsquo;s Hardest Working Crew
              </p>
            </FadeIn>
          </Container>
        </div>
      </div>

      {/* CTA Band */}
      <Section bg="dark">
        <Container>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-headline-lg md:text-headline-xl uppercase">
                Ready to Clear the Clutter?
              </h2>
              <p className="mt-6 text-lg text-inverse-on-surface/80">
                Stop looking at it. We&rsquo;ll be there within 24 hours to haul
                it off for good. No fluff, just heavy lifting.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  Get a Free Quote
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-block border-2 border-inverse-on-surface text-inverse-on-surface px-8 py-4 text-label-lg hover:bg-inverse-on-surface/10 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
