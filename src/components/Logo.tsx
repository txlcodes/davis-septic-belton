import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <span className="relative -my-3 grid h-24 w-36 place-items-center overflow-hidden rounded-lg md:h-28 md:w-[10.5rem]">
        <Image
          src="/images/logo.png"
          alt="Davis Septic, Grading & Pumping — Belton, SC"
          width={1536}
          height={1024}
          priority
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
