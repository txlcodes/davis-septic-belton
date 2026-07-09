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
  { value: 30, suffix: "+", label: "Years Serving the Upstate" },
  { value: 230, suffix: "", label: "Five-Star Google Reviews" },
  { value: 5, suffix: ".0★", label: "Average Customer Rating" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO (full-bleed real truck photo background) ============ */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/truck.jpg"
          alt="Davis Septic pump truck — 'We'll Make Your CRAP Disappear'"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soot/85 via-soot/55 to-soot/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-soot/80 via-transparent to-transparent" />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-md bg-ember/20 px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-glow ring-1 ring-ember/40">
              <Sparkles size={13} className="flicker" /> Belton &amp; Anderson · 5.0★ · 230 Reviews
            </span>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] text-linen drop-shadow-lg sm:text-5xl lg:text-[3.4rem]">
              Septic Pumping, Installs &amp; Grading in{" "}
              <span className="text-grad">the Upstate</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-sand/90 drop-shadow">
              A backed-up tank never waits for a good time — and a new system only lasts when
              it&apos;s installed right. For 30+ years Davis Septic has pumped, installed, graded
              and repaired systems across Belton, Anderson and the surrounding counties. We move
              the dirt, do the dirty work, and leave your yard looking like we were never there.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-sand/90 drop-shadow">
              Upfront pricing, clean work, and straight answers. As our truck says —
              <span className="font-semibold text-linen"> we&apos;ll make your crap disappear.</span>
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
              Tired of Septic Companies Who{" "}
              <span className="text-ember">Cut Corners?</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Nobody minds paying for good work. What folks can&apos;t stand is stress, surprise
              charges, and a torn-up yard — especially with something as messy as a septic
              system. We hear the same complaints across Belton and the Upstate:
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
              That&apos;s exactly why the Upstate has trusted Davis Septic for 30+ years.
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
              Built on Trust, <span className="text-ember">Not Upsells</span>
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              We focus on doing the job right and explaining it clearly from day one. We run our
              own equipment and crew, and we approach every job with the same priorities: honest
              diagnosis, clean execution, and a yard we put back the way we found it.
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
                src="/images/septic-install.jpg"
                alt="New septic tanks set into a freshly dug trench"
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
                  src="/images/rural-home.jpg"
                  alt="Upstate South Carolina home served by Davis Septic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="floaty absolute -bottom-8 right-4 h-40 w-56 overflow-hidden rounded-lg border-4 border-soot shadow-2xl md:right-0 md:h-48 md:w-64">
                <Image
                  src="/images/septic-tank.jpg"
                  alt="Concrete septic tank uncovered for pumping"
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
              Davis Septic, Grading &amp; Pumping
            </h2>
            <p className="mt-5 leading-relaxed text-sand/80">
              We&apos;re a family-run outfit that&apos;s kept Upstate systems flowing for over
              three decades. From routine and emergency pump-outs to permitted new installs,
              drain-field repair, lot grading, land clearing and gravel driveways, we handle it
              end to end — with our own heavy equipment, experienced hands, and service you can
              count on long after the truck pulls away.
            </p>
            <p className="mt-4 leading-relaxed text-sand/80">
              Whether your tank is backing up, you&apos;re building from dirt, or you just need a
              yard leveled and graded, we promise a smooth job, a fair price, and — like the
              truck says — we&apos;ll make your crap disappear.
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
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our Septic, Grading &amp; Pumping Services</h2>
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
              From First Call to a Clean Yard
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              Five simple steps — no pressure, no surprises, just a clear path from problem to
              a system that works and a yard put back right.
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
                Serving Belton, Anderson &amp; the Upstate
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85">
                Based in Belton, we cover the surrounding Upstate — town and country, homes,
                rentals, mobile homes, businesses and new builds alike:
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
              <span className="text-ember">Septic, Grading &amp; Pumping</span> Specialists
              in Belton, SC
            </h2>
            <p className="mt-5 leading-relaxed text-bark">
              Davis Septic is the kind of company neighbors recommend without hesitation — not
              because we talk big, but because we show up, explain things clearly, and do the
              work the right way. Across Belton, Anderson and the surrounding Upstate, people
              call us when they want honest answers, fair pricing, and a system they don&apos;t
              have to worry about.
            </p>
            <p className="mt-4 leading-relaxed text-bark">
              Whether it&apos;s a routine pump-out, an emergency backup, a full new install or a
              lot that needs grading, our team takes the time to find the real problem, walk you
              through your options, and get it done. Every job is handled with the same care and
              respect for your property. No shortcuts. No surprise bills. Just solid work from
              people who stand behind it — and back it with 230 five-star reviews.
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
                src="/images/excavator.jpg"
                alt="Heavy equipment ready for grading and land clearing"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-soot/85 p-4 backdrop-blur">
                <span className="bg-grad grid h-11 w-11 shrink-0 place-items-center rounded-full text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-bold text-linen">{site.address}</p>
                  <p className="text-xs text-sand/70">Family-run · 30+ years in the Upstate</p>
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
            <span className="kicker justify-center">Find us</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Based in Belton, On the Road Across the Upstate</h2>
            <p className="mx-auto mt-3 max-w-2xl text-bark">
              We come to you — homes, rentals, farms, businesses and job sites throughout Belton,
              Anderson and the surrounding counties. Call or text and we&apos;ll get a truck
              headed your way.
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
                      Home Base
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
                      "Fast response — same-day for emergencies",
                      "Upfront pricing before we dig",
                      "Your yard backfilled, leveled & cleaned up",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 shrink-0 text-ember" />
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
                  title="Davis Septic, Grading & Pumping — Belton, SC"
                  src="https://www.google.com/maps?q=Davis+Septic+Grading+and+Pumping,+Belton,+SC&output=embed"
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
          src="/images/gravel.jpg"
          alt="Tree-lined gravel driveway graded by Davis Septic"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-soot/90" />
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
