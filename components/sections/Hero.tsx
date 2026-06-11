"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ChevronDown, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const TYPING_TEXT = "Hi, I'm Hamza Ali";

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (displayed.length < TYPING_TEXT.length) {
      const t = setTimeout(
        () => setDisplayed(TYPING_TEXT.slice(0, displayed.length + 1)),
        65
      );
      return () => clearTimeout(t);
    } else {
      setContentVisible(true);
    }
  }, [displayed]);

  useEffect(() => {
    const t = setInterval(() => setCursor((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-slate-50 dark:bg-navy overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-56 -right-56 w-[600px] h-[600px] bg-sky-400/8 dark:bg-sky-400/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-56 -left-56 w-[500px] h-[500px] bg-sky-400/5 dark:bg-sky-400/4 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sky-400/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl w-full">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium"
        >
          <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Typing headline */}
        <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
          {displayed}
          <span
            className={`ml-0.5 inline-block w-[3px] h-[0.85em] bg-sky-500 dark:bg-accent align-middle translate-y-[-0.05em] rounded-sm ${
              cursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-75`}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-500 dark:text-accent mb-6"
        >
          Full Stack Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          I build production-grade web systems, from real-time backends to pixel-perfect frontends.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-7 py-3.5 bg-sky-500 dark:bg-accent hover:bg-sky-600 dark:hover:bg-accent-hover text-white dark:text-navy font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/25 dark:shadow-accent/20"
          >
            <Eye className="w-4 h-4" />
            View My Work
          </button>
          <a
            href="/HamzaAli_resume.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 border-2 border-sky-400/60 dark:border-accent/50 text-sky-600 dark:text-accent hover:bg-sky-50 dark:hover:bg-accent/10 font-semibold rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={contentVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2"
        >
          {[
            {
              href: "https://github.com/Hamzaali120799",
              icon: GithubIcon,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com/in/hamza-ali-52a245226",
              icon: LinkedinIcon,
              label: "LinkedIn",
            },
            {
              href: "mailto:hamzaali.0799@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="p-3 rounded-xl text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-accent hover:bg-sky-50 dark:hover:bg-accent/10 transition-all hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={contentVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-sky-500 dark:hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
