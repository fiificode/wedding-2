import { wedding } from "@/content/wedding";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Venue() {
  const q = encodeURIComponent(wedding.venue.mapsQuery);
  return (
    <section className="px-6 py-[25px]">
      <Reveal>
        <SectionHeading>Venue &amp; Directions</SectionHeading>
        <div className="text-center">
          <p className="font-display text-xl">{wedding.venue.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{wedding.venue.address}</p>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <iframe
            title="Venue map"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[220px] w-full border-0"
          />
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center rounded-full border border-gold/60 px-5 py-3 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold/10"
        >
          Get Directions
        </a>
      </Reveal>
    </section>
  );
}
