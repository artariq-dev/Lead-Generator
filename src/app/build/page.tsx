import type { Metadata } from "next";
import Link from "next/link";
import { buildTypes } from "@/lib/build/config";
import { DotIcon } from "@/components/DotIcon";

export const metadata: Metadata = {
  title: "Build Guide",
  description: "Don't know where to start? Pick what you want to build. 8 questions to get a clear recommendation — no jargon, no fluff.",
};

const order = ["frontend", "backend", "fullstack", "cloud", "automation", "internal"];

const cardMeta: Record<string, {
  accent: string;
  accentBorder: string;
  shadow: string;
  badge: string;
  badgeColor: string;
  dotIconId: string;
  twColor: string;
}> = {
  frontend: {
    accent:       "bg-emerald-500",
    accentBorder: "hover:border-emerald-400 dark:hover:border-emerald-500",
    shadow:       "hover:shadow-[5px_5px_0px_#10b981]",
    badge:        "Most Requested",
    badgeColor:   "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    dotIconId:    "frontend",
    twColor:      "text-emerald-400 dark:text-emerald-500",
  },
  backend: {
    accent:       "bg-red-500",
    accentBorder: "hover:border-red-400 dark:hover:border-red-500",
    shadow:       "hover:shadow-[5px_5px_0px_#ef4444]",
    badge:        "Foundation",
    badgeColor:   "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    dotIconId:    "backend_build",
    twColor:      "text-red-400 dark:text-red-500",
  },
  fullstack: {
    accent:       "bg-violet-500",
    accentBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    shadow:       "hover:shadow-[5px_5px_0px_#8b5cf6]",
    badge:        "Common",
    badgeColor:   "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    dotIconId:    "fullstack",
    twColor:      "text-violet-400 dark:text-violet-500",
  },
  cloud: {
    accent:       "bg-blue-500",
    accentBorder: "hover:border-blue-400 dark:hover:border-blue-500",
    shadow:       "hover:shadow-[5px_5px_0px_#3b82f6]",
    badge:        "Infrastructure",
    badgeColor:   "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    dotIconId:    "cloud",
    twColor:      "text-blue-400 dark:text-blue-500",
  },
  automation: {
    accent:       "bg-amber-500",
    accentBorder: "hover:border-amber-400 dark:hover:border-amber-500",
    shadow:       "hover:shadow-[5px_5px_0px_#f59e0b]",
    badge:        "Save Time",
    badgeColor:   "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    dotIconId:    "automation",
    twColor:      "text-amber-400 dark:text-amber-500",
  },
  internal: {
    accent:       "bg-teal-500",
    accentBorder: "hover:border-teal-400 dark:hover:border-teal-500",
    shadow:       "hover:shadow-[5px_5px_0px_#14b8a6]",
    badge:        "Team",
    badgeColor:   "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    dotIconId:    "internal",
    twColor:      "text-teal-400 dark:text-teal-500",
  },
};

export default function BuildPage() {
  const ordered = order.map((id) => buildTypes[id]).filter(Boolean);
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-400 dark:text-emerald-600 shrink-0">
            <DotIcon id="build" color="currentColor" />
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            What do you want to build?
          </h1>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          Pick the type that matches your idea — you'll get a clear recommendation in 8 questions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ordered.map((bt) => {
            const meta = cardMeta[bt.id];
            if (!meta) return null;
            return (
              <Link
                key={bt.id}
                href={`/build/${bt.id}`}
                className={`group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] ${meta.shadow} ${meta.accentBorder} hover:-translate-y-1 transition-all duration-200`}
              >
                {/* Accent top bar — thickens on hover */}
                <div className={`h-1.5 group-hover:h-2.5 w-full ${meta.accent} transition-all duration-200`} />

                <div className="flex flex-col flex-1 p-4">
                  {/* Dot-art icon */}
                  <div className="mb-3">
                    <span className={meta.twColor}><DotIcon id={meta.dotIconId} color="currentColor" /></span>
                  </div>

                  {/* Name */}
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2">
                    {bt.name}
                  </h2>

                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bt.categories.map((c) => (
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
