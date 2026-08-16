"use client";

import { useEffect, useRef } from "react";

const SPACING = 26;

const DOT_COLOR = "17,24,39";

export function PixelGrid() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let cols = 0;
    let rows = 0;
    let dpr = 1;
    let visible = true;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      cols = Math.ceil(rect.width / SPACING);
      rows = Math.ceil(rect.height / SPACING);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const tick = () => {
      if (!visible) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const passed = window.innerHeight - rect.top;
      const scroll = Math.max(0, Math.min(1, passed / total));

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `rgba(${DOT_COLOR}, 1)`;

      const offsetY = scroll * SPACING * 1.5;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const rowProgress = r / rows;
          const revealed = Math.max(0, scroll * 1.4 - rowProgress * 0.4);
          const opacity = 0.06 + 0.22 * Math.min(1, revealed * 1.6);
          const y = ((r + 1) * SPACING + offsetY) % rect.height;
          if (y < -2 || y > rect.height + 2) continue;
          ctx.globalAlpha = opacity;
          const x = c * SPACING + SPACING / 2;
          ctx.beginPath();
          ctx.arc(x * dpr, y * dpr, dpr, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "200px" },
    );
    io.observe(wrap);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
