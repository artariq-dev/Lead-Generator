import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";

interface MiniAuditCardProps {
  href: string;
  iconId: string;
  name: string;
  categories: string[];
  badge: string;
}

const DECORATIONS: Record<string, ReactNode> = {
  growth: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.4),transparent_60%)]" />
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full border border-emerald-400/30" />
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-emerald-400/20" />
      <svg className="absolute bottom-8 right-8 w-24 h-24 text-emerald-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
    </>
  ),
  performance: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.4),transparent_60%)]" />
      <svg className="absolute -top-14 -right-14 w-48 h-48 text-blue-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 17H7A5 5 0 017 7h2" strokeLinecap="round" />
        <path d="M15 7h2a5 5 0 010 10h-2" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
      </svg>
      <div className="absolute bottom-8 right-10 w-10 h-10 rounded-lg border border-blue-400/30 rotate-12" />
      <div className="absolute bottom-14 right-16 w-6 h-6 rounded-lg border border-blue-400/20 -rotate-12" />
    </>
  ),
  ux: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.4),transparent_60%)]" />
      <svg className="absolute -top-16 -right-16 w-52 h-52 text-purple-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 3H7a2 2 0 00-2 2v14a2 2 0 002 2h1" strokeLinecap="round" />
        <path d="M16 3h1a2 2 0 012 2v14a2 2 0 01-2 2h-1" strokeLinecap="round" />
        <line x1="12" y1="9" x2="12" y2="11" strokeLinecap="round" />
        <line x1="12" y1="15" x2="12" y2="17" strokeLinecap="round" />
      </svg>
      <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full border border-purple-400/30" />
      <div className="absolute bottom-12 right-16 w-8 h-8 rounded-full border border-purple-400/20" />
    </>
  ),
  security: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.4),transparent_60%)]" />
      <svg className="absolute -top-16 -right-16 w-48 h-48 text-rose-400/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute bottom-8 right-10 w-3 h-3 rounded-full bg-rose-400/50" />
      <div className="absolute bottom-6 right-14 w-1.5 h-1.5 rounded-full bg-rose-400/40" />
      <div className="absolute bottom-12 right-20 w-1 h-1 rounded-full bg-rose-400/30" />
    </>
  ),
};

export function MiniAuditCard({
  href,
  iconId,
  name,
  categories,
  badge,
}: MiniAuditCardProps) {
  const decoration = DECORATIONS[iconId] ?? DECORATIONS.performance;
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border border-gray-800 bg-black shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 p-4 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-70 group-hover:opacity-0">
        {decoration}
      </div>

      <div className="relative flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            <Icon id={iconId} size={16} />
          </span>
        </div>

        <h3 className="text-base font-bold text-white leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1">
          {categories.map((label) => (
            <span
              key={label}
              className="text-[10px] px-1.5 py-0.5 bg-gray-900 text-gray-400 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-800 transition-colors duration-300 group-hover:border-white/20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 group-hover:text-blue-100">
          {badge}
        </span>
        <span className="relative flex items-center justify-center w-8 h-8">
          <ArrowRight
            size={26}
            strokeWidth={3}
            className="text-emerald-600 absolute transition-opacity duration-200 group-hover:opacity-0"
          />
          <ArrowUpRight
            size={28}
            strokeWidth={3}
            className="text-white absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </span>
      </div>
    </Link>
  );
}
