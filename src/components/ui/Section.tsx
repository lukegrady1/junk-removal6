import { cn } from "@/lib/cn";

const bgStyles = {
  default: "bg-stone-gray",
  surface: "bg-surface",
  dark: "bg-near-black text-inverse-on-surface",
  accent: "bg-accent",
} as const;

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: keyof typeof bgStyles;
};

export function Section({
  children,
  className,
  id,
  bg = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32", bgStyles[bg], className)}
    >
      {children}
    </section>
  );
}
