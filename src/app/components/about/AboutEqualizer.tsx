"use client";

import { motion } from "framer-motion";

export default function AboutEqualizer() {
  const skills = [
    { name: "LARAVEL", level: 90 },
    { name: "SQL", level: 85 },
    { name: "PYTHON", level: 80 },
    { name: "SELENIUM", level: 85 },
    { name: "GCP", level: 75 },
    { name: "MANUAL", level: 95 },
    { name: "GIT", level: 85 },
    { name: "DOCKER", level: 70 },
    { name: "FIGMA", level: 80 },
    { name: "JIRA", level: 90 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-md mx-auto border-4 border-[var(--color-primary)] bg-[#2a2a2a] text-white shadow-[8px_8px_0px_0px_var(--color-primary)] mt-4"
    >
      {/* Title Bar */}
      <div className="bg-[var(--color-primary)] text-[var(--color-surface)] px-2 py-1 font-bold text-xs select-none flex justify-between">
        <span>WINAMP EQUALIZER</span>
        <button className="px-1 hover:bg-white/20">X</button>
      </div>

      <div className="p-4 grid grid-cols-[auto_1fr] gap-4">
        {/* Preamp / Controls */}
        <div className="flex flex-col justify-between items-center text-[10px] text-gray-400 font-bold">
            <div className="text-center">ON</div>
            <div className="w-8 h-20 bg-black border border-gray-600 relative my-1">
                <div className="absolute bottom-0 left-1 right-1 bg-[var(--color-accent)] h-[80%] opacity-80"></div>
                {/* Knob */}
                <div className="absolute bottom-[80%] left-0 right-0 h-2 bg-gray-300 border border-black transform translate-y-1"></div>
            </div>
            <div className="text-center">PREAMP</div>
        </div>

        {/* EQ Bands */}
        <div className="bg-black border border-gray-600 p-2 flex justify-between items-end h-32 relative">
             {skills.map((skill, i) => (
                 <div key={i} className="flex flex-col items-center h-full justify-end group w-full">
                     <div className="relative w-2 h-full bg-[#1a1a1a] mx-1">
                         {/* Fill based on skill level */}
                         <div 
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 opacity-50"
                            style={{ height: `${skill.level}%` }}
                         />
                         {/* Slider Knob */}
                         <div 
                            className="absolute w-4 h-2 bg-gray-300 border border-black left-1/2 -translate-x-1/2 z-10 hover:bg-white cursor-pointer"
                            style={{ bottom: `${skill.level}%` }}
                         />
                     </div>
                     <span className="text-[8px] mt-1 text-gray-500 rotate-0 md:rotate-0 truncate w-full text-center">{skill.name}</span>
                 </div>
             ))}
             
             {/* Curve line simulation (optional, pure visual) */}
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
                <path 
                    d="M0,100 Q50,0 100,100 T200,50" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1"
                />
             </svg>
        </div>
      </div>
      
      <div className="px-4 pb-2 flex justify-center gap-4 text-[10px] font-bold text-gray-400">
         <button className="bg-[#3a3a3a] border border-gray-600 px-2 py-0.5 hover:text-white">PRESETS</button>
         <button className="bg-[#3a3a3a] border border-gray-600 px-2 py-0.5 hover:text-white">AUTO</button>
      </div>

    </motion.div>
  );
}
