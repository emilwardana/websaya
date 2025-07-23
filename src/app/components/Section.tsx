'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function Section({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
