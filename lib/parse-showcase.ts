/** Strip +, %, $, commas and parse to number. Returns 0 on failure. */
export function parsePercent(s: string): number {
  const n = parseFloat(s.replace(/[+%,]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function parseCurrency(s: string): number {
  const n = parseFloat(s.replace(/[$,+]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

export function parseNumber(s: string): number {
  const n = parseFloat(s.replace(/[,]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/** Format large numbers compactly: 542180 → "$542K", 2150810 → "$2.2M" */
export function formatCompact(n: number, prefix = ""): string {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `${prefix}${(n / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${prefix}${(n / 1_000).toFixed(0)}K`;
  return `${prefix}${n.toFixed(0)}`;
}
