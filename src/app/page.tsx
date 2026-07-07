import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Flame,
  Home as HomeIcon,
  Sparkles,
  Wrench,
  ShieldCheck,
  Store,
  Handshake,
  Check,
  MapPin,
  Quote,
  X,
  Clock,
  Navigation,
  CalendarClock,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import HeroForm from "@/components/HeroForm";
import StatCounter from "@/components/StatCounter";
import {
  site,
  serviceStrip,
  painPoints,
  valueProps,
  expectBullets,
  services,
  steps,
  trustBadges,
  testimonials,
  areas,
  faqs,
} from "@/lib/site";

const STRIP_ICON = { flame: Flame, home: HomeIcon, sparkles: Sparkles, wrench: Wrench } as const;
const VALUE_ICON = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  store: Store,
  handshake: Handshake,
} as const;

const STATS = [
  { value: 14, suffix: "", label: "Upstate Towns Served" },
  { value: 2, suffix: "", label: "Fuels — Natural Gas & Propane" },
  { value: 100, suffix: "%", label: "Safety-Tested Installs" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO (split: content + red form card) ============ */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/firepit.jpg"
          alt="Gas fire pit burning on a stone patio at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot/95 via-soot/85 to-soot/60" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-md bg-ember/20 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-glow ring-1 ring-ember/40">
              <Flame size={13} className="flicker" /> Anderson, South Carolina
            </span>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] text-linen sm:text-5xl lg:text-[3.4rem]">
              Gas Fireplace &amp; Log Installation in{" "}
              <span className="text-grad">the Upstate</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-sand/85">
              Nothing beats a real fire on a cold Carolina night — but a gas fireplace, log set
              or fire pit only performs and stays safe when it&apos;s installed right. We handle
              the whole job: pick your fire from live showroom displays, and our installers run
              the line, set the unit and test every connection.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-sand/85">
              Clear pricing, clean work, and straight answers — from a local shop you can
              actually walk into.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-xl shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <Phone size={18} /> Call Now
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-4 font-bold uppercase tracking-wide text-linen backdrop-blur transition-colors hover:border-glow hover:text-glow"
              >
                Our Services <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={140}>
            <HeroForm />
          </Reveal>
        </div>
      </section>

      {/* ============ RED SERVICE STRIP ============ */}
      <section className="bg-grad">
        <div className="container-x grid grid-cols-2 gap-px lg:grid-cols-4">
          {serviceStrip.map((s, i) => {
            const Icon = STRIP_ICON[s.icon as keyof typeof STRIP_ICON];
            return (
              <Reveal key={s.label} variant="up" delay={i * 90}>
                <Link
                  href="/services"
                  className="group flex flex-col items-center gap-3 px-4 py-8 text-center text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={40} strokeWidth={1.4} className="transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.label}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION + VALUE GRID ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Tired of Contractors Who Cut Corners on{" "}
              <span className="text-ember">Gas Work?</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Most homeowners don&apos;t mind paying for quality. What they don&apos;t want is
              stress, surprises, and shortcuts — especially on something that carries gas into
              their home. We hear the same complaints across Anderson and the Upstate:
            </p>
            <ul className="mt-6 space-y-3">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] text-char">
                  <X size={18} className="mt-0.5 shrink-0 text-ember" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold text-soot">
              That&apos;s exactly why Upstate homeowners choose Southern Fireside &amp; Home.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {valueProps.map((v, i) => {
              const Icon = VALUE_ICON[v.icon as keyof typeof VALUE_ICON];
              return (
                <Reveal key={v.title} variant="scale" delay={i * 90}>
                  <div className="card-lift h-full rounded-lg border border-sand bg-cream p-6 text-center">
                    <span className="bg-grad mx-auto grid h-14 w-14 place-items-center rounded-full text-white shadow-lg shadow-ember/25">
                      <Icon size={24} />
                    </span>
                    <h3 className="mt-4 text-base font-bold uppercase tracking-wide">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bark">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ INTEGRITY BLOCK ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              A Hearth Shop Built on Trust, <span className="text-ember">Not Upsells</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              We focus on doing the job right and explaining it clearly from day one. Our
              installers are experienced with gas, and we approach every project with the same
              priorities: safety, clean execution, and accountability.
            </p>
            <p className="mt-4 font-semibold text-soot">Here&apos;s what you can expect:</p>
            <ul className="mt-4 space-y-3">
              {expectBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 font-semibold text-char">
                  <Check size={18} className="mt-0.5 shrink-0 text-ember" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              <Phone size={17} /> Call Now
            </a>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[24rem] overflow-hidden rounded-lg shadow-xl md:h-[28rem]">
              <Image
                src="/images/stone-fireplace.jpg"
                alt="Modern gas fireplace with stone surround"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WELCOME (black, overlapping images) ============ */}
      <section className="bg-soot py-20 md:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative">
              <div className="relative h-[24rem] w-full overflow-hidden rounded-lg shadow-2xl md:h-[26rem]">
                <Image
                  src="/images/cozy-home.jpg"
                  alt="Warm living room with gas fireplace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="floaty absolute -bottom-8 right-4 h-40 w-56 overflow-hidden rounded-lg border-4 border-soot shadow-2xl md:right-0 md:h-48 md:w-64">
                <Image
                  src="/images/firepit.jpg"
                  alt="Outdoor gas fire pit at dusk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              Welcome To
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              Southern Fireside &amp; Home
            </h2>
            <p className="mt-5 leading-relaxed text-sand/80">
              At Southern Fireside &amp; Home, we&apos;re all about bringing real warmth and
              comfort to homes across Anderson and the Upstate. From vented and vent-free gas
              logs to fireplace inserts, outdoor fire pits, grill hookups and full gas line
              installation, we handle it end to end — with quality equipment, careful
              workmanship, and service you can count on long after the install.
            </p>
            <p className="mt-4 leading-relaxed text-sand/80">
              Whether you want to finally use that cold firebox, add a fire feature to your
              patio, or fix a unit that won&apos;t light, we promise a smooth experience and a
              fire that lights the first time, every time.
            </p>
            <Link
              href="/about"
              className="bg-grad btn-shine mt-7 inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
            >
              About Us <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT WE DO (image cards + label bars) ============ */}
      <section className="container-x py-20 md:py-24">
        <Reveal className="text-center">
          <span className="kicker justify-center">What we do</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our Fireplace &amp; Gas Services</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i % 3) * 90}>
              <Link
                href="/services"
                className="card-lift group block overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-soot/70 via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-2 bg-cream px-5 py-4">
                  <span className="text-[1.05rem] font-bold uppercase tracking-wide text-soot group-hover:text-ember">
                    {s.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-ember transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS (5 steps) ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">How it works</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From &ldquo;Just Looking&rdquo; to a Lit Fire
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Five simple steps — no pressure, no surprises, just a clear path to a fire that
              lights the first time, every time.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.title} variant="up" delay={i * 90}>
                <div className="card-lift relative h-full rounded-lg border border-sand bg-cream p-6">
                  <span className="bg-grad grid h-12 w-12 place-items-center rounded-full font-display text-xl font-bold text-white shadow-lg shadow-ember/25">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[0.95rem] font-bold uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RED STATS BAND (zigzag top) ============ */}
      <section className="relative">
        <div className="zigzag-top h-5 w-full bg-grad" />
        <div className="bg-grad">
          <div className="container-x py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-3">
              {STATS.map((st, i) => (
                <Reveal key={st.label} variant="scale" delay={i * 120} className="text-center">
                  <div className="font-display text-6xl font-bold text-white md:text-7xl">
                    <StatCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white/90">
                    {st.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14 border-t border-white/20 pt-10 text-center">
              <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
                Serving Anderson &amp; the Upstate
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
                Based on McGee Rd in Anderson, we cover the surrounding Big Country of the
                Upstate — town and country, new builds and older hearths alike:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TRUST BADGE STRIP ============ */}
      <section className="border-b border-sand bg-cream py-10">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {trustBadges.map((b) => (
                <div
                  key={b}
                  className="flex flex-col items-center gap-2 text-center text-char"
                >
                  <ShieldCheck size={26} className="text-ember" />
                  <span className="text-[0.82rem] font-bold uppercase tracking-wide leading-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ COMPANY OVERVIEW + MAP ============ */}
      <section className="container-x py-20 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              <span className="text-ember">Fireplace, Gas Log &amp; Gas Line</span> Specialists
              in Anderson, SC
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Southern Fireside &amp; Home is the kind of shop homeowners recommend without
              hesitation — not because we talk big, but because we show up, explain things
              clearly, and do the work the right way. Across Anderson and the surrounding
              Upstate, people come to us when they want honest answers, fair pricing, and a
              fire they don&apos;t have to worry about.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Whether it&apos;s a simple log set or a full gas line and fire feature, our team
              takes the time to assess your space, walk you through your options, and help you
              make a decision that actually makes sense for your home. Every project is handled
              with the same care, craftsmanship, and respect for your property. No shortcuts.
              No confusion. Just solid work from people who stand behind it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="bg-grad btn-shine inline-flex items-center gap-2 rounded-md px-7 py-4 font-bold uppercase tracking-wide text-white shadow-lg shadow-ember/30 transition-transform hover:scale-[1.03]"
              >
                <Phone size={17} /> Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border-2 border-ember px-7 py-4 font-bold uppercase tracking-wide text-ember transition-colors hover:bg-ember hover:text-white"
              >
                Get Free Estimate
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="card-lift relative h-[26rem] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/gas-logs.jpg"
                alt="Vented gas log set burning in a stone fireplace"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-soot/85 p-4 backdrop-blur">
                <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-linen">{site.address}</p>
                  <p className="text-xs text-sand/70">Local showroom · live burning displays</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-soot py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-glow">
              Neighbors talking
            </span>
            <h2 className="mt-2 text-3xl font-bold text-linen md:text-4xl">
              The Upstate Keeps Our Phone Ringing
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} variant="up" delay={i * 110}>
                <figure className="card-lift h-full rounded-lg bg-white/[0.04] p-7 ring-1 ring-white/10">
                  <Quote className="text-glow" size={26} />
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-sand/90">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-bold text-linen">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-sand/60">{t.area}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISIT SHOWROOM + GOOGLE MAP ============ */}
      <section className="bg-linen py-20 md:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <span className="kicker justify-center">Come see the fire</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Visit Our Anderson Showroom</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Photos only tell you so much. Stop by 305 McGee Rd and watch the flames in person —
              compare log sets, inserts and fire pits side by side, and talk to the people who
              install them.
            </p>
          </Reveal>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal variant="left">
              <div className="flex h-full flex-col gap-4">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Showroom
                    </p>
                    <p className="mt-0.5 font-bold text-soot">{site.address}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-ember">
                      <Navigation size={13} /> Get Directions
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg border border-sand bg-cream p-5">
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Hours
                    </p>
                    <p className="mt-0.5 font-semibold text-soot">{site.hours}</p>
                  </div>
                </div>

                <a
                  href={site.phoneHref}
                  className="card-lift flex items-start gap-4 rounded-lg border border-sand bg-cream p-5"
                >
                  <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                      Call or Text
                    </p>
                    <p className="mt-0.5 font-bold text-soot">{site.phone}</p>
                  </div>
                </a>

                <div className="rounded-lg border border-sand bg-cream p-5">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-bark/60">
                    <CalendarClock size={14} className="text-ember" /> What to expect
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-char">
                    {[
                      "Live displays burning on the floor",
                      "Compare vented vs. vent-free flames",
                      "Straight answers from real installers",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Flame size={14} className="mt-0.5 shrink-0 text-ember" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="h-full min-h-[26rem] overflow-hidden rounded-lg border border-sand shadow-xl">
                <iframe
                  title="Southern Fireside & Home — 305 McGee Rd, Anderson, SC"
                  src="https://www.google.com/maps?q=305+McGee+Rd,+Anderson,+SC+29625&output=embed"
                  className="h-full min-h-[26rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ over dark texture ============ */}
      <section className="relative">
        <Image
          src="/images/wintertime-fire.jpg"
          alt="Fire burning in a fireplace"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/85" />
        <div className="container-x relative py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl font-bold uppercase text-linen md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 4) * 70}>
                <details className="group rounded-lg border border-white/15 bg-white/95 p-5 open:shadow-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-soot [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-grad text-white transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-bark">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
