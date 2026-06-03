import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function ClosingCTA() {
  return (
    <Section bg="dark">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className="text-headline-lg font-headline mb-8">
              Ready to clear the deck?
            </h2>
            <a
              href={siteConfig.phoneHref}
              className="block text-headline-md font-headline text-accent hover:underline mb-8"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-10 py-4 text-label-lg hover:bg-accent/90 transition-colors"
            >
              Schedule a haul
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
