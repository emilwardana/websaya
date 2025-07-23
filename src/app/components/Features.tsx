import Section from "./Section";

const features = [
  { title: "Fast", desc: "Lightning-fast performance", emoji: "⚡" },
  { title: "Modern", desc: "Modern tools & design", emoji: "🎨" },
  { title: "Typed", desc: "Built with TypeScript", emoji: "🧠" },
];

export default function Features() {
  return (
    <Section id="features">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-[var(--color-muted)]/20 bg-[var(--color-secondary)]/10 dark:bg-[var(--color-secondary)]/30 p-8 text-center shadow-sm"
          >
            <div className="mb-3 text-4xl">{f.emoji}</div>
            <h3 className="font-display text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-text)]">
              {f.title}
            </h3>
            <p className="mt-2 text-sm opacity-100">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
