"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "/audit", label: "Audit /" },
  { href: "/build", label: "Build /" },
  { href: "/diagnose", label: "Diagnose /" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="relative pointer-events-auto flex items-center gap-3 sm:gap-5 bg-black px-6 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
        {/* Gradient hairline — brand accent */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />

        {/* Brand */}
        <a
          href="https://artariq.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="relative flex items-center justify-center w-7 h-7 rounded-full ring-2 ring-blue-500/40 group-hover:ring-blue-500/70 transition-all duration-200 shrink-0">
            <Image
              src="/portfolio.jpeg"
              alt="artariq"
              width={28}
              height={28}
              className="w-full h-full object-cover rounded-full"
            />
          </span>
          <span className="flex items-center gap-1">
            <span className="text-sm font-bold text-white">artariq</span>
            <ArrowUpRight
              size={18}
              className="text-emerald-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </a>

        <div className="w-px h-4 bg-white/10 shrink-0" />

        {!isHome && (
          <>
            <Link
              href="/"
              className={`group relative text-xs font-medium transition-colors ${
                isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-px bg-blue-400 transition-all duration-200 ${
                  isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
            <div className="w-px h-4 bg-white/10 shrink-0" />
          </>
        )}

        <nav className="hidden sm:flex items-center gap-5">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-xs font-medium transition-colors ${
                isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-blue-400 transition-all duration-200 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
