"use client";

import { ChevronDown } from "lucide-react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import { getStrategyColor } from "@/components/showcase/strategy-colors";
import { parsePercent } from "@/lib/parse-showcase";

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mb-0.5">
        {label}
      </p>
      <p className="font-mono text-[13px] text-text-primary">{value}</p>
    </div>
  );
}

interface StrategyCardProps {
  account: ShowcaseAccountData;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function StrategyCard({
  account,
  isExpanded,
  onToggle,
}: StrategyCardProps) {
  const colors = getStrategyColor(account.slug);
  const gainNum = parsePercent(account.gain);
  const chartUrl = `https://widgets.myfxbook.com/api/get-custom-widget.png?id=${account.id}&width=600&height=200&bart=0&linet=1&bgColor=0C0A08&gridColor=1A1714&lineColor=FE9716&barColor=FE9716&fontColor=8A8070&title=&titles=11&chartbgc=0C0A08`;

  return (
    <button
      id={`card-${account.slug}`}
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`detail-${account.slug}`}
      className="w-full text-left rounded-lg border border-border bg-bg-surface p-4 sm:p-5 cursor-pointer transition-all duration-200 hover:bg-bg-elevated group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
      style={
        {
          "--strategy-accent": colors.accent,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = colors.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-h3 font-serif text-text-primary leading-tight">
            {account.name}
          </h3>
          <span className="mt-1 inline-block font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 text-text-secondary bg-bg-elevated border border-border">
            {account.strategy}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-text-muted transition-transform duration-200 shrink-0 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Gain — hero number */}
      <p className="font-mono text-2xl font-semibold text-amber mb-4">
        {gainNum > 0 ? "+" : ""}
        {gainNum.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        %
      </p>

      {/* Mini stat grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 mb-4">
        <MiniStat label="Monthly" value={account.monthly} />
        <MiniStat label="Drawdown" value={account.drawdown} />
        <MiniStat label="Win Rate" value={account.winRate} />
        <MiniStat label="PF" value={account.profitFactor} />
        <MiniStat label="Trades" value={account.totalTrades} />
        <MiniStat label="Daily" value={account.daily} />
      </div>

      {/* Equity chart */}
      <div className="border-t border-border pt-3 -mx-4 sm:-mx-5 -mb-4 sm:-mb-5 overflow-hidden rounded-b-lg">
        <img
          src={chartUrl}
          alt={`${account.name} equity curve`}
          className="w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </button>
  );
}
