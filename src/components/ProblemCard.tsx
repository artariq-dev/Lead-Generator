"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@/components/Icon";
import { iconColor, type ProblemCard } from "@/lib/discover-problems";

export function Card({ problem, sev, persona, icon }: ProblemCard) {
  return (
    <div className="group relative shrink-0 w-56 flex flex-col justify-between border border-gray-200  bg-white  p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]  overflow-hidden transition-colors duration-200 group-hover:border-blue-300 ">
      <div className="relative z-10">
        <span className={`inline-block mb-2 ${iconColor[icon]}`}>
          <Icon id={icon} size={16} />
        </span>
        <p className="text-xs text-gray-700  leading-snug">
          {problem}
        </p>
      </div>
      <div className="relative z-10 flex items-center justify-between mt-3">
        <span className="text-[10px] text-gray-400  font-medium">
          —{" "}
          {persona.includes(" · ") ? (
            <>
              {persona.split(" · ")[0]}{" · "}
              <span className="px-1 py-0.5 bg-gray-200  text-gray-700 ">
                {persona.split(" · ")[1]}
              </span>
            </>
          ) : persona}
        </span>
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${sev === "critical" ? "bg-red-500" : "bg-amber-400"}`} />
      </div>
    </div>
  );
}

export function ScrollRow({ items, reverse = false }: { items: ProblemCard[]; reverse?: boolean }) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset   = useRef(0);
  const raf      = useRef(0);
  const hovering = useRef(false);
  const lastX    = useRef(0);
  const touching = useRef(false);
  const SPEED    = 0.5;

  useEffect(() => {
    const wrap  = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const tick = () => {
      if (!hovering.current) {
        offset.current += reverse ? SPEED : -SPEED;
      }
      const half = track.scrollWidth / 2;
      if (offset.current <= -half) offset.current += half;
      if (offset.current >= 0)     offset.current -= half;
      track.style.transform = `translateX(${offset.current}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      offset.current -= e.deltaX;
    };
    const onTouchStart = (e: TouchEvent) => {
      touching.current = true;
      lastX.current = e.touches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!touching.current) return;
      offset.current += e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
    };
    const onTouchEnd = () => { touching.current = false; };

    wrap.addEventListener("wheel",      onWheel,      { passive: false });
    wrap.addEventListener("touchstart", onTouchStart, { passive: true  });
    wrap.addEventListener("touchmove",  onTouchMove,  { passive: true  });
    wrap.addEventListener("touchend",   onTouchEnd);

    return () => {
      cancelAnimationFrame(raf.current);
      wrap.removeEventListener("wheel",      onWheel);
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchmove",  onTouchMove);
      wrap.removeEventListener("touchend",   onTouchEnd);
    };
  }, [reverse]);

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={() => { hovering.current = true;  }}
      onMouseLeave={() => { hovering.current = false; }}
    >
      <div ref={trackRef} className="flex gap-3 w-max will-change-transform">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
