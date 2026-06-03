"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type Category = "all" | "cleanouts" | "furniture" | "construction" | "yard";

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Cleanouts", value: "cleanouts" },
  { label: "Furniture", value: "furniture" },
  { label: "Construction", value: "construction" },
  { label: "Yard", value: "yard" },
];

const galleryItems: { src: string; category: Category; alt: string }[] = [
  {
    src: "/images/gallery/cleanout-1.jpg",
    category: "cleanouts",
    alt: "Estate cleanout project",
  },
  {
    src: "/images/gallery/cleanout-2.jpg",
    category: "cleanouts",
    alt: "Residential cleanout",
  },
  {
    src: "/images/gallery/cleanout-3.jpg",
    category: "cleanouts",
    alt: "Property cleanout in progress",
  },
  {
    src: "/images/gallery/cleanout-4.jpg",
    category: "cleanouts",
    alt: "Full estate cleanout",
  },
  {
    src: "/images/gallery/cleanout-5.jpg",
    category: "cleanouts",
    alt: "Cleanout before and after",
  },
  {
    src: "/images/gallery/cleanout-6.jpg",
    category: "cleanouts",
    alt: "Complete property cleanout",
  },
  {
    src: "/images/gallery/work-1.jpg",
    category: "construction",
    alt: "Construction debris removal",
  },
  {
    src: "/images/gallery/work-2.jpg",
    category: "construction",
    alt: "Demolition debris hauling",
  },
  {
    src: "/images/gallery/work-3.jpg",
    category: "construction",
    alt: "Job site cleanup",
  },
  {
    src: "/images/gallery/work-4.jpg",
    category: "furniture",
    alt: "Furniture removal",
  },
  {
    src: "/images/gallery/work-5.jpg",
    category: "furniture",
    alt: "Large furniture haul-off",
  },
  {
    src: "/images/gallery/work-6.jpg",
    category: "yard",
    alt: "Yard debris cleanup",
  },
  {
    src: "/images/gallery/work-7.jpg",
    category: "yard",
    alt: "Outdoor space clearing",
  },
];

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            className={cn(
              "px-5 py-2.5 text-label-lg transition-colors",
              active === filter.value
                ? "bg-accent text-near-black"
                : "border border-near-black text-near-black hover:bg-near-black hover:text-inverse-on-surface"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((item) => {
          const isCleanout = item.category === "cleanouts";
          const isTall =
            item.src.includes("cleanout-1") ||
            item.src.includes("work-1") ||
            item.src.includes("cleanout-4") ||
            item.src.includes("work-6");

          return (
            <div
              key={item.src}
              className={cn(
                "relative w-full overflow-hidden break-inside-avoid",
                isTall ? "aspect-[3/4]" : isCleanout ? "aspect-[4/3]" : "aspect-square"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
