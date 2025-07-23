"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { createPortal } from "react-dom";
import { COMMANDS, CommandItem } from '../../commands';


export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Fuse config
  const fuse = useMemo(
    () =>
      new Fuse(COMMANDS, {
        includeScore: true,
        threshold: 0.35,
        keys: ["title", "desc", "keywords"],
      }),
    []
  );

  const results = useMemo<CommandItem[]>(() => {
    if (!q) return COMMANDS.slice(0, 6);
    return fuse
      .search(q)
      .map((r) => r.item)
      .slice(0, 10);
  }, [q, fuse]);

  // open on ⌘K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQ("");
    }
  }, [open]);

  if (typeof document === "undefined") return null; // SSR guard

  return createPortal(
    open ? (
      <div
        className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 p-4 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      >
        <div
          className="w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--color-secondary)]/90 text-[var(--color-text)] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <Search className="h-4 w-4 opacity-60" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type to search…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--color-text)]/50"
            />
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded p-1 opacity-60 hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* results */}
          <ul className="max-h-80 overflow-y-auto py-2 text-sm">
            {results.length === 0 && (
              <li className="px-4 py-3 opacity-60">No results</li>
            )}
            {results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 hover:bg-[var(--color-accent)]/20 transition"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium">{item.title}</span>
                  {item.desc && (
                    <span className="block text-xs opacity-70">
                      {item.desc}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* hint bar */}
          <div className="flex justify-end gap-2 border-t border-white/10 px-4 py-2 text-[10px] opacity-60">
            <kbd className="rounded bg-white/10 px-1.5 py-0.5">ESC</kbd> close
          </div>
        </div>
      </div>
    ) : null,
    document.body
  );
}
