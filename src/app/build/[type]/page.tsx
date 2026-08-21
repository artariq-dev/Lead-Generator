import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildTypes } from "@/lib/build/config";
import { StepForm } from "@/components/StepForm";
import { Icon } from "@/components/Icon";

const cardIcon: Record<string, string> = {
  frontend:   "frontend",
  backend:    "backend_build",
  fullstack:  "fullstack",
  cloud:      "cloud",
  automation: "automation",
  internal:   "internal",
};

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const config = buildTypes[type];
  if (!config) return {};
  return {
    title: config.name,
    description: `${config.tagline} 8 questions to get a clear recommendation on how to build it.`,
  };
}

export default async function BuildTypePage({ params }: Props) {
  const { type } = await params;
  const config = buildTypes[type];
  if (!config) notFound();
  const meta = cardIcon[config.id];

  return (
    <section className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <main className="max-w-2xl mx-auto w-full px-6">
        <div className="mb-6">
          <Link href="/build" className="text-xs text-gray-500 hover:text-gray-900 transition-colors mb-3 inline-block">
            ← Back
          </Link>
          <div className="flex items-center gap-3 mb-2">
            {meta && (
              <span className="text-blue-600 shrink-0">
                <Icon id={meta} size={26} />
              </span>
            )}
            <h1 className="text-2xl font-bold text-gray-900">
              {config.name}
            </h1>
          </div>
          <p className="text-sm text-gray-500">{config.tagline}</p>
        </div>
        <StepForm config={config} reportPath={`/build/report/${config.id}`} loadingText="Building your recommendation..." />
      </main>
    </section>
  );
}
