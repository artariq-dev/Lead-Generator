import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildTypes } from "@/lib/build/config";
import { BuildForm } from "@/components/build/BuildForm";
import { DotIcon } from "@/components/DotIcon";

const cardColors: Record<string, { color: string; dotIconId: string }> = {
  frontend:   { color: "#10b981", dotIconId: "frontend"     },
  backend:    { color: "#ef4444", dotIconId: "backend_build" },
  fullstack:  { color: "#8b5cf6", dotIconId: "fullstack"    },
  cloud:      { color: "#3b82f6", dotIconId: "cloud"        },
  automation: { color: "#f59e0b", dotIconId: "automation"   },
  internal:   { color: "#14b8a6", dotIconId: "internal"     },
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
  const meta = cardColors[config.id];

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-16">
        <div className="mb-6">
          <Link href="/build" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-3 inline-block">← Back</Link>
          <div className="flex items-center gap-3 mb-2">
            {meta && <DotIcon id={meta.dotIconId} color={meta.color} />}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config.name}
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{config.tagline}</p>
        </div>
        <BuildForm config={config} />
      </main>
    </div>
  );
}
