"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <motion.section
      id={id}
      className="section bg-[var(--color-body)] text-[var(--color-primary)] flex-grow flex flex-col justify-center items-center w-full py-6 md:py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
