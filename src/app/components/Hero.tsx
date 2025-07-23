"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[var(--color-primary)] text-[var(--color-text)] py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-5xl"
      >
        Build Your Next Project
      </motion.h1>
      <p className="mt-4 text-sm md:text-base opacity-80">
        Modern stack: Next.js • Tailwind • TypeScript
      </p>
      <motion.a
        href="#features"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-hover mt-10"
      >
        Get Started
      </motion.a>
    </section>
  );
}
