"use client";

import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import SectionEntrance from "@/components/layout/section-entrance";

const LP_URL = "https://lp.algoalpha.co/portfolio-accelerator";

function Stat({
  label,
  value,
  accent,
  loss,
  large,
}: {
  label: string;
  value: string;
  accent?: boolean;
  loss?: boolean;
  large?: boolean;
}) {
  const color = accent
    ? "oklch(0.75 0.16 65)"
    : loss || value.startsWith("-")
      ? "oklch(0.65 0.14 25)"
      : "oklch(0.93 0.01 80)";

  return (
    <div>
      <p
        className="font-mono text-[10px] uppercase tracking-[0.15em] mb-1"
        style={{ color: "oklch(0.45 0.02 60)" }}
      >
        {label}
      </p>
      <p
        className={`font-mono ${large ? "text-2xl sm:text-3xl font-semibold" : "text-sm"}`}
        style={{ color }}
      >
        {value}
      </p>
    </div>
  );
}

export function AlgoSection({
  account,
  index,
}: {
  account: ShowcaseAccountData;
  index: number;
}) {
  const chartUrl = `https://widgets.myfxbook.com/api/get-custom-widget.png?id=${account.id}&width=900&height=300&bart=0&linet=1&bgColor=0C0A08&gridColor=1A1714&lineColor=FE9716&barColor=FE9716&fontColor=8A8070&title=&titles=11&chartbgc=0C0A08`;

  return (
    <section
      id={account.slug}
      className="scroll-mt-16"
      style={{
        borderTop: index > 0 ? "1px solid oklch(0.18 0.01 60)" : undefined,
      }}
    >
      <div className="py-16 lg:py-20">
        <SectionEntrance>
          {/* Header: Name + Strategy badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
            <h2
              className="font-serif text-h2"
              style={{ color: "oklch(0.96 0.005 80)" }}
            >
              {account.name}
            </h2>
            <span
              className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1 self-start"
              style={{
                color: "oklch(0.75 0.16 65)",
                background: "oklch(0.75 0.16 65 / 0.08)",
                border: "1px solid oklch(0.75 0.16 65 / 0.15)",
              }}
            >
              {account.strategy}
            </span>
          </div>
        </SectionEntrance>

        {/* Hero stats — the big numbers */}
        <SectionEntrance delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            <Stat label="Total Gain" value={account.gain} accent large />
            <Stat label="Max Drawdown" value={account.drawdown} />
            <Stat label="Profit Factor" value={account.profitFactor} />
            <Stat label="Daily" value={account.daily} />
            <Stat label="Monthly" value={account.monthly} />
            <Stat label="Win Rate" value={account.winRate} />
          </div>
        </SectionEntrance>

        {/* Equity curve — full width */}
        <SectionEntrance delay={150}>
          <div
            className="rounded-lg overflow-hidden mb-12"
            style={{
              border: "1px solid oklch(0.18 0.01 60)",
              background: "oklch(0.08 0.01 60)",
            }}
          >
            <div className="p-4 flex items-center justify-between">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{ color: "oklch(0.45 0.02 60)" }}
              >
                Equity Growth
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "oklch(0.7 0.18 145)" }}
                />
                <span
                  className="font-mono text-[9px] uppercase tracking-wider"
                  style={{ color: "oklch(0.45 0.02 60)" }}
                >
                  Live
                </span>
              </div>
            </div>
            <img
              src={chartUrl}
              alt={`${account.name} equity curve`}
              className="w-full h-auto"
            />
          </div>
        </SectionEntrance>

        {/* Detailed stats — editorial grid */}
        <SectionEntrance delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Column 1: Account */}
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 pb-3"
                style={{
                  color: "oklch(0.75 0.16 65)",
                  borderBottom: "1px solid oklch(0.18 0.01 60)",
                }}
              >
                Account
              </p>
              <div className="space-y-4">
                <Stat label="Balance" value={account.balance} />
                <Stat label="Equity" value={account.equity} />
                <Stat label="Deposits" value={account.deposits} />
                <Stat label="Withdrawals" value={account.withdrawals} />
                <Stat label="Profit" value={account.profit} accent />
                <Stat label="Interest" value={account.interest} />
                <Stat label="Commission" value={account.commission} />
              </div>
            </div>

            {/* Column 2: Trading */}
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 pb-3"
                style={{
                  color: "oklch(0.75 0.16 65)",
                  borderBottom: "1px solid oklch(0.18 0.01 60)",
                }}
              >
                Trading
              </p>
              <div className="space-y-4">
                <Stat label="Total Trades" value={account.totalTrades} />
                <Stat label="Win Rate" value={account.winRate} accent />
                <Stat label="Long Won" value={account.longWonPercent} />
                <Stat label="Short Won" value={account.shortWonPercent} />
                <Stat label="Avg Win" value={account.averageWin} />
                <Stat label="Avg Loss" value={account.averageLoss} loss />
                <Stat label="Avg Duration" value={account.avgTradeDuration} />
              </div>
            </div>

            {/* Column 3: Risk & Infra */}
            <div>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 pb-3"
                style={{
                  color: "oklch(0.75 0.16 65)",
                  borderBottom: "1px solid oklch(0.18 0.01 60)",
                }}
              >
                Risk & Infrastructure
              </p>
              <div className="space-y-4">
                <Stat label="Best Trade" value={account.bestTrade} accent />
                <Stat label="Worst Trade" value={account.worstTrade} loss />
                <Stat label="Pips" value={account.pips} />
                <Stat label="Leverage" value={account.leverage} />
                <Stat label="Platform" value={account.platform} />
                <Stat label="Broker" value={account.broker} />
              </div>
            </div>
          </div>
        </SectionEntrance>

        {/* Monthly returns */}
        {account.monthlyReturns && account.monthlyReturns.length > 0 && (
          <SectionEntrance delay={250}>
            <div className="mb-10">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.2em] mb-5 pb-3"
                style={{
                  color: "oklch(0.75 0.16 65)",
                  borderBottom: "1px solid oklch(0.18 0.01 60)",
                }}
              >
                Monthly Returns
              </p>
              <div className="flex flex-wrap gap-2">
                {account.monthlyReturns.map((m) => {
                  const isPositive =
                    !m.return.startsWith("-") && m.return !== "0%";
                  return (
                    <div
                      key={m.month}
                      className="px-4 py-3 rounded-sm font-mono text-sm"
                      style={{
                        background: isPositive
                          ? "oklch(0.7 0.18 145 / 0.08)"
                          : "oklch(0.65 0.14 25 / 0.08)",
                        border: `1px solid ${isPositive ? "oklch(0.7 0.18 145 / 0.15)" : "oklch(0.65 0.14 25 / 0.15)"}`,
                        color: isPositive
                          ? "oklch(0.7 0.18 145)"
                          : "oklch(0.65 0.14 25)",
                      }}
                    >
                      <span
                        className="block text-[9px] uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.5 0.02 60)" }}
                      >
                        {m.month}
                      </span>
                      {m.return}
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionEntrance>
        )}

        {/* CTA */}
        <SectionEntrance delay={300}>
          <a
            href={LP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider transition-colors"
            style={{ color: "oklch(0.75 0.16 65)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "oklch(0.85 0.18 65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "oklch(0.75 0.16 65)")
            }
          >
            Start Trading with {account.name} &rarr;
          </a>
        </SectionEntrance>
      </div>
    </section>
  );
}
