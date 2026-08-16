"use client";

import { useCallback, useMemo, useState } from "react";
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

  const filtered = useMemo(
    () => groupsBusiness.filter((g) => fieldGroups[field]?.includes(g.id)),
    [field],
  );

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
    <div className="bg-white border border-gray-200 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
      {/* Filter bar — outside scrollable area */}
      <PainFilterBar
        field={field}
        fieldOptions={fieldOptions}
        onSelectField={selectField}
        total={filtered.length}
        totalGroups={groupsBusiness.length}
      />

      <div
        className="text-left"
        style={{
          height: height,
          overflowY: "auto",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 8px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10px, black calc(100% - 8px), transparent 100%)",
        }}
      >
        <div className="pr-2 pb-2 min-h-auto">
          {filtered.map((g) => (
            <PainGroupItem
              key={g.id}
              group={g}
              selected={selected}
              expanded={expanded}
              onToggleGroup={toggleGroupSelect}
              onToggleExpand={toggleExpand}
              onToggleItem={toggleItem}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-auto pt-4">
        {selected.size === 0 ? (
          <div className="w-full text-center text-xs font-medium tracking-wide px-5 py-3 bg-gray-100  text-gray-400  border border-gray-200  cursor-not-allowed">
            Select at least one problem first
          </div>
        ) : (
          <Link
            href={`/diagnose/result?pains=${Array.from(selected).join(",")}`}
            className="block w-full text-center text-xs font-semibold tracking-wide px-5 py-3 bg-blue-600 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)] hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all duration-200"
          >
            <span>{`Send ${selected.size} problem${selected.size !== 1 ? "s" : ""} `}</span>
            <span className="text-base">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
