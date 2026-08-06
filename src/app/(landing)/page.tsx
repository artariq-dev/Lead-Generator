"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GridBg } from "@/components/GridBg";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { DotIcon } from "@/components/DotIcon";

// Framer Motion requires a typed tuple for cubic-bezier ease
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const itemFast: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export default function LandingPage() {
  const [halfHeight, setHalfHeight] = useState(0);
  const onHeightChange = useCallback((h: number) => setHalfHeight(h), []);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20">
          <GridBg />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-0"
            >

              {/* ── Hero text block with inverted background ── */}
              <motion.div
                variants={item}
                className="bg-gray-200/60 dark:bg-white/10 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm p-3 mb-8"
              >
                {/* Headline */}
                <h1 className="text-gray-900 dark:text-white flex flex-col gap-2">
                  <span className="flex items-baseline gap-x-0 hero-headline font-extrabold">
                    <span className="text-gray-900 dark:text-white" style={{ letterSpacing: "-0.08em" }}>LETS</span>
                    <span className="text-gray-500 dark:text-gray-400 text-base sm:text-2xl" style={{ letterSpacing: "0.3em" }}>_start</span>
                  </span>
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-2 hero-headline font-extrabold">
                    <span className="text-outline" style={{ letterSpacing: "-0.08em" }}>FIGURING</span>
                    <span className="text-gray-500 dark:text-gray-400 text-base sm:text-2xl" style={{ letterSpacing: "0.3em" }}>_out</span>
                    <span className="text-gray-500 dark:text-gray-400 text-base sm:text-2xl" style={{ letterSpacing: "0.3em" }}>your</span>
                    <span className="hidden lg:inline text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-blue-400 dark:decoration-blue-500 decoration-2 underline-offset-4">audit score</span>
                    <span className="hidden lg:inline text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-emerald-400 dark:decoration-emerald-500 decoration-2 underline-offset-4">build path</span>
                    <span className="hidden lg:inline text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-red-400 dark:decoration-red-500 decoration-2 underline-offset-4">pain points</span>
                  </span>
                  <span className="flex lg:hidden flex-wrap gap-x-4 gap-y-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-blue-400 dark:decoration-blue-500 decoration-2 underline-offset-4">audit score</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-emerald-400 dark:decoration-emerald-500 decoration-2 underline-offset-4">build path</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-bold tracking-widest underline decoration-red-400 dark:decoration-red-500 decoration-2 underline-offset-4">pain points</span>
                  </span>
                </h1>
              </motion.div>

              {/* ── Cards ── */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-stretch"
              >

                {/* Audit — dominant, spans 3 cols */}
                <motion.div variants={itemFast} className="sm:col-span-3">
                  <Link
                    href="/audit"
                    className="group flex flex-col h-full border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900 shadow-[6px_6px_0px_#111827] dark:shadow-[6px_6px_0px_#ffffff] hover:shadow-[10px_10px_0px_#111827] dark:hover:shadow-[10px_10px_0px_#ffffff] hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="h-1.5 bg-gray-900 dark:bg-white w-full" />
                    <div className="flex flex-col flex-1 p-6 gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                          Audit
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400 border border-blue-200 dark:border-blue-800 px-2 py-0.5">
                          Primary
                        </span>
                      </div>
                      <span className="text-blue-400 dark:text-blue-600">
                        <DotIcon id="audit" color="currentColor" scale={1.5} />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2">
                          Benchmark your intuition.
                          <br />Test your setup.
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          Pick a stack, answer 8 pain-driven questions, get an instant letter-grade
                          scorecard across 4 sub-categories. Same gaps fixed in real client projects.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                          Start audit
                        </span>
                        <span className="text-lg text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1.5">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Build + Diagnose — stack in remaining 2 cols */}
                <motion.div
                  variants={container}
                  className="sm:col-span-2 flex flex-col gap-3"
                >

                  {/* Build */}
                  <motion.div variants={itemFast} className="flex-1">
                    <Link
                      href="/build"
                      className="group flex flex-col h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#d1d5db] dark:hover:shadow-[6px_6px_0px_#4b5563] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="h-1 bg-gray-900 dark:bg-white w-full" />
                      <div className="flex flex-col flex-1 p-4 gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                            Build
                          </span>
                          <span className="text-lg text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                        <span className="text-emerald-400 dark:text-emerald-600">
                          <DotIcon id="build" color="currentColor" />
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                          Want to build something but don&apos;t know where to start?
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-auto">
                          Budget, timeline, team — qualified before we talk.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Diagnose */}
                  <motion.div variants={itemFast} className="flex-1">
                    <Link
                      href="/diagnose"
                      className="group flex flex-col h-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#d1d5db] dark:hover:shadow-[6px_6px_0px_#4b5563] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="h-1 bg-gray-900 dark:bg-white w-full" />
                      <div className="flex flex-col flex-1 p-4 gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                            Diagnose
                          </span>
                          <span className="text-lg text-gray-900 dark:text-white transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                        <span className="text-red-400 dark:text-red-500">
                          <DotIcon id="diagnose" color="currentColor" />
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                          Identify your business pain points.
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-auto">
                          Select problems. Send the message. Let&apos;s talk.
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                </motion.div>

              </motion.div>
            </motion.div>

            {/* Spacer for SectionDivider overlap */}
            <div style={{ height: halfHeight || 64 }} />
          </div>
        </section>

        {/* Zero-height seam */}
        <div className="relative" style={{ height: 0 }}>
          <div className="absolute inset-x-0 top-0 -translate-y-1/2 z-10">
            <SectionDivider onHeightChange={onHeightChange} />
          </div>
        </div>

        <DiscoverProblems paddingTop={halfHeight || 64} />
      </main>

      <footer className="bg-gray-950 overflow-hidden relative">

        {/* ── Dot grid ── */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Y-axis line + ticks ── */}
        <div aria-hidden className="absolute top-0 bottom-0 left-6 sm:left-10 flex flex-col justify-between pointer-events-none">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-white/10 relative">
            {/* ticks */}
            {[0, 25, 50, 75, 100].map((pct) => (
              <div
                key={pct}
                className="absolute left-0 flex items-center gap-1"
                style={{ top: `${pct}%` }}
              >
                <div className="w-1.5 h-px bg-white/20" />
                <span className="text-[7px] text-white/15 tabular-nums">{pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Top row ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-4 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex gap-6 items-center">
            <span className="text-[8px] sm:text-[9px] tracking-widest text-gray-500">cloud</span>
            <span className="text-sm sm:text-base text-white/60 font-bold">X</span>
            <span className="text-[8px] sm:text-[9px] tracking-widest text-gray-500">fullstack</span>
          </nav>
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[8px] sm:text-[9px] tracking-widest text-gray-500 hover:text-white transition-colors duration-200"
          >
            about me ↗
          </a>
        </div>

        {/* ── f(x) label ── */}
        <div className="relative z-10 px-6 sm:px-10">
          <span className="text-[9px] tracking-widest text-white/15 font-mono">f(x) = artariq</span>
        </div>

        {/* ── Big name ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative z-10 px-4 pb-0 select-none"
        >
          <span
            className="block w-full text-transparent font-extrabold leading-none cursor-default hover:text-white transition-colors duration-500"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.18)",
              fontSize: "clamp(4rem, 22vw, 18rem)",
              letterSpacing: "-0.04em",
            }}
          >
            artariq
          </span>
        </motion.div>

        {/* ── Baseline (x-axis) ── */}
        <div aria-hidden className="relative z-10 mx-4 h-px bg-white/10" />

        {/* ── Bottom row ── */}
        <div className="relative z-10 flex items-center justify-between px-6 py-3">
          <span className="text-[9px] tracking-widest text-gray-600 font-mono">
            {new Date().getFullYear()} abdur rehman tariq
          </span>
          <span className="text-[9px] text-white/10 font-mono tracking-widest">x →</span>
        </div>

      </footer>
    </div>
  );
}
