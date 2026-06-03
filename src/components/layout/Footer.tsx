import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-on-surface text-surface border-t-2 border-on-surface">
      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full px-6 py-16 md:px-16 md:py-32">
        {/* Col 1: Brand */}
        <div className="md:col-span-1">
          <div className="font-headline text-5xl font-black text-surface uppercase mb-6 leading-none">
            HAULED
            <br />
            OFF
          </div>
          <p className="text-surface-container opacity-80">
            Professional Junk Removal for {siteConfig.serviceArea}. Since{" "}
            {siteConfig.founded}.
          </p>
        </div>

        {/* Col 2: Contact */}
        <div>
          <h5 className="uppercase mb-6 text-[#ffdbcc] font-bold tracking-wider">
            Contact
          </h5>
          <ul className="space-y-3 text-surface-container">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-surface"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-surface"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Service Info */}
        <div>
          <h5 className="uppercase mb-6 text-[#ffdbcc] font-bold tracking-wider">
            Service Info
          </h5>
          <ul className="space-y-3 text-surface-container">
            <li>
              {siteConfig.address.city}, {siteConfig.address.state}
            </li>
            <li>{siteConfig.hours.short}</li>
            <li>{siteConfig.insurance}</li>
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <h5 className="uppercase mb-6 text-[#ffdbcc] font-bold tracking-wider">
            Company
          </h5>
          <ul className="space-y-3 text-surface-container">
            {siteConfig.footerCompany.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-16 py-8 border-t border-surface/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-label-md uppercase">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.businessName} |{" "}
          {siteConfig.license}
        </span>
      </div>
    </footer>
  );
}
