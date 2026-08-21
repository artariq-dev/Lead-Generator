interface Question {
  id: string;
  label: string;
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
        label: "Which channels actually bring in your paying customers",
        options: [
          { label: "Yes — I know exactly which ones work", value: "clear", score: 5 },
          { label: "I have a rough idea", value: "rough", score: 3 },
          { label: "Not really — it's a guess", value: "guess", score: 0 },
          { label: "I don't track this at all", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_response",
        label: "How quickly interested people hear back",
        options: [
          { label: "Within minutes — it's automatic", value: "minutes", score: 5 },
          { label: "Within the hour", value: "hour", score: 3 },
          { label: "Same day, if I remember to check", value: "same_day", score: 0 },
          { label: "Days — it slips through", value: "days", score: 0 },
        ],
      },
      {
        id: "growth_followup",
        label: "What happens to a lead who isn't ready to buy right away",
        options: [
          { label: "They get follow-ups automatically", value: "auto", score: 5 },
          { label: "We follow up when we remember", value: "manual", score: 3 },
          { label: "They usually go cold", value: "cold", score: 0 },
          { label: "I don't know — I've never thought about it", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "growth_pipeline",
        label: "Exactly where every potential customer is in the process right now",
        options: [
          { label: "Yes — I can see it all at a glance", value: "visible", score: 5 },
          { label: "Mostly — I can piece it together", value: "partial", score: 3 },
          { label: "I have to ask someone for updates", value: "ask", score: 0 },
          { label: "No — it's a mess", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_manual",
        label: "How much of your day goes to copying data, updating spreadsheets, or chasing follow-ups",
        options: [
          { label: "Almost none — most of it runs itself", value: "auto", score: 5 },
          { label: "An hour or so", value: "some", score: 3 },
          { label: "A few hours — it adds up", value: "several", score: 0 },
          { label: "Half my day or more", value: "most", score: 0 },
        ],
      },
      {
        id: "growth_tools",
        label: "Whether your sales and marketing tools work together — or you copy-paste between them",
        options: [
          { label: "They work together — information flows automatically", value: "connected", score: 5 },
          { label: "Some of them are connected", value: "partial", score: 3 },
          { label: "We copy-paste between them a lot", value: "manual", score: 0 },
          { label: "I don't know what connects to what", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "growth_budget",
        label: "Which marketing spend actually pays off — and whether it's tracked or guesswork",
        options: [
          { label: "Yes — I can see what works and what doesn't", value: "clear", score: 5 },
          { label: "I have a rough sense of it", value: "rough", score: 3 },
          { label: "Not really — it's mostly guesswork", value: "guess", score: 0 },
          { label: "I don't spend on marketing yet", value: "none", score: 0 },
        ],
      },
      {
        id: "growth_measure",
        label: "How quickly you'd notice if a customer stopped buying",
        options: [
          { label: "Immediately — I'd see it the same day", value: "day", score: 5 },
          { label: "Within the week", value: "week", score: 3 },
          { label: "Within the month", value: "month", score: 0 },
          { label: "I probably wouldn't notice at all", value: "never", score: 0 },
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
        label: "How fast your main page loads on a phone",
        options: [
          { label: "Under 2 seconds — feels instant", value: "fast", score: 5 },
          { label: "2–4 seconds — acceptable", value: "ok", score: 3 },
          { label: "5+ seconds — people are waiting", value: "slow", score: 0 },
          { label: "I've never actually tested it", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_why",
        label: "Whether you know why things feel slow — or it's a mystery",
        options: [
          { label: "Yes — I can see exactly what's slow", value: "clear", score: 5 },
          { label: "I have a rough idea", value: "rough", score: 3 },
          { label: "Not really — it's a black box", value: "unknown", score: 0 },
          { label: "I didn't even know it was slow", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_breaks",
        label: "How often your software breaks or stops working for customers in a normal month",
        options: [
          { label: "Almost never", value: "never", score: 5 },
          { label: "Once or twice", value: "sometimes", score: 3 },
          { label: "Every week", value: "weekly", score: 0 },
          { label: "I don't know — nobody tells me", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_recover",
        label: "How fast you could get it back up if it went down right now",
        options: [
          { label: "Minutes — I know exactly what to do", value: "minutes", score: 5 },
          { label: "Within the hour", value: "hour", score: 3 },
          { label: "Half a day or more", value: "half_day", score: 0 },
          { label: "I don't know — I've never had to", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_alert",
        label: "Whether you'd be alerted if something broke tonight — or find out when a customer complains",
        options: [
          { label: "I'd be alerted automatically", value: "auto", score: 5 },
          { label: "I'd notice if I checked", value: "manual", score: 3 },
          { label: "A customer would probably tell me", value: "customer", score: 0 },
          { label: "I have no way of knowing", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_health",
        label: "Whether you can check on your own if your software is running smoothly",
        options: [
          { label: "Yes — I can see it any time", value: "yes", score: 5 },
          { label: "I can check if I think about it", value: "manual", score: 3 },
          { label: "Not really — someone else would have to", value: "no", score: 0 },
          { label: "No — it's a mystery", value: "none", score: 0 },
        ],
      },
      {
        id: "perf_scale",
        label: "Whether it would keep up if twice as many people started using it tomorrow",
        options: [
          { label: "Yes — no problem", value: "yes", score: 5 },
          { label: "Probably — for a while", value: "probably", score: 3 },
          { label: "No — it would slow down or crash", value: "no", score: 0 },
          { label: "I don't know what it can handle", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "perf_backup",
        label: "Whether you could get customer data back if it was accidentally deleted",
        options: [
          { label: "Yes — we have backups we've tested", value: "tested", score: 5 },
          { label: "We have backups, but never tested restoring them", value: "untested", score: 3 },
          { label: "We might have backups somewhere", value: "maybe", score: 0 },
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
        label: "Whether a new customer can figure it out on their own — without being shown",
        options: [
          { label: "Yes — it's obvious", value: "easy", score: 5 },
          { label: "Mostly — some get stuck", value: "some", score: 3 },
          { label: "Someone usually has to walk them through it", value: "hard", score: 0 },
          { label: "I've never actually tested that", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_return",
        label: "Whether new customers come back or disappear after the first try",
        options: [
          { label: "They come back — I can see it", value: "return", score: 5 },
          { label: "I think they do, but I'm not sure", value: "guess", score: 3 },
          { label: "A lot of them never come back", value: "leave", score: 0 },
          { label: "I don't track this at all", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_confusing",
        label: "The last time someone said it was confusing or hard to use",
        options: [
          { label: "Never — people seem happy", value: "never", score: 5 },
          { label: "Months ago", value: "months", score: 3 },
          { label: "This month", value: "month", score: 0 },
          { label: "This week", value: "week", score: 0 },
        ],
      },
      {
        id: "ux_stuck",
        label: "Whether a stuck customer can find help — or just gives up",
        options: [
          { label: "Yes — it's easy to find help and get unstuck", value: "easy", score: 5 },
          { label: "There's help, but it's not obvious", value: "partial", score: 3 },
          { label: "They usually have to contact us", value: "manual", score: 0 },
          { label: "They probably just give up", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_phone",
        label: "Whether it works properly on a phone — or feels awkward on small screens",
        options: [
          { label: "Works great on any device", value: "great", score: 5 },
          { label: "Mostly works — some rough spots", value: "ok", score: 3 },
          { label: "It's really built for a computer", value: "desktop_only", score: 0 },
          { label: "I've never actually checked", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_done",
        label: "Whether customers can do everything on their phone or must switch to a computer",
        options: [
          { label: "Everything works on a phone", value: "all", score: 5 },
          { label: "Most things", value: "most", score: 3 },
          { label: "Very little", value: "little", score: 0 },
          { label: "I don't know", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "ux_usage",
        label: "Which parts people actually use — and which parts they ignore",
        options: [
          { label: "Yes — I can see usage clearly", value: "clear", score: 5 },
          { label: "I have a rough idea", value: "rough", score: 3 },
          { label: "Not really — it's a guess", value: "guess", score: 0 },
          { label: "I don't track usage at all", value: "none", score: 0 },
        ],
      },
      {
        id: "ux_complaints",
        label: "How easy it is for customers to tell you what's annoying them",
        options: [
          { label: "Yes — it's easy to send feedback", value: "easy", score: 5 },
          { label: "They can email or call us", value: "manual", score: 3 },
          { label: "Not really — they'd have to hunt for it", value: "hard", score: 0 },
          { label: "No — and I don't hear complaints because of it", value: "none", score: 0 },
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
        label: "Whether you'd know what was exposed and how fast if data leaked today",
        options: [
          { label: "Yes — I'd know immediately what happened", value: "yes", score: 5 },
          { label: "I'd piece it together within a day", value: "day", score: 3 },
          { label: "It would take days or weeks to figure out", value: "weeks", score: 0 },
          { label: "I probably wouldn't know until someone told me", value: "never", score: 0 },
        ],
      },
      {
        id: "sec_protected",
        label: "How confident you are that customer data is protected from outsiders right now",
        options: [
          { label: "Very confident — we've checked recently", value: "confident", score: 5 },
          { label: "Fairly confident", value: "fairly", score: 3 },
          { label: "I hope so, but I'm not sure", value: "unsure", score: 0 },
          { label: "I have no idea", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_access",
        label: "Who on your team can see sensitive customer information",
        options: [
          { label: "Yes — I have the full picture", value: "full", score: 5 },
          { label: "Mostly — some gaps", value: "partial", score: 3 },
          { label: "Not really — it's unclear", value: "unclear", score: 0 },
          { label: "No idea", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_leavers",
        label: "Whether leavers' access is switched off — or quietly stays on",
        options: [
          { label: "It's switched off right away", value: "off", score: 5 },
          { label: "Usually — sometimes we forget", value: "sometimes", score: 3 },
          { label: "It often stays on", value: "stays", score: 0 },
          { label: "I don't know", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "sec_alert",
        label: "Whether you'd be told if someone tried to break in — or it would go unnoticed",
        options: [
          { label: "I'd be alerted automatically", value: "auto", score: 5 },
          { label: "I might notice if I checked", value: "manual", score: 3 },
          { label: "Probably not", value: "no", score: 0 },
          { label: "No — nothing is set up", value: "none", score: 0 },
        ],
      },
      {
        id: "sec_check",
        label: "Whether your software is actually checked for security — or it's a hope",
        options: [
          { label: "Yes — we check regularly", value: "yes", score: 5 },
          { label: "We've checked once or twice", value: "sometimes", score: 3 },
          { label: "We've never checked", value: "never", score: 0 },
          { label: "I don't know what checking would even involve", value: "dont_know", score: 0 },
        ],
      },
      {
        id: "sec_backup",
        label: "Whether you could restore everything if data was lost",
        options: [
          { label: "Yes — backups are tested and ready", value: "tested", score: 5 },
          { label: "We have backups, but never tested restoring them", value: "untested", score: 3 },
          { label: "We might have backups somewhere", value: "maybe", score: 0 },
          { label: "No — and that scares me", value: "no", score: 0 },
        ],
      },
      {
        id: "sec_plan",
        label: "How clear your plan is for what to do if you're hacked",
        options: [
          { label: "Yes — we know exactly what to do", value: "yes", score: 5 },
          { label: "We'd figure it out as we go", value: "adhoc", score: 3 },
          { label: "We'd be scrambling", value: "scramble", score: 0 },
          { label: "I've never thought about it", value: "never", score: 0 },
        ],
      },
    ],
  },
};
