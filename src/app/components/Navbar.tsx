"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  return (
    <header className="bg-[var(--color-primary)] text-[var(--color-text)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl">
          notUsual
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
