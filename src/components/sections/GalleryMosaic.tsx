import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const images = [
  { src: "/images/home/gallery-1.jpg", alt: "Junk removal project 1" },
  { src: "/images/home/gallery-2.jpg", alt: "Junk removal project 2" },
  { src: "/images/home/gallery-3.jpg", alt: "Junk removal project 3" },
  { src: "/images/home/gallery-4.jpg", alt: "Junk removal project 4" },
];

export function GalleryMosaic() {
  return (
    <section className="relative">
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-square">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-near-black/40">
          <Link
            href="/gallery"
            className="border-2 border-white text-white px-10 py-4 text-label-lg hover:bg-white hover:text-near-black transition-colors"
          >
            See the work
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
