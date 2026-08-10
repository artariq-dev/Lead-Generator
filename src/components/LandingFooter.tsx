"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function LandingFooter() {
  return (
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
            fontFamily: "var(--font-montserrat), sans-serif",
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
  );
}
