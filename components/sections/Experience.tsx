"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Work Experience
            </h2>
            <div className="w-14 h-1 bg-sky-500 dark:bg-accent rounded-full" />
          </div>
        </FadeInUp>

        <div className="relative">
          {experiences.map((exp, index) => (
            <FadeInUp key={exp.id} delay={index * 0.08}>
              <TimelineItem
                experience={exp}
                isLast={index === experiences.length - 1}
              />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
