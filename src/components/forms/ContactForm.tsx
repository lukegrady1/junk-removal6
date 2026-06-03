"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const services = [
  "Residential Hauling",
  "Commercial Cleanout",
  "Appliance Disposal",
  "Estate Clearance",
  "Construction Debris",
];

const inputStyles =
  "bg-surface-container-low border-2 border-on-surface px-4 py-3 focus:ring-0 focus:border-primary placeholder:text-outline outline-none w-full";

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
      <div className="border-2 border-on-surface p-8 md:p-12">
        <p className="font-headline-md text-headline-md uppercase">
          Request received.
        </p>
        <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
          We&apos;ll be in touch within 2 hours during service hours. Expect a
          call or text from our dispatch team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="font-label-md text-label-md uppercase mb-2 tracking-widest text-on-surface-variant">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-label-md text-label-md uppercase mb-2 tracking-widest text-on-surface-variant">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(XXX) XXX-XXXX"
            value={form.phone}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="font-label-md text-label-md uppercase mb-2 tracking-widest text-on-surface-variant">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="email@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-label-md text-label-md uppercase mb-2 tracking-widest text-on-surface-variant">
          Service Required
        </label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={cn(inputStyles, "appearance-none")}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-label-md text-label-md uppercase mb-2 tracking-widest text-on-surface-variant">
          Describe the Load
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="List the items you need removed..."
          value={form.message}
          onChange={handleChange}
          className={cn(inputStyles, "resize-none")}
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 font-headline-sm text-headline-sm uppercase border-2 border-on-surface hover:bg-on-surface hover:text-surface transition-all active:translate-y-1"
      >
        Schedule a haul
      </button>
    </form>
  );
}
