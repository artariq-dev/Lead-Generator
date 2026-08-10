export interface Accent {
  accent: string;
  accentBorder: string;
  shadow: string;
  badgeColor: string;
  twColor: string;
}

export const accents: Record<string, Accent> = {
  blue: {
    accent: "bg-blue-500",
    accentBorder: "hover:border-blue-400 dark:hover:border-blue-500",
    shadow: "hover:shadow-[5px_5px_0px_#3b82f6]",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    twColor: "text-blue-400 dark:text-blue-500 group-hover:text-blue-300 dark:group-hover:text-blue-600",
  },
  violet: {
    accent: "bg-violet-500",
    accentBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    shadow: "hover:shadow-[5px_5px_0px_#8b5cf6]",
    badgeColor: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    twColor: "text-violet-400 dark:text-violet-500 group-hover:text-violet-300 dark:group-hover:text-violet-600",
  },
  emerald: {
    accent: "bg-emerald-500",
    accentBorder: "hover:border-emerald-400 dark:hover:border-emerald-500",
    shadow: "hover:shadow-[5px_5px_0px_#10b981]",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    twColor: "text-emerald-400 dark:text-emerald-500 group-hover:text-emerald-300 dark:group-hover:text-emerald-600",
  },
  red: {
    accent: "bg-red-500",
    accentBorder: "hover:border-red-400 dark:hover:border-red-500",
    shadow: "hover:shadow-[5px_5px_0px_#ef4444]",
    badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    twColor: "text-red-400 dark:text-red-500 group-hover:text-red-300 dark:group-hover:text-red-600",
  },
  amber: {
    accent: "bg-amber-500",
    accentBorder: "hover:border-amber-400 dark:hover:border-amber-500",
    shadow: "hover:shadow-[5px_5px_0px_#f59e0b]",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    twColor: "text-amber-400 dark:text-amber-500 group-hover:text-amber-300 dark:group-hover:text-amber-600",
  },
  orange: {
    accent: "bg-orange-500",
    accentBorder: "hover:border-orange-400 dark:hover:border-orange-500",
    shadow: "hover:shadow-[5px_5px_0px_#f97316]",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    twColor: "text-orange-400 dark:text-orange-500 group-hover:text-orange-300 dark:group-hover:text-orange-600",
  },
  teal: {
    accent: "bg-teal-500",
    accentBorder: "hover:border-teal-400 dark:hover:border-teal-500",
    shadow: "hover:shadow-[5px_5px_0px_#14b8a6]",
    badgeColor: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    twColor: "text-teal-400 dark:text-teal-500 group-hover:text-teal-300 dark:group-hover:text-teal-600",
  },
};
