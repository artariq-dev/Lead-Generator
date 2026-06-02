"use client";

import Link from "next/link";
import { GridBg } from "@/components/GridBg";
import { PainPointGrid } from "@/components/PainPointGrid";

function StatCard({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="flex-1 min-w-[6rem] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 sm:p-3 shadow-[2px_2px_0px_#e5e7eb] dark:shadow-[2px_2px_0px_#374151]">
      <p className="font-bold text-gray-900 dark:text-white text-xs">{top}</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">{bottom}</p>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-[2px_2px_0px_#d1d5db] dark:shadow-[2px_2px_0px_#374151]">
      {children}
    </div>
  );
}

function CtaBtn({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group block w-full text-center text-xs tracking-wider uppercase px-5 py-2.5 bg-blue-600 text-white pixel-btn border border-blue-700 shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]">
      {label}{" "}
      <span className="inline-block text-base transition-all duration-300 group-hover:scale-[2] group-hover:translate-x-1">→</span>
    </Link>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-8">
          <GridBg />
          <div className="relative z-10 max-w-4xl mx-auto w-full px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center h-full">
              <SectionHeader>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-blue-600 dark:text-blue-400">Benchmark your intuition. Test your setup</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Is your software worth what you invested? Cloud, fullstack, or pipeline — instant scorecard. No filter.</p>
              </SectionHeader>
              <div className="bg-white/70 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-3 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                  <StatCard top="Eight" bottom="Questions" />
                  <StatCard top="Multiple" bottom="audit tracks" />
                  <StatCard top="Critical" bottom="Evaluations" />
                </div>
                <CtaBtn href="/assess" label="Benchmark now" />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <SectionHeader>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                  Identify your <span className="text-green-600 dark:text-green-400">business</span> <span className="text-red-500 dark:text-red-400">painpoints</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Select problems. Hit the button. Copy the message. Send it over — let's talk.</p>
              </SectionHeader>
              <PainPointGrid />
            </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-[10px] tracking-wider text-gray-400 dark:text-gray-500">
          {new Date().getFullYear()}{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
            a
          </span>
          bdur{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
            r
          </span>
          ehman{" "}
          <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
            tariq
          </span>
        </div>
      </footer>
    </div>
  );
}
