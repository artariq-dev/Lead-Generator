import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Your software is leaking money. Find out how much.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Fetch Inter font for reliable rendering on Vercel edge
  const interBold = await fetch(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhij-Aw4Y.woff"
  ).then((res) => res.arrayBuffer());

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
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "#2563eb",
          }}
        />

        {/* Corner brackets */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            width: 24,
            height: 24,
            borderTop: "2px solid #374151",
            borderLeft: "2px solid #374151",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            width: 24,
            height: 24,
            borderTop: "2px solid #374151",
            borderRight: "2px solid #374151",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            width: 24,
            height: 24,
            borderBottom: "2px solid #374151",
            borderLeft: "2px solid #374151",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 24,
            height: 24,
            borderBottom: "2px solid #374151",
            borderRight: "2px solid #374151",
          }}
        />

        {/* Site name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 18,
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
            }}
          />
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f9fafb",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {"Your software is "}
            <span style={{ color: "#60a5fa" }}>leaking money.</span>
            {"\nFind out how much."}
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#9ca3af",
              letterSpacing: "0.01em",
            }}
          >
            Answer 8 questions. Find exactly what&apos;s wrong and what to fix first.
          </div>
        </div>

        {/* Bottom row: tags + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Category pills */}
          <div style={{ display: "flex", gap: 10 }}>
            {["Cloud", "Fullstack", "CRM", "Pipeline"].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#60a5fa",
                  padding: "6px 14px",
                  border: "1px solid #1e3a5f",
                  background: "rgba(37,99,235,0.1)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ffffff",
              padding: "12px 28px",
              background: "#2563eb",
              border: "1px solid #1d4ed8",
            }}
          >
            Take the free audit →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
