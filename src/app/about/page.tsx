"use client";

import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

export default function AboutPage() {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior QA Engineer",
      company: "Tech Company",
      description: "Leading quality assurance initiatives and test automation strategies.",
    },
    {
      year: "2021 - 2023",
      title: "QA Engineer",
      company: "Software Startup",
      description: "Developed comprehensive test suites and improved testing processes.",
    },
    {
      year: "2019 - 2021",
      title: "Junior QA Engineer",
      company: "Digital Agency",
      description: "Started career in quality assurance and web testing.",
    },
  ];

  const skills = [
    "Manual Testing",
    "Test Automation",
    "Selenium",
    "Cypress",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "API Testing",
    "Performance Testing",
    "CI/CD",
    "Git",
  ];

  return (
    <section className="section min-h-screen px-4 md:px-6 py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 md:mb-8">
          <BackButton />
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            About Me
          </h1>
          <p className="text-lg md:text-xl font-bold text-[var(--color-primary)] opacity-80">
            QA Engineer & Web Developer
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="card mb-12 md:mb-16 p-6 md:p-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">
            👋 Hello!
          </h2>
          <div className="space-y-4 text-base md:text-lg font-medium opacity-90">
            <p>
              I'm Emil Wardana, a passionate QA Engineer and Web Developer dedicated to building
              quality software and ensuring exceptional user experiences.
            </p>
            <p>
              With expertise in both manual and automated testing, I bridge the gap between
              development and quality assurance. I love creating robust test strategies and
              building web applications that users enjoy.
            </p>
            <p>
              When I'm not testing or coding, you'll find me exploring new technologies,
              contributing to open source, or sharing knowledge with the tech community.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8">
            📅 Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="card p-6 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--color-primary)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-display text-lg md:text-xl font-black uppercase">
                    {item.title}
                  </h3>
                  <span className="text-sm font-bold opacity-70 mt-1 md:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="font-bold text-[var(--color-accent)] mb-2">{item.company}</p>
                <p className="text-sm md:text-base opacity-80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8">
            🛠️ Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                className="inline-block px-4 py-2 border-2 border-[var(--color-primary)] bg-[var(--color-surface)] font-bold text-sm uppercase shadow-[2px_2px_0px_0px_var(--color-primary)] hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:-translate-y-1 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
