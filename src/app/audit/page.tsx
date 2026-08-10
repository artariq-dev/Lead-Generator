import type { Metadata } from "next";
import { calculators } from "@/lib/calculators/config";
import { DotIcon } from "@/components/DotIcon";
import { CategoryCard } from "@/components/CategoryCard";
import { accents, type Accent } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Software Audit",
  description: "Pick your area — cloud, fullstack, or pipeline. 8 questions. Instant scorecard. Find out what's wrong and what to fix first.",
};

const cardMeta: Record<string, { accent: Accent; badge: string }> = {
  cloud:     { accent: accents.blue,     badge: "High Stakes" },
  fullstack: { accent: accents.violet,   badge: "Popular" },
  frontend:  { accent: accents.emerald,  badge: "Quick Win" },
  backend:   { accent: accents.red,      badge: "Critical" },
  crm:       { accent: accents.amber,    badge: "Revenue" },
  pipeline:  { accent: accents.orange,   badge: "Speed" },
  growth:    { accent: accents.teal,     badge: "Scale Up" },
};

export default function AssessPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-blue-400 dark:text-blue-600 shrink-0">
            <DotIcon id="audit" color="currentColor" />
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Which area is costing you the most?
          </h1>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          Pick the one that feels shakiest — you&apos;ll get a scored report in 2 minutes, with clear next steps.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.values(calculators).map((calc) => {
            const meta = cardMeta[calc.id];
            if (!meta) return null;
            return (
              <CategoryCard
                key={calc.id}
                href={`/audit/${calc.id}`}
                iconId={calc.id}
                name={calc.name}
                categories={calc.categories.map((c) => c.label)}
                accent={meta.accent}
                badge={meta.badge}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
