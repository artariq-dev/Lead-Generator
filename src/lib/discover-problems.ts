export type Severity = "critical" | "warning";
export type IconId   = "audit" | "diagnose" | "build";

export interface ProblemCard {
  problem: string;
  sev:     Severity;
  persona: string;
  icon:    IconId;
}

export const iconColor: Record<IconId, string> = {
  audit:   "text-blue-400 dark:text-blue-600",
  diagnose:"text-red-400 dark:text-red-500",
  build:   "text-emerald-400 dark:text-emerald-600",
};

const rowOne: ProblemCard[] = [
  { problem: "We keep paying for things we stopped using months ago.",            sev: "critical", persona: "Founder · SaaS",               icon: "audit"    },
  { problem: "A customer told us the app was down before we knew.",               sev: "critical", persona: "CEO · E-commerce",             icon: "audit"    },
  { problem: "One wrong update wiped out three hours of orders.",                 sev: "critical", persona: "CTO · Retail",                 icon: "audit"    },
  { problem: "Our best sales leads go cold because nobody follows up in time.",   sev: "critical", persona: "Founder · B2B Services",       icon: "diagnose" },
  { problem: "The app works fine until more than a few people use it.",           sev: "critical", persona: "CEO · Marketplace",            icon: "audit"    },
  { problem: "We don't know which marketing spend actually brings in customers.", sev: "warning",  persona: "Founder · D2C Brand",          icon: "diagnose" },
  { problem: "Every new feature seems to break something that worked before.",    sev: "warning",  persona: "CTO · FinTech",                icon: "audit"    },
  { problem: "We're probably losing deals we don't even know slipped through.",  sev: "critical", persona: "Founder · Agency",            icon: "diagnose" },
];

const rowTwo: ProblemCard[] = [
  { problem: "We keep saying we'll fix it next sprint. That was six months ago.",      sev: "warning",  persona: "CEO · Logistics",        icon: "diagnose" },
  { problem: "We built the wrong thing — again — because requirements weren't clear.", sev: "warning",  persona: "Founder · PropTech",     icon: "build"    },
  { problem: "Nobody can tell me where a deal is in the pipeline right now.",          sev: "warning",  persona: "CEO · Consulting Firm",  icon: "diagnose" },
  { problem: "Good ideas die in a Slack thread and never get picked up.",              sev: "warning",  persona: "Founder · EdTech",       icon: "build"    },
  { problem: "Our monthly software bill jumped 40% and nobody knows why.",             sev: "critical", persona: "CTO · Cloud Services",   icon: "audit"    },
  { problem: "Users find bugs on their own and stop trusting the product.",            sev: "critical", persona: "Founder · HealthTech",   icon: "audit"    },
  { problem: "I found out our checkout was broken because a customer tweeted about it.", sev: "critical", persona: "CEO · Media Platform",   icon: "audit"    },
  { problem: "Every month I approve a software bill I don't fully understand.",         sev: "critical", persona: "Founder · Mechanical Co.", icon: "diagnose" },
];

// Duplicated for seamless infinite loop
export const ROW_ONE: ProblemCard[] = [...rowOne, ...rowOne];
export const ROW_TWO: ProblemCard[] = [...rowTwo, ...rowTwo];
