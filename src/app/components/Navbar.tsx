'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="w-full bg-[var(--color-cream)]/60 dark:bg-black/30 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl text-[var(--color-sun)] drop-shadow">
          MyLanding
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/#features" className="hover:text-[var(--color-sun)]">Features</Link>
          <Link href="/about" className="hover:text-[var(--color-sun)]">About</Link>
          <Link href="/playground" className="hover:text-[var(--color-sun)]">Playground</Link>
          <Link href="/digital-garden" className="hover:text-[var(--color-sun)]">Garden</Link>
          <Link href="/contact" className="hover:text-[var(--color-sun)]">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
