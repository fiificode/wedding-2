import Image from "next/image";
import { wedding } from "@/content/wedding";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-[calc(env(safe-area-inset-bottom)+34px)] pt-[25px] text-center">
      <Image
        src="/media/floral-corner.png"
        alt=""
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute -bottom-8 -right-8 w-[132px] rotate-180 opacity-60"
      />
      <div className="relative flex items-center gap-3">
        <span className="rule-line" />
        <span className="font-script text-4xl text-gold">
          {wedding.groom.first[0]} &amp; {wedding.bride.first[0]}
        </span>
        <span className="rule-line" />
      </div>
      <p className="relative mt-3 font-display text-base italic">{wedding.signoff}</p>
    </footer>
  );
}
