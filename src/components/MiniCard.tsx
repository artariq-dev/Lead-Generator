"use client";

import Link from "next/link";
import { DotIcon } from "@/components/DotIcon";

export interface MiniCardAccent {
  icon: string;
}

export interface MiniCardProps {
  href: string;
  label: string;
  iconId: string;
  accent: MiniCardAccent;
  tags: string[];
}

export function MiniCard({ href, label, iconId, accent, tags }: MiniCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900 shadow-[0_4px_16px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gray-900 dark:bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
      />
      <div className="relative z-10 flex flex-col flex-1 justify-between p-3.5 gap-3">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className={`shrink-0 transition-colors duration-500 ${accent.icon}`}>
              <DotIcon id={iconId} color="currentColor" scale={1.15} />
            </span>
            <span className="text-gray-400 dark:text-gray-600 text-base leading-none transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900">
              →
            </span>
          </div>
          <h3 className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900">
            {label}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[8px] px-1 py-0.5 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-800 transition-colors duration-500 group-hover:bg-white group-hover:text-gray-900 dark:group-hover:bg-gray-900 dark:group-hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
