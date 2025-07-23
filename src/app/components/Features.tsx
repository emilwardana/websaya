// src/app/components/Features.tsx
import Link from "next/link";
import Section from "./Section";

const cards = [
  { title: "About", desc: "Who I am & timeline", emoji: "🙂", href: "/about" },
  {
    title: "Playground",
    desc: "Experiments, apps & games",
    emoji: "🧪",
    href: "/playground",
  },
  {
    title: "Digital Garden",
    desc: "Open notes & research",
    emoji: "🌱",
    href: "/digital-garden",
  },
  { title: "Contact", desc: "Let’s talk", emoji: "✉️", href: "/contact" },
];

export default function Features() {
  return (
    <Section id="features">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 dark:bg-[var(--color-secondary)]/30 
                       p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 
                       focus:ring-[var(--color-accent)] cursor-pointer"
          >
            <div className="mb-3 text-4xl">{c.emoji}</div>
            <h3 className="font-display text-lg text-[var(--color-primary)] dark:text-[var(--color-text)]">
              {c.title}
            </h3>
            <p className="mt-2 text-sm opacity-70">{c.desc}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
