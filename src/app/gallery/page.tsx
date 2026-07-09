import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Davis Septic, Grading & Pumping — Belton & Anderson, SC",
  description:
    "Real jobs from Davis Septic, Grading & Pumping — pump-outs, septic installs, grading, land clearing and gravel driveways across the Upstate SC.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Real trucks, real dirt, real work."
        desc="A look at the kind of septic, grading and pumping jobs we handle for homes and businesses across the Upstate."
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
          Want to see more? Check our 5.0★ Google reviews — 230 neighbors and counting.
        </p>
      </section>

      <CTA />
    </>
  );
}
