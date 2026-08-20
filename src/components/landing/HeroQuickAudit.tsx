"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { AbstractPattern, type PatternVariant } from "@/components/AbstractPattern";
import { calculators, auditCardMeta } from "@/lib/calculators/config";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ORDER = ["growth", "performance", "ux", "security"] as const;

const ACCENTS: Record<string, string> = {
  growth: "text-emerald-600",
  performance: "text-blue-600",
  ux: "text-purple-600",
  security: "text-rose-600",
};

const ALT_PATHS = [
  {
    href: "/build",
    label: "Build",
    iconId: "build",
    title: "Got scattered ideas? Get a tailored build plan.",
    cta: "Get an instant plan",
    pattern: "memphis" as PatternVariant,
    patternColor: "text-blue-400",
  },
  {
    href: "/diagnose",
    label: "Diagnose",
    iconId: "diagnose",
    title: "Facing problems? Flag what hurts, get a summary.",
    cta: "Flag the problems",
    pattern: "contour" as PatternVariant,
    patternColor: "text-purple-400",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: EASE },
});

export function HeroQuickAudit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="w-full bg-white border border-gray-200 shadow-[0_24px_70px_rgba(30,64,175,0.12),0_8px_24px_rgba(0,0,0,0.06)] p-5 sm:p-6"
    >
      <div className="h-1 w-full bg-blue-600 mb-5" />

      <h2 className="text-sm lg:text-base font-bold text-gray-900 leading-snug mb-4">
        Which area of your software should we score?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {ORDER.map((id, i) => {
          const config = calculators[id];
          const badge = auditCardMeta[id];
          if (!config || !badge) return null;
          return (
            <motion.div key={id} {...fadeUp(0.15 + 0.07 * i)}>
              <Link
                href={`/audit/${id}`}
                className="group w-full flex items-center gap-3 px-3.5 py-3 border border-gray-200 text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-gray-300"
              >
                <span className={`flex items-center justify-center w-9 h-9 bg-gray-50 shrink-0 ${ACCENTS[id]}`}>
                  <Icon id={id} size={18} />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block text-sm font-bold text-gray-900 truncate">
                    {config.name}
                  </span>
                  <span className="block text-[10px] text-gray-400 truncate">
                    {badge}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  strokeWidth={3}
                  className="ml-auto shrink-0 text-emerald-600 transition-all duration-150 group-hover:text-blue-600 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="my-4 flex items-center gap-3" aria-hidden>
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">
          or
        </span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      {/* Build / Diagnose — black cards with abstract pattern overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {ALT_PATHS.map((path, i) => (
          <motion.div key={path.href} {...fadeUp(0.45 + 0.07 * i)}>
            <Link
              href={path.href}
              className="group relative flex flex-col h-full border border-gray-800 bg-black hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 p-4 overflow-hidden"
            >
              <AbstractPattern
                variant={path.pattern}
                className={`${path.patternColor} transition-opacity duration-300 opacity-100 group-hover:opacity-0`}
              />

              <div className="relative flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center justify-center w-9 h-9 bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    <Icon id={path.iconId} size={18} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 group-hover:text-blue-100">
                    {path.label}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-white leading-snug tracking-tight transition-colors duration-300">
                    {path.title}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between pt-3 border-t border-gray-800 transition-colors duration-300 group-hover:border-white/20">
                  <span className="text-xs font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {path.cta}
                  </span>
                  <ArrowRight
                    size={18}
                    strokeWidth={3}
                    className="shrink-0 text-emerald-500 transition-colors duration-200 group-hover:text-white"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-[10px] text-gray-500 leading-relaxed">
        8 questions → instant A–F scorecard → a personal reply within 24 hours.
        No sign-up, no spam, no upsell.
      </p>
    </motion.div>
  );
}
