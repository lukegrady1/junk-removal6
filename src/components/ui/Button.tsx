"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

const variantStyles = {
  primary:
    "bg-accent text-near-black font-bold uppercase tracking-wider hover:bg-near-black hover:text-accent border-2 border-accent",
  secondary:
    "bg-near-black text-inverse-on-surface font-bold uppercase tracking-wider hover:bg-accent hover:text-near-black border-2 border-near-black",
  white:
    "bg-white text-near-black font-bold uppercase tracking-wider hover:bg-near-black hover:text-white border-2 border-near-black",
  ghost:
    "bg-transparent text-foreground font-bold uppercase tracking-wider hover:text-accent border-2 border-foreground hover:border-accent",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-block rounded-none transition-colors duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
