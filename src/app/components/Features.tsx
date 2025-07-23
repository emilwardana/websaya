'use client';

import Section from './Section';

const features = [
  { title: 'Fast',    desc: 'Lightning-fast performance', emoji: '⚡' },
  { title: 'Modern',  desc: 'Modern tools & design',       emoji: '🎨' },
  { title: 'Typed',   desc: 'Built with TypeScript',       emoji: '🧠' },
];

export default function Features() {
  return (
    <Section id="features">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 p-8 text-center shadow-sm">
            <div className="text-4xl mb-3">{f.emoji}</div>
            <h3 className="font-display text-lg text-[var(--color-forest)] dark:text-[var(--color-sage)]">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
