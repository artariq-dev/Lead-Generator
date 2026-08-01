"use client";

import { STEPS } from "@/lib/steps";

export function WhatHappensNext({
  mailtoHref,
  heading = "What happens next",
}: {
  mailtoHref: string;
  heading?: string;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 p-4 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
      <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
        {heading}
      </h2>
      <ol className="space-y-2.5 mb-4">
        {STEPS.slice(0, 3).map(({ n, text }, i) => (
          <li key={n} className="flex items-start gap-3">
            <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
              {n}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {i === 0 ? (
                <>Hit the button below — your email app opens with this report and your full build report already pasted in. Just press send.</>
              ) : (
                text
              )}
            </span>
          </li>
        ))}
      </ol>

      <a
        href={mailtoHref}
        className="block text-center text-xs tracking-wider uppercase px-5 py-3 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]"
      >
        Send report →
      </a>
    </div>
  );
}
