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
      {/* Sticky Filter Bar */}
      <div className="sticky top-[64px] bg-surface z-40 border-b-2 border-on-surface overflow-x-auto">
        <div className="flex px-4 md:px-16 whitespace-nowrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={cn(
                "px-8 py-4 font-label-lg uppercase tracking-widest border-r-2 border-on-surface transition-colors",
                active === filter.value
                  ? "bg-primary text-on-primary"
                  : "hover:bg-primary-container hover:text-on-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b-2 border-on-surface">
          {filtered.map((item, index) => {
            const isLarge = index === 0;
            return (
              <div
                key={item.src}
                className={cn(
                  "overflow-hidden border-r-2 border-b-2 border-on-surface group",
                  isLarge
                    ? "col-span-2 row-span-2"
                    : "col-span-1 aspect-square"
                )}
              >
                <div className="relative w-full h-full min-h-[200px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      isLarge
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
