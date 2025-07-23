"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="bg-[var(--color-primary)] text-[var(--color-text)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl">notUsual</Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/#features" className="hover:text-[var(--color-accent)]">Features</Link>
          <Link href="/about" className="hover:text-[var(--color-accent)]">About</Link>
          <Link href="/playground" className="hover:text-[var(--color-accent)]">Playground</Link>
          <Link href="/digital-garden" className="hover:text-[var(--color-accent)]">Garden</Link>
          <Link href="/contact" className="hover:text-[var(--color-accent)]">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}