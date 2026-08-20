import type { Metadata } from "next";
import { buildTypes } from "@/lib/build/config";
import { CategoryCard } from "@/components/CategoryCard";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Build Guide",
  description: "Don't know where to start? Pick what you want to build. 8 questions to get a clear recommendation — no jargon, no fluff.",
};

const order = ["frontend", "backend", "fullstack", "cloud", "automation", "internal"];

const cardMeta: Record<string, string> = {
  frontend:   "Most Requested",
  backend:    "Foundation",
  fullstack:  "Common",
  cloud:      "Infrastructure",
  automation: "Save Time",
  internal:   "Team",
};

const accents: Record<string, string> = {
  frontend: "purple",
  backend: "blue",
  fullstack: "emerald",
  cloud: "rose",
  automation: "amber",
  internal: "indigo",
};

export default function BuildPage() {
  const ordered = order.map((id) => buildTypes[id]).filter(Boolean);
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-600 shrink-0">
            <Icon id="build" size={24} />
          </span>
          <h1 className="text-xl font-bold text-gray-900">
            What do you want to build?
          </h1>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Pick the type that matches your idea — you&apos;ll get a clear recommendation in 8 questions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {ordered.map((bt) => {
            const badge = cardMeta[bt.id];
            if (!badge) return null;
            return (
              <CategoryCard
                key={bt.id}
                href={`/build/${bt.id}`}
                iconId={bt.id}
                name={bt.name}
                categories={bt.categories.map((c) => c.label)}
                badge={badge}
                cta="Build plan"
                accent={accents[bt.id]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
