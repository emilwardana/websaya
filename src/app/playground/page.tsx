"use client";

import { motion } from "framer-motion";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

export default function PlaygroundPage() {
  return (
    <>
    <section className="section flex-1 w-full px-4 md:px-6 py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 md:mb-8">
          <BackButton />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Playground
          </h1>
          
          <div className="card max-w-lg mx-auto p-8 md:p-12">
            <div className="text-6xl mb-6">🎮</div>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">
              Coming Soon
            </h2>
            <p className="text-base md:text-lg font-medium opacity-80">
              Experiments, apps, and games are on the way. Stay tuned for interactive projects and creative coding!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
}
