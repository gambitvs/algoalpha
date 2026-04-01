export interface StrategyColor {
  accent: string;
  accentDim: string;
}

export const STRATEGY_COLORS: Record<string, StrategyColor> = {
  "intelligent-portfolio": {
    accent: "oklch(0.70 0.14 200)",
    accentDim: "oklch(0.50 0.10 200)",
  },
  "alpha-trader": {
    accent: "oklch(0.72 0.15 145)",
    accentDim: "oklch(0.52 0.11 145)",
  },
  "alpha-x": {
    accent: "oklch(0.70 0.14 280)",
    accentDim: "oklch(0.50 0.10 280)",
  },
  "crypto-alpha": {
    accent: "oklch(0.72 0.12 35)",
    accentDim: "oklch(0.52 0.08 35)",
  },
  "gold-alpha": {
    accent: "oklch(0.78 0.16 55)",
    accentDim: "oklch(0.58 0.12 55)",
  },
  "alpha-core": {
    accent: "oklch(0.70 0.13 170)",
    accentDim: "oklch(0.50 0.09 170)",
  },
  "alpha-yen": {
    accent: "oklch(0.72 0.14 90)",
    accentDim: "oklch(0.52 0.10 90)",
  },
  "alpha-y": {
    accent: "oklch(0.68 0.12 240)",
    accentDim: "oklch(0.48 0.08 240)",
  },
};

export function getStrategyColor(slug: string): StrategyColor {
  return (
    STRATEGY_COLORS[slug] ?? {
      accent: "oklch(0.75 0.16 65)",
      accentDim: "oklch(0.55 0.12 65)",
    }
  );
}
