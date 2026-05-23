import { painLabels, parentLabels } from "./pain-points";

export function painPointsTemplate(pains: string[]): string {
  const grouped = new Map<string, string[]>();
  pains.forEach((id) => {
    const parent = parentLabels[id] || "Other";
    if (!grouped.has(parent)) grouped.set(parent, []);
    grouped.get(parent)!.push(id);
  });
  const body = Array.from(grouped.entries())
    .map(([parent, ids]) => `${parent}\n${ids.map((id) => `  • ${painLabels[id] || id}`).join("\n")}`)
    .join("\n\n");

  return `--- Business Pain Points ---\n\n${body}\n\n--- What I Need ---\nI want Abdur Rehman to look at this and tell me:\n  1. Which of these is quietly costing us the most right now?\n  2. What's the one fix that buys the most breathing room?\n  3. How long before we actually start feeling the difference?\n\nNo pitch. No pressure. Just tell me where to start.`;
}

export function reportTemplate(
  name: string,
  grade: string,
  percentage: number,
  categories: { label: string; percentage: number }[],
): string {
  const catLines = categories.map((c) => `  ${c.label}: ${c.percentage}%`).join("\n");

  return `--- Infrastructure Health Check ---\nCalculator: ${name}\nGrade: ${grade} | Score: ${percentage}%\n\nCategory Breakdown:\n${catLines}\n\n--- What I Need ---\nI want Abdur Rehman to look at this and tell me:\n  1. Which of these is quietly costing us the most right now?\n  2. What's the one fix that buys the most breathing room?\n  3. How long before we actually start feeling the difference?\n\nNo pitch. No pressure. Just tell me where to start.`;
}
