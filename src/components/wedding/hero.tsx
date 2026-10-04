"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { wedding } from "@/content/wedding";
import { EXTRA_MOTION } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

const pad = (n: number) => String(n).padStart(2, "0");

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = left === null ? 0 : Math.floor(left / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { days, hours, mins, secs } = useCountdown(wedding.startsAt);

  useGSAP(
    () => {
      if (!EXTRA_MOTION) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero='eyebrow']", { opacity: 0, y: 10, duration: 0.8 })
        .from("[data-hero='title']", { opacity: 0, y: 16, duration: 1 }, "-=0.5")
        .from("[data-hero='line']", { opacity: 0, y: 12, duration: 0.7, stagger: 0.12 }, "-=0.6")
        .from("[data-hero='frost']", { opacity: 0, y: 14, duration: 0.7, stagger: 0.1 }, "-=0.5");
      gsap.from("[data-hero='corner']", { opacity: 0, scale: 0.92, duration: 1.4, ease: "power2.out" });
    },
    { scope: root },
  );

  const cells = [
    { v: days, l: "Days" },
    { v: hours, l: "Hours" },
    { v: mins, l: "Mins" },
    { v: secs, l: "Secs" },
  ];

  return (
    <header ref={root} className="relative overflow-hidden px-6 pb-8 pt-10 text-center">
      <div className="fixed inset-0 -z-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/couple.jpg"
          alt=""
          className="h-full w-full scale-110 object-cover blur-[5px] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/80" />
      </div>

      <Image
        data-hero="corner"
        src="/media/floral-corner.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        priority
        className="pointer-events-none absolute -left-2 -top-2 w-[132px] opacity-95"
      />

      <p data-hero="eyebrow" className="eyebrow relative text-gold">
        Save the Date
      </p>
      <h1 data-hero="title" className="font-script mt-1 text-6xl leading-tight text-foreground">
        {wedding.groom.short} &amp; {wedding.bride.short}
      </h1>
      <p data-hero="line" className="font-display text-base italic text-foreground/80">
        For the wedding ceremony of
      </p>

      <div className="mt-6 space-y-2">
        <div data-hero="line">
          <div className="font-display text-2xl font-bold tracking-[0.12em]">
            {wedding.groom.first.toUpperCase()}
          </div>
          <div className="font-display text-sm text-gold">{wedding.groom.middle}</div>
        </div>
        <div data-hero="line" className="font-script text-3xl text-gold">
          &amp;
        </div>
        <div data-hero="line">
          <div className="font-display text-2xl font-bold tracking-[0.12em]">
            {wedding.bride.first.toUpperCase()}
          </div>
          <div className="font-display text-sm text-gold">{wedding.bride.middle}</div>
        </div>
      </div>

      <div
        data-hero="frost"
        className="frost mt-7 flex items-stretch justify-center divide-x divide-border px-2 py-3"
      >
        <div className="flex-1 px-2">
          <div className="font-display text-[0.9765rem] leading-tight">{wedding.weekday}</div>
        </div>
        <div className="flex-1 px-2">
          <div className="font-display text-[1.05rem] leading-tight">{wedding.dateShort}</div>
        </div>
        <div className="flex-1 px-2">
          <div className="font-display text-[1.05rem] leading-tight">{wedding.time}</div>
        </div>
      </div>

      <div className="mt-3 flex gap-2" aria-live="off">
        {cells.map((c) => (
          <div key={c.l} data-hero="frost" className="frost flex-1 px-1 py-2 text-center">
            <div className="font-display text-2xl leading-none tabular-nums">{pad(c.v)}</div>
            <div className="mt-1 text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">
              {c.l}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
