// Stroke-based icons (lucide-react) replacing the old dot-matrix icons.
// `size` is pixel dimensions; `strokeWidth` defaults to 1.75 for a refined look.

import {
  Bot,
  CircleDollarSign,
  Cloud,
  Database,
  Gauge,
  Hammer,
  LayoutGrid,
  Palette,
  Rocket,
  Search,
  Shield,
  Smile,
  Target,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  fullstack: Zap,
  frontend: Palette,
  backend: Database,
  crm: CircleDollarSign,
  pipeline: Rocket,
  growth: TrendingUp,
  automation: Bot,
  internal: LayoutGrid,
  audit: Search,
  diagnose: Target,
  build: Hammer,
  performance: Gauge,
  ux: Smile,
  security: Shield,
  backend_build: Wrench,
};

export function Icon({
  id,
  size = 20,
  strokeWidth = 1.75,
}: {
  id: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[id] ?? Cloud;
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className="shrink-0"
      aria-hidden
    />
  );
}
