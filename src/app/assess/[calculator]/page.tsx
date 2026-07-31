import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { CalculatorForm } from "@/components/calculators/CalculatorForm";
import { DotIcon } from "@/components/DotIcon";

const cardColors: Record<string, string> = {
  cloud:    "#3b82f6",
  fullstack:"#8b5cf6",
  frontend: "#10b981",
  backend:  "#ef4444",
  crm:      "#f59e0b",
  pipeline: "#f97316",
  growth:   "#14b8a6",
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
    description: `${config.tagline} 8 questions. Instant scorecard. No sign-up.`,
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
          <Link href="/assess" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-3 inline-block">← Back</Link>
          <div className="flex items-center gap-3 mb-2">
            <DotIcon id={config.id} color={color} />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{config.name}</h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{config.tagline}</p>
        </div>

        <CalculatorForm config={config} />
      </main>
    </div>
  );
}
