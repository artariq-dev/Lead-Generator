"use client";

import { motion } from "framer-motion";
import type { CalculatorResult } from "@/lib/calculators/engine";

const gradeColor: Record<string, string> = {
  A: "text-emerald-600 dark:text-emerald-400",
  B: "text-blue-600 dark:text-blue-400",
  C: "text-amber-600 dark:text-amber-400",
  D: "text-orange-600 dark:text-orange-400",
  F: "text-red-600 dark:text-red-400",
};

const barColor: Record<string, string> = {
  A: "bg-emerald-500",
  B: "bg-blue-500",
  C: "bg-amber-500",
  D: "bg-orange-500",
  F: "bg-red-500",
};

export function ReportCard({ result }: { result: CalculatorResult }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <div className="flex items-end gap-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Your Score</h1>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            className={`text-5xl font-bold ${gradeColor[result.grade] || ""}`}
          >
            {result.grade}
          </motion.span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {result.percentage}% · {result.overallScore} of {result.maxScore} points
        </p>
      </div>

      <div className="grid gap-4 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs tracking-wider uppercase text-gray-500">Overall</span>
            <span className="text-xs text-gray-500">{result.percentage}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${result.percentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className={`h-full ${barColor[result.grade] || "bg-blue-500"}`}
            />
          </div>
        </div>

        {result.categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            className="border border-gray-200 dark:border-gray-800 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-900 dark:text-white">{cat.label}</span>
              <span className="text-xs text-gray-500">{cat.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${cat.percentage}%` }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + i * 0.1 }}
                className="h-full bg-blue-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
