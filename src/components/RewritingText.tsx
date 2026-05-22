"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Score your infrastructure in 2 minutes.",
  "Audit your cloud costs for free.",
  "Check your app's production readiness.",
  "Measure your CI/CD pipeline maturity.",
  "Identify security gaps in your stack.",
  "Get a full-stack health score.",
];

export function RewritingText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx];
    let timeout: NodeJS.Timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % phrases.length);
    } else {
      const speed = deleting ? 30 : 60;
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-blue-600 dark:text-blue-400">▊</span>
    </span>
  );
}
