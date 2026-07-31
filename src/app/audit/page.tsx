import type { Metadata } from "next";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { DotIcon } from "@/components/DotIcon";

export const metadata: Metadata = {
  title: "Software Audit",
  description: "Pick your area — cloud, fullstack, or pipeline. 8 questions. Instant scorecard. Find out what's wrong and what to fix first.",
};

const cardMeta: Record<string, {
  accent: string;
  accentBorder: string;
  shadow: string;
  badge: string;
  badgeColor: string;
  twColor: string;
}> = {
  cloud: {
    accent:       "bg-blue-500",
    accentBorder: "hover:border-blue-400 dark:hover:border-blue-500",
    shadow:       "hover:shadow-[5px_5px_0px_#3b82f6]",
    badge:        "High Stakes",
    badgeColor:   "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    twColor:      "text-blue-400 dark:text-blue-500",
  },
  fullstack: {
    accent:       "bg-violet-500",
    accentBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    shadow:       "hover:shadow-[5px_5px_0px_#8b5cf6]",
    badge:        "Popular",
    badgeColor:   "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    twColor:      "text-violet-400 dark:text-violet-500",
  },
  frontend: {
    accent:       "bg-emerald-500",
    accentBorder: "hover:border-emerald-400 dark:hover:border-emerald-500",
    shadow:       "hover:shadow-[5px_5px_0px_#10b981]",
    badge:        "Quick Win",
    badgeColor:   "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    twColor:      "text-emerald-400 dark:text-emerald-500",
  },
  backend: {
    accent:       "bg-red-500",
    accentBorder: "hover:border-red-400 dark:hover:border-red-500",
    shadow:       "hover:shadow-[5px_5px_0px_#ef4444]",
    badge:        "Critical",
    badgeColor:   "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    twColor:      "text-red-400 dark:text-red-500",
  },
  crm: {
    accent:       "bg-amber-500",
    accentBorder: "hover:border-amber-400 dark:hover:border-amber-500",
    shadow:       "hover:shadow-[5px_5px_0px_#f59e0b]",
    badge:        "Revenue",
    badgeColor:   "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    twColor:      "text-amber-400 dark:text-amber-500",
  },
  pipeline: {
    accent:       "bg-orange-500",
    accentBorder: "hover:border-orange-400 dark:hover:border-orange-500",
    shadow:       "hover:shadow-[5px_5px_0px_#f97316]",
    badge:        "Speed",
    badgeColor:   "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    twColor:      "text-orange-400 dark:text-orange-500",
  },
  growth: {
    accent:       "bg-teal-500",
    accentBorder: "hover:border-teal-400 dark:hover:border-teal-500",
    shadow:       "hover:shadow-[5px_5px_0px_#14b8a6]",
    badge:        "Scale Up",
    badgeColor:   "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    twColor:      "text-teal-400 dark:text-teal-500",
  },
};

export default function AssessPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-blue-400 dark:text-blue-600 shrink-0">
            <DotIcon id="audit" color="currentColor" />
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Benchmark your intuition. Test your setup.
          </h1>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          Pick the area that feels shakiest — you'll have a scored report in 2 minutes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.values(calculators).map((calc) => {
            const meta = cardMeta[calc.id];
            if (!meta) return null;
            return (
              <Link
                key={calc.id}
                href={`/audit/${calc.id}`}
                className={`group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] ${meta.shadow} ${meta.accentBorder} hover:-translate-y-1 transition-all duration-200`}
              >
                {/* Accent top bar — thickens on hover */}
                <div className={`h-1.5 group-hover:h-2.5 w-full ${meta.accent} transition-all duration-200`} />

                <div className="flex flex-col flex-1 p-4">
                  {/* Dot-art icon */}
                  <div className="mb-3">
                    <span className={meta.twColor}><DotIcon id={calc.id} color="currentColor" /></span>
                  </div>

                  {/* Name */}
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2">
                    {calc.name}
                  </h2>

                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {calc.categories.map((c) => (
                      <span key={c.id} className="text-[9px] px-1 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        {c.label}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 ${meta.badgeColor}`}>
                      {meta.badge}
                    </span>
                    <span className="text-lg text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
