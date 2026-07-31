"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1700) {
  const [count, setCount] = useState(0);
  const ref     = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased    = 1 - Math.pow(1 - progress, 3); // ease out cubic
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export function StatNumber({
  value,
  label,
  suffix  = "",
  hideplus = false,
}: {
  value:    number;
  label:    string;
  suffix?:  string;
  hideplus?: boolean;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center" ref={ref}>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {count}{suffix}{hideplus ? "" : "+"}
      </p>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-1">
        {label}
      </p>
    </div>
  );
}
