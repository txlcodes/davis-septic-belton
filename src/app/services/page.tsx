import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { site, services, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Southern Fireside & Home — Gas Logs, Fireplaces & Gas Lines in Anderson, SC",
  description:
    "Gas log installation, fireplaces & inserts, gas line installation, fire pits, grill hookups and repair across Anderson and the Upstate. Call (864) 225-8627.",
};

const DETAILS: Record<string, string[]> = {
  "Gas Log Installation": [
    "Vented & vent-free log sets",
    "Remote & thermostat controls",
    "Sized and fitted to your firebox",
    "Full safety test at light-up",
  ],
  "Fireplaces & Inserts": [
    "Gas fireplaces & inserts",
    "Showroom displays you can see burning",
    "Efficient heat for real winters",
    "Clean, finished installation",
  ],
  "Gas Line Installation": [
    "New lines & extensions",
    "Grills, cooktops, logs & heaters",
    "Natural gas & propane",
    "Pressure-tested, run to code",
  ],
  "Fire Pits & Outdoor Living": [
    "Gas fire pits & burners",
    "Outdoor fireplaces",
    "Patio heaters",
    "Weather-ready connections",
  ],
  "Grill Hookups": [
    "Built-in & freestanding grills",
    "Properly sized lines & shut-offs",
    "No more empty propane tanks",
    "Leak-checked before first cookout",
  ],
  "Service & Repair": [
    "Pilot & ignition repairs",
    "Sooting & flame-pattern fixes",
    "Annual cleanings & safety checks",
    "Most major brands serviced",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our services"
        title="Gas fire, done properly."
        desc="From a single log set to a full outdoor living project — selection, installation, and the service to keep it burning right."
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
