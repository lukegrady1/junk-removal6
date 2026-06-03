import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function StatementBlock() {
  return (
    <Section bg="surface">
      <Container>
        <FadeIn>
          <p className="text-headline-lg font-headline text-center max-w-3xl mx-auto whitespace-pre-line">
            {"No hidden fees.\nNo leftover mess.\nNo second trip."}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
