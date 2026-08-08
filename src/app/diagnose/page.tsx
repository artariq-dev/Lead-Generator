import type { Metadata } from "next";
import { PainPointGrid } from "@/components/PainPointGrid";
import { DotIcon } from "@/components/DotIcon";

export const metadata: Metadata = {
  title: "Diagnose — Identify your pain points",
  description: "Select your business pain points and get a summary you can send over.",
};

export default function DiagnosePage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-red-400 dark:text-red-500 shrink-0">
            <DotIcon id="diagnose" color="currentColor" />
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Identify your business pain points
          </h1>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          Select the problems that feel familiar, then copy the summary and send it over.
        </p>
        <PainPointGrid height="calc(100vh - 380px)" />
      </main>
    </div>
  );
}
