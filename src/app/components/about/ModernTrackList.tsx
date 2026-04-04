"use client";

import { motion } from "framer-motion";
import { Clock, Play } from "lucide-react";

export default function ModernTrackList() {
  const experiences = [
    {
      id: 1,
      role: "Service Delivery Engineer",
      company: "Artajasa Pembayaran Elektronis",
      date: "Sep 2025 - Present",
      duration: "4 mos",
      type: "Contract",
      logo: "🏢"
    },
    {
      id: 2,
      role: "IT Quality Assurance",
      company: "PT Bank Mandiri (Persero) Tbk.",
      date: "Jul 2023 - Sep 2025",
      duration: "2 yrs 3 mos",
      type: "Contract",
      logo: "🏦"
    },
    {
      id: 3,
      role: "Information Technology Programmer",
      company: "PT. Bank Negara Indonesia (Persero) Tbk.",
      date: "Sep 2021 - Mar 2022",
      duration: "7 mos",
      type: "Internship",
      logo: "🏦"
    },
    {
      id: 4,
      role: "Event Organizer Division Manager",
      company: "Bina Nusantara Computer Club",
      date: "Sep 2019 - Jan 2021",
      duration: "1 yr 5 mos",
      type: "Organization",
      logo: "🎓"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full mb-12"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Experience</h2>
        <button className="text-sm font-bold opacity-60 hover:opacity-100 hover:underline">Show all</button>
      </div>

      <div className="w-full">
        {/* Header */}
        <div className="grid grid-cols-[50px_1.5fr_1.5fr_1fr_100px] gap-4 text-xs font-bold uppercase tracking-wider opacity-60 border-b border-[var(--color-primary)]/10 pb-2 px-4 mb-2">
            <div className="text-center">#</div>
            <div>Title / Company</div>
            <div className="hidden md:block">Company</div>
            <div className="hidden md:block">Date</div>
            <div className="text-right md:text-center"><Clock className="w-4 h-4 inline" /></div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-1">
            {experiences.map((exp, i) => (
                <div 
                    key={exp.id}
                    className="group grid grid-cols-[50px_1fr_100px] md:grid-cols-[50px_1.5fr_1.5fr_1fr_100px] gap-4 items-center py-3 px-4 hover:bg-[var(--color-primary)]/5 rounded-lg cursor-default transition-colors text-sm"
                >
                    <div className="text-center font-mono opacity-60 group-hover:opacity-100 flex justify-center">
                        <span className="group-hover:hidden w-4">{i + 1}</span>
                        <Play className="w-4 h-4 hidden group-hover:block fill-[var(--color-primary)]" />
                    </div>
                    
                    <div className="flex items-center gap-4 overflow-hidden">
                        <div className="w-10 h-10 min-w-10 bg-[var(--color-surface)] border border-[var(--color-primary)]/10 rounded flex items-center justify-center text-lg shadow-sm">
                            {exp.logo}
                        </div>
                        <div className="flex flex-col truncate">
                            <span className="font-bold truncate text-[var(--color-primary)] text-base">{exp.role}</span>
                            <span className="md:hidden text-xs opacity-70 truncate">{exp.company}</span>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col truncate">
                         <span className="font-medium truncate opacity-90">{exp.company}</span>
                         <span className="text-xs opacity-50">{exp.type}</span>
                    </div>

                    <div className="hidden md:block text-sm opacity-70 truncate whitespace-nowrap">
                        {exp.date}
                    </div>

                    <div className="text-right md:text-center text-sm font-mono opacity-60 whitespace-nowrap">
                        {exp.duration}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
