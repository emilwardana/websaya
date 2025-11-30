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

  // open on ⌘K / Ctrl+K or custom event
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    
    const openHandler = () => setOpen(true);

    window.addEventListener("keydown", handler);
    window.addEventListener("open-cmd-palette", openHandler);
    
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("open-cmd-palette", openHandler);
    };
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
          className="w-full max-w-lg overflow-hidden border-4 border-[var(--color-primary)] bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[8px_8px_0px_0px_var(--color-primary)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-4 border-[var(--color-primary)]">
            <Search className="h-5 w-5" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type to search…"
              className="flex-1 bg-transparent text-base font-bold outline-none placeholder:text-[var(--color-primary)]/50"
            />
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-primary)] transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* results */}
          <ul className="max-h-80 overflow-y-auto py-2 text-sm">
            {results.length === 0 && (
              <li className="px-4 py-3 opacity-60 font-bold">No results</li>
            )}
            {results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 hover:bg-[var(--color-accent)] hover:translate-x-1 transition-transform border-b-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-black text-lg uppercase">{item.title}</span>
                  {item.desc && (
                    <span className="block text-xs font-medium opacity-80">
                      {item.desc}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* hint bar */}
          <div className="flex justify-end gap-2 border-t-4 border-[var(--color-primary)] px-4 py-2 text-[10px] font-bold uppercase tracking-widest opacity-80">
            <kbd className="bg-[var(--color-primary)] text-[var(--color-surface)] px-1.5 py-0.5">ESC</kbd> close
          </div>
        </div>
      </div>
    ) : null,
    document.body
  );
}
