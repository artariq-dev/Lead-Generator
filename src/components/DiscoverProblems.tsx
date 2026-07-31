"use client";

import Link from "next/link";
import { ScrollRow } from "@/components/ProblemCard";
import { ROW_ONE, ROW_TWO } from "@/lib/discover-problems";

export function DiscoverProblems() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-800 py-12 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Discover problems other founders face
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You&apos;re not the only one dealing with this.
        </p>
      </div>

      <div className="mb-3">
        <ScrollRow items={ROW_ONE} />
      </div>
      <ScrollRow items={ROW_TWO} reverse />

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <Link
          href="/diagnose"
          className="text-xs font-bold tracking-wider uppercase px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-[3px_3px_0px_#d1d5db] dark:shadow-[3px_3px_0px_#374151] hover:shadow-[5px_5px_0px_#d1d5db] dark:hover:shadow-[5px_5px_0px_#374151] hover:-translate-y-0.5 transition-all duration-150"
        >
          See if any apply to you →
        </Link>
      </div>
    </section>
  );
}
