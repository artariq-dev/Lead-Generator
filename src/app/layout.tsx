import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/metadata";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: `%s — ${siteConfig.name}`,
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  icons: "/favicon.svg",
  metadataBase: new URL("https://ask.artariq.dev"),
  alternates: { canonical: "/" },
  keywords: [
    // Branded
    "ask artariq", "artariq", "AR Tariq", "Abdur Rehman Tariq", "artariq dev",
    "ask.artariq", "artariq software", "artariq developer", "abdur rehman", "abdurrehman tariq",
    // Audit/assess
    "software audit tool", "is my software worth it", "software health check",
    "cloud cost audit", "CRM health check", "fullstack audit", "software scorecard",
    "software assessment", "is my app good", "software performance check", "tech audit",
    "cloud infrastructure audit", "pipeline audit", "software ROI",
    "is my software costing me money", "software waste", "cloud bill too high",
    "CRM not working", "software not delivering",
    // Build
    "how to build a web app", "should I hire a developer", "no-code or custom build",
    "build guide for non-technical founders", "what to build first",
    "how to start a software project", "non-technical founder software",
    "how to build an app without coding", "hire freelancer or agency",
    "build or buy software", "software for small business", "MVP advice",
    "how to build MVP", "startup software advice", "first software project",
    // Pain point
    "software problems", "tech problems for business", "software consultant",
    "software not working", "business software issues", "fix my software",
    "software help", "tech consultant UK", "freelance developer advice", "software going wrong",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    url: "https://ask.artariq.dev",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ask.artariq",
              "alternateName": [
                "ask artariq", "Ask AR Tariq", "artariq", "AR Tariq",
                "Abdur Rehman Tariq", "artariq dev", "abdurrehman tariq"
              ],
              "url": "https://ask.artariq.dev",
              "description": siteConfig.description,
              "author": {
                "@type": "Person",
                "name": "Abdur Rehman Tariq",
                "alternateName": ["AR Tariq", "artariq", "abdur rehman tariq"],
                "url": "https://artariq.dev",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var d = document.documentElement;
                var s = localStorage.getItem("dark");
                if (s !== null ? s === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches) {
                  d.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Nav />
        <div className="flex flex-col flex-1">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
