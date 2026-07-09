import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center">
      <span className="relative grid h-16 w-[7.5rem] place-items-center">
        <Image
          src="/images/logo.png"
          alt="Davis Septic, Grading & Pumping — Belton, SC"
          width={1774}
          height={887}
          priority
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
