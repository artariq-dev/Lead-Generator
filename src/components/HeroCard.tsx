"use client";

import Link from "next/link";
import { DotIcon } from "@/components/DotIcon";

export interface HeroCardAccent {
  icon: string;
  badge?: string;
  arrow: string;
  underline?: string;
}

export interface HeroCardProps {
  href: string;
  label: string;
  badge?: string;
  iconId: string;
  accent: HeroCardAccent;
  tags: string[];
  title: string;
  body: string;
  cta: string;
}

export function HeroCard({
  href,
  label,
  badge,
  iconId,
  accent,
  tags,
  title,
  body,
  cta,
}: HeroCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gray-900 dark:bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
      />
      <div className="relative z-10 h-1.5 bg-gray-900 dark:bg-white transition-colors duration-500 group-hover:bg-white dark:group-hover:bg-gray-900 w-full" />
      <div className="relative z-10 flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white underline decoration-2 underline-offset-4 transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900 ${accent.underline ?? ""}`}>
            {label}
          </span>
          {badge && (
            <span
              className={`text-[8px] font-bold uppercase tracking-widest border px-2 py-0.5 transition-colors duration-500 ${accent.badge}`}
            >
              {badge}
            </span>
          )}
        </div>
        <div className="flex items-start gap-3">
          <span className={`shrink-0 transition-colors duration-500 ${accent.icon}`}>
            <DotIcon id={iconId} color="currentColor" scale={1.5} />
          </span>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] px-1.5 py-0.5 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-800 transition-colors duration-500 group-hover:bg-white group-hover:text-gray-900 dark:group-hover:bg-gray-900 dark:group-hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900 leading-snug mb-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:text-gray-300 dark:group-hover:text-gray-500 leading-relaxed">
            {body}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500 group-hover:border-gray-700 dark:group-hover:border-gray-300 justify-end">
          <span className="text-xs font-bold text-white dark:text-gray-900 tracking-wider px-4 bg-gray-800 dark:bg-gray-200 inline-flex items-center transition-colors duration-500 group-hover:bg-white group-hover:text-gray-900 dark:group-hover:bg-gray-900 dark:group-hover:text-white">
            {cta}
            <span className={`ml-3 -mr-4 px-3 py-2.5 text-white ${accent.arrow}`}>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
