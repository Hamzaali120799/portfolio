"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col h-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm hover:border-sky-300/50 dark:hover:border-accent/30 hover:shadow-lg hover:shadow-sky-100/50 dark:hover:shadow-accent/5 transition-all duration-300"
    >
      {/* Top row: name + badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
          {project.name}
        </h3>
        {project.live ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-400/20 rounded-full text-xs font-medium hover:bg-emerald-100 dark:hover:bg-emerald-400/20 transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
            Live
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700/60 rounded-full text-xs font-medium">
            <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full" />
            Not Live
          </span>
        )}
      </div>

      {/* Company badge */}
      <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-accent/10 text-sky-600 dark:text-accent text-xs font-medium border border-sky-100 dark:border-accent/20 mb-3">
        {project.company}
      </span>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 text-xs rounded-md font-mono border border-slate-200 dark:border-slate-700/40"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
