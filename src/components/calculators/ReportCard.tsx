"use client";

import { motion } from "framer-motion";
import type { CalculatorResult } from "@/lib/calculators/engine";

const gradeConfig: Record<string, { color: string; label: string; summary: string; plain: string }> = {
  A: { color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", label: "Excellent", summary: "Tight ship. Keep it documented.", plain: "Your setup is solid. Most businesses at this level are spending efficiently and shipping reliably." },
  B: { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400", label: "Solid", summary: "Strong. A few edges to sharpen.", plain: "Good foundation with a few gaps. A targeted fix or two would meaningfully reduce risk and cost." },
  C: { color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400", label: "Fragile", summary: "Cracks showing. Some are costing you.", plain: "Visible cracks that are likely costing you money today — through waste, slow delivery, or undetected problems." },
  D: { color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400", label: "At Risk", summary: "Fix these before they become incidents.", plain: "Your setup has serious gaps. Left unaddressed, these typically turn into outages, data loss, or runaway costs." },
  F: { color: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400", label: "Critical", summary: "Bleeding money or trust. Act now.", plain: "This is actively costing you — in money, trust, or both. The longer this goes unfixed, the more expensive it gets." },
};

function blockColor(pct: number): string {
  if (pct >= 75) return "bg-emerald-500";
  if (pct >= 55) return "bg-amber-500";
  if (pct >= 35) return "bg-orange-500";
  return "bg-red-500";
}

function sev(pct: number): { label: string; badge: string } {
  if (pct >= 75) return { label: "Healthy", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" };
  if (pct >= 55) return { label: "Needs work", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" };
  if (pct >= 35) return { label: "At risk", badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" };
  return { label: "Critical", badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" };
}

const worstCategoryMessages: Record<string, string> = {
  attract: "If you don't know which channels bring in paying customers, you're spending money blind. That's money you could put back into the business.",
  capture: "Leads that go cold are deals you already paid to get. A small follow-up gap quietly costs you customers every single week.",
  automate: "Every hour spent on copy-paste and chasing is an hour you're not growing the business. This is the easiest place to win time back.",
  invest: "Marketing you can't measure is marketing you can't trust. If you don't know what works, you can't double down on what does.",
  speed: "Slow software is expensive software. Every second of waiting is a customer deciding whether you're worth the trouble.",
  stability: "Outages are silent customer losses. If you can't get back up fast, every minute down is trust you can't easily rebuild.",
  visibility: "If users find problems before you do, you're always one step behind. Silent failures are the most expensive kind.",
  capacity: "If you can't handle growth or recover data, you're one accident away from losing everything you've built.",
  onboarding: "If new customers can't figure it out on their own, you're losing them before they ever see what you offer.",
  usability: "Confusing software makes customers blame themselves — then leave. The fix is often smaller than you think.",
  mobile: "Most people use a phone. If it's awkward there, you're invisible to more than half your audience.",
  feedback: "If you can't hear what's annoying users, you can't fix it — and they'll stop telling you long before they leave.",
  protection: "A data leak you can't detect is a leak you can't contain. Trust takes years to build and seconds to lose.",
  access: "Unknown access is an open door. You can't protect data if you don't know who can reach it.",
  monitoring: "You can't respond to a threat you can't see. Unnoticed break-ins are the ones that hurt the most.",
  recovery: "Without a tested plan and backups, a bad day becomes a business-ending one. Hope is not a strategy.",
};

function getWorstCategory(result: CalculatorResult) {
  return result.categories.reduce((a, b) => (a.percentage < b.percentage ? a : b));
}

function Blocks({ pct, size }: { pct: number; size: "sm" | "lg" }) {
  const total = 10;
  const filled = Math.round((pct / 100) * total);
  const sq = size === "lg" ? "w-4 h-4" : "w-3 h-3";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, delay: 0.02 * i }}
          className={`${sq} shrink-0 ${i < filled ? blockColor(pct) : "bg-gray-200 dark:bg-gray-800"}`}
        />
      ))}
    </div>
  );
}

export function ReportCard({ result }: { result: CalculatorResult }) {
  const g = gradeConfig[result.grade] || gradeConfig.F;
  const worst = getWorstCategory(result);
  const atRiskCount = result.categories.filter((c) => c.percentage < 75).length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-center h-full gap-5"
    >
      <div>
        <div className="flex items-center gap-2 mb-2">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`text-base font-bold px-2 py-0.5 ${g.color}`}
          >
            {result.grade}
          </motion.span>
          <span className="text-sm font-bold text-gray-900 dark:text-white">{g.label}</span>
          <span className="text-sm text-gray-400">· {result.percentage}%</span>
        </div>

        <div className="mb-1">
          <Blocks pct={result.percentage} size="lg" />
        </div>

        <p className="text-xs text-gray-700 dark:text-gray-300 leading-snug mb-1">{g.plain}</p>

        <p className="text-[10px] text-gray-400 dark:text-gray-500">
          {atRiskCount > 0 ? `${atRiskCount} of ${result.categories.length} categories need attention` : "All categories look healthy"} · {result.overallScore}/{result.maxScore}
        </p>
      </div>

      <div className="space-y-2">
        {result.categories.map((cat, i) => {
          const s = sev(cat.percentage);
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.04 * i }}
            >
              <div className="flex items-center mb-1">
                <span className="text-xs font-bold text-gray-900 dark:text-white">{cat.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Blocks pct={cat.percentage} size="sm" />
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 shrink-0 ${s.badge}`}>{cat.percentage}% · {s.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-3">
        {worstCategoryMessages[worst.id] || g.summary}
      </p>
    </motion.div>
  );
}
