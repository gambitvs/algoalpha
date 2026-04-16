import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import data from "./myfxbook-data.json";

// Derived from lib/myfxbook-data.json (refreshed daily by GH Actions).
// Kept as a named export to avoid churning every importer.
export const FALLBACK_ACCOUNTS: ShowcaseAccountData[] = data.accounts.map(
  (a) => ({
    name: a.name,
    slug: a.slug,
    id: a.id,
    strategy: a.strategy,
    gain:
      a.gain.startsWith("+") || a.gain.startsWith("-")
        ? a.gain.includes("%")
          ? a.gain
          : `${a.gain}%`
        : `+${a.gain}%`,
    absGain: a.absGain,
    daily: a.daily,
    monthly: a.monthly,
    drawdown: a.drawdown.includes("%") ? a.drawdown : `${a.drawdown}%`,
    balance: a.balance,
    equity: a.equity,
    deposits: a.deposits,
    withdrawals: a.withdrawals,
    profit: a.profit,
    interest: a.interest,
    profitFactor: a.profitFactor,
    pips: a.pips,
    averageWin: a.averageWin,
    averageLoss: a.averageLoss,
    totalTrades: a.totalTrades,
    winRate: a.winRate,
    longWonPercent: a.longWonPercent,
    shortWonPercent: a.shortWonPercent,
    bestTrade: a.bestTrade,
    worstTrade: a.worstTrade,
    avgTradeDuration: a.avgTradeDuration,
    commission: a.commission,
    leverage: a.leverage,
    platform: a.platform,
    broker: a.broker,
    monthlyReturns: a.monthlyReturns,
  }),
);
