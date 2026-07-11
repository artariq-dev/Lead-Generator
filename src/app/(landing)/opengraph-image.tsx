import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Your software is leaking money. Find out how much.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const fontData = await readFile(join(process.cwd(), "public/Inter-Bold.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#030712",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top blue border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#2563eb",
            display: "flex",
          }}
        />

        {/* Top-left corner bracket */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 28,
            height: 28,
            borderTop: "2px solid #374151",
            borderLeft: "2px solid #374151",
            display: "flex",
          }}
        />

        {/* Top-right corner bracket */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 28,
            height: 28,
            borderTop: "2px solid #374151",
            borderRight: "2px solid #374151",
            display: "flex",
          }}
        />

        {/* Bottom-left corner bracket */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 28,
            height: 28,
            borderBottom: "2px solid #374151",
            borderLeft: "2px solid #374151",
            display: "flex",
          }}
        />

        {/* Bottom-right corner bracket */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 28,
            height: 28,
            borderBottom: "2px solid #374151",
            borderRight: "2px solid #374151",
            display: "flex",
          }}
        />

        {/* Site name row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#6b7280",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ask.artariq.dev
          </span>
          <div
            style={{
              width: 6,
              height: 6,
              background: "#2563eb",
              display: "flex",
            }}
          />
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 62,
              fontWeight: 700,
              color: "#f9fafb",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <span>{"Your software is "}<span style={{ color: "#60a5fa" }}>leaking money.</span></span>
            <span>Find out how much.</span>
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#9ca3af",
              display: "flex",
            }}
          >
            {"Answer 8 questions. Find exactly what's wrong and what to fix first."}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", gap: 10 }}>
            {["Cloud", "Fullstack", "CRM", "Pipeline"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#60a5fa",
                  padding: "6px 14px",
                  border: "1px solid #1e3a5f",
                  background: "rgba(37,99,235,0.12)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#ffffff",
              padding: "12px 28px",
              background: "#2563eb",
              border: "1px solid #1d4ed8",
            }}
          >
            Take the free audit
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
