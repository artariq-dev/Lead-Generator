interface BuildQuestion {
  id: string;
  label: string;
  options: { label: string; value: string; score: number }[];
}

interface BuildCategory {
  id: string;
  label: string;
}

export interface BuildConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  questions: BuildQuestion[];
  categories: BuildCategory[];
}

export const buildTypes: Record<string, BuildConfig> = {
  frontend: {
    id: "frontend",
    name: "Frontend Build",
    tagline: "A website or web app your users will see and interact with.",
    description: "Not sure what it takes to build your frontend idea? 8 questions to figure out the right approach — no-code, freelancer, or full build.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "fe_purpose",
        label: "What's the main purpose of what you want to build?",
        options: [
          { label: "A marketing or landing page to promote something", value: "marketing", score: 1 },
          { label: "A web app where users log in and do things", value: "webapp", score: 3 },
          { label: "An e-commerce store to sell products", value: "ecommerce", score: 3 },
          { label: "A content site — blog, portfolio, or directory", value: "content", score: 1 },
        ],
      },
      {
        id: "fe_audience",
        label: "Who is going to use it — and do you know what they need from it?",
        options: [
          { label: "Yes — I know exactly who they are and what they need", value: "clear", score: 4 },
          { label: "I have a rough idea of the audience", value: "rough", score: 2 },
          { label: "It's for my own business use", value: "internal", score: 3 },
          { label: "I'm not sure yet — still figuring it out", value: "unclear", score: 0 },
        ],
      },
      {
        id: "fe_accounts",
        label: "Does it need users to sign up, log in, or have their own accounts?",
        options: [
          { label: "No — publicly accessible, no accounts needed", value: "none", score: 1 },
          { label: "Yes — users need basic accounts and profiles", value: "basic", score: 3 },
          { label: "Yes — different roles with different permissions", value: "roles", score: 5 },
          { label: "I'm not sure if I need this", value: "unsure", score: 0 },
        ],
      },
      {
        id: "fe_integrations",
        label: "Does it need to connect to anything — payments, bookings, a database, third-party APIs?",
        options: [
          { label: "No — mostly static content", value: "none", score: 1 },
          { label: "Yes — payments or bookings", value: "payments", score: 3 },
          { label: "Yes — pulls or sends data from other systems", value: "data", score: 4 },
          { label: "Multiple integrations — it's fairly connected", value: "multi", score: 5 },
        ],
      },
      {
        id: "fe_budget",
        label: "What's your budget for building this?",
        options: [
          { label: "Under £2k — need something lean and fast", value: "low", score: 1 },
          { label: "£2k–£8k — willing to invest for the right result", value: "mid", score: 2 },
          { label: "£8k–£20k — serious about quality", value: "high", score: 4 },
          { label: "£20k+ — this is a real product investment", value: "premium", score: 5 },
        ],
      },
      {
        id: "fe_timeline",
        label: "How fast do you need this live?",
        options: [
          { label: "ASAP — weeks matter", value: "asap", score: 1 },
          { label: "1–3 months is fine", value: "months", score: 3 },
          { label: "3–6 months — I want it done right", value: "patient", score: 4 },
          { label: "No deadline — quality over speed", value: "none", score: 5 },
        ],
      },
      {
        id: "fe_maintenance",
        label: "After it's built, who manages updates and changes?",
        options: [
          { label: "I want to edit it myself — content, text, images", value: "self", score: 1 },
          { label: "A developer I'll hire as needed", value: "dev", score: 3 },
          { label: "Whoever builds it — I just want it to run", value: "builder", score: 2 },
          { label: "I haven't thought about this yet", value: "unsure", score: 0 },
        ],
      },
      {
        id: "fe_growth",
        label: "Is this a one-time build or something you'll grow over time?",
        options: [
          { label: "One-time — solve this problem, done", value: "onetime", score: 1 },
          { label: "I'll add features gradually as the business grows", value: "gradual", score: 3 },
          { label: "Serious product — major growth expected", value: "product", score: 5 },
          { label: "I don't know yet", value: "unsure", score: 0 },
        ],
      },
    ],
  },
  backend: {
    id: "backend",
    name: "Backend Build",
    tagline: "An API, database, or server-side system powering your product.",
    description: "Backend work is invisible but critical. 8 questions to figure out what you actually need built and who should build it.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "be_purpose",
        label: "What do you need the backend to do at its core?",
        options: [
          { label: "Store and retrieve data for my app or website", value: "storage", score: 2 },
          { label: "Handle user accounts, auth, and permissions", value: "auth", score: 3 },
          { label: "Process payments, orders, or business logic", value: "business", score: 4 },
          { label: "Connect and sync multiple external services", value: "integration", score: 5 },
        ],
      },
      {
        id: "be_existing",
        label: "Do you have a frontend or existing system this backend needs to connect to?",
        options: [
          { label: "Yes — it needs to plug into something already built", value: "existing", score: 3 },
          { label: "Not yet — this is the starting point", value: "greenfield", score: 2 },
          { label: "Multiple systems — it needs to talk to several things", value: "multi", score: 5 },
          { label: "I'm not sure how it all connects", value: "unsure", score: 0 },
        ],
      },
      {
        id: "be_scale",
        label: "How much data or traffic do you expect this to handle?",
        options: [
          { label: "Small — a few hundred users or requests a day", value: "small", score: 1 },
          { label: "Medium — thousands of users, growing steadily", value: "medium", score: 3 },
          { label: "Large — tens of thousands or unpredictable spikes", value: "large", score: 5 },
          { label: "I have no idea — I haven't thought about this", value: "unsure", score: 0 },
        ],
      },
      {
        id: "be_security",
        label: "Does your backend handle sensitive data — personal details, payments, health info?",
        options: [
          { label: "No — it's not sensitive", value: "none", score: 1 },
          { label: "Some — basic personal info like names and emails", value: "basic", score: 2 },
          { label: "Yes — payments or financial data", value: "financial", score: 5 },
          { label: "Yes — health, legal, or highly regulated data", value: "regulated", score: 5 },
        ],
      },
      {
        id: "be_budget",
        label: "What's your budget for building this?",
        options: [
          { label: "Under £2k — need something simple and fast", value: "low", score: 1 },
          { label: "£2k–£8k — willing to invest for the right result", value: "mid", score: 2 },
          { label: "£8k–£20k — serious about getting it right", value: "high", score: 4 },
          { label: "£20k+ — this is a real infrastructure investment", value: "premium", score: 5 },
        ],
      },
      {
        id: "be_timeline",
        label: "How fast do you need this running?",
        options: [
          { label: "ASAP — I need an MVP backend in weeks", value: "asap", score: 1 },
          { label: "1–3 months is fine", value: "months", score: 3 },
          { label: "3–6 months — I want it architected properly", value: "patient", score: 4 },
          { label: "No hard deadline — reliability over speed", value: "none", score: 5 },
        ],
      },
      {
        id: "be_maintenance",
        label: "Who will maintain and monitor this once it's live?",
        options: [
          { label: "Me — I want to understand and control it", value: "self", score: 2 },
          { label: "A developer I'll bring in as needed", value: "dev", score: 3 },
          { label: "Whoever builds it — I just want it to run reliably", value: "builder", score: 2 },
          { label: "I haven't thought about ongoing maintenance", value: "unsure", score: 0 },
        ],
      },
      {
        id: "be_growth",
        label: "Is this backend a foundation you'll build on — or a one-time solution?",
        options: [
          { label: "One-time — solves a specific problem, done", value: "onetime", score: 1 },
          { label: "Foundation — I'll keep adding to it over time", value: "foundation", score: 3 },
          { label: "Core infrastructure — it needs to scale with the business", value: "core", score: 5 },
          { label: "I don't know yet", value: "unsure", score: 0 },
        ],
      },
    ],
  },

  cloud: {
    id: "cloud",
    name: "Cloud Build",
    tagline: "Set up, migrate, or architect your cloud infrastructure properly.",
    description: "Whether you're starting from scratch, moving an existing system, or redesigning what you have — 8 questions to figure out what you actually need and who should build it.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "cloud_situation",
        label: "What's your current cloud situation?",
        options: [
          { label: "Starting from scratch — nothing is set up yet", value: "greenfield", score: 2 },
          { label: "Moving an existing app or system to the cloud", value: "migration", score: 4 },
          { label: "Already on cloud but it's messy, expensive, or unreliable", value: "rearchitect", score: 5 },
          { label: "Not sure — I just know something needs to change", value: "unsure", score: 1 },
        ],
      },
      {
        id: "cloud_workload",
        label: "What are you running or planning to run on the cloud?",
        options: [
          { label: "A website or web app", value: "webapp", score: 2 },
          { label: "APIs and backend services", value: "api", score: 3 },
          { label: "Databases and data storage", value: "data", score: 3 },
          { label: "All of the above — a full production system", value: "full", score: 5 },
        ],
      },
      {
        id: "cloud_provider",
        label: "Which cloud provider are you on or considering?",
        options: [
          { label: "AWS — or want to be", value: "aws", score: 3 },
          { label: "Google Cloud", value: "gcp", score: 3 },
          { label: "Azure", value: "azure", score: 3 },
          { label: "Not sure — I need advice on which to pick", value: "unsure", score: 1 },
        ],
      },
      {
        id: "cloud_state",
        label: "How much of your infrastructure is currently documented or automated?",
        options: [
          { label: "Fully — infrastructure as code, everything versioned", value: "full", score: 5 },
          { label: "Partially — some docs, some manual steps", value: "partial", score: 3 },
          { label: "Barely — most of it lives in someone's head", value: "tribal", score: 1 },
          { label: "Nothing exists yet", value: "none", score: 0 },
        ],
      },
      {
        id: "cloud_scale",
        label: "Does your infrastructure need to scale automatically with traffic?",
        options: [
          { label: "Yes — traffic is unpredictable and spikes matter", value: "auto", score: 5 },
          { label: "Somewhat — steady growth, planned capacity is fine", value: "planned", score: 3 },
          { label: "No — fixed capacity is enough for now", value: "fixed", score: 1 },
          { label: "I don't know what my traffic looks like", value: "unsure", score: 0 },
        ],
      },
      {
        id: "cloud_concern",
        label: "What's your biggest concern with your cloud setup?",
        options: [
          { label: "Cost — I'm spending too much or can't see where it goes", value: "cost", score: 3 },
          { label: "Security — I'm not confident data is protected", value: "security", score: 4 },
          { label: "Reliability — outages or downtime are a real risk", value: "reliability", score: 4 },
          { label: "Speed — deploys are slow and changes feel risky", value: "speed", score: 3 },
        ],
      },
      {
        id: "cloud_budget",
        label: "What's your budget for this cloud work?",
        options: [
          { label: "Under £2k — targeted fix or basic setup", value: "low", score: 1 },
          { label: "£2k–£8k — proper setup or focused migration", value: "mid", score: 2 },
          { label: "£8k–£25k — full migration or architecture overhaul", value: "high", score: 4 },
          { label: "£25k+ — enterprise-grade infrastructure", value: "premium", score: 5 },
        ],
      },
      {
        id: "cloud_ownership",
        label: "Once it's built, who manages and monitors it?",
        options: [
          { label: "Me or my internal team — we want full control", value: "internal", score: 4 },
          { label: "A DevOps engineer I'll hire ongoing", value: "hire", score: 3 },
          { label: "Whoever builds it — I want it to run itself as much as possible", value: "managed", score: 2 },
          { label: "I haven't thought about ongoing management", value: "unsure", score: 0 },
        ],
      },
    ],
  },

  automation: {
    id: "automation",
    name: "Automation Build",
    tagline: "Workflows, integrations, and processes that run without you.",
    description: "If your team is doing the same thing manually every day, it can probably be automated. 8 questions to figure out what kind of automation you need and how to build it.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "auto_problem",
        label: "What are you trying to automate?",
        options: [
          { label: "A repetitive manual task my team does daily", value: "manual", score: 2 },
          { label: "Data moving between systems — syncing, copying, updating", value: "sync", score: 3 },
          { label: "A multi-step business process with conditions and approvals", value: "process", score: 5 },
          { label: "Notifications, alerts, or scheduled reports", value: "notifications", score: 2 },
        ],
      },
      {
        id: "auto_tools",
        label: "Which tools or systems does this automation need to connect?",
        options: [
          { label: "Just one or two — simple connection", value: "simple", score: 1 },
          { label: "Three to five tools", value: "moderate", score: 3 },
          { label: "Six or more — complex ecosystem", value: "complex", score: 5 },
          { label: "Custom internal systems with no standard connectors", value: "custom", score: 5 },
        ],
      },
      {
        id: "auto_frequency",
        label: "How often does this process run?",
        options: [
          { label: "Once or twice a day", value: "daily", score: 1 },
          { label: "Multiple times per hour", value: "hourly", score: 3 },
          { label: "In real-time — triggered by events as they happen", value: "realtime", score: 5 },
          { label: "On a schedule I define", value: "scheduled", score: 2 },
        ],
      },
      {
        id: "auto_error",
        label: "What happens if this automation fails silently?",
        options: [
          { label: "Minor inconvenience — easy to catch manually", value: "minor", score: 1 },
          { label: "Noticeable but recoverable", value: "noticeable", score: 2 },
          { label: "Significant — data loss or business impact", value: "significant", score: 4 },
          { label: "Critical — customers would be directly affected", value: "critical", score: 5 },
        ],
      },
      {
        id: "auto_budget",
        label: "What's your budget for building this?",
        options: [
          { label: "Under £1k — want a no-code solution", value: "low", score: 1 },
          { label: "£1k–£5k — happy to pay for proper setup", value: "mid", score: 2 },
          { label: "£5k–£15k — complex workflow, worth investing", value: "high", score: 4 },
          { label: "£15k+ — mission-critical automation", value: "premium", score: 5 },
        ],
      },
      {
        id: "auto_timeline",
        label: "How urgently do you need this running?",
        options: [
          { label: "This week — it's costing us time right now", value: "urgent", score: 1 },
          { label: "Within a month", value: "month", score: 3 },
          { label: "1–3 months is fine", value: "quarter", score: 4 },
          { label: "No rush — want it done right", value: "none", score: 5 },
        ],
      },
      {
        id: "auto_ownership",
        label: "Who will manage this automation once it's live?",
        options: [
          { label: "Me — I want to adjust it myself when things change", value: "self", score: 2 },
          { label: "A developer or ops person on my team", value: "team", score: 3 },
          { label: "Whoever builds it — I just want it to run", value: "builder", score: 2 },
          { label: "I haven't thought about ongoing ownership", value: "unsure", score: 0 },
        ],
      },
      {
        id: "auto_growth",
        label: "Is this a one-off fix or part of a larger automation strategy?",
        options: [
          { label: "One-off — fix this one thing", value: "onetime", score: 1 },
          { label: "Starting point — I want to automate more over time", value: "start", score: 3 },
          { label: "Part of a larger system we're building out", value: "system", score: 5 },
          { label: "I just want to stop doing this manually", value: "stop", score: 2 },
        ],
      },
    ],
  },

  internal: {
    id: "internal",
    name: "Internal Tool Build",
    tagline: "A tool built for your team — not the public.",
    description: "Internal tools are often underestimated. 8 questions to figure out the right level of investment and approach for something your team will actually use.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "int_purpose",
        label: "What is this internal tool supposed to replace or improve?",
        options: [
          { label: "A spreadsheet or manual process my team uses daily", value: "spreadsheet", score: 2 },
          { label: "A third-party tool that doesn't quite fit our needs", value: "thirdparty", score: 3 },
          { label: "A mix of disconnected tools we've duct-taped together", value: "franken", score: 4 },
          { label: "Something that doesn't exist yet — a new workflow", value: "new", score: 3 },
        ],
      },
      {
        id: "int_users",
        label: "How many people will use this tool, and how often?",
        options: [
          { label: "Just me or one small team — a few times a week", value: "small", score: 1 },
          { label: "5–20 people, daily use", value: "medium", score: 3 },
          { label: "20+ people across multiple teams", value: "large", score: 4 },
          { label: "The whole company — it's a core ops tool", value: "company", score: 5 },
        ],
      },
      {
        id: "int_complexity",
        label: "What does this tool need to do at its most complex?",
        options: [
          { label: "Display and edit data — a smarter spreadsheet", value: "crud", score: 2 },
          { label: "Automate approvals, notifications, or workflows", value: "workflow", score: 4 },
          { label: "Connect to external systems — CRM, accounting, APIs", value: "integration", score: 4 },
          { label: "Complex logic, calculations, or reporting", value: "logic", score: 5 },
        ],
      },
      {
        id: "int_data",
        label: "Does this tool handle sensitive business data — finances, HR, customer records?",
        options: [
          { label: "No — non-sensitive operational data", value: "none", score: 1 },
          { label: "Some — internal metrics and reporting", value: "some", score: 2 },
          { label: "Yes — customer or financial data", value: "sensitive", score: 4 },
          { label: "Yes — confidential HR or legal data", value: "confidential", score: 5 },
        ],
      },
      {
        id: "int_budget",
        label: "What's your budget for this?",
        options: [
          { label: "Under £2k — lean internal tool", value: "low", score: 1 },
          { label: "£2k–£8k — proper solution worth the investment", value: "mid", score: 2 },
          { label: "£8k–£20k — critical ops tool", value: "high", score: 4 },
          { label: "£20k+ — replacing a core business system", value: "premium", score: 5 },
        ],
      },
      {
        id: "int_timeline",
        label: "How quickly does your team need this?",
        options: [
          { label: "This month — it's blocking work right now", value: "urgent", score: 1 },
          { label: "1–2 months", value: "soon", score: 3 },
          { label: "3–6 months — done properly", value: "patient", score: 4 },
          { label: "No rush — we'll plan it carefully", value: "none", score: 5 },
        ],
      },
      {
        id: "int_maintenance",
        label: "Who will update this when processes change — and they will?",
        options: [
          { label: "I want to update it myself without a developer", value: "self", score: 2 },
          { label: "A developer we have or will hire", value: "dev", score: 3 },
          { label: "Whoever builds it under an ongoing contract", value: "contract", score: 3 },
          { label: "I haven't thought that far ahead", value: "unsure", score: 0 },
        ],
      },
      {
        id: "int_growth",
        label: "Is this a stopgap or a long-term system your team will rely on?",
        options: [
          { label: "Stopgap — buy us time while we figure out the real solution", value: "stopgap", score: 1 },
          { label: "Medium-term — a few years at least", value: "medium", score: 3 },
          { label: "Long-term — this will become core infrastructure", value: "longterm", score: 5 },
          { label: "I'm not sure yet", value: "unsure", score: 0 },
        ],
      },
    ],
  },

  fullstack: {
    id: "fullstack",
    name: "Fullstack Build",
    tagline: "A complete product — frontend, backend, database, the works.",
    description: "Building something end-to-end is the most complex path. 8 questions to find out if that's really what you need — and who should build it.",
    categories: [
      { id: "clarity", label: "Idea Clarity" },
      { id: "complexity", label: "Complexity" },
      { id: "budget", label: "Budget & Timeline" },
      { id: "ownership", label: "Ownership" },
    ],
    questions: [
      {
        id: "fs_purpose",
        label: "What are you building at the highest level?",
        options: [
          { label: "A SaaS product — users pay to use it", value: "saas", score: 5 },
          { label: "A marketplace — buyers and sellers or two user types", value: "marketplace", score: 5 },
          { label: "A business web app — internal or for clients", value: "business", score: 3 },
          { label: "A platform or community product", value: "platform", score: 4 },
        ],
      },
      {
        id: "fs_defined",
        label: "How well defined is what you're building?",
        options: [
          { label: "Very clear — I have wireframes or a detailed spec", value: "clear", score: 4 },
          { label: "Mostly clear — I know the core features", value: "mostly", score: 3 },
          { label: "Rough idea — details still fuzzy", value: "rough", score: 1 },
          { label: "Just a concept — a lot still undefined", value: "concept", score: 0 },
        ],
      },
      {
        id: "fs_complexity",
        label: "Which best describes the core complexity of your product?",
        options: [
          { label: "Users, roles, and permissions with a database", value: "users", score: 3 },
          { label: "Real-time features — live updates, chat, notifications", value: "realtime", score: 5 },
          { label: "Payments, subscriptions, or financial flows", value: "payments", score: 4 },
          { label: "Heavy integrations with multiple external services", value: "integrations", score: 5 },
        ],
      },
      {
        id: "fs_validated",
        label: "Have you validated that people actually want this before building it?",
        options: [
          { label: "Yes — spoken to users, confirmed the need", value: "validated", score: 4 },
          { label: "Somewhat — strong gut feeling from experience", value: "gut", score: 2 },
          { label: "Not yet — but I'm confident", value: "confident", score: 1 },
          { label: "No — this is still an assumption", value: "assumption", score: 0 },
        ],
      },
      {
        id: "fs_budget",
        label: "What's your budget for this build?",
        options: [
          { label: "Under £5k — need to keep it tight", value: "low", score: 1 },
          { label: "£5k–£15k — solid investment for the right scope", value: "mid", score: 2 },
          { label: "£15k–£40k — serious product investment", value: "high", score: 4 },
          { label: "£40k+ — fully funded, want it built properly", value: "premium", score: 5 },
        ],
      },
      {
        id: "fs_timeline",
        label: "When do you need an MVP in users' hands?",
        options: [
          { label: "Within 6 weeks — need to move fast", value: "fast", score: 1 },
          { label: "2–3 months", value: "months", score: 3 },
          { label: "3–6 months — I can wait for something solid", value: "patient", score: 4 },
          { label: "No hard deadline — get it right", value: "none", score: 5 },
        ],
      },
      {
        id: "fs_team",
        label: "Do you have a technical co-founder or developer on your team?",
        options: [
          { label: "Yes — someone technical is already involved", value: "yes", score: 4 },
          { label: "No — I'm fully non-technical and need someone to own it", value: "no", score: 2 },
          { label: "I have someone part-time or advisory", value: "parttime", score: 3 },
          { label: "Not yet — still looking", value: "looking", score: 1 },
        ],
      },
      {
        id: "fs_growth",
        label: "What does success look like 12 months after launch?",
        options: [
          { label: "Paying customers and measurable revenue", value: "revenue", score: 5 },
          { label: "A working product I can show investors or customers", value: "mvp", score: 3 },
          { label: "Internal tool saving my team significant time", value: "internal", score: 2 },
          { label: "I'm not sure yet — I want to learn as I go", value: "unsure", score: 1 },
        ],
      },
    ],
  },
};
