export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-grad-deep ring-1 ring-flame/40">
        {/* house outline with flame inside */}
        <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
          <path
            d="M6 18 L20 6 L34 18"
            fill="none"
            stroke="#ead9c0"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="flicker"
            d="M20 14 C24 19 26 21.5 26 25 a6 6 0 0 1 -12 0 c0 -3.5 2 -6 6 -11 Z"
            fill="url(#flameGrad)"
          />
          <defs>
            <linearGradient id="flameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={`font-display block text-[1.05rem] font-bold tracking-tight ${
            dark ? "text-linen" : "text-soot"
          }`}
        >
          Southern Fireside
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-sand/70" : "text-bark/70"
          }`}
        >
          &amp; Home · Anderson, SC
        </span>
      </span>
    </span>
  );
}
