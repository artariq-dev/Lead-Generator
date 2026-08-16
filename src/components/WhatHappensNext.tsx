"use client";

import Image from "next/image";
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
    <div className="bg-white border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Top accent */}
      <div className="h-1 w-full bg-blue-600" />

      <div className="p-5">
        {/* Heading + identity */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-sm font-bold tracking-wide text-gray-900 ">
            {heading}
          </h2>
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 pl-2 pr-2.5 py-1.5 border border-gray-200  bg-white  shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] hover:border-blue-300  transition-all duration-200"
          >
            <Image
              src="/portfolio.jpeg"
              alt="Abdur Rehman Tariq"
              width={28}
              height={28}
              className="w-7 h-7 object-cover border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-colors shrink-0"
            />
            <span className="text-left leading-tight">
              <span className="block text-[11px] font-bold text-gray-900  leading-tight">
                Abdur Rehman Tariq
              </span>
              <span className="block text-[9px] text-gray-500 ">
                6 yrs · cloud x full-stack
              </span>
            </span>
            <span className="text-xs text-gray-400  group-hover:text-blue-500  transition-colors">↗</span>
          </a>
        </div>

        {/* Personalized urgency line */}
        {urgencyLine && (
          <p className="text-xs text-blue-600  font-semibold mb-4 leading-relaxed">
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
                <div className="absolute left-[15px] top-8 bottom-[-16px] w-px bg-gray-200 " />
              )}
              <span className="relative z-10 w-[30px] h-[30px] shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                {step.n}
              </span>
              <div className="pb-4">
                <p className="text-xs font-bold text-gray-900 ">{step.title}</p>
                <p className="text-[10px] text-gray-500  leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200  mb-4" />

        {/* Name field */}
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-900  mb-1.5">
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
          className="w-full text-xs px-3 py-2.5 mb-3 border border-gray-300  bg-white  text-gray-900  placeholder:text-gray-400  focus:outline-none focus:border-blue-500"
        />

        {/* CTA */}
        <a
          href={buildMailtoHref(name)}
          className="block text-center text-xs font-semibold tracking-wide px-5 py-3 bg-blue-600 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200"
        >
          Send report →
        </a>
        <p className="mt-2.5 text-center text-[10px] text-gray-400 ">
          Your email opens with the report ready to send. No sign-up, no spam — just a reply within 24 hours.
        </p>
      </div>
    </div>
  );
}
