import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { siteConfig } from "@/lib/metadata";
import { Nav } from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

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
    // Audit/audit
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
    title: siteConfig.tagline,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
    url: "https://ask.artariq.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ask.artariq",
              "url": "https://ask.artariq.dev",
              "description": "Free software audit tool. Is your software working the way you want? Pick a path — audit your cloud, full-stack, CRM, frontend, backend, or pipeline; get a build plan; or diagnose your pain points. 8 questions, instant scorecard, no sign-up.",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "AbdurRehman Tariq",
                "alternateName": ["Abdur Rehman Tariq", "AR Tariq", "artariq"],
                "url": "https://artariq.dev",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Nav />
        <div className="flex flex-col flex-1">{children}</div>
        <Analytics />
        <GoogleAnalytics gaId="G-KRX12V810R" />
      </body>
    </html>
  );
}
