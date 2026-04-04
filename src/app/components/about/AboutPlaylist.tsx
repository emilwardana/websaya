"use client";

import { motion } from "framer-motion";

export default function AboutPlaylist() {
  const timeline = [
    {
      year: "2025",
      title: "Service Delivery Engineer",
      company: "Artajasa",
      duration: "04:00",
      id: "01"
    },
    {
      year: "2023",
      title: "IT Quality Assurance",
      company: "Bank Mandiri",
      duration: "02:00",
      id: "02"
    },
    {
      year: "2021",
      title: "IT Programmer",
      company: "BNI",
      duration: "00:07",
      id: "03"
    },
    {
      year: "2019",
      title: "Event Manager",
      company: "BNCC",
      duration: "01:05",
      id: "04"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full max-w-md mx-auto border-4 border-[var(--color-primary)] bg-[#2a2a2a] text-white shadow-[8px_8px_0px_0px_var(--color-primary)] mt-4"
    >
      {/* Title Bar */}
      <div className="bg-[var(--color-primary)] text-[var(--color-surface)] px-2 py-1 font-bold text-xs select-none">
        WINAMP PLAYLIST EDITOR
      </div>

      <div className="p-4">
        <div className="bg-black border-2 border-gray-600 p-1 min-h-[150px] font-mono text-sm text-[var(--color-accent)]">
          {timeline.map((item, i) => (
             <div 
                key={i} 
                className="flex justify-between hover:bg-[var(--color-accent)] hover:text-black cursor-pointer px-1 group"
             >
                <span className="truncate">
                    {item.id}. {item.title} - {item.company} ({item.year})
                </span>
                <span>{item.duration}</span>
             </div>
          ))}
          <div className="px-1 opacity-50 mt-2">
            ----------------------------------
            <br />
            Total Time: 11:00
          </div>
        </div>

        <div className="flex justify-between items-center mt-3 text-xs">
            <div className="bg-[#2a2a2a] border-2 border-[var(--color-primary)] px-3 py-1 hover:bg-[var(--color-accent)] hover:text-black cursor-pointer shadow-[2px_2px_0px_0px_var(--color-primary)] active:translate-y-[2px] active:shadow-none transition-all">
                ADD FILE
            </div>
            <div className="bg-[#2a2a2a] border-2 border-[var(--color-primary)] px-3 py-1 hover:bg-[var(--color-accent)] hover:text-black cursor-pointer shadow-[2px_2px_0px_0px_var(--color-primary)] active:translate-y-[2px] active:shadow-none transition-all">
                REM
            </div>
            <div className="bg-[#2a2a2a] border-2 border-[var(--color-primary)] px-3 py-1 hover:bg-[var(--color-accent)] hover:text-black cursor-pointer shadow-[2px_2px_0px_0px_var(--color-primary)] active:translate-y-[2px] active:shadow-none transition-all">
                SEL
            </div>
            <div className="bg-[#2a2a2a] border-2 border-[var(--color-primary)] px-3 py-1 hover:bg-[var(--color-accent)] hover:text-black cursor-pointer shadow-[2px_2px_0px_0px_var(--color-primary)] active:translate-y-[2px] active:shadow-none transition-all">
                LIST OPTS
            </div>
        </div>
      </div>
    </motion.div>
  );
}
