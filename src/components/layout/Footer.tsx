import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-near-black text-inverse-on-surface">
      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8">
        {/* Col 1: Brand */}
        <div>
          <Link
            href="/"
            className="font-headline text-2xl font-black tracking-tight text-white"
          >
            HAULED OFF
          </Link>
          <p className="mt-4 font-body text-sm leading-relaxed text-inverse-on-surface/70">
            Professional Junk Removal for {siteConfig.serviceArea}. Since{" "}
            {siteConfig.founded}.
          </p>
        </div>

        {/* Col 2: Connect */}
        <div>
          <h3 className="mb-4 text-label-lg text-white">Connect</h3>
          <ul className="flex flex-col gap-3 font-body text-sm">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="text-inverse-on-surface/70">
              {siteConfig.address.city}, {siteConfig.address.state}
            </li>
          </ul>
        </div>

        {/* Col 3: Operation */}
        <div>
          <h3 className="mb-4 text-label-lg text-white">Operation</h3>
          <ul className="flex flex-col gap-3 font-body text-sm text-inverse-on-surface/70">
            <li>{siteConfig.hours.short}</li>
            <li>{siteConfig.serviceArea}</li>
            <li>{siteConfig.insurance}</li>
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h3 className="mb-4 text-label-lg text-white">Company</h3>
          <ul className="flex flex-col gap-3 font-body text-sm">
            {siteConfig.footerCompany.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-inverse-on-surface/50 sm:flex-row lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} HAULED OFF | {siteConfig.license}
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-accent"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
