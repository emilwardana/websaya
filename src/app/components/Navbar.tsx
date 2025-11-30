"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)] text-[var(--color-primary)] border-b-4 border-[var(--color-primary)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-2xl font-black uppercase tracking-tighter hover:text-[var(--color-accent)] transition-colors">
          MynotUsualSite
        </Link>

        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
        </div>
      </nav>

      {/* command palette portal trigger (hidden) */}
      <CommandPalette />
    </header>
  );
}
