import { NextResponse } from "next/server";
import { FALLBACK_ACCOUNTS } from "@/lib/fallback-showcase-data";

// ---------------------------------------------------------------------------
// Showcase API — scrapes all 7 MyFXBook account pages for detailed stats
// ---------------------------------------------------------------------------

const ACCOUNTS = [
  {
    name: "Intelligent Portfolio",
    slug: "intelligent-portfolio",
    id: "11755904",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-intelligent-portfolio/11755904",
    strategy: "Multi-Strategy Portfolio",
  },
  {
    name: "Alpha Trader",
    slug: "alpha-trader",
    id: "11756098",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-trader/11756098",
    strategy: "Trend Following",
  },
  {
    name: "Alpha X",
    slug: "alpha-x",
    id: "11758658",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-x/11758658",
    strategy: "Portfolio; 21 pairs",
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    id: "11758739",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-crypto-alpha/11758739",
    strategy: "Dual Asset Long & Short",
  },
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    id: "11972920",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-gold-alpha/11972920",
    strategy: "Long HFT",
  },
  {
    name: "Alpha Core",
    slug: "alpha-core",
    id: "11980516",
    url: "https://www.myfxbook.com/members/AlgoAlpha/algo-alpha-alpha-core/11980516",
    strategy: "Portfolio; 14 pairs",
  },
  {
    name: "Alpha Y",
    slug: "alpha-y",
    id: "11993743",
    url: "https://www.myfxbook.com/portfolio/algo-alpha-alpha-y-funded/11993743",
    strategy: "Conservative FX",
  },
];

export interface ShowcaseAccountData {
  name: string;
  slug: string;
  id: string;
  strategy: string;
  gain: string;
  absGain: string;
  daily: string;
  monthly: string;
  drawdown: string;
  balance: string;
  equity: string;
  deposits: string;
  withdrawals: string;
  profit: string;
  interest: string;
  profitFactor: string;
  pips: string;
  averageWin: string;
  averageLoss: string;
  totalTrades: string;
  winRate: string;
  longWonPercent: string;
  shortWonPercent: string;
  bestTrade: string;
  worstTrade: string;
  avgTradeDuration: string;
  commission: string;
  leverage: string;
  platform: string;
  broker: string;
  monthlyReturns: { month: string; return: string }[];
}

export interface ShowcaseData {
  accounts: ShowcaseAccountData[];
  lastScraped: string;
}

// In-memory cache — 30 min TTL
let cache: { data: ShowcaseData | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};
const CACHE_TTL = 30 * 60 * 1000;

function extractText(html: string, pattern: RegExp): string {
  const match = html.match(pattern);
  return match ? match[1].trim() : "—";
}

async function scrapeAccount(
  account: (typeof ACCOUNTS)[number],
): Promise<ShowcaseAccountData | null> {
  try {
    const res = await fetch(account.url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Extract stats from the account page HTML
    // MyFXBook pages have stats in table rows with labels and values
    const getStatValue = (label: string): string => {
      const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // Try common patterns on MyFXBook pages
      const patterns = [
        new RegExp(`${escapedLabel}[^<]*<[^>]*>[^<]*<[^>]*>([^<]+)`, "i"),
        new RegExp(`${escapedLabel}.*?<(?:td|span|div)[^>]*>\\s*([^<]+)`, "is"),
      ];
      for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match && match[1].trim() !== "") return match[1].trim();
      }
      return "—";
    };

    const gain = extractText(html, /Gain[^<]*<[^>]*>[^<]*<[^>]*>\s*([^<]+)/i);
    const drawdown = extractText(
      html,
      /Drawdown[^<]*<[^>]*>[^<]*<[^>]*>\s*([^<]+)/i,
    );

    // Extract monthly returns from the monthly table if present
    const monthlyReturns: { month: string; return: string }[] = [];
    const monthlySection = html.match(
      /monthly.*?<table[^>]*>([\s\S]*?)<\/table>/i,
    );
    if (monthlySection) {
      const rows = monthlySection[1].matchAll(
        /<tr[^>]*>[\s\S]*?<td[^>]*>([^<]+)<\/td>[\s\S]*?<td[^>]*>([^<]+)<\/td>/gi,
      );
      for (const row of rows) {
        const month = row[1].trim();
        const ret = row[2].trim();
        if (month && ret && ret.includes("%")) {
          monthlyReturns.push({ month, return: ret });
        }
      }
    }

    return {
      name: account.name,
      slug: account.slug,
      id: account.id,
      strategy: account.strategy,
      gain: gain || "—",
      absGain: getStatValue("Abs\\. Gain"),
      daily: getStatValue("Daily"),
      monthly: getStatValue("Monthly"),
      drawdown: drawdown || "—",
      balance: getStatValue("Balance"),
      equity: getStatValue("Equity"),
      deposits: getStatValue("Deposits"),
      withdrawals: getStatValue("Withdrawals"),
      profit: getStatValue("Profit"),
      interest: getStatValue("Interest"),
      profitFactor: getStatValue("Profit Factor"),
      pips: getStatValue("Pips"),
      averageWin: getStatValue("Average Win"),
      averageLoss: getStatValue("Average Loss"),
      totalTrades: getStatValue("Trades"),
      winRate: getStatValue("Won"),
      longWonPercent: getStatValue("Longs Won"),
      shortWonPercent: getStatValue("Shorts Won"),
      bestTrade: getStatValue("Best Trade"),
      worstTrade: getStatValue("Worst Trade"),
      avgTradeDuration: getStatValue("Avg\\. Trade Length"),
      commission: getStatValue("Commission"),
      leverage: getStatValue("Leverage"),
      platform: getStatValue("Platform"),
      broker: getStatValue("Broker"),
      monthlyReturns,
    };
  } catch (err) {
    console.error(`Showcase scrape error for ${account.name}:`, err);
    return null;
  }
}

const FALLBACK: ShowcaseData = {
  accounts: FALLBACK_ACCOUNTS,
  lastScraped: "2026-03-31T00:00:00Z",
};

async function scrapeAllAccounts(): Promise<ShowcaseData | null> {
  try {
    const results = await Promise.allSettled(
      ACCOUNTS.map((a) => scrapeAccount(a)),
    );

    const accounts: ShowcaseAccountData[] = [];
    let anySuccess = false;

    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (
        result.status === "fulfilled" &&
        result.value &&
        result.value.gain !== "—" &&
        result.value.gain !== ""
      ) {
        accounts.push(result.value);
        anySuccess = true;
      } else {
        // Use fallback for this account
        accounts.push(FALLBACK_ACCOUNTS[i]);
      }
    }

    if (!anySuccess) return null;

    return {
      accounts,
      lastScraped: new Date().toISOString(),
    };
  } catch (err) {
    console.error("Showcase scrape error:", err);
    return null;
  }
}

export async function GET() {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < CACHE_TTL) {
    return NextResponse.json(cache.data);
  }

  const data = await scrapeAllAccounts();

  if (data) {
    cache = { data, timestamp: now };
    return NextResponse.json(data);
  }

  return NextResponse.json(FALLBACK);
}
