"use client";

import { useState } from "react";

export function WhatHappensNext({
  buildMailtoHref,
  urgencyLine,
}: {
  /** Receives the user's name and returns the full mailto: href */
  buildMailtoHref: (name: string) => string;
  urgencyLine?: string;
}) {
  const [name, setName] = useState("");

  return (
    <div className="border border-gray-200 dark:border-gray-800 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] overflow-hidden">
      {/* Top accent */}
      <div className="h-0.5 w-full bg-blue-600" />

      <div className="p-4">
        {/* Face + identity */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/portfolio.jpeg"
            alt="Abdur Rehman Tariq"
            className="w-10 h-10 object-cover border-2 border-blue-500/20 shrink-0"
          />
          <div>
            <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">
              Abdur Rehman Tariq
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              6 yrs · cloud x full-stack
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">
          Need my personal assistance?
        </h2>

        {/* Personalized urgency line */}
        {urgencyLine && (
          <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-3 leading-relaxed">
            {urgencyLine}
          </p>
        )}

        {/* Risk removal */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
          Hit the button — your email app opens with this report already attached.
          Just press send.{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Free 30-min call. No pitch, no obligation.
          </span>
        </p>

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
      </div>
    </div>
  );
}
