export interface Question {
  id: string;
  type?: "choice";
  label: string;
  options: { label: string; value: string; score: number }[];
}

export interface Category {
  id: string;
  label: string;
  weight: number;
}

export interface CalculatorConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  questions: Question[];
  categories: Category[];
  maxScore: number;
}

export const calculators: Record<string, CalculatorConfig> = {
  cloud: {
    id: "cloud",
    name: "Cloud Mathematician",
    tagline: "How healthy is your cloud infrastructure?",
    description: "Answer 7 questions about your AWS setup and get a personalized report with cost-saving opportunities and security fixes.",
    categories: [
      { id: "cost", label: "Cost Optimization", weight: 30 },
      { id: "security", label: "Security", weight: 25 },
      { id: "reliability", label: "Reliability", weight: 25 },
      { id: "monitoring", label: "Monitoring", weight: 20 },
    ],
    maxScore: 100,
    questions: [
      {
        id: "monthly_spend",
        label: "What's your monthly AWS spend?",
        options: [
          { label: "Less than $1,000", value: "low", score: 5 },
          { label: "$1,000 - $5,000", value: "medium", score: 4 },
          { label: "$5,000 - $20,000", value: "high", score: 3 },
          { label: "More than $20,000", value: "enterprise", score: 2 },
        ],
      },
      {
        id: "infra_as_code",
        label: "Do you use Infrastructure as Code (Terraform, etc.)?",
        options: [
          { label: "Everything is Terraform", value: "full", score: 5 },
          { label: "Partially — some resources", value: "partial", score: 3 },
          { label: "No, everything is manual", value: "none", score: 0 },
        ],
      },
      {
        id: "monitoring",
        label: "Do you have monitoring and alerting?",
        options: [
          { label: "Full stack (metrics, logs, alerts)", value: "full", score: 5 },
          { label: "Basic (CloudWatch only)", value: "basic", score: 2 },
          { label: "No monitoring", value: "none", score: 0 },
        ],
      },
      {
        id: "backups",
        label: "Do you have automated backups with restore testing?",
        options: [
          { label: "Automated + tested regularly", value: "tested", score: 5 },
          { label: "Automated but never tested", value: "untested", score: 3 },
          { label: "No automated backups", value: "none", score: 0 },
        ],
      },
      {
        id: "security",
        label: "How would you describe your AWS security posture?",
        options: [
          { label: "Proactive (GuardDuty, Config, SCPs)", value: "strong", score: 5 },
          { label: "Basic (IAM, security groups)", value: "basic", score: 2 },
          { label: "Default AWS config", value: "weak", score: 0 },
        ],
      },
      {
        id: "ci_cd",
        label: "Do you have CI/CD pipelines?",
        options: [
          { label: "Yes — automated deploy on every push", value: "full", score: 5 },
          { label: "Partial — manual deploy with some automation", value: "partial", score: 3 },
          { label: "No — we deploy manually", value: "none", score: 0 },
        ],
      },
      {
        id: "cost_tracking",
        label: "How do you track cloud costs?",
        options: [
          { label: "Budgets + alerts + regular reviews", value: "full", score: 5 },
          { label: "Check the bill monthly", value: "basic", score: 2 },
          { label: "We don't track costs", value: "none", score: 0 },
        ],
      },
    ],
  },

  fullstack: {
    id: "fullstack",
    name: "FullStack Alchemist",
    tagline: "Is your web app production-ready?",
    description: "Answer 7 questions about your application's foundation and get a prioritized roadmap for the features your users expect.",
    categories: [
      { id: "foundation", label: "App Foundation", weight: 25 },
      { id: "experience", label: "User Experience", weight: 25 },
      { id: "growth", label: "Growth Readiness", weight: 25 },
      { id: "quality", label: "Code Quality", weight: 25 },
    ],
    maxScore: 100,
    questions: [
      {
        id: "authentication",
        label: "Does your app have authentication?",
        options: [
          { label: "Yes — social login + email + SSO", value: "full", score: 5 },
          { label: "Basic email/password only", value: "basic", score: 3 },
          { label: "No auth yet", value: "none", score: 0 },
        ],
      },
      {
        id: "payments",
        label: "Do you need payment processing?",
        options: [
          { label: "Fully integrated (Stripe, subscriptions)", value: "full", score: 5 },
          { label: "Partial — invoicing only", value: "partial", score: 3 },
          { label: "Not yet implemented", value: "none", score: 0 },
          { label: "Not applicable (free product)", value: "na", score: 5 },
        ],
      },
      {
        id: "seo",
        label: "Is your app optimized for search engines?",
        options: [
          { label: "Full SEO (SSR, structured data, sitemaps)", value: "full", score: 5 },
          { label: "Basic (meta tags only)", value: "basic", score: 3 },
          { label: "No SEO work done", value: "none", score: 0 },
        ],
      },
      {
        id: "performance",
        label: "What's your Lighthouse performance score?",
        options: [
          { label: "90+ — excellent", value: "great", score: 5 },
          { label: "50-89 — needs work", value: "okay", score: 3 },
          { label: "Under 50 — poor", value: "poor", score: 1 },
          { label: "I don't know", value: "unknown", score: 0 },
        ],
      },
      {
        id: "mobile",
        label: "Is your app mobile-responsive?",
        options: [
          { label: "Fully responsive (mobile + tablet + desktop)", value: "full", score: 5 },
          { label: "Desktop-only for now", value: "desktop_only", score: 2 },
          { label: "Not yet built for any device", value: "not_built", score: 0 },
        ],
      },
      {
        id: "admin",
        label: "Do you have an admin dashboard?",
        options: [
          { label: "Yes — user management, analytics, settings", value: "full", score: 5 },
          { label: "Basic — can view users", value: "basic", score: 3 },
          { label: "No admin panel", value: "none", score: 0 },
        ],
      },
      {
        id: "testing",
        label: "Do you have automated testing?",
        options: [
          { label: "Unit + integration + E2E tests", value: "full", score: 5 },
          { label: "Some unit tests", value: "partial", score: 3 },
          { label: "No tests — manual only", value: "none", score: 0 },
        ],
      },
    ],
  },

  pipeline: {
    id: "pipeline",
    name: "Pipeline Plumber",
    tagline: "How fast and reliable is your deployment pipeline?",
    description: "Answer 7 questions about your development workflow and discover bottlenecks that slow your team down.",
    categories: [
      { id: "speed", label: "Deployment Speed", weight: 30 },
      { id: "quality_gates", label: "Quality Gates", weight: 25 },
      { id: "observability", label: "Observability", weight: 25 },
      { id: "process", label: "Process & Docs", weight: 20 },
    ],
    maxScore: 100,
    questions: [
      {
        id: "deploy_frequency",
        label: "How often do you deploy to production?",
        options: [
          { label: "Multiple times per day", value: "daily", score: 5 },
          { label: "A few times per week", value: "weekly", score: 4 },
          { label: "Weekly or bi-weekly", value: "biweekly", score: 2 },
          { label: "Monthly or less", value: "monthly", score: 0 },
        ],
      },
      {
        id: "deploy_process",
        label: "How do you deploy?",
        options: [
          { label: "Automated CI/CD (GitHub Actions, etc.)", value: "automated", score: 5 },
          { label: "Scripted but manual trigger", value: "scripted", score: 3 },
          { label: "SSH in and run commands", value: "manual", score: 1 },
          { label: "FTP / file upload", value: "ftp", score: 0 },
        ],
      },
      {
        id: "testing",
        label: "What tests run before deploy?",
        options: [
          { label: "Automated tests block bad deploys", value: "full", score: 5 },
          { label: "Tests run but don't block", value: "advisory", score: 3 },
          { label: "No automated tests", value: "none", score: 0 },
        ],
      },
      {
        id: "rollback",
        label: "How do you roll back a bad deploy?",
        options: [
          { label: "One-click rollback to previous version", value: "easy", score: 5 },
          { label: "Manual rollback (re-run deploy)", value: "manual", score: 3 },
          { label: "No rollback process", value: "none", score: 0 },
        ],
      },
      {
        id: "staging",
        label: "Do you have a staging environment?",
        options: [
          { label: "Yes — mirrors production exactly", value: "full", score: 5 },
          { label: "Yes — but different from production", value: "partial", score: 3 },
          { label: "No staging — we test in prod", value: "none", score: 0 },
        ],
      },
      {
        id: "monitoring",
        label: "Do you know when production breaks?",
        options: [
          { label: "Alerts notify us before users", value: "proactive", score: 5 },
          { label: "We check manually", value: "reactive", score: 2 },
          { label: "Users tell us we're down", value: "none", score: 0 },
        ],
      },
      {
        id: "docs",
        label: "Is your deployment process documented?",
        options: [
          { label: "Runbook + rollback steps + contact list", value: "full", score: 5 },
          { label: "Some notes in a README", value: "basic", score: 3 },
          { label: "No documentation", value: "none", score: 0 },
        ],
      },
    ],
  },
};
