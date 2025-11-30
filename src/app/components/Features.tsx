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
            className="border-2 border-[var(--color-primary)] bg-[var(--color-surface)] 
                       p-8 text-center shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all 
                       hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--color-primary)] 
                       focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] cursor-pointer"
          >
            <div className="mb-4 text-5xl grayscale hover:grayscale-0 transition-all">{c.emoji}</div>
            <h3 className="font-display text-xl font-black uppercase text-[var(--color-primary)]">
              {c.title}
            </h3>
            <p className="mt-2 text-sm font-medium opacity-100 border-t-2 border-[var(--color-primary)] pt-2 inline-block">
              {c.desc}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
