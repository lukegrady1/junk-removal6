import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
};

export function Card({ children, className, header }: CardProps) {
  return (
    <div
      className={cn(
        "border border-near-black rounded-none",
        className
      )}
    >
      {header && (
        <div className="border-b border-near-black p-4 font-bold uppercase tracking-wider">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
