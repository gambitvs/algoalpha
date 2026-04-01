"use client";

import type { StrategyData } from "@/lib/types";

interface ApiAccount {
  gain: string;
  drawdown: string;
}

interface StrategyCardProps {
  strategy: StrategyData;
  apiAccount?: ApiAccount;
}

export default function StrategyCard({
  strategy,
  apiAccount,
}: StrategyCardProps) {
  const s = strategy;

  // Resolve dynamic values
  const totalReturn =
    s.totalReturnFromApi && apiAccount
      ? `${apiAccount.gain}%`
      : s.totalReturnLabel;

  // For Gold Alpha, we show "2025 Return" instead of "Total Return"
  const returnLabel = s.return2025Label ? "2025 Return" : "Total Return";
  const returnValue = s.return2025Label || totalReturn;

  const maxDrawdown =
    s.maxDrawdownFromApi && apiAccount
      ? `${apiAccount.drawdown}%`
      : s.maxDrawdownLabel || (s.historicalDrawdown ?? "—");

  return (
    <div className="rounded-xl border border-border bg-bg-surface p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-h3 font-serif text-text-primary">{s.name}</h3>
      </div>

      {/* Two-column layout: stats left, sparkline right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
        {/* Left: stats table */}
        <div>
          {/* 5-field stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
            <div>
              <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                Market
              </span>
              <p className="mt-1 font-mono text-sm text-text-primary">
                {s.market}
              </p>
            </div>
            <div>
              <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                Strategy
              </span>
              <p className="mt-1 font-mono text-sm text-text-primary">
                {s.strategy}
              </p>
            </div>
            <div>
              <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                {returnLabel}
              </span>
              <p className="mt-1 font-mono text-lg font-medium text-amber">
                {returnValue}
              </p>
            </div>
            <div>
              <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                Max Drawdown
              </span>
              <p className="mt-1 font-mono text-sm text-text-primary">
                {maxDrawdown}
              </p>
            </div>
            <div>
              <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                Minimum
              </span>
              <p className="mt-1 font-mono text-sm text-text-primary">
                {s.minimum}
              </p>
            </div>
          </div>

          {/* Trading activity details */}
          <div className="mt-6 pt-5 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                  Trading Activity
                </span>
                <p className="mt-1 font-mono text-sm text-text-primary">
                  {s.tradingActivity}
                </p>
              </div>
              {s.tradeTypes && (
                <div>
                  <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                    Trade Types
                  </span>
                  <p className="mt-1 font-mono text-sm text-text-primary">
                    {s.tradeTypes}
                  </p>
                </div>
              )}
              <div>
                <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                  Asset Class
                </span>
                <p className="mt-1 font-mono text-sm text-text-primary">
                  {s.assetClass}
                </p>
              </div>
              {s.historicalDrawdown && (
                <div>
                  <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
                    Historical Drawdown
                  </span>
                  <p className="mt-1 font-mono text-sm text-text-primary">
                    {s.historicalDrawdown}
                    {s.historicalDrawdown2 ? ` / ${s.historicalDrawdown2}` : ""}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="https://lp.algoalpha.co/portfolio-accelerator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center border border-amber px-6 text-sm font-medium text-amber transition-colors hover:bg-amber/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: MyFXBook sparkline chart */}
        <div className="flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-[280px] rounded-lg border border-border bg-bg-deep p-3">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-text-muted text-center">
              MyFXBook Verified
            </p>
            <img
              src={s.sparklineUrl}
              alt={`${s.name} performance chart`}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
