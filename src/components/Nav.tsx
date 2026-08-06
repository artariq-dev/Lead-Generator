"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-tight">
          <span className="text-gray-400">[ </span>
          <span className="text-gray-900 dark:text-white">ask.artariq</span>
          <span className="text-gray-400"> ]</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/audit" className="hidden sm:inline text-[10px] tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Audit /</Link>
          <Link href="/diagnose" className="hidden sm:inline text-[10px] tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Diagnose /</Link>
          <Link href="/build" className="hidden sm:inline text-[10px] tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Build /</Link>
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About me <span className="text-sm">↗</span>
          </a>
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden w-6 h-6 flex flex-col justify-center gap-1 text-gray-600 dark:text-gray-400"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-3 flex flex-col gap-3">
          <Link href="/audit" onClick={() => setOpen(false)} className="text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Audit /</Link>
          <Link href="/diagnose" onClick={() => setOpen(false)} className="text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Diagnose /</Link>
          <Link href="/build" onClick={() => setOpen(false)} className="text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Build /</Link>
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1 text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About me <span className="text-sm">↗</span>
          </a>
        </div>
      )}
    </nav>
  );
}
