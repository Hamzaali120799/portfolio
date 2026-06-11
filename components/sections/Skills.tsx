"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/lib/data";

const GROUP_ICONS: Record<string, string> = {
  Languages: "⌨️",
  Backend: "⚙️",
  Frontend: "🎨",
  Databases: "🗄️",
  ORMs: "🔗",
  "Cloud & Infra": "☁️",
  "Dev Tools": "🛠️",
  Integrations: "🔌",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInUp>
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Technical Skills
            </h2>
            <div className="w-14 h-1 bg-sky-500 dark:bg-accent rounded-full" />
          </div>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <FadeInUp key={group.label} delay={i * 0.07}>
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 hover:border-sky-200 dark:hover:border-accent/20 transition-all">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="text-base">{GROUP_ICONS[group.label] ?? "•"}</span>
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      mono={
                        group.label === "Languages" ||
                        group.label === "Backend" ||
                        group.label === "Frontend" ||
                        group.label === "ORMs"
                      }
                    />
                  ))}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
