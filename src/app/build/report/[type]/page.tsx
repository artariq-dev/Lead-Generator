"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildTypes } from "@/lib/build/config";
import { calculateBuildResult, type BuildAnswer } from "@/lib/build/engine";
import { RecommendationCard } from "@/components/build/RecommendationCard";
import { siteConfig } from "@/lib/metadata";
import { use } from "react";

interface Props {
  params: Promise<{ type: string }>;
}

function ReportContent({ type }: { type: string }) {
  const config = buildTypes[type];
  if (!config) notFound();

  const sp = useSearchParams();
  const answers: BuildAnswer[] = config.questions
    .map((q) => {
      const value = sp.get(q.id);
      return value ? { questionId: q.id, value } : null;
    })
    .filter((a): a is BuildAnswer => a !== null);

  if (answers.length < config.questions.length) {
    return (
      <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
        <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-16">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Incomplete answers — looks like you didn't finish the questionnaire.
          </p>
          <Link href={`/build/${type}`} className="text-xs text-blue-600 dark:text-blue-400 underline">
            ← Start again
          </Link>
        </main>
      </div>
    );
  }

  const result = calculateBuildResult(type, answers);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[10px] tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-1">
            Build Guide · {config.name}
          </p>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            Here's your path forward
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Based on your answers, here's what we'd recommend — and why.
          </p>
        </div>

        {/* Report card */}
        <div className="mb-8">
          <RecommendationCard result={result} />
        </div>

        {/* CTA */}
        <div className="border border-gray-200 dark:border-gray-800 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] mb-6">
          <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            Want a second opinion?
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Send this over — I'll tell you exactly what I'd do in your position. No sales pitch.
          </p>
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Build advice — ${config.name}`)}&body=${encodeURIComponent(`Hi,\n\nI just completed the ${config.name} build guide on your site and got the recommendation: "${result.recommendation}".\n\nI'd love a second opinion on the best path forward.\n\nThanks`)}`}
            className="block text-center text-xs tracking-wider uppercase px-5 py-3 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]"
          >
            Email Me This →
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/build" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            ← Try a different build type
          </Link>
          <Link href="/assess" className="text-xs text-gray-500 dark:text-gray-400 underline hover:text-blue-600 transition-colors">
            Audit existing software →
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function BuildReportPage({ params }: Props) {
  const { type } = use(params);
  return (
    <Suspense fallback={
      <div className="flex flex-1 min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">Building your recommendation...</p>
      </div>
    }>
      <ReportContent type={type} />
    </Suspense>
  );
}
