"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import BackButton from "../components/BackButton";

export default function ContactPage() {
  return (
    <section className="section min-h-screen px-4 md:px-6 py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        <BackButton />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="font-display text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-6">
            Let's Talk
          </h1>
          <p className="text-base md:text-lg font-medium opacity-80">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card"
          >
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 border-[var(--color-primary)] bg-[var(--color-body)] p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-shadow"
                  placeholder="YOUR NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-2 border-[var(--color-primary)] bg-[var(--color-body)] p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-shadow"
                  placeholder="YOUR@EMAIL.COM"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-2 border-[var(--color-primary)] bg-[var(--color-body)] p-3 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-shadow resize-none"
                  placeholder="WHAT'S ON YOUR MIND?"
                />
              </div>
              <button type="submit" className="btn w-full text-center uppercase tracking-wider">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col gap-4 justify-center"
          >
            <div className="card text-center">
              <h3 className="font-display text-xl font-black uppercase mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center justify-center gap-3 bg-white hover:bg-gray-100"
                >
                  <Github className="w-6 h-6" /> GitHub
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center justify-center gap-3 bg-black text-white border-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                  X
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center justify-center gap-3 bg-[#0077B5] text-white border-black"
                >
                  <Linkedin className="w-6 h-6" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
