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
