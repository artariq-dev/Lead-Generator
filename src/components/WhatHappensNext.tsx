"use client";

import { useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Send the report",
    desc: "One click — your email app opens with everything ready. Just press send.",
  },
  {
    n: "02",
    title: "Get my reply within 24 hours",
    desc: "3 specific fixes, ranked by impact. No generic advice.",
  },
  {
    n: "03",
    title: "Free 30-min call",
    desc: "Only if you want to go deeper. No pitch, no obligation.",
  },
];

export function WhatHappensNext({
  buildMailtoHref,
  urgencyLine,
  heading = "Get a second opinion — free. No catch.",
}: {
  /** Receives the user's name and returns the full mailto: href */
  buildMailtoHref: (name: string) => string;
  urgencyLine?: string;
  heading?: string;
}) {
  const [name, setName] = useState("");

  return (
    <div className="border border-gray-200 dark:border-gray-800 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] overflow-hidden">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-violet-500 to-blue-600" />

      <div className="p-5">
        {/* Heading + identity */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-bold tracking-wide text-gray-900 dark:text-white">
            {heading}
          </h2>
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 pl-2 pr-2.5 py-1.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[2px_2px_0px_#e5e7eb] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#bfdbfe] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-y-0.5 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-150"
          >
            <img
              src="/portfolio.jpeg"
              alt="Abdur Rehman Tariq"
              className="w-7 h-7 object-cover border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors shrink-0"
            />
            <span className="text-left leading-tight">
              <span className="block text-[11px] font-bold text-gray-900 dark:text-white leading-tight">
                Abdur Rehman Tariq
              </span>
              <span className="block text-[9px] text-gray-500 dark:text-gray-400">
                6 yrs · cloud x full-stack
              </span>
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">↗</span>
          </a>
        </div>

        {/* Personalized urgency line */}
        {urgencyLine && (
          <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-4 leading-relaxed">
            {urgencyLine}
          </p>
        )}

        {/* How it works */}
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
          Here&apos;s how it works
        </p>
        <div className="relative mb-5">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-3 relative">
              {i < STEPS.length - 1 && (
                <div className="absolute left-[15px] top-8 bottom-[-16px] w-px bg-gray-200 dark:bg-gray-700" />
              )}
              <span className="relative z-10 w-[30px] h-[30px] shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                {step.n}
              </span>
              <div className="pb-4">
                <p className="text-xs font-bold text-gray-900 dark:text-white">{step.title}</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mb-4" />

        {/* Name field */}
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-1.5">
          Your name{" "}
          <span className="text-gray-400 font-normal normal-case tracking-normal">
            — so I know who to reply to
          </span>
        </label>
        <input
          type="text"
          placeholder="e.g. Sarah"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full text-xs px-3 py-2.5 mb-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
        />

        {/* CTA */}
        <a
          href={buildMailtoHref(name)}
          className="block text-center text-xs tracking-wider uppercase px-5 py-3 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8] transition-shadow"
        >
          Send report →
        </a>
        <p className="mt-2.5 text-center text-[10px] text-gray-400 dark:text-gray-500">
          Your email opens with the report ready to send. No sign-up, no spam — just a reply within 24 hours.
        </p>
      </div>
    </div>
  );
}
