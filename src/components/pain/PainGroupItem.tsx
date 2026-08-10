"use client";

import type { PainGroup } from "@/lib/pain-points";

interface PainGroupItemProps {
  group: PainGroup;
  selected: Set<string>;
  expanded: Set<string>;
  dark: boolean;
  onToggleGroup: (g: PainGroup) => void;
  onToggleExpand: (id: string) => void;
  onToggleItem: (id: string) => void;
}

export function PainGroupItem({
  group,
  selected,
  expanded,
  dark,
  onToggleGroup,
  onToggleExpand,
  onToggleItem,
}: PainGroupItemProps) {
  const selectedCount = group.children.filter((c) => selected.has(c.id)).length;
  const isExpanded = expanded.has(group.id);

  return (
    <div className="border-b-2 border-gray-300 dark:border-gray-600">
      <div className={selectedCount > 0 ? "bg-white dark:bg-gray-800" : ""}>
        <div className="flex-1 min-w-0 flex">
          <button
            onClick={() => onToggleGroup(group)}
            className="flex-1 flex items-start justify-start gap-2 px-2 py-2 cursor-pointer transition-colors hover:bg-blue-100 dark:hover:bg-blue-950"
          >
            <span
              className={`shrink-0 w-3.5 h-3.5 flex items-center justify-center border text-[8px] font-bold ${selectedCount > 0 ? "bg-blue-500 border-blue-500 text-white" : "border-gray-400 dark:border-gray-500 text-transparent"}`}
            >
              {selectedCount > 0 ? "✓" : ""}
            </span>
            <span
              className={`text-xs text-left font-bold tracking-wider ${selectedCount > 0 ? "text-gray-900 dark:text-white" : dark ? "text-gray-400" : "text-gray-500"}`}
            >
              {group.label}
            </span>
          </button>
          <button
            onClick={() => onToggleExpand(group.id)}
            className="shrink-0 w-6 flex items-start justify-center pt-1 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-950 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <span className={`text-xs ${dark ? "text-gray-600" : "text-gray-400"}`}>
              {isExpanded ? "▲" : "▼"}
            </span>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={selectedCount > 0 ? "bg-white dark:bg-gray-800" : ""}>
          <div className="px-1 pb-1" style={{ paddingLeft: "1.2rem" }}>
            <span className={`text-[10px] ${dark ? "text-gray-300" : "text-gray-600"}`}>
              {group.description}
            </span>
          </div>
          {group.children.map((child) => {
            const isSel = selected.has(child.id);
            return (
              <div
                key={child.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => onToggleItem(child.id)}
                  className={`flex items-start w-full px-3 py-1.5 cursor-pointer transition-colors hover:bg-blue-50 dark:hover:bg-blue-950 ${isSel ? "bg-white dark:bg-gray-800" : ""}`}
                >
                  <span
                    className={`shrink-0 w-3.5 h-3.5 mt-0.5 flex items-center justify-center border text-[8px] font-bold mr-2 ${isSel ? "bg-blue-500 border-blue-500 text-white" : "border-gray-400 dark:border-gray-500 text-transparent"}`}
                  >
                    {isSel ? "✓" : ""}
                  </span>
                  {child.severity && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 mt-1 flex-shrink-0 ${
                        child.severity === "critical"
                          ? "bg-red-500"
                          : "bg-amber-400"
                      }`}
                    />
                  )}
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 text-left">
                    {child.label}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
