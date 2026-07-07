import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Southern Fireside & Home — Fireplaces, Fire Pits & Gas Logs",
  description:
    "Gas fireplaces, log sets, fire pits and outdoor living inspiration from Southern Fireside & Home in Anderson, SC.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Fire worth gathering around."
        desc="A look at the kinds of fireplaces, log sets and outdoor fire features we help Upstate homeowners bring home."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.img} delay={(i % 3) * 80}>
              <figure className="group overflow-hidden rounded-lg border border-sand bg-cream shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={g.img}
                    alt={g.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-bold text-char">{g.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-bark/70">
          Want to see the real thing? Our showroom displays burn live — stop by and feel the
          difference in person.
        </p>
      </section>

      <CTA />
    </>
  );
}
