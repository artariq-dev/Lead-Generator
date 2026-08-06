"use client";

import { Suspense, use } from "react";
import { useSearchParams, notFound } from "next/navigation";
import Link from "next/link";
import { buildTypes } from "@/lib/build/config";
import { calculateBuildResult, type BuildAnswer } from "@/lib/build/engine";
import { RecommendationCard, recommendations } from "@/components/build/RecommendationCard";
import { ReportHeader } from "@/components/ReportHeader";
import { WhatHappensNext } from "@/components/WhatHappensNext";
import { buildReportTemplate, emailBodyWithIntro } from "@/lib/email-templates";
import { siteConfig } from "@/lib/metadata";

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
            Incomplete answers — looks like you didn&apos;t finish the questionnaire.
          </p>
          <Link href={`/build/${type}`} className="text-xs text-blue-600 dark:text-blue-400 underline">
            ← Start again
          </Link>
        </main>
      </div>
    );
  }

  const result = calculateBuildResult(type, answers);
  const rec = recommendations[result.recommendation];
  const nextSteps = rec.nextSteps;
  const reportBody = buildReportTemplate({
    configName: config.name,
    recTitle: rec.title,
    recSubtitle: rec.subtitle,
    why: rec.why,
    categories: result.categories,
  });

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-16 pb-16">
        <ReportHeader
          eyebrow={`Build Guide · ${config.name}`}
          title="Here's your path forward"
          subtitle="Based on your answers, here's what we'd recommend — and why."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left — recommendation card */}
          <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
            <RecommendationCard result={result} />
          </div>

          {/* Right — name + next steps + CTA */}
          <div className="flex flex-col gap-4">
            <WhatHappensNext
              buildMailtoHref={(name) => {
                const emailBody = emailBodyWithIntro(
                  name,
                  `I just completed the ${config.name} build guide on your site and got the recommendation: "${result.recommendation}".`,
                  reportBody,
                );
                return `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Build advice — ${config.name}`)}&body=${encodeURIComponent(emailBody)}`;
              }}
              urgencyLine={nextSteps[0]}
            />
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
