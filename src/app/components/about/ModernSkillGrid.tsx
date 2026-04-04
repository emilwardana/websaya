"use client";

import { motion } from "framer-motion";

export default function ModernSkillGrid() {
  const skills = [
    { name: "Laravel", category: "Framework", level: "Advanced", cover: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" },
    { name: "SQL", category: "Database", level: "Advanced", cover: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { name: "Python", category: "Language", level: "Intermediate", cover: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400" },
    { name: "Selenium", category: "Automation", level: "Advanced", cover: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    { name: "Google Cloud", category: "Cloud", level: "Intermediate", cover: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400" },
    { name: "Manual Testing", category: "QA", level: "Expert", cover: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
    { name: "Git", category: "Tool", level: "Advanced", cover: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
    { name: "Docker", category: "DevOps", level: "Intermediate", cover: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full mb-20"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Skills & Tools</h2>
        <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
                &lt;
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
                &gt;
            </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {skills.map((skill, index) => (
            <div key={index} className="group cursor-pointer flex items-center gap-3 p-3 bg-[var(--color-surface)] hover:bg-[var(--color-primary)]/5 border border-transparent hover:border-[var(--color-primary)]/10 rounded-lg transition-all duration-200">
                <div className={`w-12 h-12 rounded-md ${skill.cover} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0`}>
                    <span className="font-black text-xs opacity-80">{skill.name.slice(0, 2)}</span>
                </div>
                <div className="flex flex-col truncate overflow-hidden">
                    <h3 className="font-bold truncate text-sm">{skill.name}</h3>
                    <p className="text-[10px] uppercase font-bold opacity-50 truncate">{skill.category}</p>
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  );
}
