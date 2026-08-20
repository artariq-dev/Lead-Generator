"use client";

import { motion } from "framer-motion";
import { AbstractPattern } from "@/components/AbstractPattern";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function HeroBackground() {
  return (
    <>
      {/* Base wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50/70 via-white to-white"
      />

      {/* Brand accent patterns — dense, scaled composition */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, ease: EASE }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* contour — top left, large */}
        <div className="absolute -top-16 -left-16 scale-[2] origin-top-left">
          <AbstractPattern variant="contour" className="text-blue-500/30" />
        </div>
        {/* stripes — top right, large */}
        <div className="absolute -top-10 -right-24 scale-[2] origin-top-right">
          <AbstractPattern variant="stripes" className="text-emerald-500/25" />
        </div>
        {/* memphis — bottom left, large */}
        <div className="absolute -bottom-24 -left-20 scale-[2] origin-bottom-left">
          <AbstractPattern variant="memphis" className="text-purple-500/25" />
        </div>
        {/* particles — bottom right, large */}
        <div className="absolute -bottom-14 -right-14 scale-[2] origin-bottom-right">
          <AbstractPattern variant="particles" className="text-rose-500/25" />
        </div>
        {/* halftone — center top, dense overlap */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 scale-[2.2] origin-top">
          <AbstractPattern variant="halftone" className="text-blue-600/20" />
        </div>
        {/* chevron — center bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-150 origin-bottom">
          <AbstractPattern variant="chevron" className="text-emerald-600/15" />
        </div>
        {/* extra contour — mid left, secondary tone */}
        <div className="absolute top-1/2 -left-24 scale-[1.8] origin-left">
          <AbstractPattern variant="contour" className="text-blue-400/20" />
        </div>
        {/* extra memphis — mid right, secondary tone */}
        <div className="absolute top-1/2 -right-24 scale-[1.8] origin-right">
          <AbstractPattern variant="memphis" className="text-purple-400/20" />
        </div>
      </motion.div>
    </>
  );
}
