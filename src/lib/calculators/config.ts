interface Question {
  id: string;
  stem: string;
  options: { label: string; value: string; score: number }[];
}

interface Category {
  id: string;
  label: string;
  short: string;
}

export interface CalculatorConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  questions: Question[];
  categories: Category[];
}

export const auditCardMeta: Record<string, string> = {
  growth: "Attract & convert",
  performance: "Speed & uptime",
  ux: "Usability & mobile",
  security: "Data & trust",
};

export const calculators: Record<string, CalculatorConfig> = {
  growth: {
    id: "growth",
    name: "Growth",
    tagline: "Is your business set up to grow — or quietly holding itself back?",
    description: "8 questions to find out if you're attracting customers, following up fast enough, and spending where it actually pays off.",
    categories: [
      { id: "attract", label: "Attracting Customers", short: "Attract" },
      { id: "capture", label: "Turning Interest Into Sales", short: "Convert" },
      { id: "automate", label: "Doing the Busywork", short: "Automate" },
      { id: "invest", label: "Spending & Tracking", short: "Track" },
    ],
    questions: [
      {
        id: "growth_channels",
        stem: "The channels that bring in my paying customers are",
        options: [
          { label: "tracked — I know exactly which ones work", value: "clear", score: 5 },
          { label: "partially known — I have a rough idea", value: "rough", score: 3 },
          { label: "a guess — I'm not sure which ones", value: "guess", score: 0 },
          { label: "not tracked at all", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_response",
        stem: "When someone shows interest, they hear back",
        options: [
          { label: "within minutes — it's automatic", value: "minutes", score: 5 },
          { label: "within the hour", value: "hour", score: 3 },
          { label: "same day, if I remember to check", value: "same_day", score: 0 },
          { label: "after days — it slips through", value: "days", score: 0 },
        ],
      },
      {
        id: "growth_followup",
        stem: "A lead who isn't ready to buy right away",
        options: [
          { label: "gets automatic follow-ups", value: "auto", score: 5 },
          { label: "gets a follow-up when we remember", value: "manual", score: 3 },
          { label: "usually goes cold", value: "cold", score: 0 },
          { label: "I don't know — I've never thought about it", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "growth_pipeline",
        stem: "I can see where every potential customer is in the process",
        options: [
          { label: "at a glance", value: "visible", score: 5 },
          { label: "mostly — I can piece it together", value: "partial", score: 3 },
          { label: "only if I ask someone for updates", value: "ask", score: 0 },
          { label: "no — it's a mess", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_manual",
        stem: "My day goes to copying data, updating spreadsheets, or chasing follow-ups",
        options: [
          { label: "almost none — most of it runs itself", value: "auto", score: 5 },
          { label: "about an hour", value: "some", score: 3 },
          { label: "a few hours — it adds up", value: "several", score: 0 },
          { label: "half my day or more", value: "most", score: 0 },
        ],
      },
      {
        id: "growth_tools",
        stem: "My sales and marketing tools",
        options: [
          { label: "work together — information flows automatically", value: "connected", score: 5 },
          { label: "are partly connected", value: "partial", score: 3 },
          { label: "need a lot of copy-paste between them", value: "manual", score: 0 },
          { label: "I don't know what connects to what", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "growth_budget",
        stem: "My marketing spend is",
        options: [
          { label: "tracked — I see what works and what doesn't", value: "clear", score: 5 },
          { label: "roughly tracked — I have a sense", value: "rough", score: 3 },
          { label: "mostly guesswork", value: "guess", score: 0 },
          { label: "nonexistent — I don't spend on marketing yet", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_measure",
        stem: "I'd notice if a customer stopped buying",
        options: [
          { label: "the same day", value: "day", score: 5 },
          { label: "within the week", value: "week", score: 3 },
          { label: "within the month", value: "month", score: 0 },
          { label: "probably never", value: "never", score: 0 },
        ],
      },
    ],
  },

  performance: {
    id: "performance",
    name: "Performance",
    tagline: "Is your software fast enough — or is slowness quietly costing you customers?",
    description: "8 questions to find out if your software is fast, stays up, and can handle growth — or if problems are piling up behind the scenes.",
    categories: [
      { id: "speed", label: "Speed", short: "Speed" },
      { id: "stability", label: "Stays Online", short: "Stability" },
      { id: "visibility", label: "Knows When It Breaks", short: "Monitoring" },
      { id: "capacity", label: "Keeps Up With Growth", short: "Scale" },
    ],
    questions: [
      {
        id: "perf_load",
        stem: "My main page loads on a phone in",
        options: [
          { label: "under 2 seconds — feels instant", value: "fast", score: 5 },
          { label: "2–4 seconds — acceptable", value: "ok", score: 3 },
          { label: "5+ seconds — people are waiting", value: "slow", score: 0 },
          { label: "I've never actually tested it", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_why",
        stem: "I know why things feel slow",
        options: [
          { label: "exactly — I can see what's slow", value: "clear", score: 5 },
          { label: "roughly — I have an idea", value: "rough", score: 3 },
          { label: "not really — it's a black box", value: "unknown", score: 0 },
          { label: "I didn't even know it was slow", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_breaks",
        stem: "My software breaks or stops working for customers",
        options: [
          { label: "almost never", value: "never", score: 5 },
          { label: "once or twice a month", value: "sometimes", score: 3 },
          { label: "every week", value: "weekly", score: 0 },
          { label: "I don't know — nobody tells me", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_recover",
        stem: "If my software went down right now, I could get it back up in",
        options: [
          { label: "minutes — I know exactly what to do", value: "minutes", score: 5 },
          { label: "within the hour", value: "hour", score: 3 },
          { label: "half a day or more", value: "half_day", score: 0 },
          { label: "I don't know — I've never had to", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_alert",
        stem: "If something broke tonight, I'd find out",
        options: [
          { label: "automatically — I'd be alerted", value: "auto", score: 5 },
          { label: "if I checked", value: "manual", score: 3 },
          { label: "when a customer complains", value: "customer", score: 0 },
          { label: "I have no way of knowing", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_health",
        stem: "I can check whether my software is running smoothly",
        options: [
          { label: "any time — I can see it", value: "yes", score: 5 },
          { label: "if I think about it", value: "manual", score: 3 },
          { label: "no — only someone else could", value: "no", score: 0 },
          { label: "no — it's a mystery", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_scale",
        stem: "If twice as many people used it tomorrow, it would",
        options: [
          { label: "keep up — no problem", value: "yes", score: 5 },
          { label: "probably keep up for a while", value: "probably", score: 3 },
          { label: "slow down or crash", value: "no", score: 0 },
          { label: "I don't know what it can handle", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_backup",
        stem: "If customer data was accidentally deleted, I could",
        options: [
          { label: "restore it — we've tested backups", value: "tested", score: 5 },
          { label: "restore it — though we've never tested", value: "untested", score: 3 },
          { label: "maybe restore it — backups might exist", value: "maybe", score: 0 },
          { label: "I don't know — and that worries me", value: "dont_know", score: 0 },
        ],
      },
    ],
  },

  ux: {
    id: "ux",
    name: "User Experience",
    tagline: "Do people actually enjoy using it — or do they give up in frustration?",
    description: "8 questions to find out if your software is easy, pleasant, and mobile-friendly — or quietly driving people away.",
    categories: [
      { id: "onboarding", label: "Getting Started", short: "Onboarding" },
      { id: "usability", label: "Everyday Use", short: "Usability" },
      { id: "mobile", label: "On a Phone", short: "Mobile" },
      { id: "feedback", label: "What Users Tell You", short: "Feedback" },
    ],
    questions: [
      {
        id: "ux_learn",
        stem: "A new customer can figure my product out",
        options: [
          { label: "on their own — it's obvious", value: "easy", score: 5 },
          { label: "mostly — some get stuck", value: "some", score: 3 },
          { label: "only if someone walks them through", value: "hard", score: 0 },
          { label: "I've never actually tested that", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_return",
        stem: "New customers come back after their first try",
        options: [
          { label: "yes — I can see it", value: "return", score: 5 },
          { label: "I think they do", value: "guess", score: 3 },
          { label: "no — a lot of them never come back", value: "leave", score: 0 },
          { label: "I don't track this", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_confusing",
        stem: "The last time someone said my software was confusing or hard to use was",
        options: [
          { label: "never — people seem happy", value: "never", score: 5 },
          { label: "months ago", value: "months", score: 3 },
          { label: "this month", value: "month", score: 0 },
          { label: "this week", value: "week", score: 0 },
        ],
      },
      {
        id: "ux_stuck",
        stem: "A customer who gets stuck can find help",
        options: [
          { label: "easily — it's obvious", value: "easy", score: 5 },
          { label: "with effort — it's not obvious", value: "partial", score: 3 },
          { label: "only by contacting us", value: "manual", score: 0 },
          { label: "probably not — they give up", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_phone",
        stem: "My software works on a phone",
        options: [
          { label: "great — on any device", value: "great", score: 5 },
          { label: "mostly — a few rough spots", value: "ok", score: 3 },
          { label: "only on a computer", value: "desktop_only", score: 0 },
          { label: "I've never actually checked", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_done",
        stem: "Customers can do everything on their phone",
        options: [
          { label: "yes — everything works", value: "all", score: 5 },
          { label: "most things", value: "most", score: 3 },
          { label: "very little", value: "little", score: 0 },
          { label: "I don't know", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_usage",
        stem: "I can see which parts of my software people use",
        options: [
          { label: "clearly — I see usage", value: "clear", score: 5 },
          { label: "roughly — I have an idea", value: "rough", score: 3 },
          { label: "not really — it's a guess", value: "guess", score: 0 },
          { label: "I don't track usage", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_complaints",
        stem: "Customers can tell me what's annoying them",
        options: [
          { label: "easily — it's simple to send feedback", value: "easy", score: 5 },
          { label: "by email or phone", value: "manual", score: 3 },
          { label: "only if they hunt for it", value: "hard", score: 0 },
          { label: "no — so I don't hear complaints", value: "none", score: 0 },
        ],
      },
    ],
  },

  security: {
    id: "security",
    name: "Security & Trust",
    tagline: "Is your customer data safe — and would you know if it wasn't?",
    description: "8 questions to find out if your data and your customers' trust are protected — or if a breach could go unnoticed until it's too late.",
    categories: [
      { id: "protection", label: "Keeping Data Safe", short: "Data" },
      { id: "access", label: "Who Can Get In", short: "Access" },
      { id: "monitoring", label: "Watching For Trouble", short: "Monitoring" },
      { id: "recovery", label: "If The Worst Happens", short: "Recovery" },
    ],
    questions: [
      {
        id: "sec_safe",
        stem: "If data leaked today, I'd know what was exposed",
        options: [
          { label: "immediately", value: "yes", score: 5 },
          { label: "within a day", value: "day", score: 3 },
          { label: "in days or weeks", value: "weeks", score: 0 },
          { label: "only when someone tells me", value: "never", score: 0 },
        ],
      },
      {
        id: "sec_protected",
        stem: "I'm confident customer data is protected from outsiders",
        options: [
          { label: "very — we've checked recently", value: "confident", score: 5 },
          { label: "fairly confident", value: "fairly", score: 3 },
          { label: "I hope so — but I'm not sure", value: "unsure", score: 0 },
          { label: "I have no idea", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_access",
        stem: "I know who on my team can see sensitive customer information",
        options: [
          { label: "yes — the full picture", value: "full", score: 5 },
          { label: "mostly — some gaps", value: "partial", score: 3 },
          { label: "not really — it's unclear", value: "unclear", score: 0 },
          { label: "no idea", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_leavers",
        stem: "When someone leaves, their access to customer data is",
        options: [
          { label: "switched off right away", value: "off", score: 5 },
          { label: "usually off — we sometimes forget", value: "sometimes", score: 3 },
          { label: "often left on", value: "stays", score: 0 },
          { label: "I don't know", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "sec_alert",
        stem: "If someone tried to break in, I'd",
        options: [
          { label: "be alerted automatically", value: "auto", score: 5 },
          { label: "notice if I checked", value: "manual", score: 3 },
          { label: "probably not notice", value: "no", score: 0 },
          { label: "nothing is set up", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_check",
        stem: "My software is checked for security",
        options: [
          { label: "regularly — we check", value: "yes", score: 5 },
          { label: "once or twice — we've checked", value: "sometimes", score: 3 },
          { label: "never — we haven't checked", value: "never", score: 0 },
          { label: "I don't know what checking involves", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "sec_backup",
        stem: "If all data was lost, I could restore",
        options: [
          { label: "everything — backups are tested", value: "tested", score: 5 },
          { label: "probably — backups exist, untested", value: "untested", score: 3 },
          { label: "maybe — backups might exist", value: "maybe", score: 0 },
          { label: "no — and that scares me", value: "no", score: 0 },
        ],
      },
      {
        id: "sec_plan",
        stem: "If I got hacked, my plan for what to do is",
        options: [
          { label: "clear — we know exactly what to do", value: "yes", score: 5 },
          { label: "we'd figure it out as we go", value: "adhoc", score: 3 },
          { label: "we'd be scrambling", value: "scramble", score: 0 },
          { label: "I've never thought about it", value: "never", score: 0 },
        ],
      },
    ],
  },
};
