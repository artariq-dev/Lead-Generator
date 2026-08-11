"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HeroBg } from "@/components/HeroBg";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroCard } from "@/components/HeroCard";
import { LandingFooter } from "@/components/LandingFooter";
import { CyclingWord } from "@/components/CyclingWord";

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
          <HeroBg />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-0"
            >

              {/* ── Eyebrow — Software Audit Tool ── */}
              <div className="flex items-center gap-3 mb-3">
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
                className="mb-6 text-left"
              >
                {/* Headline */}
                <h1 className="text-gray-900 dark:text-white flex flex-col gap-1 sm:gap-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                  <span className="text-gray-900 dark:text-white text-5xl sm:text-7xl" style={{ letterSpacing: "0.12em" }}><CyclingWord /></span>
                  <span className="text-gray-900 dark:text-white text-3xl sm:text-4xl" style={{ letterSpacing: "0.12em" }}>with your software — are you?</span>
                </h1>

                {/* Subhead with dark bg */}
                <p className="mt-4 bg-gray-200/60 dark:bg-white/10 border border-gray-300/50 dark:border-gray-600/50 px-4 py-4 text-gray-900 dark:text-white text-xl sm:text-2xl">Let's find out if it's working the way you want.</p>

                {/* Tags */}
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    ["8 Questions", "bg-blue-500"],
                    ["Instant result", "bg-emerald-500"],
                    ["Clear plan", "bg-red-500"],
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
                      underline: "decoration-blue-400 group-hover:decoration-white dark:decoration-blue-600 dark:group-hover:decoration-gray-900",
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
                      underline: "decoration-emerald-400 group-hover:decoration-white dark:decoration-emerald-600 dark:group-hover:decoration-gray-900",
                    }}
                    tags={["Frontend", "Backend", "Fullstack", "Cloud", "Automation", "Internal"]}
                    title="Got scattered ideas, need execution? Get tailored build plan."
                    body="A clear build path, budget range, and timeline — matched to you."
                    cta="Instant plan"
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
                      underline: "decoration-red-400 group-hover:decoration-white dark:decoration-red-500 dark:group-hover:decoration-gray-900",
                    }}
                    tags={["CRM", "Growth", "Security", "Performance", "Ops", "Deployments"]}
                    title="Facing problems? Flag what feels similar."
                    body="Pick your problems. Get a clear summary & send over. Let's talk."
                    cta="Flag problems"
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
