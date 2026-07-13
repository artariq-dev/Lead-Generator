import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Your software is leaking money. Find out how much.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Ajrak light-mode SVG pattern (matches the site's bg-ajrak)
const ajrakSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'><rect width='192' height='192' fill='none'/><rect x='2' y='2' width='188' height='188' fill='none' stroke='%239B1B30' stroke-width='1.5' opacity='0.25'/><rect x='6' y='6' width='180' height='180' fill='none' stroke='%231B3A5C' stroke-width='1' opacity='0.3'/><rect x='14' y='14' width='164' height='164' fill='none' stroke='%231B3A5C' stroke-width='0.8' opacity='0.2'/><g transform='translate(96,96)'><rect x='-32' y='-32' width='64' height='64' fill='none' stroke='%239B1B30' stroke-width='1.5' opacity='0.3'/><rect x='-28' y='-28' width='56' height='56' fill='none' stroke='%231B3A5C' stroke-width='1' opacity='0.25'/><rect x='-36' y='-36' width='72' height='72' fill='none' stroke='%231B3A5C' stroke-width='0.8' opacity='0.2' transform='rotate(45)'/><circle cx='0' cy='0' r='3' fill='%231B3A5C' opacity='0.4'/></g><g transform='translate(22,22)'><polygon points='0,-9 9,0 0,9 -9,0' fill='%231B3A5C' opacity='0.25'/><circle cx='0' cy='0' r='2' fill='%239B1B30' opacity='0.3'/></g><g transform='translate(170,22)'><polygon points='0,-9 9,0 0,9 -9,0' fill='%231B3A5C' opacity='0.25'/><circle cx='0' cy='0' r='2' fill='%239B1B30' opacity='0.3'/></g><g transform='translate(22,170)'><polygon points='0,-9 9,0 0,9 -9,0' fill='%231B3A5C' opacity='0.25'/><circle cx='0' cy='0' r='2' fill='%239B1B30' opacity='0.3'/></g><g transform='translate(170,170)'><polygon points='0,-9 9,0 0,9 -9,0' fill='%231B3A5C' opacity='0.25'/><circle cx='0' cy='0' r='2' fill='%239B1B30' opacity='0.3'/></g><g transform='translate(96,8)'><polygon points='0,-6 6,0 0,6 -6,0' fill='%231B3A5C' opacity='0.25'/></g><g transform='translate(96,184)'><polygon points='0,-6 6,0 0,6 -6,0' fill='%231B3A5C' opacity='0.25'/></g><g transform='translate(8,96)'><polygon points='0,-6 6,0 0,6 -6,0' fill='%231B3A5C' opacity='0.25'/></g><g transform='translate(184,96)'><polygon points='0,-6 6,0 0,6 -6,0' fill='%231B3A5C' opacity='0.25'/></g><circle cx='40' cy='40' r='1.5' fill='%231B3A5C' opacity='0.25'/><circle cx='152' cy='40' r='1.5' fill='%231B3A5C' opacity='0.25'/><circle cx='40' cy='152' r='1.5' fill='%231B3A5C' opacity='0.25'/><circle cx='152' cy='152' r='1.5' fill='%231B3A5C' opacity='0.25'/><circle cx='96' cy='40' r='1.5' fill='%231B3A5C' opacity='0.2'/><circle cx='96' cy='152' r='1.5' fill='%231B3A5C' opacity='0.2'/><circle cx='40' cy='96' r='1.5' fill='%231B3A5C' opacity='0.2'/><circle cx='152' cy='96' r='1.5' fill='%231B3A5C' opacity='0.2'/><circle cx='68' cy='68' r='1' fill='%231B3A5C' opacity='0.15'/><circle cx='124' cy='68' r='1' fill='%231B3A5C' opacity='0.15'/><circle cx='68' cy='124' r='1' fill='%231B3A5C' opacity='0.15'/><circle cx='124' cy='124' r='1' fill='%231B3A5C' opacity='0.15'/></svg>`;

const ajrakDataUrl = `data:image/svg+xml,${ajrakSvg}`;

const categories = [
  { label: "Wasted Spend",  score: 3,  max: 10 },
  { label: "Hidden Risks",  score: 7,  max: 10 },
  { label: "Missed Revenue", score: 5, max: 10 },
];

export default async function OgImage() {
  const fontData = await readFile(join(process.cwd(), "public/Inter-Bold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#ffffff",
          backgroundImage: `url("${ajrakDataUrl}")`,
          backgroundSize: "192px 192px",
          display: "flex",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Left col */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 620,
            padding: "64px 56px",
            gap: 0,
          }}
        >
          {/* Site label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 36,
            }}
          >
            <span style={{ color: "#9ca3af", fontSize: 13, letterSpacing: "0.05em" }}>[</span>
            <span style={{ color: "#111827", fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>ask.artariq</span>
            <span style={{ color: "#9ca3af", fontSize: 13, letterSpacing: "0.05em" }}>]</span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: 0,
              }}
            >
              {/* Blue left bar */}
              <div style={{ width: 4, background: "#2563eb", marginRight: 16, display: "flex" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 44, fontWeight: 700, color: "#111827", lineHeight: 1.1 }}>
                  Your software is leaking money.
                </span>
                <span style={{ fontSize: 44, fontWeight: 700, color: "#2563eb", lineHeight: 1.1 }}>
                  Find out how much.
                </span>
              </div>
            </div>
          </div>

          {/* Subtext in box */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: 0,
              marginLeft: 20,
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "3px 3px 0px #e5e7eb",
            }}
          >
            <div style={{ width: 4, background: "#2563eb", display: "flex", flexShrink: 0 }} />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#111827", lineHeight: 1.4, padding: "10px 16px" }}>
              Answer 8 questions. Find exactly what&apos;s wrong and what to fix first.
            </span>
          </div>
        </div>

        {/* Right col — scorecard */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "56px 48px 56px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              boxShadow: "4px 4px 0px #e5e7eb",
              padding: "28px 32px",
              width: "100%",
              gap: 20,
            }}
          >
            {/* Card header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280" }}>
                SOFTWARE AUDIT
              </span>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#9ca3af" }}>
                2 min · no sign-up
              </span>
            </div>

            {/* Grade */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 72,
                  height: 72,
                  background: "#fef2f2",
                  border: "2px solid #fecaca",
                  boxShadow: "3px 3px 0px #fecaca",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#dc2626",
                }}
              >
                D
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Overall Grade</span>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>38 / 100</span>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>Needs immediate attention</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", height: 1, background: "#f3f4f6" }} />

            {/* Category scores */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {categories.map(({ label, score, max }) => {
                const pct = (score / max) * 100;
                return (
                  <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#374151", letterSpacing: "0.05em" }}>
                        {label}
                      </span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#dc2626" }}>
                        {score}/{max}
                      </span>
                    </div>
                    {/* Bar track */}
                    <div style={{ display: "flex", height: 6, background: "#f3f4f6", width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          height: 6,
                          width: `${pct}%`,
                          background: score <= 4 ? "#dc2626" : score <= 6 ? "#f59e0b" : "#16a34a",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2563eb",
                padding: "10px 0",
                boxShadow: "3px 3px 0px #1d4ed8",
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
                What&apos;s your score? →
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 700 }],
    }
  );
}
