"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { GridBg } from "@/components/GridBg";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { DotIcon } from "@/components/DotIcon";
import { CyclingWord } from "@/components/CyclingWord";
import { StatNumber } from "@/components/StatNumber";


export default function LandingPage() {
  const [halfHeight, setHalfHeight] = useState(0);
  const onHeightChange = useCallback((h: number) => setHalfHeight(h), []);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <section
          className="relative min-h-screen flex flex-col justify-center pt-24 sm:pt-16 pb-16"
        >
          <GridBg />
          <div className="relative z-10 max-w-6xl mx-auto w-full px-6">

            {/* Hero headline + stats — frosted panel */}
            <div className="mb-8 text-center bg-white/60 dark:bg-gray-950/60 px-6 py-8 border border-gray-200/50 dark:border-gray-700/50">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Find your software&apos;s <CyclingWord />
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Answer 8 questions or pick your pain points directly — you&apos;ll know where to focus in 2 minutes.
              </p>

              {/* Stat strip */}
              <div className="flex justify-center gap-6 sm:gap-12 mt-8 flex-wrap">
                <StatNumber value={43} label="audits completed" />
                <div className="w-px bg-gray-200 dark:bg-gray-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">C+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">avg audit grade</p>
                </div>
              </div>
            </div>

            {/* Three cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">

              {/* Audit card — primary */}
              <Link href="/audit" className="group flex flex-col border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900 shadow-[6px_6px_0px_#111827] dark:shadow-[6px_6px_0px_#ffffff] hover:shadow-[8px_8px_0px_#111827] dark:hover:shadow-[8px_8px_0px_#ffffff] hover:-translate-y-1 transition-all duration-200">
                <div className="h-1.5 bg-gray-900 dark:bg-white w-full" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Audit</span>
                    <span className="text-2xl text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <span className="text-blue-400 dark:text-blue-600"><DotIcon id="audit" color="currentColor" /></span>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                    Benchmark your intuition. Test your setup.
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-auto">
                    Same gaps fixed in real client projects.
                  </p>
                </div>
              </Link>

              {/* Diagnose card — secondary */}
              <Link href="/diagnose" className="group flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#d1d5db] dark:hover:shadow-[6px_6px_0px_#4b5563] hover:-translate-y-1 transition-all duration-200">
                <div className="h-1 bg-gray-900 dark:bg-white w-full" />
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Diagnose</span>
                    <span className="text-2xl text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <span className="text-red-400 dark:text-red-500"><DotIcon id="diagnose" color="currentColor" /></span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                    Identify your business pain points.
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-auto">
                    Select problems. Hit the button. Copy the message. Send it over — let&apos;s talk.
                  </p>
                </div>
              </Link>

              {/* Build card — secondary */}
              <Link href="/build" className="group flex flex-col border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#d1d5db] dark:hover:shadow-[6px_6px_0px_#4b5563] hover:-translate-y-1 transition-all duration-200">
                <div className="h-1 bg-gray-900 dark:bg-white w-full" />
                <div className="flex flex-col flex-1 p-4 gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Build</span>
                    <span className="text-2xl text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                  <span className="text-emerald-400 dark:text-emerald-600"><DotIcon id="build" color="currentColor" /></span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                    Want to build something but don&apos;t know where to start?
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-auto">
                    Budget, timeline, team — the calculator qualifies everything before we talk.
                  </p>
                </div>
              </Link>

            </div>

            {/* Spacer — pushes hero bottom edge down to make room for the divider overlap */}
            <div style={{ height: halfHeight || 64 }} />

          </div>
        </section>

        {/* Zero-height seam — SectionDivider is absolutely centered on the border */}
        <div className="relative" style={{ height: 0 }}>
          <div className="absolute inset-x-0 top-0 -translate-y-1/2 z-10">
            <SectionDivider onHeightChange={onHeightChange} />
          </div>
        </div>

        <DiscoverProblems paddingTop={halfHeight || 64} />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-[10px] tracking-wider text-gray-400 dark:text-gray-500">
          {new Date().getFullYear()}{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">a</span>
          bdur{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">r</span>
          ehman{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">tariq</span>
        </div>
      </footer>
    </div>
  );
}
