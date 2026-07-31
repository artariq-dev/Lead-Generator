import type { MetadataRoute } from "next";
import { calculators } from "@/lib/calculators/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cinch.artariq.dev";

  const calculatorRoutes = Object.keys(calculators).map((id) => ({
    url: `${baseUrl}/audit/${id}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/audit`, lastModified: new Date() },
    ...calculatorRoutes,
  ];
}
