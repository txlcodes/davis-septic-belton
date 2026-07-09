export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-grad-deep ring-1 ring-flame/40">
        {/* magician top hat + magic sparkle — "The Crap Magician" */}
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
          {/* hat brim */}
          <rect x="7" y="27" width="26" height="3.4" rx="1.7" fill="#dbe6f5" />
          {/* hat body */}
          <path d="M13 27 L14.5 13 a5.5 3 0 0 1 11 0 L27 27 Z" fill="#dbe6f5" />
          {/* hat band */}
          <rect x="12.6" y="22.6" width="14.8" height="3.2" fill="#1d4ed8" />
          {/* magic sparkle */}
          <path
            className="flicker"
            d="M30 8 L31 12 L35 13 L31 14 L30 18 L29 14 L25 13 L29 12 Z"
            fill="url(#sparkGrad)"
          />
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#d4a017" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`font-display block text-[1.05rem] tracking-tight ${
            dark ? "text-linen" : "text-soot"
          }`}
        >
          Davis Septic
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            dark ? "text-sand/70" : "text-bark/70"
          }`}
        >
          Grading &amp; Pumping · Belton, SC
        </span>
      </span>
    </span>
  );
}
