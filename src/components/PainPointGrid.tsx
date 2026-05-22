"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Node {
  id: string;
  label: string;
  row: number;
  col: number;
}

const nodes: Node[] = [
  { id: "plan", label: "Plan", row: 1, col: 1 },
  { id: "code", label: "Code", row: 1, col: 3 },
  { id: "build", label: "Build", row: 1, col: 5 },
  { id: "test", label: "Test", row: 1, col: 7 },
  { id: "staging", label: "Staging", row: 2, col: 7 },
  { id: "release", label: "Release", row: 2, col: 5 },
  { id: "deploy", label: "Deploy", row: 2, col: 3 },
  { id: "monitor", label: "Monitor", row: 2, col: 1 },
  { id: "secure", label: "Secure", row: 3, col: 1 },
  { id: "cost", label: "Cost", row: 3, col: 3 },
  { id: "backup", label: "Backup", row: 3, col: 5 },
  { id: "seo", label: "SEO", row: 3, col: 7 },
];

const edges: [string, string, string][] = [
  ["plan", "code", "→"],
  ["code", "build", "→"],
  ["build", "test", "→"],
  ["test", "staging", "↓"],
  ["staging", "release", "←"],
  ["release", "deploy", "←"],
  ["deploy", "monitor", "←"],
  ["monitor", "secure", "↓"],
  ["secure", "cost", "→"],
  ["cost", "backup", "→"],
  ["backup", "seo", "→"],
];

export function PainPointGrid() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const borderClr = dark ? "#1f2937" : "#e5e7eb";
  const selBorderClr = "#2563eb";
  const selShadowClr = "#2563eb";
  const shadowClr = dark ? "#374151" : "#e5e7eb";
  const hoverShadowClr = dark ? "#1e3a5f" : "#bfdbfe";
  const hoverBorderClr = dark ? "#60a5fa" : "#93c5fd";
  const textClr = dark ? "#9ca3af" : "#6b7280";
  const selTextClr = "#2563eb";
  const bgClr = dark ? "rgba(17,24,39,0.8)" : "rgba(255,255,255,0.8)";
  const selBgClr = dark ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.15)";

  return (
    <div className="border border-gray-200 dark:border-gray-800 p-6 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 text-center">
        Click the stages where you have pain points
      </h3>

      <div className="relative max-w-md mx-auto" style={{ aspectRatio: "4/3" }}>
        {nodes.map((node) => {
          const isSel = selected.has(node.id);
          return (
            <button
              key={node.id}
              onClick={() => toggle(node.id)}
              className="absolute px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-150 pixel-btn"
              style={{
                left: `${(node.col - 1) * 28 + 2}%`,
                top: `${(node.row - 1) * 38 + 2}%`,
                width: "23%",
                boxShadow: isSel
                  ? `3px 3px 0px ${selShadowClr}`
                  : `3px 3px 0px ${shadowClr}`,
                background: isSel ? selBgClr : bgClr,
                color: isSel ? selTextClr : textClr,
                border: isSel
                  ? `1px solid ${selBorderClr}`
                  : `1px solid ${borderClr}`,
              }}
              onMouseEnter={(e) => {
                if (!isSel) {
                  e.currentTarget.style.boxShadow = `5px 5px 0px ${hoverShadowClr}`;
                  e.currentTarget.style.borderColor = hoverBorderClr;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSel) {
                  e.currentTarget.style.boxShadow = `3px 3px 0px ${shadowClr}`;
                  e.currentTarget.style.borderColor = borderClr;
                }
              }}
            >
              {node.label}
            </button>
          );
        })}

        {edges.map(([from, to, dir], i) => {
          const f = nodes.find((n) => n.id === from)!;
          const t = nodes.find((n) => n.id === to)!;
          return (
            <span
              key={i}
              className="absolute text-xs pointer-events-none select-none"
              style={{
                color: dark ? "#374151" : "#d1d5db",
                left: `${((f.col - 1) * 28 + (t.col - 1) * 28) / 2 + 14}%`,
                top: `${((f.row - 1) * 38 + (t.row - 1) * 38) / 2 + 12}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {dir}
            </span>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <Link
          href={`/assess${selected.size > 0 ? `?pains=${Array.from(selected).join(",")}` : ""}`}
          className="inline-block text-xs tracking-wider uppercase px-5 py-2.5 bg-blue-600 text-white pixel-btn shadow-[3px_3px_0px_#1d4ed8] hover:shadow-[5px_5px_0px_#1d4ed8]"
        >
          Analyze My Pain Points →
        </Link>
      </div>
    </div>
  );
}
