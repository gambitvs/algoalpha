"use client";

import { StatBlock } from "./stat-block";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";

interface AlgoSectionProps {
  account: ShowcaseAccountData;
  index: number;
}

const LP_URL = "https://lp.algoalpha.co/portfolio-accelerator";

export function AlgoSection({ account, index }: AlgoSectionProps) {
  const chartUrl = `https://widgets.myfxbook.com/api/get-custom-widget.png?id=${account.id}&width=800&height=350&bart=0&linet=1&bgColor=0C0A08&gridColor=2A2520&lineColor=FE9716&barColor=FE9716&fontColor=EDE8E0&title=&titles=12&chartbgc=12100E`;

  const isPositive = (val: string) => {
    return !val.startsWith("-") && val !== "—";
  };

  const isLossValue = (val: string) => {
    return val.startsWith("-");
  };

  return (
    <section
      id={account.slug}
      className="scroll-mt-20"
      style={{
        borderTop: index > 0 ? "1px solid oklch(0.22 0.01 60)" : "none",
        paddingTop: index > 0 ? "4rem" : "0",
        paddingBottom: "4rem",
      }}
    >
      {/* Row 1: Hero stats bar */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2
              className="font-serif text-h3 sm:text-h2"
              style={{ color: "oklch(0.93 0.01 80)" }}
            >
              {account.name}
            </h2>
            <span
              className="inline-flex items-center px-3 py-1 text-micro font-mono uppercase tracking-wider"
              style={{
                backgroundColor: "oklch(0.75 0.16 65 / 0.12)",
                color: "oklch(0.75 0.16 65)",
                borderRadius: "2px",
              }}
            >
              {account.strategy}
            </span>
          </div>
        </div>

        {/* Hero stat row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div
            className="flex flex-col gap-1 px-4 py-3"
            style={{
              backgroundColor: "oklch(0.12 0.01 60)",
              borderLeft: "2px solid oklch(0.75 0.16 65)",
              borderRadius: "4px",
            }}
          >
            <span
              className="text-micro font-mono uppercase tracking-widest"
              style={{ color: "oklch(0.5 0.02 60)" }}
            >
              Gain
            </span>
            <span
              className="font-mono text-lg font-semibold"
              style={{ color: "oklch(0.75 0.16 65)" }}
            >
              {account.gain}
            </span>
          </div>
          <HeroStat label="Drawdown" value={account.drawdown} />
          <HeroStat label="Profit Factor" value={account.profitFactor} />
          <HeroStat label="Daily" value={account.daily} />
          <HeroStat label="Monthly" value={account.monthly} />
          <HeroStat label="Win Rate" value={account.winRate} />
        </div>
      </div>

      {/* Row 2: Full equity curve */}
      <div className="mb-10">
        <div
          className="w-full overflow-hidden"
          style={{
            backgroundColor: "oklch(0.07 0.01 60)",
            borderRadius: "6px",
            border: "1px solid oklch(0.18 0.01 60)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chartUrl}
            alt={`${account.name} equity curve`}
            className="w-full h-auto"
            style={{ minHeight: "200px" }}
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
        <p
          className="text-micro font-mono mt-2 text-right"
          style={{ color: "oklch(0.4 0.01 60)" }}
        >
          Live equity curve via MyFXBook
        </p>
      </div>

      {/* Row 3: Detailed stats grid */}
      <div className="mb-10">
        <h3
          className="font-mono text-micro uppercase tracking-widest mb-4"
          style={{ color: "oklch(0.5 0.02 60)" }}
        >
          Detailed Statistics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <StatBlock label="Balance" value={account.balance} />
          <StatBlock label="Equity" value={account.equity} />
          <StatBlock label="Deposits" value={account.deposits} />
          <StatBlock label="Withdrawals" value={account.withdrawals} />

          <StatBlock
            label="Profit"
            value={account.profit}
            highlight={isPositive(account.profit)}
            isLoss={isLossValue(account.profit)}
          />
          <StatBlock
            label="Interest"
            value={account.interest}
            isLoss={isLossValue(account.interest)}
          />
          <StatBlock
            label="Commission"
            value={account.commission}
            isLoss={isLossValue(account.commission)}
          />
          <StatBlock label="Pips" value={account.pips} />

          <StatBlock label="Total Trades" value={account.totalTrades} />
          <StatBlock label="Avg Win" value={account.averageWin} />
          <StatBlock label="Avg Loss" value={account.averageLoss} isLoss />
          <StatBlock
            label="Avg Trade Duration"
            value={account.avgTradeDuration}
          />

          <StatBlock label="Best Trade" value={account.bestTrade} highlight />
          <StatBlock label="Worst Trade" value={account.worstTrade} isLoss />
          <StatBlock label="Longs Won" value={account.longWonPercent} />
          <StatBlock label="Shorts Won" value={account.shortWonPercent} />

          <StatBlock label="Leverage" value={account.leverage} />
          <StatBlock label="Platform" value={account.platform} />
          <StatBlock label="Broker" value={account.broker} />
          <StatBlock label="Tracking" value="MyFXBook Verified" highlight />
        </div>
      </div>

      {/* Row 4: Monthly returns */}
      {account.monthlyReturns && account.monthlyReturns.length > 0 && (
        <div className="mb-10">
          <h3
            className="font-mono text-micro uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.5 0.02 60)" }}
          >
            Monthly Returns
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {account.monthlyReturns.map((mr) => {
              const val = parseFloat(mr.return.replace("%", ""));
              const isNeg = val < 0;
              return (
                <div
                  key={mr.month}
                  className="flex flex-col items-center gap-1 px-3 py-3 text-center"
                  style={{
                    backgroundColor: isNeg
                      ? "oklch(0.14 0.04 25)"
                      : "oklch(0.14 0.04 145)",
                    borderRadius: "4px",
                    border: isNeg
                      ? "1px solid oklch(0.22 0.06 25)"
                      : "1px solid oklch(0.22 0.06 145)",
                  }}
                >
                  <span
                    className="text-micro font-mono"
                    style={{ color: "oklch(0.5 0.02 60)" }}
                  >
                    {mr.month}
                  </span>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{
                      color: isNeg
                        ? "oklch(0.65 0.14 25)"
                        : "oklch(0.65 0.14 145)",
                    }}
                  >
                    {isNeg ? "" : "+"}
                    {mr.return}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Row 5: CTA */}
      <div className="flex items-center gap-4">
        <a
          href={LP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "oklch(0.75 0.16 65)",
            color: "oklch(0.08 0.01 60)",
            borderRadius: "0px",
          }}
        >
          Start Trading with {account.name}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="inline-block"
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
        <a
          href={`https://www.myfxbook.com/members/AlgoAlpha`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-micro uppercase tracking-wider transition-opacity hover:opacity-70"
          style={{ color: "oklch(0.5 0.02 60)" }}
        >
          View on MyFXBook
        </a>
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-col gap-1 px-4 py-3"
      style={{
        backgroundColor: "oklch(0.12 0.01 60)",
        borderRadius: "4px",
      }}
    >
      <span
        className="text-micro font-mono uppercase tracking-widest"
        style={{ color: "oklch(0.5 0.02 60)" }}
      >
        {label}
      </span>
      <span
        className="font-mono text-lg font-medium"
        style={{ color: "oklch(0.93 0.01 80)" }}
      >
        {value}
      </span>
    </div>
  );
}
