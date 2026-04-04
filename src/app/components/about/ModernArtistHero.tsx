"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play, Plus, MoreHorizontal, Download, FileText } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function ModernArtistHero() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-12 relative"
    >
      {/* Content */}
      <div className="pt-4 md:pt-12 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
        
        {/* Profile Image (Album Art Style) */}
        <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-gray-800 to-black rounded-full shadow-2xl flex items-center justify-center border-4 border-[var(--color-surface)] relative overflow-hidden shrink-0">
             <span className="text-4xl">👨‍💻</span>
        </div>

        <div className="flex-1 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-sm font-bold uppercase tracking-wider opacity-70">
                <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" /> Verified Engineer
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-2 md:mb-4">
                Muzammil Rabiawardana
            </h1>
            
            <p className="text-base md:text-lg font-medium opacity-80 max-w-2xl">
                Software Engineer & QA • Binus University • Dedicated & Innovative • IT Quality Assurance at Bank Mandiri • Service Delivery at Artajasa
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-4 relative">
                <a 
                    href="https://www.linkedin.com/in/zamilwardana/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--color-accent)] text-black rounded-full p-3 md:px-8 md:py-3 font-bold uppercase tracking-wide hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
                >
                    <Play className="w-5 h-5 fill-current" /> <span className="hidden md:inline">Connect</span>
                </a>
                
                <a 
                    href="https://github.com/emilwardana"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-[var(--color-primary)] rounded-full px-6 py-2.5 font-bold uppercase tracking-wide hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" /> Follow
                </a>
                
                <div className="relative" ref={menuRef}>
                    <button 
                        onClick={() => setShowMenu(!showMenu)}
                        className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <MoreHorizontal className="w-6 h-6" />
                    </button>

                    {showMenu && (
                        <div className="absolute top-full left-0 md:left-auto md:right-auto mt-2 w-48 bg-[var(--color-surface)] border-2 border-[var(--color-primary)] shadow-[4px_4px_0px_0px_var(--color-primary)] rounded-lg py-1 z-50">
                            <a 
                                href="/cv/emil-wardana.pdf.pdf" 
                                download
                                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] font-bold text-sm transition-colors"
                                onClick={() => setShowMenu(false)}
                            >
                                <Download className="w-4 h-4" /> Download CV
                            </a>

                            
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
