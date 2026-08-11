import { calculators, type CalculatorConfig } from "./config";

export interface Answer {
  questionId: string;
  value: string;
}

const categoryQuestionMap: Record<string, Record<string, string[]>> = {
  growth: {
    attract: ["growth_channels", "growth_response"],
    capture: ["growth_followup", "growth_pipeline"],
    automate: ["growth_manual", "growth_tools"],
    invest: ["growth_budget", "growth_measure"],
  },
  performance: {
    speed: ["perf_load", "perf_why"],
    stability: ["perf_breaks", "perf_recover"],
    visibility: ["perf_alert", "perf_health"],
    capacity: ["perf_scale", "perf_backup"],
  },
  ux: {
    onboarding: ["ux_learn", "ux_return"],
    usability: ["ux_confusing", "ux_stuck"],
    mobile: ["ux_phone", "ux_done"],
    feedback: ["ux_usage", "ux_complaints"],
  },
  security: {
    protection: ["sec_safe", "sec_protected"],
    access: ["sec_access", "sec_leavers"],
    monitoring: ["sec_alert", "sec_check"],
    recovery: ["sec_backup", "sec_plan"],
  },
};

interface CategoryScore {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface CalculatorResult {
  calculatorId: string;
  overallScore: number;
  maxScore: number;
  percentage: number;
  categories: CategoryScore[];
  grade: string;
}

function getGrade(percentage: number): string {
  if (percentage >= 95) return "A";
  if (percentage >= 75) return "B";
  if (percentage >= 55) return "C";
  if (percentage >= 35) return "D";
  return "F";
}

function getCategoryMaxScore(config: CalculatorConfig, categoryId: string): number {
  const map = categoryQuestionMap[config.id];
  if (!map) return 0;
  const questionIds = map[categoryId] ?? [];
  return questionIds.reduce((sum, qid) => {
    const question = config.questions.find((q) => q.id === qid);
    if (!question) return sum;
    return sum + Math.max(...question.options.map((o) => o.score));
  }, 0);
}

function getCategoryScore(config: CalculatorConfig, categoryId: string, answers: Answer[]): number {
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

export function calculateScore(configId: string, answers: Answer[]): CalculatorResult {
  const config = calculators[configId];
  if (!config) throw new Error(`Calculator "${configId}" not found`);

  const categories: CategoryScore[] = config.categories.map((cat) => {
    const score = getCategoryScore(config, cat.id, answers);
    const maxScore = getCategoryMaxScore(config, cat.id);
    const percentage = maxScore > 0 ? Math.max(0, Math.round((score / maxScore) * 100)) : 0;
    return { id: cat.id, label: cat.label, score, maxScore, percentage };
  });

  const totalScore = categories.reduce((sum, c) => sum + c.score, 0);
  const totalMax = categories.reduce((sum, c) => sum + c.maxScore, 0);
  const overallScore = Math.max(0, totalScore);
  const percentage = totalMax > 0 ? Math.max(0, Math.round((overallScore / totalMax) * 100)) : 0;

  return {
    calculatorId: configId,
    overallScore,
    maxScore: totalMax,
    percentage,
    grade: getGrade(percentage),
    categories,
  };
}
