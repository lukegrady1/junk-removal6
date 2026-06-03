"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    ...siteConfig.nav,
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[64px] z-50 bg-surface border-b-2 border-on-surface flex justify-between items-center px-4 md:px-16">
      {/* Left side: logo + desktop nav */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-headline text-headline-sm font-black text-on-surface border-2 border-on-surface p-1 uppercase"
        >
          {siteConfig.businessName}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-body text-sm uppercase tracking-wider transition-colors",
                pathname === item.href
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right side: phone + CTA + mobile toggle */}
      <div className="flex items-center gap-6">
        <a
          href={siteConfig.phoneHref}
          className="hidden md:inline text-headline-sm font-black text-on-surface"
        >
          {siteConfig.phone}
        </a>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-accent text-near-black font-bold text-sm uppercase px-6 py-3 border border-on-surface transition-colors hover:bg-near-black hover:text-accent"
        >
          Schedule a haul
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center text-on-surface md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-surface border-t-2 border-on-surface md:hidden">
          <div className="flex flex-col gap-1 px-6 pt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-on-surface/20 py-4 uppercase tracking-wider text-sm transition-colors",
                  pathname === item.href
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:bg-primary hover:text-on-primary"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={siteConfig.phoneHref}
                className="text-headline-sm font-black text-on-surface"
              >
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block bg-accent text-near-black font-bold text-sm uppercase px-6 py-3 border border-on-surface text-center transition-colors hover:bg-near-black hover:text-accent"
              >
                Schedule a haul
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
