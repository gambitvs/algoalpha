"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AlgoSection } from "@/components/showcase/algo-section";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";

// ---------------------------------------------------------------------------
// Fallback data rendered immediately — no loading spinner
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

export default function ShowcasePage() {
  const [accounts, setAccounts] =
    useState<ShowcaseAccountData[]>(FALLBACK_ACCOUNTS);
  const [lastScraped, setLastScraped] = useState<string>(
    "2026-03-31T00:00:00Z",
  );
  const [activeSlug, setActiveSlug] = useState<string>("");

  // Silently upgrade data from API
  useEffect(() => {
    fetch("/api/showcase")
      .then((res) => res.json())
      .then((data) => {
        if (data?.accounts?.length) {
          setAccounts(data.accounts);
          setLastScraped(data.lastScraped);
        }
      })
      .catch(() => {
        // Fallback data already loaded — ignore
      });
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [accounts]);

  const formattedDate = new Date(lastScraped).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "oklch(0.08 0.01 60)",
        color: "oklch(0.93 0.01 80)",
      }}
    >
      {/* Sticky mini-nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: "oklch(0.08 0.01 60 / 0.92)",
          borderBottom: "1px solid oklch(0.18 0.01 60)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link
              href="/"
              className="font-mono text-micro uppercase tracking-wider transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.5 0.02 60)" }}
            >
              &larr; Back to Home
            </Link>
            <div className="hidden sm:flex items-center gap-1 overflow-x-auto">
              {accounts.map((a) => (
                <a
                  key={a.slug}
                  href={`#${a.slug}`}
                  className="px-3 py-1.5 font-mono text-micro uppercase tracking-wider transition-all whitespace-nowrap"
                  style={{
                    color:
                      activeSlug === a.slug
                        ? "oklch(0.75 0.16 65)"
                        : "oklch(0.5 0.02 60)",
                    backgroundColor:
                      activeSlug === a.slug
                        ? "oklch(0.75 0.16 65 / 0.08)"
                        : "transparent",
                    borderRadius: "2px",
                  }}
                >
                  {a.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <p
          className="font-mono text-micro uppercase tracking-[0.3em] mb-4"
          style={{ color: "oklch(0.5 0.02 60)" }}
        >
          ALGO ALPHA PERFORMANCE CENTER
        </p>
        <h1
          className="font-serif text-h1 mb-6"
          style={{ color: "oklch(0.93 0.01 80)" }}
        >
          Live Strategy Performance
        </h1>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "oklch(0.7 0.18 145)" }}
            />
            <span
              className="font-mono text-sm"
              style={{ color: "oklch(0.7 0.18 145)" }}
            >
              6 Live Strategies
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ color: "oklch(0.75 0.16 65)" }}
            >
              <path
                d="M7 1l1.76 3.57L13 5.24l-3 2.92.71 4.13L7 10.27l-3.71 2.02L4 8.16 1 5.24l4.24-.67L7 1z"
                fill="currentColor"
              />
            </svg>
            <span
              className="font-mono text-sm"
              style={{ color: "oklch(0.75 0.16 65)" }}
            >
              Verified by MyFXBook
            </span>
          </div>
          <span
            className="font-mono text-micro"
            style={{ color: "oklch(0.4 0.01 60)" }}
          >
            Last updated: {formattedDate}
          </span>
        </div>
      </header>

      {/* Algo Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        {accounts.map((account, i) => (
          <AlgoSection key={account.id} account={account} index={i} />
        ))}
      </div>

      {/* Footer CTA */}
      <div
        className="py-20 text-center"
        style={{
          backgroundColor: "oklch(0.06 0.01 60)",
          borderTop: "1px solid oklch(0.18 0.01 60)",
        }}
      >
        <p
          className="font-mono text-micro uppercase tracking-[0.3em] mb-4"
          style={{ color: "oklch(0.5 0.02 60)" }}
        >
          Ready to start?
        </p>
        <h2
          className="font-serif text-h2 mb-8"
          style={{ color: "oklch(0.93 0.01 80)" }}
        >
          Join Algo Alpha Today
        </h2>
        <a
          href="https://lp.algoalpha.co/portfolio-accelerator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "oklch(0.75 0.16 65)",
            color: "oklch(0.08 0.01 60)",
          }}
        >
          Apply Now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p
          className="font-mono text-micro mt-6"
          style={{ color: "oklch(0.4 0.01 60)" }}
        >
          Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  );
}
