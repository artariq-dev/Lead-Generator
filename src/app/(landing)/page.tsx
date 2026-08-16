"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DiscoverProblems } from "@/components/DiscoverProblems";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroCard } from "@/components/HeroCard";
import { Icon } from "@/components/Icon";
import { PixelGrid } from "@/components/PixelGrid";
import { LandingFooter } from "@/components/LandingFooter";

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
        <section className="relative pt-20 pb-20 bg-white  border-b border-gray-100  overflow-hidden">
          <PixelGrid />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <motion.p
                variants={item}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700  mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 " />
                Free software health check
              </motion.p>

              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900  leading-[1.1] mb-6"
              >
                Is your software working the way you want?
              </motion.h1>

              <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-6">
                <Link
                  href="/audit"
                  className="text-sm font-semibold px-6 py-3 bg-blue-600 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:bg-blue-700 hover:shadow-[0_8px_24px_rgba(37,99,235,0.35)] transition-all duration-200"
                >
                  Start a free audit
                </Link>
                <Link
                  href="/diagnose"
                  className="text-sm font-semibold px-6 py-3 text-gray-700  border border-gray-300  hover:border-gray-400  transition-colors duration-200"
                >
                  Not sure? Diagnose a problem
                </Link>
              </motion.div>

              <motion.div variants={item} className="flex flex-col gap-2.5">
                <p className="text-base sm:text-lg font-bold text-gray-900  shrink-0">
                  Measure /
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Growth", href: "/audit/growth", icon: "growth" },
                    { label: "Performance", href: "/audit/performance", icon: "performance" },
                    { label: "User Experience", href: "/audit/ux", icon: "ux" },
                    { label: "Security", href: "/audit/security", icon: "security" },
                  ].map((audit) => (
                    <Link
                      key={audit.href}
                      href={audit.href}
                      className="inline-flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-black bg-white border border-gray-200 hover:bg-blue-100 hover:border-blue-300 transition-colors duration-200"
                    >
                      <Icon id={audit.icon} size={18} />
                      {audit.label}
                      <span className="ml-1 flex items-center justify-center w-6 h-6 bg-blue-600">
                        <ArrowRight
                          size={14}
                          className="text-white"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Pick a path ── */}
        <section className="py-16 bg-black ">
          <div className="max-w-7xl mx-auto w-full px-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={item} className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Pick a path
                </h2>
                <p className="text-sm text-blue-200/80 mt-2">
                  Choose what you need — an audit, a build plan, or a diagnosis.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
                <motion.div variants={item}>
                  <HeroCard
                    href="/audit"
                    label="Audit"
                    iconId="audit"
                    tags={["Growth", "Performance", "User Experience", "Security"]}
                    title="Score your software against the essentials."
                    body="Pick the area that matters most to your business and get an instant health score."
                    cta="Run an audit"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <HeroCard
                    href="/build"
                    label="Build"
                    iconId="build"
                    tags={["Frontend", "Backend", "Fullstack", "Cloud", "Automation", "Internal"]}
                    title="Got scattered ideas? Get a tailored build plan."
                    body="A clear build path, budget range, and timeline — matched to you."
                    cta="Get an instant plan"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <HeroCard
                    href="/diagnose"
                    label="Diagnose"
                    iconId="diagnose"
                    tags={["User Experience", "Security", "Growth", "Performance"]}
                    title="Facing problems with your business software?"
                    body="Pick the problems that feel familiar. Get a clear summary to send over."
                    cta="Flag the problems"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        <DiscoverProblems />
      </main>

      <LandingFooter />
    </div>
  );
}
