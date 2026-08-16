import type { RecommendationKey } from "./engine";

export interface RecommendationContent {
  title: string;
  subtitle: string;
  color: string;
  accent: string;
  why: string;
  tools: string[];
  nextSteps: string[];
}

export const recommendations: Record<RecommendationKey, RecommendationContent> = {
  no_code: {
    title: "Start with No-Code",
    subtitle: "Build fast, validate cheap, upgrade later.",
    color: "bg-emerald-100 text-emerald-700  ",
    accent: "text-emerald-600 ",
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
    color: "bg-blue-100 text-blue-700  ",
    accent: "text-blue-600 ",
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
    color: "bg-purple-100 text-purple-700  ",
    accent: "text-purple-600 ",
    why: "Your project has real complexity — integrations, scale, security, or growth requirements that need experience to get right the first time. A junior freelancer or no-code tool will get you halfway there and leave you stuck. You need someone who can architect a solution, not just follow instructions.",
    tools: [],
    nextSteps: [
      "Send your requirements — even rough notes are a starting point",
      "Have a discovery call before any proposal — the questions they ask reveal their experience",
      "Expect a discovery phase (1–2 weeks) before any code is written",
      "Get it in writing: timeline, deliverables, how changes are handled",
    ],
  },
  validate: {
    title: "Validate Before You Build",
    subtitle: "Building without clarity is expensive. Clarity is free.",
    color: "bg-amber-100 text-amber-700  ",
    accent: "text-amber-600 ",
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

export const categoryInsights: Record<string, Record<string, string>> = {
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

export function getInsight(categoryId: string, percentage: number): string {
  const insights = categoryInsights[categoryId];
  if (!insights) return "";
  if (percentage < 40) return insights.low;
  if (percentage < 70) return insights.mid;
  return insights.high;
}
