"use client";

import type { RefObject } from "react";

interface FieldOption {
  id: string;
  label: string;
}

interface PainFilterBarProps {
  field: string;
  fieldOptions: FieldOption[];
  showFieldMenu: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  onToggleMenu: () => void;
  onSelectField: (id: string) => void;
}

export function PainFilterBar({
  field,
  fieldOptions,
  showFieldMenu,
  menuRef,
  onToggleMenu,
  onSelectField,
}: PainFilterBarProps) {
  return (
    <div className="flex items-start justify-between gap-x-2 px-2 py-1 mb-3 border-b border-gray-200 dark:border-gray-700 flex-wrap">
      <div className="relative mb-2" ref={menuRef}>
        <button
          onClick={onToggleMenu}
          className="font-bold tracking-wider text-xs cursor-pointer transition-colors flex items-center gap-1.5 px-2 py-0.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          {fieldOptions.find((f) => f.id === field)?.label || "All Problems"}
          <span
            className={`inline-block transition-transform duration-200 ${showFieldMenu ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>
        {showFieldMenu && (
          <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-20 min-w-[140px]">
            {fieldOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => onSelectField(f.id)}
                className={`block w-full text-left text-xs px-3 py-1.5 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors ${field === f.id ? "font-bold text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <span className="flex items-center gap-2 text-[9px]">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          critical
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          warning
        </span>
      </span>
    </div>
  );
}
