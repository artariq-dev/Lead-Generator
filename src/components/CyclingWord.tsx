"use client";

import { useEffect, useState } from "react";

const WORDS = [
  { text: "score",       color: "text-blue-400 dark:text-blue-500"        },
  { text: "build path",  color: "text-emerald-400 dark:text-emerald-500"  },
  { text: "pain points", color: "text-red-400 dark:text-red-500"          },
];
const INTERVAL = 2800;

export function CyclingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const outTimer  = setTimeout(() => setPhase("out"), INTERVAL - 400);
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % WORDS.length);
      setPhase("in");
    }, INTERVAL);
    return () => { clearTimeout(outTimer); clearTimeout(nextTimer); };
  }, [index]);

  return (
    <span className="relative inline-block align-bottom px-2 py-0.5 bg-gray-900 dark:bg-white">
      {/* invisible spacer — widest word keeps layout stable */}
      <span className="invisible" aria-hidden>pain points</span>
      <span
        key={index}
        className={`absolute inset-0 px-2 py-0.5 ${WORDS[index].color} ${phase === "in" ? "word-in" : "word-out"}`}
        style={{ willChange: "transform, opacity" }}
      >
        {WORDS[index].text}
      </span>
    </span>
  );
}
