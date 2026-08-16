"use client";

import Link from "next/link";
import { ScrollRow } from "@/components/ProblemCard";
import { ROW_ONE, ROW_TWO } from "@/lib/discover-problems";

export function DiscoverProblems() {
  return (
    <section
      className="border-t border-gray-100  pt-8 pb-12 bg-gray-50  overflow-hidden"
    >
      <div className="mb-3">
        <ScrollRow items={ROW_ONE} />
      </div>
      <ScrollRow items={ROW_TWO} reverse />

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <Link
          href="/diagnose"
          className="text-xs font-semibold tracking-wide px-4 py-2.5 bg-blue-600 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200"
        >
          Which of these sound familiar? →
        </Link>
      </div>
    </section>
  );
}
