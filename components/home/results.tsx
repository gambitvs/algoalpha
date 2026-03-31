"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

interface AccountData {
  name: string;
  slug: string;
  id: string;
  gain: string;
  drawdown: string;
  url: string;
  sparklineUrl: string;
}

// Real data from myfxbook.com/members/AlgoAlpha (scraped March 31 2026)
const ACCOUNTS: AccountData[] = [
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
];

export default function Results() {
  // Start with real data immediately — no spinner
  const [accounts, setAccounts] = useState<AccountData[]>(ACCOUNTS);
  const [lastUpdated, setLastUpdated] = useState("Mar 31, 2026");

  // Try to fetch fresh data in the background — silently upgrade if it works
  useEffect(() => {
    fetch("/api/myfxbook")
      .then((r) => r.json())
      .then((data) => {
        if (data?.accounts?.length > 0) {
          setAccounts(data.accounts);
          setLastUpdated(
            new Date(data.lastScraped).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          );
        }
      })
      .catch(() => {
        // Fallback data already showing — no action needed
      });
  }, []);

  const bestAccount = accounts.reduce((best, acc) => {
    const g = parseFloat(acc.gain) || 0;
    const bg = parseFloat(best.gain) || 0;
    return g > bg ? acc : best;
  }, accounts[0]);

  const totalAccounts = accounts.length;
  const maxGain = `+${bestAccount.gain}%`;
  const avgDrawdown =
    (
      accounts.reduce((sum, a) => sum + (parseFloat(a.drawdown) || 0), 0) /
      accounts.length
    ).toFixed(1) + "%";

  return (
    <section id="results" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — live account cards */}
          <SectionEntrance className="lg:col-span-5">
            <div className="rounded-lg border border-border bg-bg-surface p-4 sm:p-5">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  Verified Accounts
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                    Live
                  </span>
                </div>
              </div>

              {/* Account rows */}
              <div className="space-y-2">
                {accounts.map((account) => (
                  <a
                    key={account.id}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-sm border border-border bg-bg-deep p-3 transition-colors hover:border-amber/30 group"
                  >
                    {/* Sparkline */}
                    <img
                      src={account.sparklineUrl}
                      alt={`${account.name} performance`}
                      className="h-8 w-20 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] text-text-primary truncate">
                        {account.name}
                      </div>
                      <div className="font-mono text-[9px] text-text-muted uppercase tracking-wider">
                        DD: {account.drawdown}%
                      </div>
                    </div>
                    {/* Gain */}
                    <div className="font-mono text-sm font-medium text-amber shrink-0">
                      +{account.gain}%
                    </div>
                  </a>
                ))}
              </div>

              {/* Last updated */}
              <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-wider text-text-muted">
                Data via MyFXBook &middot; Updated {lastUpdated}
              </p>
            </div>
          </SectionEntrance>

          {/* Right — content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionEntrance delay={100}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Results & Transparency
              </p>
              <h2 className="text-h2 font-serif text-text-primary max-w-2xl">
                Independently Validated Performance
              </h2>
            </SectionEntrance>

            <SectionEntrance delay={200}>
              <p className="mt-5 text-body text-text-secondary leading-relaxed max-w-lg">
                All of Algo Alpha&apos;s algorithmic trading strategies are
                independently validated and viewable on MyFXBook. No black
                boxes, no hidden results — complete transparency into every
                trade, every return, every drawdown.
              </p>
            </SectionEntrance>

            {/* Summary stats */}
            <SectionEntrance delay={300}>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-border">
                {[
                  { label: "Top Strategy", value: maxGain },
                  { label: "Avg Drawdown", value: avgDrawdown },
                  { label: "Live Strategies", value: String(totalAccounts) },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono text-lg font-medium text-text-primary">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </SectionEntrance>

            <SectionEntrance delay={400}>
              <div className="mt-8">
                <a
                  href="https://www.myfxbook.com/members/AlgoAlpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 border border-border px-5 py-3 text-sm font-medium text-text-primary transition-all hover:border-amber hover:text-amber group"
                >
                  <span>View All on MyFXBook</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </SectionEntrance>
          </div>
        </div>
      </div>
    </section>
  );
}
