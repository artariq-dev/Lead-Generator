import Link from "next/link";
import { buildTypes } from "@/lib/build/config";

const icons: Record<string, string> = {
  frontend: "◻",
  backend: "⬡",
  fullstack: "◈",
  cloud: "☁",
  automation: "⟳",
  internal: "⊞",
};

const order = ["frontend", "backend", "fullstack", "cloud", "automation", "internal"];

export default function BuildPage() {
  const ordered = order.map((id) => buildTypes[id]).filter(Boolean);
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-950">
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 pt-16 pb-16">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          What do you want to build?
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          Pick the type that matches your idea — you'll get a clear recommendation on how to build it in 8 questions.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-8">
          Not sure which fits?{" "}
          <a href="/build/fullstack" className="text-blue-600 dark:text-blue-400 underline font-semibold">
            Start with Fullstack →
          </a>
        </p>

        <div className="grid gap-4">
          {ordered.map((bt) => (
            <Link
              key={bt.id}
              href={`/build/${bt.id}`}
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-5 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151] hover:shadow-[5px_5px_0px_#bfdbfe] dark:hover:shadow-[5px_5px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
            >
              {bt.id === "fullstack" && (
                <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 bg-blue-600 text-white">
                  Most Common
                </span>
              )}
              <div className="flex items-start gap-3">
                <span className="text-lg text-blue-600 dark:text-blue-400 leading-none mt-0.5 font-mono">
                  {icons[bt.id] ?? "◻"}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{bt.name}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{bt.tagline}</p>
                  <div className="flex flex-wrap items-center gap-1">
                    <span className="text-[9px] text-gray-900 dark:text-white uppercase tracking-wider">Covers:</span>
                    {bt.categories.map((c) => (
                      <span key={c.id} className="text-[9px] px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
