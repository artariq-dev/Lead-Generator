"use client";

import { motion, type Variants } from "framer-motion";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { LandingFooter } from "@/components/LandingFooter";
import { HeroQuickAudit } from "@/components/landing/HeroQuickAudit";
import { HeroBackground } from "@/components/landing/HeroBackground";

// Framer Motion requires a typed tuple for cubic-bezier ease
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white  overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        {/* ── Hero ── */}
        <section className="relative bg-white  border-b border-gray-100  overflow-hidden">
          <HeroBackground />
          <div className="relative z-10 max-w-3xl mx-auto w-full px-6 pt-24 sm:pt-28 lg:py-24 pb-16 sm:pb-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={item}
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-blue-700  mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 " />
                Business software breakdown
              </motion.p>

              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.06em] text-gray-900  leading-[1.15] mb-2"
              >
                Reasoning{" "}
                <span className="text-blue-600">+</span>{" "}
                Factors
              </motion.h1>

              <motion.p
                variants={item}
                className="text-sm sm:text-base text-gray-600  max-w-xl lg:max-w-none lg:whitespace-nowrap mb-8 leading-relaxed"
              >
                Better platform, better numbers: more conversions, more sales.
              </motion.p>
            </motion.div>

            {/* Interactive audit — the funnel starts here */}
            <HeroQuickAudit />
          </div>
        </section>

        <SectionDivider />

        <DiscoverProblems />
      </main>

      <LandingFooter />
    </div>
  );
}
