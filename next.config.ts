import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Old /assess/* routes indexed by Google → redirect to /audit/*
    const calculatorIds = ["growth", "cloud", "fullstack", "frontend", "backend", "crm", "pipeline"];
    const calculatorRedirects = calculatorIds.map((id) => ({
      source: `/assess/${id}`,
      destination: `/audit/${id}`,
      permanent: true,
    }));

    return [
      // Top-level /assess → home
      {
        source: "/assess",
        destination: "/",
        permanent: true,
      },
      // /assess/report/* → home (reports require query params, can't redirect directly)
      {
        source: "/assess/report/:id",
        destination: "/",
        permanent: true,
      },
      // Individual calculator redirects
      ...calculatorRedirects,
    ];
  },
};

export default nextConfig;
