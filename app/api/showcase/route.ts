import { NextResponse } from "next/server";
import data from "@/lib/myfxbook-data.json";

// ---------------------------------------------------------------------------
// Showcase API — serves the full detailed stats for all 7 accounts.
// Source of truth: lib/myfxbook-data.json, refreshed daily via GH Actions.
// ---------------------------------------------------------------------------

export interface ShowcaseAccountData {
  name: string;
  slug: string;
  id: string;
  strategy: string;
  gain: string;
  absGain: string;
  daily: string;
  monthly: string;
  drawdown: string;
  balance: string;
  equity: string;
  deposits: string;
  withdrawals: string;
  profit: string;
  interest: string;
  profitFactor: string;
  pips: string;
  averageWin: string;
  averageLoss: string;
  totalTrades: string;
  winRate: string;
  longWonPercent: string;
  shortWonPercent: string;
  bestTrade: string;
  worstTrade: string;
  avgTradeDuration: string;
  commission: string;
  leverage: string;
  platform: string;
  broker: string;
  monthlyReturns: { month: string; return: string }[];
}

export interface ShowcaseData {
  accounts: ShowcaseAccountData[];
  lastScraped: string;
}

export async function GET() {
  const accounts: ShowcaseAccountData[] = data.accounts.map((a) => ({
    name: a.name,
    slug: a.slug,
    id: a.id,
    strategy: a.strategy,
    // Showcase renders `+XX.XX%` form; profile-style raw numbers become prefixed.
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
  }));

  const payload: ShowcaseData = {
    accounts,
    lastScraped: data.lastScraped,
  };

  return NextResponse.json(payload);
}
