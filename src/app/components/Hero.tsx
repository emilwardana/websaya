"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero({ onShowMenu }: { onShowMenu?: () => void }) {
  return (
    <section className="bg-[var(--color-body)] text-[var(--color-primary)] py-8 md:py-10 text-center px-4 md:flex-none flex flex-col justify-center items-center relative min-h-[calc(100vh-140px)] md:min-h-0">
      <div className="flex-1 flex flex-col justify-center items-center md:flex-initial">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter break-words"
        >
          Emil Wardana
        </motion.h1>
        <p className="mt-5 text-base md:text-xl font-bold border-2 border-[var(--color-primary)] inline-block px-4 py-2 bg-[var(--color-accent)] shadow-[4px_4px_0px_0px_var(--color-primary)]">
          QA Engineer & Web Developer
        </p>
      </div>
      
      {/* Mobile "Get to Know Me" button - fixed at bottom */}
      {onShowMenu && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={onShowMenu}
          className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-sm font-black uppercase tracking-widest cursor-pointer z-50 animate-bounce"
        >
          <span className="border-b-2 border-[var(--color-primary)]">Get to Know Me</span>
          <ChevronDown className="w-4 h-4" />
        </motion.button>
      )}
    </section>
  );
}
