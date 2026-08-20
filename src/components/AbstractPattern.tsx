"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type PatternVariant =
  | "contour"
  | "halftone"
  | "chevron"
  | "particles"
  | "stripes"
  | "memphis";

const CONTOUR: ReactNode = (
  <svg
    className="absolute top-0 left-0 w-64 h-64 -translate-x-10 -translate-y-10"
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <ellipse
        key={i}
        cx={30 + i * 8}
        cy={30 + i * 8}
        rx={170 - i * 22}
        ry={170 - i * 22}
        strokeOpacity={0.9 - i * 0.1}
        transform={`rotate(${i * 7} ${30 + i * 8} ${30 + i * 8})`}
      />
    ))}
  </svg>
);

const HALFTONE: ReactNode = (
  <svg
    className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 -translate-y-3"
    viewBox="0 0 400 120"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {[10, 30, 50, 70, 90, 110].map((y, i) => (
      <path
        key={y}
        d={`M0,${y} C 100,${y - 36 - i * 4} 300,${y + 36 + i * 4} 400,${y}`}
        strokeDasharray="1 7"
        strokeOpacity={1 - i * 0.08}
      />
    ))}
  </svg>
);

const CHEVRON: ReactNode = (
  <svg
    className="absolute top-0 right-0 w-64 h-64 -translate-y-6 translate-x-6"
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <path
        key={i}
        d={`M${8 + i * 14},170 L${100},${30 + i * 18} L${192 - i * 14},170`}
        strokeOpacity={0.9 - i * 0.1}
      />
    ))}
  </svg>
);

const PARTICLES: ReactNode = (
  <svg
    className="absolute bottom-0 left-0 w-64 h-64 -translate-x-6 translate-y-6"
    viewBox="0 0 200 200"
    fill="currentColor"
  >
    {[
      [18, 178, 5, 0.95],
      [48, 160, 3, 0.7],
      [78, 182, 7, 0.9],
      [104, 158, 4, 0.65],
      [126, 180, 6, 0.9],
      [150, 162, 3, 0.6],
      [170, 184, 8, 0.85],
      [30, 140, 4, 0.6],
      [62, 132, 5, 0.7],
      [96, 128, 3, 0.6],
      [134, 134, 4, 0.65],
      [168, 142, 3, 0.55],
      [44, 118, 3, 0.55],
      [120, 116, 3, 0.55],
      [160, 118, 5, 0.65],
      [80, 108, 4, 0.6],
      [140, 96, 3, 0.55],
      [60, 92, 3, 0.5],
      [100, 82, 4, 0.55],
      [170, 90, 3, 0.5],
    ].map(([cx, cy, r, o], i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fillOpacity={o} />
    ))}
  </svg>
);

const STRIPES: ReactNode = (
  <svg
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 translate-y-3"
    viewBox="0 0 200 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path
        key={i}
        d={`M${10 + i * 14},105 C ${30 + i * 14},50 ${150 - i * 14},50 ${190 - i * 14},105`}
        strokeOpacity={0.95 - i * 0.1}
      />
    ))}
  </svg>
);

const MEMPHIS: ReactNode = (
  <svg
    className="absolute bottom-0 right-0 w-64 h-64 -translate-x-4 translate-y-4"
    viewBox="0 0 200 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    {[
      [20, 180, 30, 172],
      [60, 176, 54, 190],
      [96, 178, 108, 170],
      [140, 180, 128, 192],
      [170, 176, 184, 184],
      [30, 148, 20, 136],
      [76, 150, 88, 142],
      [120, 152, 108, 140],
      [160, 148, 172, 158],
      [52, 128, 62, 116],
      [100, 128, 88, 118],
      [146, 124, 158, 134],
      [32, 104, 22, 94],
      [80, 104, 92, 92],
      [132, 100, 120, 90],
      [56, 78, 68, 68],
      [108, 72, 96, 60],
      [34, 52, 46, 42],
      [80, 40, 70, 28],
      [24, 18, 36, 6],
    ].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.9 - i * 0.02} />
    ))}
  </svg>
);

export const PATTERNS: Record<PatternVariant, ReactNode> = {
  contour: CONTOUR,
  halftone: HALFTONE,
  chevron: CHEVRON,
  particles: PARTICLES,
  stripes: STRIPES,
  memphis: MEMPHIS,
};

interface AbstractPatternProps {
  variant: PatternVariant;
  className?: string;
}

export function AbstractPattern({ variant, className }: AbstractPatternProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const x = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ y, x, rotate }}
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
    >
      {PATTERNS[variant]}
    </motion.div>
  );
}
