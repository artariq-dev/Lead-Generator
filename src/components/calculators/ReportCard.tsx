"use client";

import { motion } from "framer-motion";
import type { CalculatorResult } from "@/lib/calculators/engine";

export const gradeConfig: Record<string, { color: string; label: string; summary: string; plain: string }> = {
  A: { color: "bg-emerald-100 text-emerald-700  ", label: "Excellent", summary: "Tight ship. Keep it documented.", plain: "Your setup is solid. Most businesses at this level are spending efficiently and shipping reliably." },
  B: { color: "bg-blue-100 text-blue-700  ", label: "Solid", summary: "Strong. A few edges to sharpen.", plain: "Good foundation with a few gaps. A targeted fix or two would meaningfully reduce risk and cost." },
  C: { color: "bg-amber-100 text-amber-700  ", label: "Fragile", summary: "Cracks showing. Some are costing you.", plain: "Visible cracks that are likely costing you money today — through waste, slow delivery, or undetected problems." },
  D: { color: "bg-orange-100 text-orange-700  ", label: "At Risk", summary: "Fix these before they become incidents.", plain: "Your setup has serious gaps. Left unaddressed, these typically turn into outages, data loss, or runaway costs." },
  F: { color: "bg-red-100 text-red-700  ", label: "Critical", summary: "Bleeding money or trust. Act now.", plain: "This is actively costing you — in money, trust, or both. The longer this goes unfixed, the more expensive it gets." },
};

function blockColor(pct: number): string {
  if (pct >= 75) return "bg-emerald-500";
  if (pct >= 55) return "bg-amber-500";
  if (pct >= 35) return "bg-orange-500";
  return "bg-red-500";
}

function barColor(pct: number): string {
  if (pct >= 75) return "bg-emerald-500";
  if (pct >= 55) return "bg-amber-500";
  if (pct >= 35) return "bg-orange-500";
  return "bg-red-500";
}

function sev(pct: number): { label: string; badge: string } {
  if (pct >= 75) return { label: "Healthy", badge: "bg-emerald-100 text-emerald-700  " };
  if (pct >= 55) return { label: "Needs work", badge: "bg-amber-100 text-amber-700  " };
  if (pct >= 35) return { label: "At risk", badge: "bg-orange-100 text-orange-700  " };
  return { label: "Critical", badge: "bg-red-100 text-red-700  " };
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
          className={`${sq} shrink-0 ${i < filled ? blockColor(pct) : "bg-gray-200 "}`}
        />
      ))}
    </div>
  );
}

export function ReportCard({ result }: { result: CalculatorResult }) {
  const g = gradeConfig[result.grade] || gradeConfig.F;
  const worst = getWorstCategory(result);
  const atRiskCount = result.categories.filter((c) => c.percentage < 75).length;
  const sorted = [...result.categories].sort((a, b) => a.percentage - b.percentage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col h-full gap-6"
    >
      {/* Verdict header */}
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 12 }}
          className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-gray-900  shadow-[0_8px_24px_rgba(0,0,0,0.2)]  shrink-0"
        >
          <span className="text-5xl sm:text-6xl font-black text-white ">
            {result.grade}
          </span>
        </motion.div>
        <div className="min-w-0">
          <p className="text-base sm:text-lg font-bold text-gray-900  leading-tight">{g.label}</p>
          <p className="text-sm font-bold text-gray-900 ">
            {result.percentage}%{" "}
            <span className="text-[10px] font-normal text-gray-400">
              · {result.overallScore}/{result.maxScore} points
            </span>
          </p>
          <p className="text-[10px] text-gray-400  mt-0.5">
            {atRiskCount > 0
              ? `${atRiskCount} of ${result.categories.length} categories need attention`
              : "All categories look healthy"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 shrink-0">Overall</span>
        <Blocks pct={result.percentage} size="lg" />
      </div>

      <p className="text-xs text-gray-700  leading-relaxed">{g.plain}</p>

      {/* Breakdown — worst first */}
      <div className="space-y-3">
        {sorted.map((cat, i) => {
          const s = sev(cat.percentage);
          const isWorst = cat.id === worst.id;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.04 * i }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-900  flex items-center gap-1.5 truncate">
                  {cat.label}
                  {isWorst && (
                    <span className="text-[8px] font-bold uppercase tracking-wider px-1 py-0.5 bg-red-100 text-red-700   shrink-0">
                      Fix first
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-bold text-gray-400 shrink-0 ml-2">{cat.percentage}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 ">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
                    className={`h-2 ${barColor(cat.percentage)}`}
                  />
                </div>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 shrink-0 ${s.badge}`}>{s.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Start here callout */}
      <div className="border-l-4 border-red-500 bg-red-50  p-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-red-600  mb-1">
          Start here · {worst.label}
        </p>
        <p className="text-[10px] text-gray-700  leading-relaxed">
          {worstCategoryMessages[worst.id] || g.summary}
        </p>
      </div>
    </motion.div>
  );
}
