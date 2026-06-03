import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/home/gallery-1.jpg", alt: "Junk removal project 1" },
  { src: "/images/home/gallery-2.jpg", alt: "Junk removal project 2" },
  { src: "/images/home/gallery-3.jpg", alt: "Junk removal project 3" },
  { src: "/images/home/gallery-4.jpg", alt: "Junk removal project 4" },
];

export function GalleryMosaic() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 aspect-[4/1]">
        {images.map((img) => (
          <div key={img.src} className="relative overflow-hidden">
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

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Link
          href="/gallery"
          className="bg-surface px-10 py-6 border-2 border-on-surface font-headline uppercase pointer-events-auto hover:bg-primary hover:text-on-primary transition-colors"
        >
          See the work
        </Link>
      </div>
    </section>
  );
}
