import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mt-[64px]">
      {/* Header Section */}
      <div className="pt-16 md:pt-24 pb-8 px-4 md:px-16 border-b-2 border-on-surface">
        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase">
          Contact the Yard
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl mt-4 text-on-surface-variant">
          Direct service. No-nonsense pricing. Professional junk removal for
          Springfield and the Pioneer Valley.
        </p>
      </div>

      {/* Form + Sidebar */}
      <div className="px-4 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Contact Form (Left Side) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Side Info (Right Side) */}
          <aside className="lg:col-span-5 space-y-12 lg:pl-12">
            {/* Info Blocks */}
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-label-md text-label-md uppercase text-primary tracking-widest mb-1">
                  Inquiry Line
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="font-headline-md text-headline-md font-black block"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="border-l-4 border-on-surface-variant pl-6">
                <h3 className="font-label-md text-label-md uppercase text-on-surface-variant tracking-widest mb-1">
                  Dispatch Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body-lg text-body-lg font-bold"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-on-surface-variant tracking-widest mb-2">
                    Service Hours
                  </h3>
                  <ul className="space-y-1 font-body-md text-body-md">
                    <li className="flex justify-between">
                      <span>Mon - Fri</span> <span>6am - 7pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span> <span>7am - 4pm</span>
                    </li>
                    <li className="flex justify-between text-outline">
                      <span>Sunday</span> <span>Closed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-on-surface-variant tracking-widest mb-2">
                    Headquarters
                  </h3>
                  <p className="font-body-md text-body-md">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Block */}
            <div className="aspect-square bg-surface-container-highest border-2 border-on-surface relative overflow-hidden">
              <div className="absolute inset-0 bg-on-surface opacity-10 pointer-events-none z-10" />
              <Image
                src="/images/contact/map.jpg"
                alt="Service area map of Springfield, MA"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale opacity-80 mix-blend-multiply"
              />
              <div className="absolute bottom-4 left-4 bg-on-surface text-surface px-3 py-1 font-label-md text-label-md uppercase z-20">
                Service Radius: 30 Miles
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Service Area List */}
      <section className="px-4 md:px-16 pt-12 pb-16 border-t-2 border-on-surface">
        <h2 className="font-headline-md text-headline-md uppercase mb-8">
          Pioneer Valley Service Area
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {siteConfig.serviceAreaCities.map((city) => (
            <div key={city} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary flex-shrink-0" />
              <span className="font-body-md text-body-md">{city}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="mx-4 md:mx-16 mb-32 bg-primary text-on-primary border-2 border-on-surface p-12 md:p-24 text-center">
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl uppercase mb-6">
          Tired of looking at it?
        </h2>
        <p className="font-body-lg text-body-lg mb-10 max-w-xl mx-auto opacity-90">
          Most hauls are completed within 24 hours of contact. Let us handle
          the heavy lifting today.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            href={siteConfig.phoneHref}
            className="bg-on-surface text-surface px-8 py-4 font-headline-sm text-headline-sm uppercase border-2 border-on-surface hover:bg-surface hover:text-on-surface transition-all inline-block"
          >
            Call {siteConfig.phone}
          </a>
          <span className="font-headline-sm text-headline-sm uppercase opacity-50 hidden md:block">
            OR
          </span>
          <Link
            href="#"
            onClick={undefined}
            className="bg-surface text-on-surface px-8 py-4 font-headline-sm text-headline-sm uppercase border-2 border-on-surface hover:bg-on-surface hover:text-surface transition-all inline-block"
          >
            Fill the form
          </Link>
        </div>
      </section>
    </main>
  );
}
