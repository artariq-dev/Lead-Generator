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
          justifyContent: "center",
          padding: "64px 80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#f9fafb", lineHeight: 1.15 }}>
            {"Your software is leaking money."}
          </span>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#f9fafb", lineHeight: 1.15 }}>
            {"Find out how much."}
          </span>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#f9fafb", lineHeight: 1.15 }}>
            {"Answer 8 questions. Find exactly what's wrong and what to fix first."}
          </span>
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
