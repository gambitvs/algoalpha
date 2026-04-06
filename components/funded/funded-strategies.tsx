"use client";

import { useState } from "react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import SectionEntrance from "@/components/layout/section-entrance";
import { getStrategyColor } from "@/components/showcase/strategy-colors";
import { parsePercent } from "@/lib/parse-showcase";
import { ExternalLink } from "lucide-react";

interface FundedStrategiesProps {
  accounts: ShowcaseAccountData[];
}

function formatGain(raw: string): string {
  const value = parsePercent(raw);
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `+${formatted}%`;
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1">
        {label}
      </p>
      <p className="font-mono text-sm text-text-primary">{value}</p>
    </div>
  );
}

function FeaturedCard({ account }: { account: ShowcaseAccountData }) {
  const colors = getStrategyColor(account.slug);
  const [borderColor, setBorderColor] = useState(colors.accent);

  return (
    <div
      className="rounded-lg border border-border bg-bg-surface p-6 lg:p-8 transition-colors duration-200"
      style={{ borderTopColor: borderColor, borderTopWidth: "2px" }}
      onMouseEnter={() => setBorderColor(colors.accent)}
      onMouseLeave={() => setBorderColor(colors.accent)}
    >
      {/* Badges */}
      <div className="flex items-center gap-3">
        <span className="bg-amber/8 border border-amber/15 text-amber font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded">
          Featured
        </span>
        <span className="bg-bg-elevated border border-border text-text-secondary font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded">
          {account.strategy}
        </span>
      </div>

      {/* Name + Gain */}
      <h3 className="text-h3 font-serif text-text-primary mt-4">
        {account.name}
      </h3>
      <p className="font-mono text-2xl font-semibold text-amber mt-2">
        {formatGain(account.gain)}
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-6">
        <StatItem label="Monthly" value={account.monthly} />
        <StatItem label="Max Drawdown" value={account.drawdown} />
        <StatItem label="Win Rate" value={account.winRate} />
        <StatItem label="Profit Factor" value={account.profitFactor} />
        <StatItem label="Total Trades" value={account.totalTrades} />
        <StatItem label="Daily" value={account.daily} />
      </div>

      {/* Links */}
      <div className="mt-6 flex items-center gap-6">
        <a
          href="https://www.myfxbook.com/members/AlgoAlpha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          View on MyFXBook
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <span className="font-mono text-xs text-amber">CPA Verified ✓</span>
      </div>
    </div>
  );
}

function SecondaryCard({ account }: { account: ShowcaseAccountData }) {
  const colors = getStrategyColor(account.slug);
  const [borderColor, setBorderColor] = useState(colors.accent);

  return (
    <div
      className="rounded-lg border border-border bg-bg-surface p-5 transition-colors duration-200"
      style={{ borderTopColor: borderColor, borderTopWidth: "2px" }}
      onMouseEnter={() => setBorderColor(colors.accent)}
      onMouseLeave={() => setBorderColor(colors.accent)}
    >
      {/* Badges */}
      <div className="flex items-center gap-3">
        <span className="bg-bg-elevated border border-border text-text-secondary font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 rounded">
          {account.strategy}
        </span>
      </div>

      {/* Name + Gain */}
      <h3 className="text-xl font-serif text-text-primary mt-3">
        {account.name}
      </h3>
      <p className="font-mono text-lg font-semibold text-amber mt-1">
        {formatGain(account.gain)}
      </p>

      {/* Stats Grid — compact */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 mt-4">
        <StatItem label="Monthly" value={account.monthly} />
        <StatItem label="Max Drawdown" value={account.drawdown} />
        <StatItem label="Win Rate" value={account.winRate} />
      </div>

      {/* Links */}
      <div className="mt-5 flex items-center gap-6">
        <a
          href="https://www.myfxbook.com/members/AlgoAlpha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
        >
          View on MyFXBook
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <span className="font-mono text-xs text-amber">CPA Verified ✓</span>
      </div>
    </div>
  );
}

export default function FundedStrategies({ accounts }: FundedStrategiesProps) {
  const featured = accounts.find((a) => a.slug === "alpha-y") ?? accounts[0];

  const secondary = accounts.filter((a) => a.slug !== featured.slug);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Compatible Strategies
          </p>
          <h2 className="text-h2 font-serif text-text-primary mt-3">
            Three Qualified Strategies
          </h2>
          <p className="text-body text-text-secondary max-w-xl mt-4">
            These strategies have not experienced a 10% drawdown and are
            approved for funded trading accounts.
          </p>
        </SectionEntrance>

        {/* Featured Card */}
        <SectionEntrance delay={0} className="mt-10">
          <FeaturedCard account={featured} />
        </SectionEntrance>

        {/* Secondary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-6">
          {secondary.slice(0, 2).map((account, i) => (
            <SectionEntrance key={account.slug} delay={150 * (i + 1)}>
              <SecondaryCard account={account} />
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
