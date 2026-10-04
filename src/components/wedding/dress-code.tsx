import { wedding } from "@/content/wedding";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const swatches = [
  { title: "White", cls: "bg-[var(--swatch-white)]" },
  { title: "Ivory", cls: "bg-[var(--swatch-ivory)]" },
  { title: "Cream", cls: "bg-[var(--swatch-cream)]" },
  { title: "Gold", cls: "bg-gold" },
];

export function DressCode() {
  return (
    <section className="px-6 py-[20px]">
      <Reveal>
        <SectionHeading>Dress Code</SectionHeading>
        <div className="frost px-[1rem] py-[1.2rem] text-center">
          <p className="font-script text-[2.04rem] leading-tight text-gold">{wedding.dressCode.title}</p>
          <p className="mx-auto mt-[0.6rem] max-w-[320px] whitespace-pre-line text-center text-[0.735rem] leading-relaxed text-muted-foreground">
            {wedding.dressCode.body}
          </p>
          <div className="mt-4 flex items-center justify-center gap-[0.6rem]">
            {swatches.map((s) => (
              <span
                key={s.title}
                title={s.title}
                className={`h-[1.2rem] w-[1.2rem] rounded-full border border-border ${s.cls}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
