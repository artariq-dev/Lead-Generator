"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { HeroBg } from "@/components/HeroBg";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroCard } from "@/components/HeroCard";
import { MiniCard } from "@/components/MiniCard";
import { LandingFooter } from "@/components/LandingFooter";
import { calculators } from "@/lib/calculators/config";

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

const AUDIT_ORDER = ["growth", "ux", "performance", "security"] as const;

const AUDIT_ACCENTS: Record<string, { icon: string; arrow: string; bar: string }> = {
  growth: {
    icon: "text-teal-400 dark:text-teal-600 group-hover:text-teal-300 dark:group-hover:text-teal-700",
    arrow: "bg-teal-400",
    bar: "bg-teal-400",
  },
  ux: {
    icon: "text-violet-400 dark:text-violet-600 group-hover:text-violet-300 dark:group-hover:text-violet-700",
    arrow: "bg-violet-400",
    bar: "bg-violet-400",
  },
  performance: {
    icon: "text-blue-400 dark:text-blue-600 group-hover:text-blue-300 dark:group-hover:text-blue-700",
    arrow: "bg-blue-400",
    bar: "bg-blue-400",
  },
  security: {
    icon: "text-red-400 dark:text-red-500 group-hover:text-red-300 dark:group-hover:text-red-700",
    arrow: "bg-red-400",
    bar: "bg-red-400",
  },
};

const AUDIT_CARDS = AUDIT_ORDER.map((id) => {
  const config = calculators[id];
  return {
    href: `/audit/${config.id}`,
    label: config.name,
    iconId: config.id,
    tags: config.categories.map((c) => c.short),
    accent: AUDIT_ACCENTS[id],
  };
});

export default function LandingPage() {
  const [halfHeight, setHalfHeight] = useState(0);
  const onHeightChange = useCallback((h: number) => setHalfHeight(h), []);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 bg-[#faf7f0] dark:bg-gray-950">
          <HeroBg />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-0"
            >

              {/* ── Eyebrow — Software Audit Tool ── */}
              <div className="flex items-center gap-3">
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
                className="my-6 text-left"
              >
                {/* Headline */}
                <h1 className="text-gray-900 dark:text-white flex flex-col gap-1 sm:gap-2 text-4xl sm:text-5xl font-extrabold leading-tight">
                  <span className="text-gray-900 dark:text-white text-3xl sm:text-4xl" style={{ letterSpacing: "0.12em" }}>Is your software working the way you want?</span>
                  <span className="text-gray-900 dark:text-white text-xl sm:text-2xl" style={{ letterSpacing: "0.12em" }}>Let&apos;s find out, pick a path below.</span>
                </h1>


              </motion.div>

              {/* ── Cards ── */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch scroll-mt-24"
              >

                {/* Audit — 4 mini evaluators */}
                <motion.div variants={itemFast}>
                  <div className="grid grid-cols-2 gap-2 h-full">
                    {AUDIT_CARDS.map((card) => (
                      <MiniCard key={card.href} {...card} />
                    ))}
                  </div>
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
                    tags={["User Experience", "Security", "Growth", "Performance"]}
                    title="Facing problems with your business software? Flag what feels similar."
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
