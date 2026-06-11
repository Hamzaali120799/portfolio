"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";

const STATS = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "3", label: "Companies" },
  { value: "1", label: "Passion: Building Things That Scale" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-navy">
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              About Me
            </h2>
            <div className="w-14 h-1 bg-sky-500 dark:bg-accent rounded-full" />
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <FadeInUp delay={0.1}>
            <div className="space-y-5">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Full Stack Engineer with 4+ years building production systems across
                matchmaking platforms, construction SaaS, HR tooling, and IoT dashboards.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I specialize in Node.js/NestJS backends and React/Next.js App Router
                frontends, working end-to-end in TypeScript, from schema design and API
                architecture to cloud deployment on AWS.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Comfortable owning features from scratch: real-time systems with Socket.IO,
                background job queues with Redis/BullMQ, and integrations across payments,
                logistics, and mapping APIs.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Node.js", "NestJS", "TypeScript", "Next.js", "PostgreSQL", "AWS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-sky-50 dark:bg-accent/10 text-sky-600 dark:text-accent border border-sky-200 dark:border-accent/20 rounded-lg text-sm font-mono"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeInUp>

          {/* Stats */}
          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 text-center hover:border-sky-300/50 dark:hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-bold text-sky-500 dark:text-accent mb-2 font-mono">
                    {value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
