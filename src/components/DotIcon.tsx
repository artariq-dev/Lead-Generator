// Dot-art icons — each icon is a 7×5 grid of dots (1 = filled, 0 = empty)
// Rendered as small SVG circles in the card's accent color.

type DotGrid = (0 | 1)[][];

const dotIcons: Record<string, DotGrid> = {
  // Cloud shape
  cloud: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  // Lightning bolt
  fullstack: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ],
  // Paint palette
  frontend: [
    [0, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
  ],
  // Lock
  backend: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
  ],
  // Coin / money bag
  crm: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
  ],
  // Rocket
  pipeline: [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
  ],
  // Arrow trending up
  growth: [
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
  ],
  // Wrench
  backend_build: [
    [0, 1, 1, 0, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
  ],
  // Robot face
  automation: [
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
  ],
  // Grid / dashboard (internal tools)
  internal: [
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1],
  ],
  // Magnifying glass — Audit
  audit: [
    [0, 1, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
  ],
  // Target / crosshair — Diagnose
  diagnose: [
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
  ],
  // Hammer — Build
  build: [
    [0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
  ],
  // Speedometer — Performance
  performance: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ],
  // Smiley — User Experience
  ux: [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0],
  ],
  // Shield — Security & Trust
  security: [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
  ],
};

const DOT = 2.5; // dot radius px
const GAP = 6;   // gap between dot centres
const W = 6 * GAP + DOT * 2; // 7 cols
const H = 4 * GAP + DOT * 2; // 5 rows

export function DotIcon({ id, color, scale = 1 }: { id: string; color: string; scale?: number }) {
  const grid = dotIcons[id] ?? dotIcons.cloud;
  return (
    <svg
      width={W * scale}
      height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden
    >
      {grid.map((row, r) =>
        row.map((filled, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * GAP + DOT}
            cy={r * GAP + DOT}
            r={DOT}
            fill={filled ? color : undefined}
            className={filled ? undefined : "empty-dot"}
          />
        ))
      )}
    </svg>
  );
}
