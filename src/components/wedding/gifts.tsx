"use client";

import { useState } from "react";
import { toast } from "sonner";
import { wedding } from "@/content/wedding";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          toast.success("Copied");
          setTimeout(() => setCopied(false), 1600);
        } catch {
          toast.error("Could not copy");
        }
      }}
      className="shrink-0 rounded-full border border-gold/60 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold/10"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function Gifts() {
  return (
    <section className="px-6 py-[25px]">
      <Reveal>
        <SectionHeading>Gifts &amp; Support</SectionHeading>
        <p className="text-center text-sm text-muted-foreground">
          Your presence is the greatest gift. If you wish to bless us further, these options are open.
        </p>
        <div className="mt-4 space-y-3">
          {wedding.gifts.map((g, i) => (
            <Reveal key={g.method} delay={i * 0.08}>
              <div className="frost flex items-center gap-2.5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/60 font-display text-sm text-gold">
                  {g.initial}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {g.method.charAt(0) + g.method.slice(1).toLowerCase()}
                  </p>
                  <p
                    className={`whitespace-nowrap font-display leading-snug ${
                      g.value.includes("@") ? "text-[0.95rem]" : "text-base"
                    }`}
                  >
                    {g.value}
                  </p>
                  <p className="break-words text-xs text-muted-foreground">{g.holder}</p>
                </div>
                <CopyButton value={g.value} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 text-center text-sm">
          <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">RSVP Contacts</p>
          <div className="mt-2 space-y-1">
            {wedding.contacts.map((c) => (
              <p key={c.name}>
                {c.name} —{" "}
                <a
                  href={`tel:${c.phone.replace(/\D/g, "")}`}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {c.phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
