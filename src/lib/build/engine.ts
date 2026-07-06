import { buildTypes, type BuildConfig } from "./config";

export interface BuildAnswer {
  questionId: string;
  value: string;
}

export type RecommendationKey = "no_code" | "freelancer" | "consultant" | "validate";

export interface RecommendationResult {
  buildTypeId: string;
  recommendation: RecommendationKey;
  categories: CategoryResult[];
  overallScore: number;
  maxScore: number;
  percentage: number;
}

interface CategoryResult {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

// Maps each build type's categories to their question IDs
const categoryQuestionMap: Record<string, Record<string, string[]>> = {
  frontend: {
    clarity: ["fe_purpose", "fe_audience"],
    complexity: ["fe_accounts", "fe_integrations"],
    budget: ["fe_budget", "fe_timeline"],
    ownership: ["fe_maintenance", "fe_growth"],
  },
  backend: {
    clarity: ["be_purpose", "be_existing"],
    complexity: ["be_scale", "be_security"],
    budget: ["be_budget", "be_timeline"],
    ownership: ["be_maintenance", "be_growth"],
  },
  fullstack: {
    clarity: ["fs_purpose", "fs_defined"],
    complexity: ["fs_complexity", "fs_validated"],
    budget: ["fs_budget", "fs_timeline"],
    ownership: ["fs_team", "fs_growth"],
  },
  cloud: {
    clarity: ["cloud_situation", "cloud_workload"],
    complexity: ["cloud_provider", "cloud_state"],
    budget: ["cloud_scale", "cloud_concern"],
    ownership: ["cloud_budget", "cloud_ownership"],
  },
  automation: {
    clarity: ["auto_problem", "auto_tools"],
    complexity: ["auto_frequency", "auto_error"],
    budget: ["auto_budget", "auto_timeline"],
    ownership: ["auto_ownership", "auto_growth"],
  },
  internal: {
    clarity: ["int_purpose", "int_users"],
    complexity: ["int_complexity", "int_data"],
    budget: ["int_budget", "int_timeline"],
    ownership: ["int_maintenance", "int_growth"],
  },
};

function getCategoryScore(config: BuildConfig, categoryId: string, answers: BuildAnswer[]): number {
  const map = categoryQuestionMap[config.id];
  if (!map) return 0;
  const questionIds = map[categoryId] ?? [];
  let score = 0;
  for (const qid of questionIds) {
    const question = config.questions.find((q) => q.id === qid);
    if (!question) continue;
    const answer = answers.find((a) => a.questionId === qid);
    if (!answer) continue;
    const option = question.options.find((o) => o.value === answer.value);
    if (option) score += option.score;
  }
  return score;
}

function getCategoryMaxScore(config: BuildConfig, categoryId: string): number {
  const map = categoryQuestionMap[config.id];
  if (!map) return 0;
  const questionIds = map[categoryId] ?? [];
  return questionIds.reduce((sum, qid) => {
    const question = config.questions.find((q) => q.id === qid);
    if (!question) return sum;
    return sum + Math.max(...question.options.map((o) => o.score));
  }, 0);
}

function deriveRecommendation(
  categories: CategoryResult[],
  answers: BuildAnswer[],
  configId: string
): RecommendationKey {
  const byId = Object.fromEntries(categories.map((c) => [c.id, c.percentage]));
  const clarity = byId["clarity"] ?? 0;
  const complexity = byId["complexity"] ?? 0;
  const budget = byId["budget"] ?? 0;
  const ownership = byId["ownership"] ?? 0;

  // Not clear enough on what they're building — validate first
  if (clarity < 40) return "validate";

  // Low complexity + low-mid budget + wants self-ownership → no-code tools
  if (complexity <= 40 && budget <= 40 && ownership <= 40) return "no_code";

  // Clear idea, moderate scope, mid budget → freelancer
  if (clarity >= 50 && complexity <= 60 && budget <= 60) return "freelancer";

  // High complexity or high budget or growth-oriented → consultant
  if (complexity >= 60 || budget >= 60 || ownership >= 60) return "consultant";

  // Fallback for borderline cases leaning moderate
  if (clarity >= 50 && complexity <= 50 && budget <= 50) return "freelancer";

  return "consultant";
}

export function calculateBuildResult(configId: string, answers: BuildAnswer[]): RecommendationResult {
  const config = buildTypes[configId];
  if (!config) throw new Error(`Build type "${configId}" not found`);

  const categories: CategoryResult[] = config.categories.map((cat) => {
    const score = getCategoryScore(config, cat.id, answers);
    const maxScore = getCategoryMaxScore(config, cat.id);
    const percentage = maxScore > 0 ? Math.max(0, Math.round((score / maxScore) * 100)) : 0;
    return { id: cat.id, label: cat.label, score, maxScore, percentage };
  });

  const totalScore = categories.reduce((sum, c) => sum + c.score, 0);
  const totalMax = categories.reduce((sum, c) => sum + c.maxScore, 0);
  const percentage = totalMax > 0 ? Math.max(0, Math.round((totalScore / totalMax) * 100)) : 0;

  const recommendation = deriveRecommendation(categories, answers, configId);

  return {
    buildTypeId: configId,
    recommendation,
    categories,
    overallScore: totalScore,
    maxScore: totalMax,
    percentage,
  };
}
