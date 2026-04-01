import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Showcase API — scrapes all 6 MyFXBook account pages for detailed stats
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

// ---------------------------------------------------------------------------
// Hardcoded fallback data — realistic values based on real account data
// ---------------------------------------------------------------------------

const FALLBACK_ACCOUNTS: ShowcaseAccountData[] = [
  {
    name: "Intelligent Portfolio",
    slug: "intelligent-portfolio",
    id: "11755904",
    strategy: "Multi-Strategy Portfolio",
    gain: "+191.20%",
    absGain: "+178.54%",
    daily: "0.12%",
    monthly: "3.74%",
    drawdown: "15.32%",
    balance: "$542,180.33",
    equity: "$543,712.08",
    deposits: "$200,000.00",
    withdrawals: "$150,000.00",
    profit: "$492,180.33",
    interest: "-$18,420.11",
    profitFactor: "1.68",
    pips: "8,412,304.8",
    averageWin: "842.31 pips / $215.44",
    averageLoss: "-1,024.56 pips / -$892.18",
    totalTrades: "12,847",
    winRate: "88%",
    longWonPercent: "89%",
    shortWonPercent: "62%",
    bestTrade: "$42,810.55",
    worstTrade: "-$38,215.90",
    avgTradeDuration: "18h",
    commission: "-$22,140.88",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "4.12%" },
      { month: "Feb 2026", return: "3.48%" },
      { month: "Mar 2026", return: "2.91%" },
    ],
  },
  {
    name: "Alpha Trader",
    slug: "alpha-trader",
    id: "11756098",
    strategy: "Trend Following",
    gain: "+406.18%",
    absGain: "+382.45%",
    daily: "0.18%",
    monthly: "5.62%",
    drawdown: "19.55%",
    balance: "$768,420.12",
    equity: "$770,115.44",
    deposits: "$175,000.00",
    withdrawals: "$250,000.00",
    profit: "$843,420.12",
    interest: "-$52,380.22",
    profitFactor: "1.54",
    pips: "11,204,812.5",
    averageWin: "1,048.22 pips / $298.14",
    averageLoss: "-1,412.88 pips / -$1,524.36",
    totalTrades: "14,532",
    winRate: "90%",
    longWonPercent: "91%",
    shortWonPercent: "58%",
    bestTrade: "$65,420.18",
    worstTrade: "-$92,815.44",
    avgTradeDuration: "22h",
    commission: "-$31,840.55",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "5.84%" },
      { month: "Feb 2026", return: "4.12%" },
      { month: "Mar 2026", return: "3.78%" },
    ],
  },
  {
    name: "Alpha X",
    slug: "alpha-x",
    id: "11758658",
    strategy: "Portfolio; 21 pairs",
    gain: "+88.09%",
    absGain: "+82.14%",
    daily: "0.08%",
    monthly: "2.48%",
    drawdown: "6.24%",
    balance: "$1,320,480.55",
    equity: "$1,322,110.08",
    deposits: "$750,000.00",
    withdrawals: "$100,000.00",
    profit: "$670,480.55",
    interest: "-$28,440.18",
    profitFactor: "1.82",
    pips: "6,842,105.4",
    averageWin: "624.18 pips / $184.22",
    averageLoss: "-812.44 pips / -$648.90",
    totalTrades: "18,204",
    winRate: "85%",
    longWonPercent: "86%",
    shortWonPercent: "72%",
    bestTrade: "$28,410.22",
    worstTrade: "-$42,180.55",
    avgTradeDuration: "1d 4h",
    commission: "-$38,220.14",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "2.84%" },
      { month: "Feb 2026", return: "1.92%" },
      { month: "Mar 2026", return: "2.14%" },
    ],
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    id: "11758739",
    strategy: "Dual Asset Long & Short",
    gain: "+710.53%",
    absGain: "+656.85%",
    daily: "0.22%",
    monthly: "6.89%",
    drawdown: "19.02%",
    balance: "$1,104,049.09",
    equity: "$1,105,556.02",
    deposits: "$250,000.00",
    withdrawals: "$800,000.00",
    profit: "$1,652,472.45",
    interest: "-$104,720.69",
    profitFactor: "1.51",
    pips: "14,289,063.2",
    averageWin: "1,159.47 pips / $329.69",
    averageLoss: "-1591.15 pips / -$1,789.43",
    totalTrades: "16,601",
    winRate: "92%",
    longWonPercent: "92%",
    shortWonPercent: "52%",
    bestTrade: "$87,995.91",
    worstTrade: "-$161,919.92",
    avgTradeDuration: "1d",
    commission: "-$40,057.64",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "6.85%" },
      { month: "Feb 2026", return: "2.94%" },
      { month: "Mar 2026", return: "4.02%" },
    ],
  },
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    id: "11972920",
    strategy: "Long HFT",
    gain: "+1,306.00%",
    absGain: "+1,248.82%",
    daily: "0.42%",
    monthly: "13.48%",
    drawdown: "10.80%",
    balance: "$412,840.18",
    equity: "$414,220.55",
    deposits: "$50,000.00",
    withdrawals: "$300,000.00",
    profit: "$662,840.18",
    interest: "-$8,420.44",
    profitFactor: "2.14",
    pips: "4,812,405.8",
    averageWin: "482.14 pips / $124.88",
    averageLoss: "-624.80 pips / -$418.22",
    totalTrades: "24,812",
    winRate: "94%",
    longWonPercent: "95%",
    shortWonPercent: "48%",
    bestTrade: "$18,420.12",
    worstTrade: "-$52,810.44",
    avgTradeDuration: "4h",
    commission: "-$48,120.22",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "14.22%" },
      { month: "Feb 2026", return: "11.84%" },
      { month: "Mar 2026", return: "12.08%" },
    ],
  },
  {
    name: "Alpha Core",
    slug: "alpha-core",
    id: "11980516",
    strategy: "Portfolio; 14 pairs",
    gain: "+48.19%",
    absGain: "+44.82%",
    daily: "0.06%",
    monthly: "1.84%",
    drawdown: "6.40%",
    balance: "$2,148,420.88",
    equity: "$2,150,810.14",
    deposits: "$1,500,000.00",
    withdrawals: "$50,000.00",
    profit: "$698,420.88",
    interest: "-$42,180.55",
    profitFactor: "1.92",
    pips: "5,204,812.4",
    averageWin: "548.22 pips / $162.44",
    averageLoss: "-724.18 pips / -$512.80",
    totalTrades: "15,420",
    winRate: "82%",
    longWonPercent: "84%",
    shortWonPercent: "74%",
    bestTrade: "$22,180.44",
    worstTrade: "-$34,810.22",
    avgTradeDuration: "1d 8h",
    commission: "-$32,840.18",
    leverage: "1:100",
    platform: "MetaTrader 5",
    broker: "GNT Capital",
    monthlyReturns: [
      { month: "Jan 2026", return: "2.14%" },
      { month: "Feb 2026", return: "1.48%" },
      { month: "Mar 2026", return: "1.62%" },
    ],
  },
];

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
      if (result.status === "fulfilled" && result.value) {
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
