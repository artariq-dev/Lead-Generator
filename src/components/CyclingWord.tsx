"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Satisfied", "Thrilled", "Delighted", "Content"];
const INTERVAL = 2800;

export function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % WORDS.length), INTERVAL);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={WORDS[index]}
        className="inline-block text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {WORDS[index]}
      </motion.span>
    </AnimatePresence>
  );
}
