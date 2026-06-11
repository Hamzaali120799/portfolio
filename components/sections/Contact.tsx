"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { FadeInUp } from "@/components/ui/FadeInUp";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    handle: "hamzaali.0799@gmail.com",
    href: "mailto:hamzaali.0799@gmail.com",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-400/10",
    border: "border-rose-200 dark:border-rose-400/20 hover:border-rose-300 dark:hover:border-rose-400/40",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "hamza-ali-52a245226",
    href: "https://linkedin.com/in/hamza-ali-52a245226",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-400/10",
    border: "border-blue-200 dark:border-blue-400/20 hover:border-blue-300 dark:hover:border-blue-400/40",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "Hamzaali120799",
    href: "https://github.com/Hamzaali120799",
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-700/40",
    border: "border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-navy">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <div className="mb-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Get In Touch
            </h2>
            <div className="w-14 h-1 bg-sky-500 dark:bg-accent rounded-full mx-auto" />
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
            Open to new opportunities. Whether it&apos;s a product you&apos;re building or a problem
            you&apos;re trying to solve. Let&apos;s talk.
          </p>
        </FadeInUp>

        <div className="grid sm:grid-cols-3 gap-5">
          {CONTACT_CARDS.map(
            ({ icon: Icon, label, handle, href, color, bg, border }, i) => (
              <FadeInUp key={label} delay={i * 0.1}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={`group flex flex-col items-center gap-4 p-7 bg-white dark:bg-slate-800/60 border ${border} rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1 duration-300`}
                >
                  <div className={`p-4 rounded-2xl ${bg} border ${border} transition-all`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-200 break-all">
                      {handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 ${color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </a>
              </FadeInUp>
            )
          )}
        </div>
      </div>
    </section>
  );
}
