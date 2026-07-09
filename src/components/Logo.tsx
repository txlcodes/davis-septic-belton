import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <span className="relative -my-3 grid h-24 w-36 place-items-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)] md:h-28 md:w-44">
        <Image
          src="/images/logo.png"
          alt="Davis Septic, Grading & Pumping — Belton, SC"
          width={1511}
          height={1024}
          priority
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
