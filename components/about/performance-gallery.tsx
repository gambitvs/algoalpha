"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";

interface AccountData {
  name: string;
  slug: string;
  id: string;
  gain: string;
  drawdown: string;
  url: string;
  sparklineUrl: string;
}

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

export default function PerformanceGallery() {
  const [accounts, setAccounts] = useState<AccountData[]>(ACCOUNTS);
  const [lastUpdated, setLastUpdated] = useState("Mar 31, 2026");

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
      .catch(() => {});
  }, []);

  return (
    <section className="px-6 lg:px-8 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Track Record
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
            Verified Performance Data
          </h2>
          <p className="mt-5 max-w-xl text-body text-text-secondary leading-relaxed">
            All strategies are independently verified through MyFXBook. These
            are real results from live accounts — not backtests or simulations.
          </p>
        </div>

        {/* Disclaimer banner */}
        <div className="mb-10 flex gap-4 border-t border-b border-border py-5">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
          <p className="text-small text-text-muted leading-relaxed">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary">
              Performance Disclaimer
            </span>{" "}
            — Past performance is not a guarantee or reliable indicator of
            future results. We are not financial advisors, asset managers, or
            investment advisors. Algo Alpha is a software provider that provides
            tools to traders. The exceptional growth numbers achieved by some of
            our users depend on various factors, and we do not guarantee any
            specific amount of growth or success of any software application.
          </p>
        </div>

        {/* Account cards */}
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

        {/* View all link */}
        <div className="mt-6">
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
      </div>
    </section>
  );
}
