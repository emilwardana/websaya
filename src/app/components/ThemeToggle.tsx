'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // optional: npm i lucide-react

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      {current === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
    </motion.button>
  );
}
