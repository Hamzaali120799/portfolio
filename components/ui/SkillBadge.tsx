interface SkillBadgeProps {
  skill: string;
  mono?: boolean;
}

export function SkillBadge({ skill, mono = false }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-sky-400/50 dark:hover:border-accent/40 hover:text-sky-600 dark:hover:text-accent transition-colors ${
        mono ? "font-mono text-xs" : ""
      }`}
    >
      {skill}
    </span>
  );
}
