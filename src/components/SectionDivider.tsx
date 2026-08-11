"use client";

import { useEffect, useRef } from "react";

interface Props {
  onHeightChange: (half: number) => void;
}

export function SectionDivider({ onHeightChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      onHeightChange(el.offsetHeight / 2);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [onHeightChange]);

  return (
    <div
      ref={ref}
      className="relative z-10 max-w-7xl mx-auto w-full px-6"
    >
      <div className="bg-gray-200/60 dark:bg-white/10 border border-gray-300/50 dark:border-gray-600/50 px-6 py-8 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
          Discover problems other{" "}
          <span className="inline-block px-2 py-0.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900">
            founders
          </span>{" "}
          face
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You&apos;re not the only one dealing with this.
        </p>
      </div>
    </div>
  );
}
