export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        <span className="rule-line" />
        <h2 className="eyebrow whitespace-nowrap text-gold">{children}</h2>
        <span className="rule-line" />
      </div>
    </div>
  );
}
