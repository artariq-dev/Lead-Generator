"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "/audit", label: "Audit" },
  { href: "/build", label: "Build" },
  { href: "/diagnose", label: "Diagnose" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="pointer-events-auto flex items-center gap-3 sm:gap-4 bg-gray-950 px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        {/* Brand */}
        <a
          href="https://artariq.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group shrink-0"
        >
          <Image
            src="/portfolio.jpeg"
            alt="artariq"
            width={28}
            height={28}
            className="w-7 h-7 object-cover"
          />
          <span className="text-sm font-bold text-white">
            artariq
          </span>
          <ArrowUpRight
            size={18}
            className="text-emerald-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <div className="w-px h-4 bg-white/10 shrink-0" />

        {!isHome && (
          <>
            <Link
              href="/"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <div className="w-px h-4 bg-white/10 shrink-0" />
          </>
        )}

        <nav className="hidden sm:flex items-center gap-2.5">
          {LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-2.5">
              {i > 0 && (
                <span className="text-sm text-white/25">/</span>
              )}
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
