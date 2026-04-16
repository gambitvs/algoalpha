import { NextResponse } from "next/server";
import data from "@/lib/myfxbook-data.json";

interface AccountData {
  name: string;
  slug: string;
  id: string;
  gain: string;
  drawdown: string;
  url: string;
  sparklineUrl: string;
}

interface ProfileData {
  accounts: AccountData[];
  lastScraped: string;
}

// Source of truth: lib/myfxbook-data.json, refreshed daily by
// .github/workflows/update-myfxbook.yml running scripts/scrape-myfxbook.ts.
// The homepage shows only the 6 live accounts (funded account goes to /showcase).
const LIVE_SLUGS = [
  "intelligent-portfolio",
  "alpha-trader",
  "alpha-x",
  "crypto-alpha",
  "gold-alpha",
  "alpha-core",
];

export async function GET() {
  const accounts: AccountData[] = data.accounts
    .filter((a) => LIVE_SLUGS.includes(a.slug))
    .map((a) => ({
      name: a.name,
      slug: a.slug,
      id: a.id,
      gain: a.gain,
      drawdown: a.drawdown,
      url: a.url,
      sparklineUrl: a.sparklineUrl,
    }));

  const payload: ProfileData = {
    accounts,
    lastScraped: data.lastScraped,
  };

  return NextResponse.json(payload);
}
