"use client";

import { useEffect, useState } from "react";

const TARGETS = [
  { score: 92.47, grade: "A+", color: "text-emerald-400 dark:text-emerald-500" },
  { score: 31.08, grade: "F",  color: "text-red-400 dark:text-red-500"         },
  { score: 74.63, grade: "B",  color: "text-blue-400 dark:text-blue-500"       },
  { score: 48.91, grade: "D",  color: "text-orange-400 dark:text-orange-500"   },
  { score: 85.22, grade: "B+", color: "text-emerald-400 dark:text-emerald-500" },
];

const COUNT_DURATION = 2000;
const HOLD_DURATION  = 1200;
const STEPS          = 40;

export function FlippingScore() {
  const [targetIndex, setTargetIndex]   = useState(0);
  const [displayed, setDisplayed]       = useState("0.00");
  const [progress, setProgress]         = useState(0);      // 0–100
  const [done, setDone]                 = useState(false);
  const [gradeVisible, setGradeVisible] = useState(false);

  useEffect(() => {
    const target = TARGETS[targetIndex].score;
    let step = 0;
    setDisplayed("0.00");
    setProgress(0);
    setDone(false);
    setGradeVisible(false);

    const interval = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / STEPS, 3);
      setDisplayed((progress * target).toFixed(2));
      setProgress(progress * 100);

      if (step >= STEPS) {
        clearInterval(interval);
        setDisplayed(target.toFixed(2));
        setProgress(100);
        setDone(true);
        setGradeVisible(true);
      }
    }, COUNT_DURATION / STEPS);

    return () => clearInterval(interval);
  }, [targetIndex]);

  useEffect(() => {
    if (!done) return;
    const fadeOut = setTimeout(() => setGradeVisible(false), HOLD_DURATION);
    const advance = setTimeout(
      () => setTargetIndex((i) => (i + 1) % TARGETS.length),
      HOLD_DURATION + 300
    );
    return () => { clearTimeout(fadeOut); clearTimeout(advance); };
  }, [done]);

  const { grade, color } = TARGETS[targetIndex];

  return (
    <span className="relative inline-flex items-center justify-center gap-3 sm:gap-4 px-5 sm:px-10 py-1 tracking-[0.15em] sm:tracking-[0.3em] overflow-hidden max-w-full">
      {/* progress fill — the "bar" */}
      <span
        className="absolute inset-y-0 left-0 bg-gray-900 dark:bg-white transition-none"
        style={{ width: `${progress}%` }}
      />
      {/* content sits on top */}
      <span className={`relative font-bold tabular-nums ${color}`}>
        {displayed}%
      </span>
      <span className="relative text-gray-600 dark:text-gray-400 font-light select-none">/</span>
      <span
        className={`relative font-bold tabular-nums transition-all duration-300 inline-block w-8 text-left ${color}`}
        style={{ opacity: gradeVisible ? 1 : 0, transform: gradeVisible ? "translateY(0)" : "translateY(4px)" }}
      >
        {grade}
      </span>
    </span>
  );
}
