import { notFound } from "next/navigation";
import { buildTypes } from "@/lib/build/config";
import { BuildForm } from "@/components/build/BuildForm";

interface Props {
  params: Promise<{ type: string }>;
}

export default async function BuildTypePage({ params }: Props) {
  const { type } = await params;
  const config = buildTypes[type];
  if (!config) notFound();

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 pt-16 pb-16">
        <div className="mb-6">
          <p className="text-[10px] tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-1">
            Build Guide · {config.name}
          </p>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {config.tagline}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {config.description}
          </p>
        </div>
        <BuildForm config={config} />
      </main>
    </div>
  );
}
