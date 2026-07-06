"use client";

import { motion } from "framer-motion";
import type { RecommendationResult, RecommendationKey } from "@/lib/build/engine";

const recommendations: Record<
  RecommendationKey,
  {
    title: string;
    subtitle: string;
    color: string;
    accent: string;
    why: string;
    tools: string[];
    nextSteps: string[];
  }
> = {
  no_code: {
    title: "Start with No-Code",
    subtitle: "Build fast, validate cheap, upgrade later.",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
    accent: "text-emerald-600 dark:text-emerald-400",
    why: "Your idea is early-stage or low-complexity enough that a no-code tool will get you to a working product in days — not months. You can validate whether it works before committing to a full custom build. Most no-code products can be migrated or replaced when you outgrow them.",
    tools: ["Webflow (websites)", "Bubble (web apps)", "Framer (landing pages)", "Glide (mobile)", "Zapier / Make (automation)", "Airtable (internal tools)"],
    nextSteps: [
      "Define the single most important thing your product must do",
      "Pick one no-code tool that matches your use case",
      "Build a prototype in a week — show it to 5 real users",
      "If they use it, invest in a proper build",
    ],
  },
  freelancer: {
    title: "Hire a Freelancer",
    subtitle: "Clear scope + right budget = one person can own this.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
    accent: "text-blue-600 dark:text-blue-400",
    why: "You have a well-defined idea and a realistic budget for a focused build. This doesn't need a full team — one experienced freelancer can own the whole thing. The key is a tight, written spec before you start. Scope creep is what kills freelancer projects.",
    tools: ["Upwork", "Toptal", "Gun.io", "Contra", "LinkedIn — referrals from your network"],
    nextSteps: [
      "Write a one-page brief: what it does, who uses it, what's out of scope",
      "Get 3 quotes — not just on price, but on how they understood the brief",
      "Ask to see one relevant previous project",
      "Pay in milestones tied to deliverables — not time",
    ],
  },
  consultant: {
    title: "You Need a Consultant",
    subtitle: "Complex enough to need someone who's done this before.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
    accent: "text-purple-600 dark:text-purple-400",
    why: "Your project has real complexity — integrations, scale, security, or growth requirements that need experience to get right the first time. A junior freelancer or no-code tool will get you halfway there and leave you stuck. You need someone who can architect a solution, not just follow instructions.",
    tools: [],
    nextSteps: [
      "Document your requirements — even rough notes are a starting point",
      "Have a discovery call before any proposal — the questions they ask reveal their experience",
      "Expect a discovery phase (1–2 weeks) before any code is written",
      "Get it in writing: timeline, deliverables, how changes are handled",
    ],
  },
  validate: {
    title: "Validate Before You Build",
    subtitle: "Building without clarity is expensive. Clarity is free.",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
    accent: "text-amber-600 dark:text-amber-400",
    why: "Right now, the biggest risk isn't technical — it's building the wrong thing. The details are fuzzy enough that any developer you hire will fill in the blanks with their assumptions, not yours. Before you spend a penny on code, you need to be clear on who this is for, what problem it solves, and what the simplest version looks like.",
    tools: ["Notion — write down the idea in full", "Figma — sketch the screens (free tier)", "Typeform — survey potential users", "Landing page — describe it, see if people sign up"],
    nextSteps: [
      "Write a one-paragraph description: who uses it, what they do, why it matters",
      "Talk to 5 people who would be your users — not friends, real potential customers",
      "Sketch the 3 most important screens on paper",
      "Come back when you can describe it in one sentence without using the word 'like'",
    ],
  },
};

const categoryInsights: Record<string, Record<string, string>> = {
  clarity: {
    low: "Your idea needs more definition before anyone can build it accurately.",
    mid: "The concept is forming — nail down the core use case before briefing a developer.",
    high: "Good clarity. You can write a brief that a developer can actually follow.",
  },
  complexity: {
    low: "Simple scope — a no-code tool or a junior freelancer can handle this.",
    mid: "Moderate complexity — needs someone with solid experience.",
    high: "High complexity — requires an experienced developer or team.",
  },
  budget: {
    low: "Tight budget — focus on the smallest thing that proves value.",
    mid: "Reasonable investment — enough for a proper focused build.",
    high: "Solid budget — you can afford to do this right.",
  },
  ownership: {
    low: "You'll want to own and update this yourself — factor that into your tool choice.",
    mid: "You'll need some ongoing support — plan for maintenance from the start.",
    high: "This is a growing product — build it to last and scale.",
  },
};

function getInsight(categoryId: string, percentage: number): string {
  const insights = categoryInsights[categoryId];
  if (!insights) return "";
  if (percentage < 40) return insights.low;
  if (percentage < 70) return insights.mid;
  return insights.high;
}

function ScoreBar({ percentage }: { percentage: number }) {
  const color =
    percentage >= 70
      ? "bg-emerald-500"
      : percentage >= 40
      ? "bg-amber-500"
      : "bg-red-400";
  const total = 10;
  const filled = Math.round((percentage / 100) * total);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, delay: 0.02 * i }}
          className={`w-3 h-3 shrink-0 ${i < filled ? color : "bg-gray-200 dark:bg-gray-800"}`}
        />
      ))}
    </div>
  );
}

export function RecommendationCard({ result }: { result: RecommendationResult }) {
  const rec = recommendations[result.recommendation];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-6"
    >
      {/* Recommendation header */}
      <div>
        <div className="flex items-start gap-3 mb-3">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`text-xs font-bold px-2 py-1 shrink-0 mt-0.5 ${rec.color}`}
          >
            Recommendation
          </motion.span>
          <div>
            <h2 className={`text-base font-bold ${rec.accent}`}>{rec.title}</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">{rec.subtitle}</p>
          </div>
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{rec.why}</p>
      </div>

      {/* Category breakdown */}
      <div className="border border-gray-200 dark:border-gray-800 p-4 shadow-[2px_2px_0px_#e5e7eb] dark:shadow-[2px_2px_0px_#374151]">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
          How we got there
        </p>
        <div className="space-y-3">
          {result.categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.06 * i }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-gray-900 dark:text-white">{cat.label}</span>
                <span className="text-[10px] text-gray-400">{cat.percentage}%</span>
              </div>
              <ScoreBar percentage={cat.percentage} />
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                {getInsight(cat.id, cat.percentage)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools (if any) */}
      {rec.tools.length > 0 && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            {result.recommendation === "no_code" ? "Tools to consider" : "Where to find help"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {rec.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next steps */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
          Next steps
        </p>
        <ol className="space-y-2">
          {rec.nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
                {i + 1}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}
