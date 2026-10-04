const colors = [
  ["background", "bg-background"],
  ["foreground", "bg-foreground"],
  ["card", "bg-card"],
  ["secondary / muted", "bg-secondary"],
  ["muted-foreground", "bg-muted-foreground"],
  ["gold / accent", "bg-gold"],
  ["glass", "bg-glass"],
  ["swatch white", "bg-[var(--swatch-white)]"],
  ["swatch ivory", "bg-[var(--swatch-ivory)]"],
  ["swatch cream", "bg-[var(--swatch-cream)]"],
];

export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-[480px] space-y-10 px-6 py-10">
      <section>
        <h2 className="eyebrow mb-4 text-gold">Colour</h2>
        <div className="grid grid-cols-2 gap-3">
          {colors.map(([name, cls]) => (
            <div key={name} className="frost p-3">
              <div className={`h-10 rounded-md border border-border ${cls}`} />
              <p className="mt-2 text-xs text-muted-foreground">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="eyebrow text-gold">Type</h2>
        <p className="font-script text-6xl leading-tight">Ben &amp; Hannah</p>
        <p className="font-script text-[2.04rem] leading-tight text-gold">A Touch of White</p>
        <p className="font-display text-2xl font-bold tracking-[0.12em]">BENJAMIN</p>
        <p className="font-display text-xl">Love Economy Church</p>
        <p className="font-display text-base italic">With love</p>
        <p className="text-sm text-muted-foreground">Body, Jost 300 / 14px muted</p>
        <p className="eyebrow text-gold">Eyebrow — Save the date</p>
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">Field label</p>
      </section>

      <section className="space-y-3">
        <h2 className="eyebrow text-gold">Surfaces</h2>
        <div className="frost p-5 text-sm">.frost: glass, blur 14px, 1px glass border, radius-xl</div>
        <div className="flex items-center gap-3">
          <span className="rule-line" />
          <span className="eyebrow text-gold">rule-line</span>
          <span className="rule-line" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="eyebrow text-gold">Buttons</h2>
        <div className="flex w-full items-center justify-center rounded-full border border-gold/60 px-5 py-3 text-xs uppercase tracking-[0.22em] text-gold">
          Outline
        </div>
        <div className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground">
          Primary
        </div>
      </section>
    </main>
  );
}
