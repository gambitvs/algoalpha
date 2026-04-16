"use client";

import { useEffect, useMemo, useState } from "react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import { FALLBACK_ACCOUNTS } from "@/lib/fallback-showcase-data";
import { parseCurrency, parseNumber, parsePercent } from "@/lib/parse-showcase";
import SectionEntrance from "@/components/layout/section-entrance";
import ShowcaseHero from "@/components/showcase/showcase-hero";
import FeaturedStrategy from "@/components/showcase/featured-strategy";
import StrategyCard from "@/components/showcase/strategy-card";
import StrategyDetail from "@/components/showcase/strategy-detail";
// ComingSoonCard removed — no coming-soon strategies currently
import FundedComparisonTable from "@/components/showcase/funded-comparison-table";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";
import { AnimatePresence } from "framer-motion";

// Straight equity order: highest risk/return → lowest
const STRAIGHT_EQUITY_ORDER = [
  "gold-alpha",
  "crypto-alpha",
  "alpha-trader",
  "intelligent-portfolio",
  "alpha-core",
  "alpha-x",
];

const FUNDED_SLUGS = ["alpha-core", "alpha-y", "alpha-x"];

const COMING_SOON: { slug: string; name: string; strategy: string }[] = [];

const COMING_SOON_SLUGS = new Set(COMING_SOON.map((s) => s.slug));

type CardItem =
  | { type: "coming-soon"; slug: string }
  | { type: "live"; slug: string; account: ShowcaseAccountData };

export default function ShowcaseClient() {
  const [accounts, setAccounts] =
    useState<ShowcaseAccountData[]>(FALLBACK_ACCOUNTS);
  const [lastScraped, setLastScraped] = useState("2026-03-31T00:00:00Z");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/showcase")
      .then((res) => res.json())
      .then((data) => {
        if (data?.accounts?.length) {
          // Only use API data if it has real values (not all dashes)
          const hasRealData = data.accounts.some(
            (a: { gain: string }) => a.gain && a.gain !== "—" && a.gain !== "",
          );
          if (hasRealData) {
            setAccounts(data.accounts);
            setLastScraped(data.lastScraped);
          }
        }
      })
      .catch(() => {});
  }, []);

  const { topPerformer, straightEquityCards, fundedCards, aggregateStats } =
    useMemo(() => {
      const sorted = [...accounts].sort(
        (a, b) => parsePercent(b.gain) - parsePercent(a.gain),
      );
      const top = sorted[0];

      const buildCards = (slugs: string[], excludeSlug?: string): CardItem[] =>
        slugs
          .filter((slug) => slug !== excludeSlug)
          .map((slug) => {
            if (COMING_SOON_SLUGS.has(slug))
              return { type: "coming-soon" as const, slug };
            const account = accounts.find((a) => a.slug === slug);
            return account
              ? { type: "live" as const, slug, account }
              : { type: "coming-soon" as const, slug };
          });

      const totalAUA = accounts.reduce(
        (sum, a) => sum + parseCurrency(a.equity),
        0,
      );

      return {
        topPerformer: top,
        straightEquityCards: buildCards(STRAIGHT_EQUITY_ORDER, top.slug),
        fundedCards: buildCards(FUNDED_SLUGS),
        aggregateStats: {
          totalAUA,
          topGain: parsePercent(top.gain),
          avgWinRate:
            accounts.reduce((sum, a) => sum + parsePercent(a.winRate), 0) /
            accounts.length,
          totalTrades: accounts.reduce(
            (sum, a) => sum + parseNumber(a.totalTrades),
            0,
          ),
        },
      };
    }, [accounts]);

  function handleToggle(slug: string) {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  }

  function renderCardGrid(cards: CardItem[], cols: string) {
    return (
      <div className={`grid ${cols} gap-4 lg:gap-6`}>
        {cards.flatMap((card, i) => {
          const elements: React.ReactNode[] = [];

          if (card.type === "coming-soon") {
            // No coming-soon cards currently
          } else {
            const isExpanded = expandedSlug === card.slug;
            elements.push(
              <SectionEntrance key={card.slug} delay={i * 75}>
                <StrategyCard
                  account={card.account}
                  isExpanded={isExpanded}
                  onToggle={() => handleToggle(card.slug)}
                />
              </SectionEntrance>,
            );

            if (isExpanded) {
              elements.push(
                <AnimatePresence key={`detail-${card.slug}`} mode="wait">
                  <StrategyDetail
                    account={card.account}
                    onClose={() => setExpandedSlug(null)}
                  />
                </AnimatePresence>,
              );
            }
          }

          return elements;
        })}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary">
      <ShowcaseHero
        aggregateStats={aggregateStats}
        lastScraped={lastScraped}
        accountCount={7}
      />

      {/* ═══ STRAIGHT EQUITY SECTION ═══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
        <SectionEntrance>
          <div className="mb-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Straight Equity
            </p>
            <p className="text-small text-text-secondary max-w-xl">
              All strategies are laid out below from highest risk highest return
              to lowest risk lowest return.
            </p>
          </div>
        </SectionEntrance>

        <FeaturedStrategy account={topPerformer} />

        <div className="mt-8">
          {renderCardGrid(
            straightEquityCards,
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          )}
        </div>
      </section>

      {/* ═══ FUNDED TRADING SECTION ═══ */}
      <section className="py-12 lg:py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <div className="mb-8">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                Funded Trading
              </p>
              <p className="text-small text-text-secondary max-w-xl">
                Strategies designed for funded trading accounts — lower risk,
                consistent returns.
              </p>
            </div>
          </SectionEntrance>

          <div className="mb-8">
            <FundedComparisonTable />
          </div>
        </div>
      </section>

      {/* ═══ SHARED BOTTOM SECTIONS ═══ */}
      <GetStartedSteps />
      <ResourceCTA />
      <PageDisclaimer />

      {/* Footer CTA */}
      <div className="py-20 text-center border-t border-border bg-bg-deep">
        <p className="font-mono text-micro uppercase tracking-[0.3em] mb-4 text-text-muted">
          Ready to start?
        </p>
        <h2 className="text-h2 font-serif text-text-primary mb-8">
          Join Algo Alpha Today
        </h2>
        <a
          href="/join/apply"
          className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm uppercase tracking-wider bg-amber text-bg-deep transition-colors hover:bg-amber-glow"
        >
          Apply Now
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
        <p className="font-mono text-micro mt-6 text-text-muted">
          Past performance is not indicative of future results.
        </p>
      </div>
    </main>
  );
}
