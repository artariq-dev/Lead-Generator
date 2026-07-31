"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildTypes } from "@/lib/build/config";
import { calculateBuildResult, type BuildAnswer } from "@/lib/build/engine";
import { RecommendationCard, recommendations } from "@/components/build/RecommendationCard";
import { siteConfig } from "@/lib/metadata";
import { use } from "react";

interface Props {
  params: Promise<{ type: string }>;
}

function ReportContent({ type }: { type: string }) {
  const config = buildTypes[type];
  if (!config) notFound();

  const [copied, setCopied] = useState(false);

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
  const nextSteps = recommendations[result.recommendation].nextSteps;

  function handleCopyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-16 pb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left — recommendation card */}
          <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
            <RecommendationCard result={result} />
          </div>

          {/* Right — next steps + CTA */}
          <div className="flex flex-col gap-4">
            {/* Next steps */}
            <div className="border border-gray-200 dark:border-gray-800 p-4 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                Next steps
              </h2>
              <ol className="space-y-2.5">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
                    1
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{nextSteps[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
                    2
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                      Send this over — I&apos;ll tell you exactly what I&apos;d do in your position.
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Build advice — ${config.name}`)}&body=${encodeURIComponent(`Hi,\n\nI just completed the ${config.name} build guide on your site and got the recommendation: "${result.recommendation}".\n\nI'd love a second opinion on the best path forward.\n\nThanks`)}`}
                      className="block text-center text-xs tracking-wider uppercase px-5 py-3 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]"
                    >
                      Email me →
                    </a>
                    <div className="flex items-center gap-1 mt-2">
                      <button
                        onClick={handleCopyEmail}
                        className="shrink-0 text-[10px] tracking-wider uppercase px-2 py-1.5 bg-blue-600 text-white pixel-btn shadow-[2px_2px_0px_#1d4ed8] cursor-pointer"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={siteConfig.email}
                        className="flex-1 min-w-0 text-[10px] font-bold px-2 py-1.5 border-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 focus:outline-none"
                      />
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <Link href="/build" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            ← Try a different build type
          </Link>
          <Link href="/audit" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            ← Audit existing software
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
