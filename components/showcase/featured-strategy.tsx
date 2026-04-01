"use client";

import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import SectionEntrance from "@/components/layout/section-entrance";
import EquityCurve from "@/components/showcase/equity-curve";
import { getStrategyColor } from "@/components/showcase/strategy-colors";
import { parsePercent } from "@/lib/parse-showcase";

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1">
        {label}
      </p>
      <p
        className={`font-mono text-sm ${accent ? "text-amber" : "text-text-primary"}`}
      >
        {value}
      </p>
    </div>
  );
}

export default function FeaturedStrategy({
  account,
}: {
  account: ShowcaseAccountData;
}) {
  const colors = getStrategyColor(account.slug);
  const gainNum = parsePercent(account.gain);

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
      <SectionEntrance delay={100}>
        <div
          className="rounded-lg border border-border bg-bg-surface p-6 lg:p-8"
          style={{ borderTopColor: colors.accent, borderTopWidth: "2px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-8 lg:gap-12">
            {/* Left — stats */}
            <div className="flex flex-col">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-amber bg-amber/8 border border-amber/15">
                  Top Performer
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 text-text-secondary bg-bg-elevated border border-border">
                  {account.strategy}
                </span>
              </div>

              {/* Name */}
              <h2 className="text-h2 font-serif text-text-primary mb-2">
                {account.name}
              </h2>

              {/* Hero gain number */}
              <p className="text-display font-serif text-amber mb-8">
                {gainNum > 0 ? "+" : ""}
                {gainNum.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                %
              </p>

              {/* Compact stat grid */}
              <div className="grid grid-cols-3 gap-x-6 gap-y-4 mb-8">
                <Stat label="Monthly" value={account.monthly} />
                <Stat label="Max Drawdown" value={account.drawdown} />
                <Stat
                  label="Profit Factor"
                  value={account.profitFactor}
                  accent
                />
                <Stat label="Win Rate" value={account.winRate} accent />
                <Stat label="Total Trades" value={account.totalTrades} />
                <Stat label="Daily" value={account.daily} />
              </div>

              {/* CTA */}
              <a
                href="https://lp.algoalpha.co/portfolio-accelerator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-amber transition-colors hover:text-amber-glow group"
              >
                Start Trading with {account.name}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Right — equity curve */}
            <div className="flex flex-col justify-center">
              <EquityCurve
                accountId={account.id}
                accountName={account.name}
                large
              />
            </div>
          </div>
        </div>
      </SectionEntrance>
    </section>
  );
}
