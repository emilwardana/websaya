'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-[var(--color-cream)] dark:bg-black py-24 text-center">
      <motion.h1
        className="font-display text-4xl md:text-5xl text-[var(--color-forest)] dark:text-[var(--color-sage)]"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      >
        Build Your Next Project
      </motion.h1>
      <p className="mt-4 text-sm md:text-base text-black/60 dark:text-white/60">
        Modern stack: Next.js + Tailwind + TypeScript
      </p>
      <motion.a
        href="#features"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-block rounded bg-[var(--color-sun)] px-6 py-3 font-semibold text-white shadow hover:shadow-lg"
      >
        Get Started
      </motion.a>
    </section>
  );
}
