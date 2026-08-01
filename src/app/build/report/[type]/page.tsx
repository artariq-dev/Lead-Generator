"use client";

import { Suspense, use, useState } from "react";
import { useSearchParams, notFound } from "next/navigation";
import Link from "next/link";
import { buildTypes } from "@/lib/build/config";
import { calculateBuildResult, type BuildAnswer } from "@/lib/build/engine";
import { RecommendationCard, recommendations } from "@/components/build/RecommendationCard";
import { ReportHeader } from "@/components/ReportHeader";
import { buildReportTemplate, emailBodyWithIntro } from "@/lib/email-templates";
import { siteConfig } from "@/lib/metadata";

interface Props {
  params: Promise<{ type: string }>;
}

function ReportContent({ type }: { type: string }) {
  const config = buildTypes[type];
  if (!config) notFound();

  const [name, setName] = useState("");

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

  const emailBody = emailBodyWithIntro(
    name,
    `I just completed the ${config.name} build guide on your site and got the recommendation: "${result.recommendation}".`,
    reportBody,
  );

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
                  <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Send this over — I&apos;ll tell you exactly what I&apos;d do in your position.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
                    3
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Hit the button below — your email app opens with this report and your full build report already pasted in. Just press send.
                  </span>
                </li>
              </ol>

              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Build advice — ${config.name}`)}&body=${encodeURIComponent(emailBody)}`}
                className="mt-4 block text-center text-xs tracking-wider uppercase px-5 py-3 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]"
              >
                Send report →
              </a>
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
