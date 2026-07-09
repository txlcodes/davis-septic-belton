import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, services, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Davis Septic, Grading & Pumping — Belton & Anderson, SC",
  description:
    "Septic tank pumping, septic installation, grading & land clearing, drain-field repair, gravel driveways and emergency service across Belton, Anderson & the Upstate. Call (864) 617-5035.",
};

const DETAILS: Record<string, string[]> = {
  "Septic Tank Pumping": [
    "Routine maintenance pump-outs",
    "Emergency backups — same-day",
    "Tank located, dug up & inspected",
    "Honest read on your system's health",
  ],
  "Septic System Installation": [
    "Permitted new systems & replacements",
    "Concrete & plastic tanks",
    "Sized to your soil test & home",
    "Drain field built & inspected",
  ],
  "Grading & Land Clearing": [
    "Lot grading & yard leveling",
    "Land clearing & 'yard rip'",
    "Brush & stump removal",
    "Clean, buildable, drainable grade",
  ],
  "Sewer & Drain-Field Repair": [
    "Failed drain / leach fields",
    "Broken & root-clogged lines",
    "Slow-drain diagnosis",
    "Dug & repaired without wrecking the yard",
  ],
  "Gravel, Driveways & Demolition": [
    "Gravel driveways built & refreshed",
    "Culverts & drainage cut",
    "Small demolition & haul-off",
    "Holds up to Carolina rain",
  ],
  "Real Estate & Emergency Service": [
    "Pump-outs & inspections for closings",
    "Rentals & property managers",
    "After-hours emergencies",
    "One call and we're on the way",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="The dirty work, done right."
        desc="From a routine pump-out to a full new system and a graded lot — one local crew, our own equipment, and 30+ years doing it the right way."
      />

      <section className="container-x py-16 md:py-20">
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden rounded-lg md:h-80">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 text-2xl font-bold md:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-bark">{s.desc}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {(DETAILS[s.title] || []).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm font-semibold text-char">
                        <Check size={16} className="mt-0.5 shrink-0 text-ember" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.phoneHref}
                    className="bg-grad mt-6 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-white shadow-lg shadow-ember/25 transition-transform hover:scale-[1.03]"
                  >
                    <Phone size={15} /> Ask about {s.title.toLowerCase()}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <Reveal>
            <span className="kicker">How it works</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              A simple, honest process.
            </h2>
            <p className="mt-3 max-w-2xl text-bark">
              Same straightforward steps whether it&apos;s a pump-out, an install or a grading job.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div>
                  <span className="font-display text-5xl font-bold text-sand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
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
