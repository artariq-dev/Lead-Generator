export interface SubItem {
  id: string;
  label: string;
  tech: string;
  severity?: string;
}

export interface PainGroup {
  id: string;
  label: string;
  description: string;
  children: SubItem[];
}

export const groupsBusiness: PainGroup[] = [
  {
    id: "monitoring",
    label: "You shouldn't hear about downtime from a customer",
    description: "Every minute you don't know, someone else is already complaining",
    children: [
      { id: "monitor", label: "We've been down for an hour before anyone on the team noticed", severity: "critical", tech: "Prometheus, Grafana" },
      { id: "incident", label: "When things break, the team panics — there's no playbook", severity: "critical", tech: "Runbooks, Statuspage" },
      { id: "alert", label: "Alerts either fire constantly or not at all — both are useless", severity: "warning", tech: "PagerDuty, Opsgenie" },
    ],
  },
  {
    id: "deploying",
    label: "Deploys that don't keep you up at night",
    description: "A release shouldn't require a war room and a prayer",
    children: [
      { id: "deploy", label: "Every deployment feels like pulling a pin on a grenade", severity: "critical", tech: "ECS, K8s, CloudFormation" },
      { id: "rollback", label: "The last bad release took 3 hours to undo — while users were affected", severity: "critical", tech: "Blue/Green, Canary" },
      { id: "verify", label: "After deploying, we just... assume it worked", severity: "warning", tech: "Datadog, Sentry, PagerDuty" },
    ],
  },
  {
    id: "security",
    label: "Protecting users — and your reputation",
    description: "You don't want to find out you were breached from a news article",
    children: [
      { id: "secure", label: "We wouldn't know if we'd been breached — until it's on Twitter", severity: "critical", tech: "GuardDuty, WAF, IAM" },
      { id: "compliance", label: "Enterprise clients ask for SOC2 proof — the deal dies there", severity: "critical", tech: "SOC2, HIPAA, Config" },
      { id: "scan", label: "We have no idea what security holes exist in our codebase right now", severity: "critical", tech: "Trivy, Snyk, SonarQube" },
    ],
  },
  {
    id: "shipping",
    label: "Getting features to users — fast and safely",
    description: "Shipping should feel boring, not like defusing a bomb",
    children: [
      { id: "release", label: "Every release needs the same person in the room or it doesn't happen", severity: "critical", tech: "ArgoCD, GitOps" },
      { id: "staging", label: "Staging is so broken we've stopped using it", severity: "critical", tech: "K8s, Terraform, Helm" },
      { id: "build", label: "Deploying a hotfix takes longer than writing it", severity: "warning", tech: "GitHub Actions, Docker" },
      { id: "registry", label: "Old builds disappear — we can't roll back to a known good version", severity: "warning", tech: "GHCR, Docker Hub, ECR" },
    ],
  },
  {
    id: "building",
    label: "Catching problems before users do",
    description: "If users find it first, you've already lost their trust",
    children: [
      { id: "test", label: "We test in production and hope for the best", severity: "critical", tech: "Jest, Playwright, k6" },
      { id: "bug", label: "The same bugs keep coming back — we fix symptoms, not causes", severity: "critical", tech: "Sentry, Linear" },
      { id: "ci", label: "CI pipelines are flaky — half the team just reruns until it passes", severity: "warning", tech: "GitHub Actions, CircleCI" },
    ],
  },
  {
    id: "performance",
    label: "Fast for users, not just on your laptop",
    description: "Slowness you can't explain is revenue you can't see leaving",
    children: [
      { id: "slow", label: "The app is sluggish under load and nobody knows where to start", severity: "critical", tech: "k6, Datadog, Lighthouse" },
      { id: "local", label: "Works perfectly locally — breaks in production every time", severity: "critical", tech: "Docker, Env Config" },
      { id: "cascade", label: "One slow third-party API call takes down the whole app", severity: "warning", tech: "Circuit Breakers, Timeouts" },
    ],
  },
  {
    id: "coding",
    label: "Code that doesn't come back to haunt you",
    description: "One person leaving shouldn't put the whole product at risk",
    children: [
      { id: "code", label: "The codebase is only safe when one specific person is online", severity: "critical", tech: "Git, GitHub, VS Code" },
      { id: "review", label: "Code gets merged because everyone's too busy to review it properly", severity: "warning", tech: "PRs, CodeRabbit" },
      { id: "debt", label: "Tech debt is so bad that new features break old ones constantly", severity: "warning", tech: "SonarQube, Refactoring" },
    ],
  },
  {
    id: "ops",
    label: "Data safety & cloud spend you can explain",
    description: "One bad day shouldn't erase everything you've built",
    children: [
      { id: "backup", label: "If the database died right now, we'd lose everything — and have no plan", severity: "critical", tech: "Velero, RDS Snapshot" },
      { id: "cost", label: "The AWS bill jumped 40% last month and nobody can explain it", severity: "critical", tech: "AWS Budgets, Infracost" },
      { id: "infra", label: "Infrastructure exists only in someone's memory — nothing is documented", severity: "warning", tech: "Terraform, Pulumi" },
    ],
  },
  {
    id: "team",
    label: "A team that can move without bottlenecks",
    description: "Velocity shouldn't depend on who's online today",
    children: [
      { id: "onboard", label: "A new developer takes weeks before they can ship anything", severity: "critical", tech: "Docs, Dev Containers" },
      { id: "knowledge", label: "Everything lives in one person's head — they're burning out", severity: "critical", tech: "Notion, Confluence, Runbooks" },
      { id: "docs", label: "No documentation — we figure things out by reading old code", severity: "warning", tech: "Swagger, Storybook, Wikis" },
    ],
  },
  {
    id: "planning",
    label: "From idea to execution",
    description: "Good ideas are worthless without a system to ship them",
    children: [
      { id: "plan", label: "Nobody agrees on what's being built — until it's already built wrong", severity: "critical", tech: "Jira, Linear" },
      { id: "idea", label: "Great ideas keep dying in Slack threads and never get built", severity: "warning", tech: "" },
      { id: "design", label: "Every developer designs their own way — and it shows", severity: "warning", tech: "Figma, Lucidchart" },
    ],
  },
  { id: "growth", label: "Getting found by new customers", description: "SEO, analytics, and business visibility", children: [
    { id: "seo", label: "Nobody can find us on Google", severity: "critical", tech: "Lighthouse, Schema.org" },
    { id: "analytics", label: "No idea what users do on our site", severity: "warning", tech: "GA, Plausible, Mixpanel" },
  ] },
];

export const painLabelsBusiness: Record<string, string> = {
  monitor: "We've been down for an hour before anyone on the team noticed",
  incident: "When things break, the team panics — there's no playbook",
  alert: "Alerts either fire constantly or not at all — both are useless",
  deploy: "Every deployment feels like pulling a pin on a grenade",
  rollback: "The last bad release took 3 hours to undo — while users were affected",
  verify: "After deploying, we just... assume it worked",
  secure: "We wouldn't know if we'd been breached — until it's on Twitter",
  compliance: "Enterprise clients ask for SOC2 proof — the deal dies there",
  scan: "We have no idea what security holes exist in our codebase right now",
  release: "Every release needs the same person in the room or it doesn't happen",
  staging: "Staging is so broken we've stopped using it",
  build: "Deploying a hotfix takes longer than writing it",
  registry: "Old builds disappear — we can't roll back to a known good version",
  test: "We test in production and hope for the best",
  bug: "The same bugs keep coming back — we fix symptoms, not causes",
  ci: "CI pipelines are flaky — half the team just reruns until it passes",
  slow: "The app is sluggish under load and nobody knows where to start",
  local: "Works perfectly locally — breaks in production every time",
  cascade: "One slow third-party API call takes down the whole app",
  code: "The codebase is only safe when one specific person is online",
  review: "Code gets merged because everyone's too busy to review it properly",
  debt: "Tech debt is so bad that new features break old ones constantly",
  backup: "If the database died right now, we'd lose everything — and have no plan",
  cost: "The AWS bill jumped 40% last month and nobody can explain it",
  infra: "Infrastructure exists only in someone's memory — nothing is documented",
  onboard: "A new developer takes weeks before they can ship anything",
  knowledge: "Everything lives in one person's head — they're burning out",
  docs: "No documentation — we figure things out by reading old code",
  plan: "Nobody agrees on what's being built — until it's already built wrong",
  idea: "Great ideas keep dying in Slack threads and never get built",
  design: "Every developer designs their own way — and it shows",
  seo: "Nobody can find us on Google",
  analytics: "No idea what users do on our site",
};

export const painLabelsTech: Record<string, string> = {
  monitor: "No monitoring or observability in place",
  incident: "No incident response runbook or process",
  alert: "Alert fatigue — too many false positives",
  deploy: "Deployments often cause production issues",
  rollback: "No reliable rollback strategy",
  verify: "No post-deploy verification checks",
  secure: "No breach detection or threat monitoring",
  compliance: "No SOC2 / compliance framework in place",
  scan: "No security scanning in CI pipeline",
  release: "Releases blocked by single-person dependency",
  staging: "Staging environment is unreliable or unused",
  build: "Slow CI pipeline — hotfixes take too long",
  registry: "No versioned artifact registry for rollbacks",
  test: "Testing in production — no automated test suite",
  bug: "Recurring bugs with no root cause analysis",
  ci: "Flaky CI pipelines that everyone ignores",
  slow: "Application slow under load — no profiling data",
  local: "Works locally but breaks in production consistently",
  cascade: "No circuit breakers — one slow dependency takes down everything",
  code: "Single point of failure — only one person knows the codebase",
  review: "Code reviews are skipped or rubber-stamped",
  debt: "Technical debt causing regressions on every change",
  backup: "No disaster recovery plan or backup testing",
  cost: "Uncontrolled cloud cost growth with no visibility",
  infra: "No Infrastructure as Code — everything is manual",
  onboard: "Slow developer onboarding — weeks before first commit",
  knowledge: "Tribal knowledge — critical context lives in one person's head",
  docs: "No API docs or architecture documentation",
  plan: "No aligned requirements — building the wrong thing repeatedly",
  idea: "Ideas lost in Slack threads with no structured process",
  design: "No design system or consistent UI/UX patterns",
  seo: "Poor search rankings — no structured data or SSR",
  analytics: "No user behavior tracking or event analytics",
};

export const parentLabelsBusiness: Record<string, string> = {
  monitor: "You shouldn't hear about downtime from a customer",
  incident: "You shouldn't hear about downtime from a customer",
  alert: "You shouldn't hear about downtime from a customer",
  deploy: "Deploys that don't keep you up at night",
  rollback: "Deploys that don't keep you up at night",
  verify: "Deploys that don't keep you up at night",
  secure: "Protecting users — and your reputation",
  compliance: "Protecting users — and your reputation",
  scan: "Protecting users — and your reputation",
  release: "Getting features to users — fast and safely",
  staging: "Getting features to users — fast and safely",
  build: "Getting features to users — fast and safely",
  registry: "Getting features to users — fast and safely",
  test: "Catching problems before users do",
  bug: "Catching problems before users do",
  ci: "Catching problems before users do",
  slow: "Fast for users, not just on your laptop",
  local: "Fast for users, not just on your laptop",
  cascade: "Fast for users, not just on your laptop",
  code: "Code that doesn't come back to haunt you",
  review: "Code that doesn't come back to haunt you",
  debt: "Code that doesn't come back to haunt you",
  backup: "Data safety & cloud spend you can explain",
  cost: "Data safety & cloud spend you can explain",
  infra: "Data safety & cloud spend you can explain",
  onboard: "A team that can move without bottlenecks",
  knowledge: "A team that can move without bottlenecks",
  docs: "A team that can move without bottlenecks",
  plan: "From idea to execution",
  idea: "From idea to execution",
  design: "From idea to execution",
  seo: "Getting found by new customers",
  analytics: "Getting found by new customers",
};
