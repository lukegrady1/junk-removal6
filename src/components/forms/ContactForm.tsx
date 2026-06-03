"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const services = [
  "Select a service",
  "Residential Hauling",
  "Commercial Cleanout",
  "Appliance Disposal",
  "Estate Clearance",
  "Construction Debris",
];

const inputStyles =
  "w-full py-3 border-b-2 border-near-black bg-transparent focus:border-accent outline-none font-body text-base text-near-black placeholder:text-on-surface-variant transition-colors";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-2 border-near-black bg-surface p-8 md:p-12">
        <p className="text-headline-md font-headline text-near-black">
          Request received.
        </p>
        <p className="mt-4 text-base text-on-surface-variant">
          We&apos;ll be in touch within 2 hours during service hours. Expect a
          call or text from our dispatch team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="text-label-lg block mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="text-label-lg block mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="(XXX) XXX-XXXX"
          value={form.phone}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="text-label-lg block mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="service" className="text-label-lg block mb-2">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={cn(
            inputStyles,
            "appearance-none cursor-pointer",
            !form.service && "text-on-surface-variant"
          )}
        >
          {services.map((s) => (
            <option key={s} value={s === "Select a service" ? "" : s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Describe the Load */}
      <div>
        <label htmlFor="message" className="text-label-lg block mb-2">
          Describe the Load
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="List the items you need removed..."
          value={form.message}
          onChange={handleChange}
          className={cn(inputStyles, "border-2 border-near-black focus:border-accent resize-none p-3")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-accent text-near-black uppercase font-bold py-4 text-base tracking-wider border-2 border-accent hover:bg-near-black hover:text-accent transition-colors"
      >
        Schedule a haul
      </button>
    </form>
  );
}
