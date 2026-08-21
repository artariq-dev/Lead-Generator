import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/lib/calculators/config";
import { StepForm } from "@/components/StepForm";
import { Icon } from "@/components/Icon";

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

  return (
    <section className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <main className="max-w-2xl mx-auto w-full px-6">
        <div className="mb-8">
          <Link href="/audit" className="text-xs text-gray-500 hover:text-gray-900 transition-colors mb-3 inline-block">
            ← Back
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-600 shrink-0">
              <Icon id={config.id} size={26} />
            </span>
            <h1 className="text-2xl font-bold text-gray-900">{config.name}</h1>
          </div>
          <p className="text-sm text-gray-500">{config.tagline}</p>
        </div>

        <StepForm config={config} reportPath={`/audit/report/${config.id}`} loadingText="Loading your report..." />
      </main>
    </section>
  );
}
