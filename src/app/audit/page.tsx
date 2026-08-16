import type { Metadata } from "next";
import { calculators, auditCardMeta } from "@/lib/calculators/config";
import { CategoryCard } from "@/components/CategoryCard";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Audit your software",
  description: "Pick the area that matters most — growth, user experience, performance, or security. 8 plain questions, an instant scorecard, no sign-up.",
};

const order = ["growth", "performance", "ux", "security"] as const;

export default function AuditPage() {
  const ordered = order.map((id) => calculators[id]).filter(Boolean);
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-blue-400 shrink-0">
            <Icon id="audit" size={24} />
          </span>
          <h1 className="text-xl font-bold text-white">
            Audit your software
          </h1>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Pick the area that matters most — 8 questions, an instant scorecard, no sign-up.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {ordered.map((config) => {
            const badge = auditCardMeta[config.id];
            if (!badge) return null;
            return (
              <CategoryCard
                key={config.id}
                href={`/audit/${config.id}`}
                iconId={config.id}
                name={config.name}
                categories={config.categories.map((c) => c.short)}
                badge={badge}
                cta="Run audit"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
