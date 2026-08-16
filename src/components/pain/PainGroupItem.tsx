"use client";

import { Check, ChevronDown } from "lucide-react";
import type { PainGroup } from "@/lib/pain-points";

interface PainGroupItemProps {
  group: PainGroup;
  selected: Set<string>;
  expanded: Set<string>;
  onToggleGroup: (g: PainGroup) => void;
  onToggleExpand: (id: string) => void;
  onToggleItem: (id: string) => void;
}

export function PainGroupItem({
  group,
  selected,
  expanded,
  onToggleGroup,
  onToggleExpand,
  onToggleItem,
}: PainGroupItemProps) {
  const total = group.children.length;
  const selectedCount = group.children.filter((c) => selected.has(c.id)).length;
  const allSelected = selectedCount === total;
  const someSelected = selectedCount > 0 && !allSelected;
  const isExpanded = expanded.has(group.id);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {/* Group header */}
      <button
        onClick={() => onToggleGroup(group)}
        className="w-full flex items-center gap-2.5 px-2 py-2.5 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span
          className={`shrink-0 w-[18px] h-[18px] flex items-center justify-center border transition-colors ${
            allSelected
              ? "bg-blue-600 border-blue-600 text-white"
              : someSelected
              ? "bg-blue-100 border-blue-300 text-blue-700"
              : "bg-white border-gray-300"
          }`}
        >
          {allSelected ? (
            <Check size={12} strokeWidth={3} />
          ) : someSelected ? (
            <span className="text-[10px] font-bold">–</span>
          ) : null}
        </span>
        <span
          className={`text-sm font-semibold leading-snug ${
            selectedCount > 0 ? "text-gray-900" : "text-gray-700"
          }`}
        >
          {group.label}
        </span>
        <span className="ml-auto flex items-center gap-2 shrink-0">
          <span
            className={`text-[11px] tabular-nums ${
              selectedCount > 0 ? "text-blue-600 font-semibold" : "text-gray-400"
            }`}
          >
            {selectedCount}/{total}
          </span>
          <span
            className={`flex items-center justify-center w-5 h-5 transition-transform duration-200 cursor-pointer ${
              isExpanded ? "rotate-180" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand(group.id);
            }}
          >
            <ChevronDown size={16} className="text-gray-400" />
          </span>
        </span>
      </button>

      {isExpanded && (
        <div className="pb-2">
          <p className="text-xs text-gray-500 leading-relaxed px-4 pb-1.5">
            {group.description}
          </p>
          <div className="pl-2">
            {group.children.map((child) => {
              const isSel = selected.has(child.id);
              return (
                <button
                  key={child.id}
                  onClick={() => onToggleItem(child.id)}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded transition-colors cursor-pointer ${
                    isSel ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`shrink-0 w-[18px] h-[18px] flex items-center justify-center border transition-colors ${
                      isSel
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {isSel && <Check size={12} strokeWidth={3} />}
                  </span>
                  {child.severity && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        child.severity === "critical" ? "bg-red-500" : "bg-amber-400"
                      }`}
                    />
                  )}
                  <span
                    className={`text-sm text-left leading-snug ${
                      isSel
                        ? "font-semibold text-gray-900"
                        : "font-medium text-gray-600"
                    }`}
                  >
                    {child.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
