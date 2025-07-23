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
        Emil Wardana
      </motion.h1>
      <p className="mt-4 text-sm md:text-base opacity-80">
        QA Engineer Web Developer
      </p>
    </section>
  );
}
