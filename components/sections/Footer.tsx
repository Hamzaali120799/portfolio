import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          Designed &amp; Built by{" "}
          <span className="text-sky-500 dark:text-accent font-medium">Hamza Ali</span>{" "}
          &copy; {year}
        </p>

        <div className="flex items-center gap-3">
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
              className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
