"use client";

import { Suspense } from "react";
import { notFound, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { calculateScore, type Answer } from "@/lib/calculators/engine";
import { ReportCard, gradeConfig } from "@/components/calculators/ReportCard";
import { WhatHappensNext } from "@/components/WhatHappensNext";
import { emailBodyWithIntro, reportTemplate } from "@/lib/email-templates";
import { siteConfig } from "@/lib/metadata";

function ReportContent() {
  const { id } = useParams<{ id: string }>();
  const sp = useSearchParams();

  const config = calculators[id];
  if (!config) notFound();

  const answers: Answer[] = config.questions.map((q) => ({
    questionId: q.id,
    value: sp.get(q.id) || "",
  }));

  const result = calculateScore(id, answers);
  const baseBody = reportTemplate(config.name, result.grade, result.percentage, result.categories);
  const g = gradeConfig[result.grade] || gradeConfig.F;

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-20 pb-12">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
            Software Audit · {config.name}
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Here&apos;s where you stand
            </h1>
            <span className={`text-xs font-bold px-2 py-1 ${g.color}`}>
              {result.grade} · {result.percentage}%
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
            Your grade: {result.grade} ({result.percentage}%). Here&apos;s what&apos;s costing you — and what to fix first.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Left — score card */}
          <div className="lg:col-span-3 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 sm:p-6 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
            <ReportCard result={result} />
          </div>

          {/* Right — action panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <WhatHappensNext
              buildMailtoHref={(name) => {
                const emailBody = emailBodyWithIntro(
                  name,
                  `I just completed the ${config.name} audit on your site and got the grade: "${result.grade} (${result.percentage}%)".`,
                  baseBody,
                );
                return `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${config.name} — Grade ${result.grade} (${result.percentage}%)${name ? ` — ${name}` : ""}`)}&body=${encodeURIComponent(emailBody)}`;
              }}
              urgencyLine={
                result.percentage < 50
                  ? `Your ${config.name} setup scored ${result.percentage}% — that's a significant gap. Let me show you exactly what to fix first.`
                  : result.percentage < 75
                  ? `You scored ${result.percentage}% — there's real room to improve. I can walk you through the highest-impact changes.`
                  : `Solid score at ${result.percentage}% — but the remaining gaps are where the biggest gains usually hide.`
              }
            />
          </div>
        </div>

        {/* Try another calculator */}
        <div className="flex flex-col gap-2">
          <Link href="/audit" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            ← Try another evaluator
          </Link>
          <Link href="/audit" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            ← Back
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="flex flex-1 min-h-screen items-center justify-center"><p className="text-sm text-gray-500">Loading...</p></div>}>
      <ReportContent />
    </Suspense>
  );
}
