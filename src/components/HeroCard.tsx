"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { iconColor, type IconId } from "@/lib/discover-problems";

export interface HeroCardProps {
  href: string;
  label: string;
  iconId: string;
  tags: string[];
  title: string;
  body: string;
  cta: string;
}

const DECORATIONS: Record<string, ReactNode> = {
  audit: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_60%)]" />
      <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
        <div className="w-10 h-2.5 rounded-sm bg-emerald-500/30" />
        <div className="w-14 h-2.5 rounded-sm bg-emerald-500/20" />
        <div className="w-8 h-2.5 rounded-sm bg-emerald-500/35" />
        <div className="w-16 h-2.5 rounded-sm bg-emerald-500/15" />
      </div>
      <svg className="absolute bottom-10 left-10 w-16 h-16 text-emerald-500/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full border border-emerald-500/20" />
    </>
  ),
  build: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_60%)]" />
      <div className="absolute top-5 right-5 grid grid-cols-3 gap-1.5 rotate-3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="w-5 h-5 rounded-[4px] border border-blue-500/30" />
        ))}
      </div>
      <svg className="absolute -bottom-2 -left-2 w-28 h-28 text-blue-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17H7A5 5 0 017 7h2" strokeLinecap="round" />
        <path d="M15 7h2a5 5 0 010 10h-2" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
      </svg>
    </>
  ),
  diagnose: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_60%)]" />
      <svg className="absolute -top-16 -right-16 w-52 h-52 text-purple-500/25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" strokeLinecap="round" />
        <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
      </svg>
      <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-purple-500/25" />
      <div className="absolute bottom-12 right-16 w-8 h-8 rounded-full border border-purple-500/15" />
    </>
  ),
};

export function HeroCard({
  href,
  label,
  iconId,
  tags,
  title,
  body,
  cta,
}: HeroCardProps) {
  const decoration = DECORATIONS[iconId] ?? DECORATIONS.audit;
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border border-gray-200  bg-white  shadow-[0_1px_3px_rgba(0,0,0,0.06)]  hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:border-blue-600  hover:bg-blue-600 transition-all duration-300 p-6 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-80 group-hover:opacity-0">
        {decoration}
      </div>

      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center justify-center w-10 h-10 bg-blue-50 transition-colors duration-300 group-hover:bg-white">
            <span className={iconColor[iconId as IconId]}>
              <Icon id={iconId} size={20} />
            </span>
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400  transition-colors duration-300 group-hover:text-blue-100">
            {label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900  leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500  leading-relaxed transition-colors duration-300 group-hover:text-blue-100">
          {body}
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100  transition-colors duration-300 group-hover:border-white/20">
        <span className="text-sm font-semibold text-gray-900  transition-colors duration-300 group-hover:text-white">
          {cta}
        </span>
        <span className="relative flex items-center justify-center w-16 h-16">
          <ArrowRight
            size={36}
            className="text-emerald-600 absolute transition-opacity duration-200 group-hover:opacity-0"
          />
          <ArrowUpRight
            size={56}
            className="text-white absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </span>
      </div>
    </Link>
  );
}
