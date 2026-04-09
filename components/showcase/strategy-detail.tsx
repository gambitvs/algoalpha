"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import EquityCurve from "@/components/showcase/equity-curve";
import MonthlyHeatmap from "@/components/showcase/monthly-heatmap";
import { getStrategyColor } from "@/components/showcase/strategy-colors";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function DetailStat({
  label,
  value,
  accent,
  loss,
}: {
  label: string;
  value: string;
  accent?: boolean;
  loss?: boolean;
}) {
  const isNegative = loss || value.startsWith("-");
  return (
    <div className="flex justify-between items-baseline py-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
        {label}
      </span>
      <span
        className={`font-mono text-sm ${
          accent
            ? "text-amber"
            : isNegative
              ? "text-destructive"
              : "text-text-primary"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

interface StrategyDetailProps {
  account: ShowcaseAccountData;
  onClose: () => void;
}

export default function StrategyDetail({
  account,
  onClose,
}: StrategyDetailProps) {
  const colors = getStrategyColor(account.slug);
  const prefersReducedMotion = useReducedMotion();
  const [chartReady, setChartReady] = useState(!!prefersReducedMotion);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = useCallback(() => {
    setChartReady(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        // Return focus to the triggering card
        const card = document.getElementById(`card-${account.slug}`);
        card?.focus();
      }
    },
    [onClose, account.slug],
  );

  const content = (
    <div
      ref={detailRef}
      id={`detail-${account.slug}`}
      role="region"
      aria-labelledby={`card-${account.slug}`}
      onKeyDown={handleKeyDown}
      className="col-span-full rounded-lg border border-border bg-bg-surface p-6 lg:p-8"
      style={{ borderTopColor: colors.accent, borderTopWidth: "2px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-h3 font-serif text-text-primary">
            {account.name}
          </h3>
          <span className="mt-1 inline-block font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 text-text-secondary bg-bg-elevated border border-border">
            {account.strategy}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close details for ${account.name}`}
          className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-elevated transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 3-column detail grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Equity Curve */}
        <div className="md:col-span-2 lg:col-span-1">
          {chartReady ? (
            <EquityCurve accountId={account.id} accountName={account.name} />
          ) : (
            <div className="rounded-lg border border-border bg-bg-deep p-4">
              <div className="h-[200px] animate-pulse bg-bg-elevated rounded" />
            </div>
          )}
        </div>

        {/* Column 2: Account + Trading stats */}
        <div>
          <p className="mb-4 pb-2 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
            Account
          </p>
          <div className="space-y-0.5 mb-6">
            <DetailStat label="Balance" value={account.balance} />
            <DetailStat label="Equity" value={account.equity} />
            <DetailStat label="Profit" value={account.profit} accent />
            <DetailStat label="Deposits" value={account.deposits} />
            <DetailStat label="Withdrawals" value={account.withdrawals} />
          </div>

          <p className="mb-4 pb-2 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
            Trading
          </p>
          <div className="space-y-0.5">
            <DetailStat label="Win Rate" value={account.winRate} accent />
            <DetailStat label="Long Won" value={account.longWonPercent} />
            <DetailStat label="Short Won" value={account.shortWonPercent} />
            <DetailStat label="Avg Win" value={account.averageWin} />
            <DetailStat label="Avg Loss" value={account.averageLoss} loss />
            <DetailStat label="Avg Duration" value={account.avgTradeDuration} />
          </div>
        </div>

        {/* Column 3: Monthly Returns + Risk */}
        <div>
          <MonthlyHeatmap monthlyReturns={account.monthlyReturns} />

          <div className="mt-6">
            <p className="mb-4 pb-2 border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              Risk & Infrastructure
            </p>
            <div className="space-y-0.5">
              <DetailStat label="Best Trade" value={account.bestTrade} accent />
              <DetailStat label="Worst Trade" value={account.worstTrade} loss />
              <DetailStat label="Pips" value={account.pips} />
              <DetailStat label="Leverage" value={account.leverage} />
              <DetailStat label="Platform" value={account.platform} />
              <DetailStat label="Broker" value={account.broker} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 pt-6 border-t border-border">
        <a
          href="/join/apply"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-amber transition-colors hover:text-amber-glow"
        >
          Start Trading with {account.name}
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
      </div>
    </div>
  );

  if (prefersReducedMotion) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      onAnimationComplete={handleAnimationComplete}
      className="col-span-full overflow-hidden"
    >
      {content}
    </motion.div>
  );
}
