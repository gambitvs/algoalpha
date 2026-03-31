// lib/fonts.ts — Next.js font configuration

import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const geistSans = GeistSans;
// GeistSans already exposes `variable` as "--font-geist-sans".
// Re-export under the project alias for layout.tsx:
export const fontSansVariable = geistSans.variable; // "--font-geist-sans"

export const geistMono = GeistMono;
export const fontMonoVariable = geistMono.variable; // "--font-geist-mono"

/**
 * Apply these class names to <html> or <body> in layout.tsx:
 *
 * ```tsx
 * import { instrumentSerif, geistSans, geistMono } from "@/lib/fonts";
 *
 * <html className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable}`}>
 *   <body className={geistSans.className}>
 * ```
 *
 * Then reference via CSS variables:
 *   --font-serif        (Instrument Serif — display/headings)
 *   --font-geist-sans   (Geist Sans — body/UI)
 *   --font-geist-mono   (Geist Mono — data/metrics)
 */
