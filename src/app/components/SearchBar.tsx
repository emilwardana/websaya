"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

type Item = { title: string; desc?: string; href: string; keywords?: string };

const DATA: Item[] = [
  {
    title: "Features",
    desc: "Homepage section",
    href: "/#features",
    keywords: "cards menu section",
  },
  {
    title: "About",
    desc: "Who I am & timeline",
    href: "/about",
    keywords: "bio timeline me",
  },
  {
    title: "Playground",
    desc: "Experiments, apps & games",
    href: "/playground",
    keywords: "projects experiments code",
  },
  {
    title: "Digital Garden",
    desc: "Open notes & research",
    href: "/digital-garden",
    keywords: "blog notes research garden",
  },
  {
    title: "Contact",
    desc: "Let’s talk",
    href: "/contact",
    keywords: "email socials talk",
  },
];

export default function SearchBar() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [shortcut, setShortcut] = useState<"⌘K" | "Ctrl K">("Ctrl K");
  const boxRef = useRef<HTMLDivElement>(null);

  // detect mac vs windows/linux for the hint
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      setShortcut(isMac ? "⌘K" : "Ctrl K");
    }
  }, []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return DATA.filter((i) =>
      (i.title + " " + (i.desc ?? "") + " " + (i.keywords ?? ""))
        .toLowerCase()
        .includes(query)
    );
  }, [q]);

  // close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={boxRef} className="relative w-64">
      {/* Right-side icon + shortcut pill */}
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
        <Search className="h-4 w-4" />
        <kbd className="hidden sm:inline rounded bg-white/10 px-1.5 py-0.5 text-[10px]">
          {shortcut}
        </kbd>
      </div>

      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search…"
        className="w-full rounded-full bg-[var(--color-secondary)]/30 pl-4 pr-20 py-2 text-sm
                   text-[var(--color-text)] placeholder:text-[var(--color-text)]/50
                   focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      />

      {open && results.length > 0 && (
        <ul
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-xl
                       bg-[var(--color-secondary)]/90 backdrop-blur text-sm shadow-lg"
        >
          {results.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-2 text-[var(--color-text)] hover:bg-[var(--color-accent)]/20"
                onClick={() => {
                  setOpen(false);
                  setQ("");
                }}
              >
                <span className="font-medium">{item.title}</span>
                {item.desc && (
                  <span className="block opacity-70 text-xs">{item.desc}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
