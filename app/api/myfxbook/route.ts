import { NextResponse } from "next/server";

// Scrape the public AlgoAlpha profile — no auth needed
const PROFILE_URL = "https://www.myfxbook.com/members/AlgoAlpha";

// Account page URLs for detailed stats
const ACCOUNTS: { name: string; slug: string; id: string; url: string }[] = [
  {
    name: "Intelligent Portfolio",
    slug: "intelligent-portfolio",
    id: "11755904",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-intelligent-portfolio/11755904",
  },
  {
    name: "Alpha Trader",
    slug: "alpha-trader",
    id: "11756098",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-trader/11756098",
  },
  {
    name: "Alpha X",
    slug: "alpha-x",
    id: "11758658",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-x/11758658",
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    id: "11758739",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-crypto-alpha/11758739",
  },
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    id: "11972920",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-gold-alpha/11972920",
  },
  {
    name: "Alpha Core",
    slug: "alpha-core",
    id: "11980516",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-core/11980516",
  },
];

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

// Cache for 30 minutes
let cache: { data: ProfileData | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};
const CACHE_TTL = 30 * 60 * 1000;

async function scrapeProfile(): Promise<ProfileData | null> {
  try {
    const res = await fetch(PROFILE_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Parse gain and drawdown from the profile page HTML
    // The page lists accounts with gain% and drawdown% in table rows
    const accounts: AccountData[] = [];

    for (const account of ACCOUNTS) {
      // Find the gain percentage near this account's link
      // Pattern: the gain and drawdown appear after each account link
      const accountIdx = html.indexOf(account.id);
      if (accountIdx === -1) continue;

      // Look for percentage values near this account's section
      const section = html.substring(
        Math.max(0, accountIdx - 500),
        accountIdx + 1000,
      );

      // Extract gain — look for +XX.XX% pattern
      const gainMatch = section.match(/[+]?([\d,]+\.?\d*)\s*%/);
      // Extract drawdown — usually the second percentage
      const percentages = [...section.matchAll(/([\d,]+\.?\d*)\s*%/g)];

      const gain = gainMatch ? gainMatch[1].replace(",", "") : null;
      const drawdown =
        percentages.length >= 2 ? percentages[1][1].replace(",", "") : null;

      accounts.push({
        name: account.name,
        slug: account.slug,
        id: account.id,
        gain: gain || "—",
        drawdown: drawdown || "—",
        url: account.url,
        sparklineUrl: `https://widgets.myfxbook.com/system-spark.png?id=${account.id}`,
      });
    }

    return {
      accounts,
      lastScraped: new Date().toISOString(),
    };
  } catch (err) {
    console.error("MyFXBook scrape error:", err);
    return null;
  }
}

// Hardcoded from latest scrape as fallback (March 31, 2026)
const FALLBACK: ProfileData = {
  accounts: [
    {
      name: "Intelligent Portfolio",
      slug: "intelligent-portfolio",
      id: "11755904",
      gain: "191.20",
      drawdown: "15.32",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-intelligent-portfolio/11755904",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11755904",
    },
    {
      name: "Alpha Trader",
      slug: "alpha-trader",
      id: "11756098",
      gain: "406.18",
      drawdown: "19.55",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-trader/11756098",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11756098",
    },
    {
      name: "Alpha X",
      slug: "alpha-x",
      id: "11758658",
      gain: "88.09",
      drawdown: "6.24",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-x/11758658",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11758658",
    },
    {
      name: "Crypto Alpha",
      slug: "crypto-alpha",
      id: "11758739",
      gain: "710.53",
      drawdown: "19.02",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-crypto-alpha/11758739",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11758739",
    },
    {
      name: "Gold Alpha",
      slug: "gold-alpha",
      id: "11972920",
      gain: "4.40",
      drawdown: "2.58",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-gold-alpha/11972920",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11972920",
    },
    {
      name: "Alpha Core",
      slug: "alpha-core",
      id: "11980516",
      gain: "48.19",
      drawdown: "6.40",
      url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-core/11980516",
      sparklineUrl: "https://widgets.myfxbook.com/system-spark.png?id=11980516",
    },
  ],
  lastScraped: "2026-03-31T00:00:00Z",
};

export async function GET() {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  const data = await scrapeProfile();

  if (data && data.accounts.length > 0) {
    cache = { data, timestamp: now };
    return NextResponse.json(data);
  }

  // Fallback to hardcoded data from last known scrape
  return NextResponse.json(FALLBACK);
}
