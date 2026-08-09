"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "/audit", label: "Audit" },
  { href: "/diagnose", label: "Diagnose" },
  { href: "/build", label: "Build" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isHome) {
    return (
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto bg-gray-950 dark:bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
          <Link href="/" className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors">
            <span className="text-sm">←</span> Go to start
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto relative w-full max-w-max bg-gray-950 dark:bg-white rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Portfolio button */}
          <a
            href="https://artariq.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-[2px_2px_0px_rgba(0,0,0,0.35)] dark:shadow-[2px_2px_0px_#374151] hover:shadow-[4px_4px_0px_#3b82f6] dark:hover:shadow-[4px_4px_0px_#1e3a5f] hover:-translate-y-0.5 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-150 shrink-0"
          >
            <img
              src="/portfolio.jpeg"
              alt="Abdur Rehman Tariq"
              className="w-7 h-7 sm:w-8 sm:h-8 object-cover"
            />
            <span className="hidden sm:block text-left leading-tight">
              <span className="block text-[10px] font-bold text-gray-900 dark:text-white">Abdur Rehman Tariq</span>
              <span className="block text-[8px] text-gray-500 dark:text-gray-400">6 yrs · cloud x full-stack</span>
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">↗</span>
          </a>

          <div className="w-px h-3 bg-white/10 dark:bg-black/10 shrink-0" />

          {/* Main links — always visible */}
          <nav className="flex items-center gap-4 sm:gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] sm:text-xs font-medium sm:font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors"
              >
                {link.label} /
              </Link>
            ))}
          </nav>

          <div className="w-px h-3 bg-white/10 dark:bg-black/10 shrink-0" />

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
