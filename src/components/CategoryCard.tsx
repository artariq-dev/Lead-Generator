import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";

interface CategoryCardProps {
  href: string;
  iconId: string;
  name: string;
  categories: string[];
  badge: string;
  cta?: string;
  accent?: string;
}

const ACCENT_CHIP: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  rose: "bg-rose-50 text-rose-600",
};

export function CategoryCard({
  href,
  iconId,
  name,
  categories,
  badge,
  cta = "Start",
  accent = "blue",
}: CategoryCardProps) {
  const chip = ACCENT_CHIP[accent] ?? ACCENT_CHIP.blue;
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 p-6"
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className={`flex items-center justify-center w-10 h-10 transition-colors duration-300 group-hover:bg-white group-hover:text-black ${chip}`}>
            <Icon id={iconId} size={20} />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 group-hover:text-blue-100">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-1">
          {categories.map((label) => (
            <span
              key={label}
              className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 transition-colors duration-300 group-hover:border-white/20">
        <span className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
          {cta}
        </span>
        <span className="relative flex items-center justify-center w-16 h-16">
          <ArrowRight
            size={36}
            className="text-emerald-600 absolute transition-opacity duration-200 group-hover:opacity-0"
          />
          <ArrowUpRight
            size={56}
            className="text-white absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </span>
      </div>
    </Link>
  );
}
