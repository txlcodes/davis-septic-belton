import type { Metadata } from "next";
import Image from "next/image";
import { Truck, ShieldCheck, Star, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Davis Septic, Grading & Pumping — Belton & Anderson, SC",
  description:
    "Davis Septic, Grading & Pumping is a family-run Upstate SC septic company: 30+ years of pumping, installs, grading and repair, with 230 five-star reviews. Based in Belton.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="The Upstate's Crap Magician, for 30+ years."
        desc="Davis Septic, Grading & Pumping is a family-run Belton outfit — our own trucks and equipment, experienced hands, and 230 five-star reviews to show for it."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A family name you can trust in the dirt.
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              The big outfits send a rotating cast of subcontractors and hand you a bill. We do
              it differently. When you call Davis Septic you get the owner&apos;s own crew and
              our own equipment — the same folks who&apos;ve been pumping, installing and grading
              across the Upstate for more than thirty years.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              We find the real problem, tell you straight what it needs, and get it done — then
              backfill, level and clean up so your yard looks like we were never there. One team,
              start to finish. That&apos;s how this work should be done.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                { icon: Star, text: "5.0★ across 230 Google reviews" },
                { icon: ShieldCheck, text: "Licensed, insured & 30+ years local" },
                { icon: Truck, text: "Septic, grading, pumping, drains & gravel" },
                { icon: MapPin, text: site.address },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 font-semibold text-char">
                  <span className="bg-grad grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white">
                    <Icon size={16} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-5">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/truck.jpg"
                  alt="Davis Septic pump truck on the job"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/septic-tank.jpg"
                    alt="Concrete septic tank uncovered for pumping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/excavator.jpg"
                    alt="Heavy equipment for grading and land clearing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <span className="kicker">Our promise</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              What every customer can count on.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <div className="h-full rounded-lg border border-sand bg-linen p-6">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
