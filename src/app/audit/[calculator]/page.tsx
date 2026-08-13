import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { StepForm } from "@/components/StepForm";
import { DotIcon } from "@/components/DotIcon";

const cardColors: Record<string, string> = {
  growth:      "#14b8a6",
  performance: "#3b82f6",
  ux:          "#8b5cf6",
  security:    "#ef4444",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ calculator: string }>;
}): Promise<Metadata> {
  const { calculator } = await params;
  const config = calculators[calculator];
  if (!config) return {};
  return {
    title: config.name,
    description: `${config.tagline} 8 plain questions. Instant scorecard. No sign-up.`,
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ calculator: string }>;
}) {
  const { calculator } = await params;
  const config = calculators[calculator];
  if (!config) notFound();
  const color = cardColors[config.id] ?? "currentColor";

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-16">
        <div className="mb-8">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-3 inline-block">← Back</Link>
          <div className="flex items-center gap-3 mb-2">
            <DotIcon id={config.id} color={color} />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{config.name}</h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{config.tagline}</p>
        </div>

        <StepForm config={config} reportPath={`/audit/report/${config.id}`} loadingText="Loading your report..." />
      </main>
    </div>
  );
}
