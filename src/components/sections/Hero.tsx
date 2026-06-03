import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-near-black">
      <Image
        src="/images/home/hero.jpg"
        alt={`${siteConfig.businessName} junk removal crew at work`}
        fill
        preload={true}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-near-black/60" />

      <Container className="relative z-10 py-24 md:py-32">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="text-headline-xl-mobile md:text-headline-xl text-white">
              We take it. You&rsquo;re done.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-lg">
              Heavy lifting, flat pricing, and a clean space by the time we pull
              away.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="inline-block bg-accent text-white px-8 py-4 text-label-lg hover:bg-accent/90 transition-colors"
              >
                Schedule a haul
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-block border border-white text-white px-8 py-4 text-label-lg hover:bg-white/10 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
