"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GridBg } from "@/components/GridBg";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroCard } from "@/components/HeroCard";
import { LandingFooter } from "@/components/LandingFooter";

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

              {/* ── Eyebrow — Software Audit Tool ── */}
              <div className="flex items-center gap-3 mb-3 justify-end">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.3em] text-gray-800 dark:text-white select-none">
                  Free Software Audit
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400" />
                  <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400" />
                  <span className="w-1.5 h-1.5 bg-red-500 dark:bg-red-400" />
                </span>
              </div>

              {/* ── Hero text block with inverted background ── */}
              <motion.div
                variants={item}
                className="bg-gray-200/60 dark:bg-white/10 border border-gray-300/50 dark:border-gray-600/50 backdrop-blur-sm p-3 mb-8 text-right"
              >
                {/* Headline */}
                <h1 className="text-gray-900 dark:text-white flex flex-col gap-1 sm:gap-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                  <span className="flex flex-wrap items-baseline gap-x-3 justify-end">
                    <span className="text-gray-900 dark:text-white">Is your software leaking money?</span>
                  </span>
                  <span className="flex flex-wrap items-baseline gap-x-3 justify-end">
                    <span className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl">Lets find out how much — in 1 minute.</span>
                  </span>
                </h1>

                {/* Subhead */}
                <p className="mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Pick a path below and see exactly where you stand — and what to fix first.
                </p>

                {/* What you get */}
                <ul className="mt-4 flex flex-wrap gap-1.5 justify-end">
                  {[
                    ["Free — no sign-up, no forms", "bg-blue-500"],
                    ["Instant scorecard", "bg-emerald-500"],
                    ["Personalized action plan", "bg-red-500"],
                  ].map(([text, color]) => (
                    <li key={text} className="flex items-center gap-1.5 px-2 py-1 bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-800 text-[10px] sm:text-xs font-semibold">
                      <span className={`w-2 h-2 ${color}`} />
                      {text}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* ── Cards ── */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch"
              >

                {/* Audit */}
                <motion.div variants={itemFast}>
                  <HeroCard
                    href="/audit"
                    label="Audit"
                    badge="Primary"
                    iconId="audit"
                    accent={{
                      icon: "text-blue-400 dark:text-blue-600 group-hover:text-blue-300 dark:group-hover:text-blue-700",
                      badge: "text-blue-500 dark:text-blue-400 border-blue-200 dark:border-blue-800 group-hover:text-white group-hover:border-white/60 dark:group-hover:text-blue-800 dark:group-hover:border-blue-900",
                      arrow: "bg-blue-400",
                    }}
                    tags={["Growth", "Cloud", "Fullstack", "Frontend", "Backend", "CRM", "Pipeline"]}
                    title="Run an instant audit on your business tech stack."
                    body="Answer 8 questions. See where you stand — and what to fix first."
                    cta="Instant score"
                  />
                </motion.div>

                {/* Build */}
                <motion.div variants={itemFast}>
                  <HeroCard
                    href="/build"
                    label="Build"
                    iconId="build"
                    accent={{
                      icon: "text-emerald-400 dark:text-emerald-600 group-hover:text-emerald-300 dark:group-hover:text-emerald-700",
                      arrow: "bg-emerald-400",
                    }}
                    tags={["Frontend", "Backend", "Fullstack", "Cloud", "Automation", "Internal"]}
                    title="Not sure what to build? Get a plan."
                    body="A clear build path, budget range, and timeline — matched to you."
                    cta="Instant build plan"
                  />
                </motion.div>

                {/* Diagnose */}
                <motion.div variants={itemFast}>
                  <HeroCard
                    href="/diagnose"
                    label="Diagnose"
                    iconId="diagnose"
                    accent={{
                      icon: "text-red-400 dark:text-red-500 group-hover:text-red-300 dark:group-hover:text-red-700",
                      arrow: "bg-red-400",
                    }}
                    tags={["CRM", "Growth", "Security", "Performance", "Ops", "Deployments"]}
                    title="Flag problems you are facing."
                    body="Pick your problems. Get a clear summary you can send over."
                    cta="Flag similiar problems"
                  />
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

      <LandingFooter />
    </div>
  );
}
