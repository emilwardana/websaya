"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const current = theme === "system" ? systemTheme : theme;
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="p-2 border-2 border-[var(--color-primary)] bg-[var(--color-surface)] text-[var(--color-primary)] 
                 hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none"
    >
      {current === "dark" ? "☀️" : "🌙"}
    </button>
  );
}