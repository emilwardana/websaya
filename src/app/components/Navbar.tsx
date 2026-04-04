"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-surface)] text-[var(--color-primary)] border-b-4 border-[var(--color-primary)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-2 md:py-3">
        <Link href="/" className="font-display text-lg md:text-2xl font-black uppercase tracking-tighter hover:text-[var(--color-accent)] transition-colors truncate max-w-[200px] md:max-w-none">
          WebSaya
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Search */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Mobile Search Trigger */}
          <button 
            className="md:hidden p-2 border-2 border-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-accent)] transition-colors"
            onClick={() => window.dispatchEvent(new Event("open-cmd-palette"))}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
