import type { Metadata } from "next";
import { buildTypes } from "@/lib/build/config";
import { DotIcon } from "@/components/DotIcon";
import { CategoryCard } from "@/components/CategoryCard";
import { accents, type Accent } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Build Guide",
  description: "Don't know where to start? Pick what you want to build. 8 questions to get a clear recommendation — no jargon, no fluff.",
};

const order = ["frontend", "backend", "fullstack", "cloud", "automation", "internal"];

const cardMeta: Record<string, { accent: Accent; badge: string; dotIconId: string }> = {
  frontend: { accent: accents.emerald, badge: "Most Requested", dotIconId: "frontend" },
  backend:  { accent: accents.red,     badge: "Foundation",     dotIconId: "backend_build" },
  fullstack:{ accent: accents.violet,  badge: "Common",         dotIconId: "fullstack" },
  cloud:    { accent: accents.blue,    badge: "Infrastructure", dotIconId: "cloud" },
  automation:{accent: accents.amber,   badge: "Save Time",      dotIconId: "automation" },
  internal: { accent: accents.teal,    badge: "Team",           dotIconId: "internal" },
};

export default function BuildPage() {
  const ordered = order.map((id) => buildTypes[id]).filter(Boolean);
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-400 dark:text-emerald-600 shrink-0">
            <DotIcon id="build" color="currentColor" />
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            What do you want to build?
          </h1>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          Pick the type that matches your idea — you&apos;ll get a clear recommendation in 8 questions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ordered.map((bt) => {
            const meta = cardMeta[bt.id];
            if (!meta) return null;
            return (
              <CategoryCard
                key={bt.id}
                href={`/build/${bt.id}`}
                iconId={meta.dotIconId}
                name={bt.name}
                categories={bt.categories.map((c) => c.label)}
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
