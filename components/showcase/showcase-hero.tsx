"use client";

import SectionEntrance from "@/components/layout/section-entrance";
import StatCounter from "@/components/showcase/stat-counter";

interface AggregateStats {
  totalAUA: number;
  topGain: number;
  avgWinRate: number;
  totalTrades: number;
}

interface ShowcaseHeroProps {
  aggregateStats: AggregateStats;
  lastScraped: string;
  accountCount: number;
}

export default function ShowcaseHero({
  aggregateStats,
  lastScraped,
  accountCount,
}: ShowcaseHeroProps) {
  const formattedDate = new Date(lastScraped).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.75 0.16 65) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Algo Alpha Performance Center
          </p>
          <h1 className="text-h1 font-serif text-text-primary">
            Live Strategy Performance
          </h1>
        </SectionEntrance>

        <SectionEntrance delay={100}>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-sm text-green-500">
                {accountCount} Live Strategies
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-amber"
              >
                <path
                  d="M7 1l1.76 3.57L13 5.24l-3 2.92.71 4.13L7 10.27l-3.71 2.02L4 8.16 1 5.24l4.24-.67L7 1z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-mono text-sm text-amber">
                Verified by MyFXBook
              </span>
            </div>
            <span className="font-mono text-micro text-text-muted">
              Last updated: {formattedDate}
            </span>
          </div>
        </SectionEntrance>

        {/* Aggregate stats bar */}
        <SectionEntrance delay={200}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-b border-border py-8">
            <StatCounter
              value={aggregateStats.totalAUA}
              prefix="$"
              format="compact"
              label="Total AUA"
              delay={0}
            />
            <StatCounter
              value={aggregateStats.topGain}
              suffix="%"
              format="decimal"
              label="Top Strategy"
              delay={100}
              large
            />
            <StatCounter
              value={aggregateStats.avgWinRate}
              suffix="%"
              format="integer"
              label="Avg Win Rate"
              delay={200}
            />
            <StatCounter
              value={aggregateStats.totalTrades}
              format="compact"
              label="Total Trades"
              delay={300}
            />
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
