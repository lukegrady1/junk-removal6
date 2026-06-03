"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-inverse-surface/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="font-headline text-xl font-black tracking-tight text-white"
        >
          HAULED OFF
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-label-lg transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-accent"
                  : "text-inverse-on-surface"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-1.5 text-accent text-label-lg"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="border border-accent bg-accent px-5 py-2.5 text-sm font-bold uppercase text-near-black transition-colors hover:bg-near-black hover:text-accent"
          >
            Schedule a haul
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center text-inverse-on-surface lg:hidden"
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
        <div className="fixed inset-0 top-16 z-40 bg-inverse-surface lg:hidden">
          <nav className="flex flex-col gap-1 px-6 pt-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-white/10 py-4 text-label-lg transition-colors hover:text-accent",
                  pathname === item.href
                    ? "text-accent"
                    : "text-inverse-on-surface"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 text-accent text-label-lg"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block border border-accent bg-accent px-5 py-3 text-center text-sm font-bold uppercase text-near-black transition-colors hover:bg-near-black hover:text-accent"
              >
                Schedule a haul
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
