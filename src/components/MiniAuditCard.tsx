import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/Icon";

interface MiniAuditCardProps {
  href: string;
  iconId: string;
  name: string;
  categories: string[];
  badge: string;
}

export function MiniAuditCard({
  href,
  iconId,
  name,
  categories,
  badge,
}: MiniAuditCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full border border-gray-800 bg-black shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(37,99,235,0.25)] hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 p-4"
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center justify-center w-8 h-8 bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
            <Icon id={iconId} size={16} />
          </span>
        </div>

        <h3 className="text-base font-bold text-white leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
          {name}
        </h3>

        <div className="mt-3 flex flex-wrap gap-1">
          {categories.map((label) => (
            <span
              key={label}
              className="text-[10px] px-1.5 py-0.5 bg-gray-900 text-gray-400 transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-800 transition-colors duration-300 group-hover:border-white/20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 group-hover:text-blue-100">
          {badge}
        </span>
        <span className="relative flex items-center justify-center w-8 h-8">
          <ArrowRight
            size={26}
            strokeWidth={3}
            className="text-emerald-600 absolute transition-opacity duration-200 group-hover:opacity-0"
          />
          <ArrowUpRight
            size={28}
            strokeWidth={3}
            className="text-white absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </span>
      </div>
    </Link>
  );
}
