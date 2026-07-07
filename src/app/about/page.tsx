import type { Metadata } from "next";
import Image from "next/image";
import { Flame, ShieldCheck, Store, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Southern Fireside & Home — Anderson, SC's Hearth & Gas Specialists",
  description:
    "Southern Fireside & Home is Anderson's local hearth shop: gas logs, fireplaces, fire pits and gas installation with a showroom on McGee Rd.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A local shop that lives and breathes fire."
        desc="Southern Fireside & Home is where Anderson comes to warm up — a real showroom, real installers, and advice you can trust."
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="kicker">Who we are</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              More than a store — a hearth specialist.
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Big-box stores will sell you a box and wish you luck. We do it differently. At
              our showroom on McGee Rd you can stand in front of live burning displays, compare
              flames side by side, and talk to people who install these units week in and week
              out.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Then our own installers bring it home: running the gas line, setting the unit,
              testing every connection, and walking you through the controls before we leave.
              One team, start to finish — that&apos;s how gas work should be done.
            </p>
            <ul className="mt-7 space-y-3.5">
              {[
                { icon: Store, text: "Local showroom with live burning displays" },
                { icon: ShieldCheck, text: "Every line pressure-tested before light-up" },
                { icon: Flame, text: "Gas logs, fireplaces, fire pits, grills & lines" },
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
                  src="/images/stone-fireplace.jpg"
                  alt="Gas fireplace with stone surround"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/gas-logs.jpg"
                    alt="Vented gas log set"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-lg">
                  <Image
                    src="/images/firepit.jpg"
                    alt="Outdoor gas fire pit at dusk"
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
