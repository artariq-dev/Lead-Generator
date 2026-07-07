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
          <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
            <div className="mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                Something's off with your software, or you <span className="text-blue-600 dark:text-blue-400">haven't built it yet.</span>
              </h1>
              <p className="text-sm text-gray-900 dark:text-white">Either way, get clarity in 8 questions — or just pick your pain points.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
            <div className="flex flex-col justify-center sm:flex-1 gap-8 sm:gap-4">
              {/* Assess card */}
              <div>
                <p className="sm:hidden text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">[01] Audit</p>
                <SectionHeader>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    <span className="text-blue-600 dark:text-blue-400">Benchmark your intuition. Test your setup</span>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">Is your software worth what you invested? Cloud, fullstack, or pipeline — instant scorecard. No filter.</p>
                </SectionHeader>
                <div className="bg-white/70 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-3 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
                  <div className="hidden sm:flex flex-row gap-2 mb-4">
                    <StatCard top="8 questions" bottom="2 min to complete" />
                    <StatCard top="Instant scorecard" bottom="No sign-up" />
                    <StatCard top="Ranked fixes" bottom="Within 24h" />
                  </div>
                  <CtaBtn href="/assess" label="Take the 2-minute audit" />
                </div>
              </div>

              {/* Build card */}
              <div>
                <p className="sm:hidden text-[9px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">[02] Build</p>
                <div className="px-4 py-2.5 bg-gray-900 dark:bg-white border border-gray-900 dark:border-white shadow-[2px_2px_0px_#374151] dark:shadow-[2px_2px_0px_#d1d5db]">
                  <h3 className="text-sm font-bold text-white dark:text-gray-900 leading-tight">
                    Want to build something but <span className="text-gray-300 dark:text-gray-600">don't know where to start?</span>
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5 leading-snug">Frontend, backend, mobile, automation — pick what you want to build, answer 8 questions, get a clear path forward.</p>
                </div>
                <div className="bg-gray-900/70 dark:bg-gray-900/70 border border-gray-900 dark:border-gray-200 p-3 shadow-[3px_3px_0px_#374151] dark:shadow-[3px_3px_0px_#d1d5db]">
                  <div className="hidden sm:flex flex-row gap-2 mb-4">
                    <StatCard top="6 build types" bottom="Frontend to mobile" />
                    <StatCard top="Recommendation" bottom="Clear path forward" />
                    <StatCard top="Next steps" bottom="Know what to do first" />
                  </div>
                  <Link href="/build" className="group block w-full text-center text-xs tracking-wider uppercase px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 pixel-btn border border-gray-800 dark:border-gray-300 shadow-[3px_3px_0px_#374151] dark:shadow-[3px_3px_0px_#d1d5db] hover:shadow-[5px_5px_0px_#374151] dark:hover:shadow-[5px_5px_0px_#d1d5db]">
                    Find path{" "}
                    <span className="inline-block text-base transition-all duration-300 group-hover:scale-[2] group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* OR divider — vertical on desktop only */}
            <div className="hidden sm:flex flex-col items-center justify-center mx-6">
              <div className="flex-1 w-px bg-gray-300 dark:bg-gray-700" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-gray-600 py-2">or</span>
              <div className="flex-1 w-px bg-gray-300 dark:bg-gray-700" />
            </div>

            <div className="flex flex-col justify-center sm:flex-1">
              <p className="sm:hidden text-[9px] font-bold uppercase tracking-widest text-red-500 dark:text-red-400 mb-2">[03] Diagnose</p>
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
