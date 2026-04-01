// lib/types.ts — Algo Alpha TypeScript interfaces

export interface Strategy {
  name: string;
  slug: string;
  description?: string;
  variants: StrategyVariant[];
}

export interface StrategyVariant {
  settings: "Conservative" | "Moderate" | "Aggressive";
  market: string;
  returnYTD: string;
  positionSize: string;
  screenshotPath: string; // path in /public/images/
}

/** New flat strategy card data — replaces the variant-based model on the homepage */
export interface StrategyData {
  name: string;
  slug: string;
  myfxbookId: string;
  market: string;
  strategy: string;
  /** Hardcoded total return label — for Gold Alpha this is "1306%*" */
  totalReturnLabel: string;
  /** If true, fetch gain from the API/ACCOUNTS data instead of using totalReturnLabel */
  totalReturnFromApi: boolean;
  /** Hardcoded 2025 return label (Gold Alpha only) */
  return2025Label?: string;
  returnYTDFromApi: boolean;
  maxDrawdownLabel?: string;
  maxDrawdownFromApi: boolean;
  historicalDrawdown?: string;
  historicalDrawdown2?: string;
  minimum: string;
  tradingActivity: string;
  tradeTypes?: string;
  assetClass: string;
  sparklineUrl: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  imagePath: string;
  type: "founder" | "client";
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imagePath: string;
  socialLinks?: { platform: string; url: string }[];
}

export interface VisionCard {
  iconPath: string;
  title: string;
  description: string;
}

export interface ClientResult {
  name: string;
  returnPercent: string;
  description: string;
  imagePath: string;
}

export interface NavItem {
  label: string;
  type: "route" | "anchor" | "external";
  target: string;
  icon: string; // Lucide icon name
}

export interface VideoResource {
  title: string;
  description: string;
  youtubeId: string;
  channel: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}
