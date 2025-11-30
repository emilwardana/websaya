"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[var(--color-body)] text-[var(--color-primary)] py-20 md:py-32 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-tighter break-words"
      >
        Emil Wardana
      </motion.h1>
      <p className="mt-6 text-base md:text-xl font-bold border-2 border-[var(--color-primary)] inline-block px-4 py-2 bg-[var(--color-accent)] shadow-[4px_4px_0px_0px_var(--color-primary)]">
        QA Engineer & Web Developer
      </p>
    </section>
  );
}
