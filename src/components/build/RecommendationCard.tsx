"use client";

import { motion } from "framer-motion";
import type { RecommendationResult } from "@/lib/build/engine";
import { recommendations, getInsight } from "@/lib/build/recommendations";

function ScoreBar({ percentage }: { percentage: number }) {
  const color =
    percentage >= 70
      ? "bg-emerald-500"
      : percentage >= 40
      ? "bg-amber-500"
      : "bg-red-400";
  const total = 10;
  const filled = Math.round((percentage / 100) * total);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, delay: 0.02 * i }}
          className={`w-3 h-3 shrink-0 ${i < filled ? color : "bg-gray-200 "}`}
        />
      ))}
    </div>
  );
}

export function RecommendationCard({ result }: { result: RecommendationResult }) {
  const rec = recommendations[result.recommendation];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      {/* Recommendation header */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`text-xs font-bold px-2 py-1 shrink-0 mt-0.5 ${rec.color}`}
          >
            Recommendation
          </motion.span>
          <div>
            <h2 className={`text-base font-bold ${rec.accent}`}>{rec.title}</h2>
            <p className="text-xs text-gray-500 ">{rec.subtitle}</p>
          </div>
        </div>
        <p className="text-xs text-gray-700  leading-relaxed">{rec.why}</p>
      </div>

      {/* Category breakdown */}
      <div className="border border-gray-200  p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
          How we got there
        </p>
        <div className="space-y-3">
          {result.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.06 * i }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-900 ">{cat.label}</span>
                <span className="text-[10px] text-gray-400">{cat.percentage}%</span>
              </div>
              <ScoreBar percentage={cat.percentage} />
              <p className="text-[10px] text-gray-500  mt-1 leading-snug">
                {getInsight(cat.id, cat.percentage)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools (if any) */}
      {rec.tools.length > 0 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            {result.recommendation === "no_code" ? "Tools to consider" : "Where to find help"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {rec.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] px-2 py-1 bg-gray-100  text-gray-600  border border-gray-200 "
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

    </motion.div>
  );
}
