"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ReportHeader } from "@/components/ReportHeader";
import { WhatHappensNext } from "@/components/WhatHappensNext";
import { emailBodyWithIntro, painPointsTemplate } from "@/lib/email-templates";
import { painLabelsBusiness, parentLabelsBusiness } from "@/lib/pain-points";
import { siteConfig } from "@/lib/metadata";

function AnalyzeContent() {
  const sp = useSearchParams();
  const pains = sp.get("pains")?.split(",").filter(Boolean) ?? [];
  const fullTemplate = painPointsTemplate(pains);

  // Group selected pains by parent label
  const grouped = new Map<string, string[]>();
  pains.forEach((id) => {
    const parent = parentLabelsBusiness[id] || "Other";
    if (!grouped.has(parent)) grouped.set(parent, []);
    grouped.get(parent)!.push(id);
  });

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-16 pb-12">
        {pains.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No problems selected.{" "}
            <Link href="/" className="text-blue-600 underline">Go back and select some.</Link>
          </p>
        ) : (
          <>
            {/* Confirmation header */}
            <ReportHeader
              eyebrow="Diagnose · Pain Point Report"
              title={`You flagged ${pains.length} problem${pains.length !== 1 ? "s" : ""}.`}
              subtitle="Email this over — no calls, no forms, no commitment."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Left — selected problems */}
              <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                  Problems flagged
                </h2>
                {Array.from(grouped.entries()).map(([parent, ids]) => (
                  <div key={parent} className="mb-3 last:mb-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">{parent}</p>
                    <ul className="space-y-1">
                      {ids.map((id) => (
                        <li key={id} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-red-500 mt-0.5">•</span>
                          {painLabelsBusiness[id] || id}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right — what happens next */}
              <div className="flex flex-col gap-4">
                <WhatHappensNext
                  heading="Let&apos;s fix them one by one..."
                  buildMailtoHref={(name) => {
                    const emailBody = emailBodyWithIntro(
                      name,
                      `I've flagged ${pains.length} problem${pains.length !== 1 ? "s" : ""} with our software.`,
                      fullTemplate,
                    );
                    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(`${pains.length} problems flagged${name ? ` — ${name}` : ""}`)}&body=${encodeURIComponent(emailBody)}`;
                  }}
                  urgencyLine={
                    pains.length >= 5
                      ? `You flagged ${pains.length} problems — that's a lot of friction dragging on your business. Let's fix the most critical ones first.`
                      : pains.length >= 2
                      ? `You flagged ${pains.length} problems. Each one is costing you time or money — I can tell you exactly where to start.`
                      : `Even one unresolved problem can stall growth. I can help you cut through it fast.`
                  }
                />
              </div>
            </div>

            {/* Secondary CTA + back */}
            <div className="flex flex-col gap-2">
              <Link href="/audit" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                ← Want a scored report instead
              </Link>
              <Link href="/" className="text-xs text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                ← Back
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default function AnalyzePage() {
  return (
    <Suspense fallback={<div className="flex flex-1 min-h-screen items-center justify-center"><p className="text-sm text-gray-500">Loading...</p></div>}>
      <AnalyzeContent />
    </Suspense>
  );
}
