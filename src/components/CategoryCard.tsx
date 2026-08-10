import Link from "next/link";
import { DotIcon } from "@/components/DotIcon";
import type { Accent } from "@/lib/accents";

interface CategoryCardProps {
  href: string;
  iconId: string;
  name: string;
  categories: string[];
  accent: Accent;
  badge: string;
}

export function CategoryCard({
  href,
  iconId,
  name,
  categories,
  accent,
  badge,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] ${accent.shadow} ${accent.accentBorder} hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gray-900 dark:bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
      />
      <div className={`relative z-10 h-1.5 group-hover:h-2.5 w-full ${accent.accent} transition-all duration-200`} />
      <div className="relative z-10 flex flex-col flex-1 p-4">
        <div className="mb-3">
          <span className={`${accent.twColor} transition-colors duration-500`}>
            <DotIcon id={iconId} color="currentColor" />
          </span>
        </div>
        <h2 className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2 transition-colors duration-500 group-hover:text-white dark:group-hover:text-gray-900">
          {name}
        </h2>
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.map((label) => (
            <span
              key={label}
              className="text-[9px] px-1 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors duration-500 group-hover:bg-gray-800 group-hover:text-gray-200 dark:group-hover:bg-gray-100 dark:group-hover:text-gray-600"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500 group-hover:border-gray-700 dark:group-hover:border-gray-300">
          <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 ${accent.badgeColor}`}>
            {badge}
          </span>
          <span className="text-lg text-gray-900 dark:text-white transition-all duration-200 group-hover:translate-x-1 group-hover:text-white dark:group-hover:text-gray-900">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
