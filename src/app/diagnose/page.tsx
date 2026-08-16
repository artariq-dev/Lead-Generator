import type { Metadata } from "next";
import { PainPointGrid } from "@/components/PainPointGrid";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Diagnose — Identify your pain points",
  description: "Select your business pain points and get a summary you can send over.",
};

export default function DiagnosePage() {
  return (
    <section className="py-20 bg-black min-h-screen">
      <main className="max-w-3xl mx-auto w-full px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-blue-400 shrink-0">
            <Icon id="diagnose" size={24} />
          </span>
          <h1 className="text-xl font-bold text-white">
            Identify your business software&apos;s pain points
          </h1>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Select the problems that feel familiar, send them over.
        </p>
        <PainPointGrid height="calc(100vh - 380px)" />
      </main>
    </section>
  );
}
