"use client";

import { useEffect, useMemo, useState } from "react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import { FALLBACK_ACCOUNTS } from "@/lib/fallback-showcase-data";
import { parseCurrency, parseNumber, parsePercent } from "@/lib/parse-showcase";
import ShowcaseHero from "@/components/showcase/showcase-hero";
import FeaturedStrategy from "@/components/showcase/featured-strategy";
import StrategyGrid from "@/components/showcase/strategy-grid";

export default function ShowcaseClient() {
  const [accounts, setAccounts] =
    useState<ShowcaseAccountData[]>(FALLBACK_ACCOUNTS);
  const [lastScraped, setLastScraped] = useState("2026-03-31T00:00:00Z");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

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
        // Fallback data already loaded
      });
  }, []);

  // Derive top performer + remaining + aggregate stats
  const { topPerformer, remaining, aggregateStats } = useMemo(() => {
    const sorted = [...accounts].sort(
      (a, b) => parsePercent(b.gain) - parsePercent(a.gain),
    );
    const top = sorted[0];
    const rest = sorted.slice(1);

    const totalAUM = accounts.reduce(
      (sum, a) => sum + parseCurrency(a.equity),
      0,
    );
    const topGain = parsePercent(top.gain);
    const avgWinRate =
      accounts.reduce((sum, a) => sum + parsePercent(a.winRate), 0) /
      accounts.length;
    const totalTrades = accounts.reduce(
      (sum, a) => sum + parseNumber(a.totalTrades),
      0,
    );

    return {
      topPerformer: top,
      remaining: rest,
      aggregateStats: { totalAUM, topGain, avgWinRate, totalTrades },
    };
  }, [accounts]);

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary">
      <ShowcaseHero
        aggregateStats={aggregateStats}
        lastScraped={lastScraped}
        accountCount={accounts.length}
      />

      <FeaturedStrategy account={topPerformer} />

      <StrategyGrid
        accounts={remaining}
        expandedSlug={expandedSlug}
        onToggle={setExpandedSlug}
      />

      {/* Footer CTA */}
      <div className="py-20 text-center border-t border-border bg-bg-deep">
        <p className="font-mono text-micro uppercase tracking-[0.3em] mb-4 text-text-muted">
          Ready to start?
        </p>
        <h2 className="text-h2 font-serif text-text-primary mb-8">
          Join Algo Alpha Today
        </h2>
        <a
          href="https://lp.algoalpha.co/portfolio-accelerator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-wider bg-amber text-bg-deep transition-colors hover:bg-amber-glow"
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
        <p className="font-mono text-micro mt-6 text-text-muted">
          Past performance is not indicative of future results.
        </p>
      </div>
    </main>
  );
}
