"use client";

import { ExternalLink } from "lucide-react";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Dot + vertical line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div className="w-4 h-4 rounded-full border-2 border-sky-400 bg-slate-50 dark:bg-navy ring-4 ring-sky-400/10 z-10 mt-1.5" />
        {!isLast && (
          <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-sky-400/40 to-slate-700/20" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-14 flex-1 min-w-0 ${isLast ? "pb-4" : ""}`}>
        {/* Header */}
        <div className="mb-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {experience.company}
            </h3>
            <span className="text-sky-500 dark:text-accent font-medium text-sm">
              {experience.role}
            </span>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-mono mt-0.5">
            {experience.period}
          </p>
        </div>

        {/* Company-level bullets */}
        {experience.companyBullets && experience.companyBullets.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {experience.companyBullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="text-sky-500 dark:text-accent mt-0.5 flex-shrink-0 text-base leading-none">
                  ▹
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Project subsections */}
        {experience.projects && experience.projects.length > 0 && (
          <div className="mt-5 space-y-6">
            {experience.projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-2 h-2 rounded-sm bg-sky-400/60 dark:bg-accent/60 rotate-45 flex-shrink-0" />
                  <h4 className="text-sm font-semibold text-sky-600 dark:text-accent/90">
                    {project.name}
                  </h4>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-500 dark:hover:text-accent transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <ul className="space-y-2.5">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      <span className="text-sky-500 dark:text-accent mt-0.5 flex-shrink-0 text-base leading-none">
                        ▹
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
