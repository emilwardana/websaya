"use client";

import { motion } from "framer-motion";
import { Play, Pause, Square, SkipBack, SkipForward, Disc, Minimize, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto border-4 border-[var(--color-primary)] bg-[#2a2a2a] text-white shadow-[8px_8px_0px_0px_var(--color-primary)] relative overflow-hidden"
    >
      {/* Title Bar */}
      <div className="bg-[var(--color-primary)] text-[var(--color-surface)] px-2 py-1 flex justify-between items-center select-none cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xs">WINAMP</span>
        </div>
        <div className="flex gap-1">
          <button className="p-0.5 hover:bg-white/20 rounded"><Minimize className="w-3 h-3" /></button>
          <button className="p-0.5 hover:bg-white/20 rounded"><X className="w-3 h-3" /></button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Display Screen */}
        <div className="bg-black border-2 border-[var(--color-primary)] p-3 relative font-mono text-green-400 min-h-[80px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
             <div className="text-xs">
                <p>{isPlaying ? "PLAYING" : "STOPPED"}</p>
                <p>GPA 3.04</p>
                <p>CS DEGREE</p>
             </div>
             <div className="text-2xl font-digital tracking-widest">{formatTime(time)}</div>
          </div>
          
          <div className="mt-2 overflow-hidden whitespace-nowrap">
            <motion.div 
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="text-sm"
            >
              *** MUZAMMIL RABIAWARDANA - SOFTWARE ENGINEER & QA *** BINUS UNIVERSITY *** DEDICATED & INNOVATIVE ***
            </motion.div>
          </div>
        </div>

        {/* Info & Visualizer Placeholder */}
        <div className="flex gap-4">
            <div className="hidden md:block w-1/3 bg-black border-2 border-[var(--color-primary)] p-2">
                {/* Visualizer bars simulation */}
                <div className="flex items-end h-full gap-1 justify-center opacity-80">
                    {[...Array(8)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ height: isPlaying ? ["20%", "80%", "40%"] : "10%" }}
                            transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1, repeatType: "reverse" }}
                            className="w-2 bg-[var(--color-accent)]"
                        />
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-1 justify-center">
                 <div className="bg-black border border-gray-700 h-2 w-full rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-[var(--color-accent)]"
                        animate={{ width: isPlaying ? "100%" : "0%" }}
                        transition={{ duration: 300, ease: "linear" }} 
                    />
                 </div>
                 <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400">
                    <span>Balance</span>
                    <span>Volume</span>
                 </div>
            </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex gap-1">
            <button 
                className="p-1 hover:text-[var(--color-accent)] active:scale-95 transition-transform"
                onClick={() => setTime(0)}
            >
                <SkipBack className="w-5 h-5" fill="currentColor" />
            </button>
            <button 
                className="p-1 hover:text-[var(--color-accent)] active:scale-95 transition-transform"
                onClick={() => setIsPlaying(true)}
            >
                <Play className="w-5 h-5" fill="currentColor" />
            </button>
            <button 
                className="p-1 hover:text-[var(--color-accent)] active:scale-95 transition-transform"
                onClick={() => setIsPlaying(false)}
            >
                <Pause className="w-5 h-5" fill="currentColor" />
            </button>
            <button 
                className="p-1 hover:text-[var(--color-accent)] active:scale-95 transition-transform"
                onClick={() => { setIsPlaying(false); setTime(0); }}
            >
                <Square className="w-5 h-5" fill="currentColor" />
            </button>
            <button className="p-1 hover:text-[var(--color-accent)] active:scale-95 transition-transform">
                <SkipForward className="w-5 h-5" fill="currentColor" />
            </button>
          </div>
          
          <button className="p-1 hover:spin-slow">
            <Disc className={`w-8 h-8 text-[var(--color-accent)] ${isPlaying ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
