"use client";

import { Suspense, useState } from "react";
import { notFound, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { calculateScore, type Answer } from "@/lib/calculators/engine";
import { ReportCard } from "@/components/calculators/ReportCard";
import { ReportHeader } from "@/components/ReportHeader";
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

  const [name, setName] = useState("");

  const emailBody = emailBodyWithIntro(
    name,
    `I just completed the ${config.name} audit on your site and got the grade: "${result.grade} (${result.percentage}%)".`,
    baseBody,
  );

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-16 pb-12">
        <ReportHeader
          eyebrow={`Software Audit · ${config.name}`}
          title="Here's your score"
          subtitle="Based on your answers, here's where your setup stands — and what to fix first."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Left — score card */}
          <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
            <ReportCard result={result} />
          </div>

          {/* Right — action panel */}
          <div className="flex flex-col gap-4">
            {/* Name field */}
            <div className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-1.5">
                Your name <span className="text-gray-400 font-normal normal-case tracking-normal">— so I know who to reply to</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Sarah"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* What happens next */}
            <WhatHappensNext
              mailtoHref={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`${config.name} — Grade ${result.grade} (${result.percentage}%)${name ? ` — ${name}` : ""}`)}&body=${encodeURIComponent(emailBody)}`}
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
