"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { groupsBusiness, type PainGroup } from "@/lib/pain-points";
import { PainFilterBar } from "@/components/pain/PainFilterBar";
import { PainGroupItem } from "@/components/pain/PainGroupItem";

const fieldGroups: Record<string, string[]> = {
  all: groupsBusiness.map((g) => g.id),
  growth: ["growth", "crm", "planning", "team"],
  performance: ["performance", "monitoring", "deploying", "ops"],
  ux: ["building", "coding", "planning"],
  security: ["security"],
};

const fieldOptions = [
  { id: "all", label: "All" },
  { id: "growth", label: "Growth" },
  { id: "performance", label: "Performance" },
  { id: "ux", label: "User Experience" },
  { id: "security", label: "Security" },
];

export function PainPointGrid({ height = "280px" }: { height?: string }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [field, setField] = useState("all");
  const [dark, setDark] = useState(false);

  const filtered = useMemo(
    () => groupsBusiness.filter((g) => fieldGroups[field]?.includes(g.id)),
    [field],
  );

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, []);

  const toggleGroupSelect = useCallback((g: PainGroup) => {
    setSelected((prev) => {
      const next = new Set(prev);
      const ids = g.children.map((c) => c.id);
      const allSelected = ids.every((id) => next.has(id));
      ids.forEach((id) => (allSelected ? next.delete(id) : next.add(id)));
      return next;
    });
  }, []);

  const toggleSet = useCallback(
    (set: Set<string>, setter: (s: Set<string>) => void, id: string) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setter(next);
    },
    [],
  );

  const toggleExpand = useCallback(
    (id: string) => toggleSet(expanded, setExpanded, id),
    [expanded, toggleSet],
  );

  const toggleItem = useCallback(
    (id: string) => toggleSet(selected, setSelected, id),
    [selected, toggleSet],
  );

  const selectField = useCallback((id: string) => {
    setField(id);
  }, []);

  return (
    <div className="bg-white/70 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-3 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
      {/* Filter bar — outside scrollable area */}
      <PainFilterBar
        field={field}
        fieldOptions={fieldOptions}
        onSelectField={selectField}
        total={filtered.length}
        totalGroups={groupsBusiness.length}
      />

      <div
        className={`text-left ${dark ? "bg-gray-900" : "bg-gray-100"}`}
        style={{
          height: height,
          overflowY: "auto",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 8px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 8px), transparent 100%)",
        }}
      >
        <div className="pr-4 pt-4 pb-2 min-h-auto">
          {filtered.map((g) => (
            <PainGroupItem
              key={g.id}
              group={g}
              selected={selected}
              expanded={expanded}
              dark={dark}
              onToggleGroup={toggleGroupSelect}
              onToggleExpand={toggleExpand}
              onToggleItem={toggleItem}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-auto pt-4">
        {selected.size === 0 ? (
          <div className="w-full text-center text-xs tracking-wider uppercase px-5 py-2.5 bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 border border-gray-300 dark:border-gray-700 pixel-btn shadow-[3px_3px_0px_#d1d5db] dark:shadow-[3px_3px_0px_#374151] cursor-not-allowed">
            Select at least one problem first
          </div>
        ) : (
          <Link
            href={`/diagnose/result?pains=${Array.from(selected).join(",")}`}
            className="block w-full text-center text-xs tracking-wider uppercase px-5 py-2.5 bg-[#f0e6d4] text-gray-900 pixel-btn border border-[#e0d2b4] shadow-[3px_3px_0px_#d4c5a8] hover:shadow-[5px_5px_0px_#d4c5a8]"
          >
            <span>{`Send ${selected.size} problem${selected.size !== 1 ? "s" : ""} `}</span>
            <span className="text-base">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
