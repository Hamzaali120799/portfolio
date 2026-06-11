"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { projects } from "@/lib/data";

const FILTERS = ["All", "Full Stack", "Backend", "Web3", "Mobile"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Projects
            </h2>
            <div className="w-14 h-1 bg-sky-500 dark:bg-accent rounded-full" />
          </div>
        </FadeInUp>

        {/* Filter tabs */}
        <FadeInUp delay={0.1}>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`flex-shrink-0 px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                  active === filter
                    ? "bg-sky-500 dark:bg-accent text-white dark:text-navy shadow-md shadow-sky-500/20 dark:shadow-accent/20"
                    : "bg-white dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-accent/40 hover:text-sky-600 dark:hover:text-accent"
                }`}
              >
                {filter}
                {filter === "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({projects.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            No projects in this category.
          </div>
        )}
      </div>
    </section>
  );
}
