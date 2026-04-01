"use client";

import { useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import SectionEntrance from "@/components/layout/section-entrance";
import StrategyCard from "@/components/showcase/strategy-card";
import StrategyDetail from "@/components/showcase/strategy-detail";

interface StrategyGridProps {
  accounts: ShowcaseAccountData[];
  expandedSlug: string | null;
  onToggle: (slug: string | null) => void;
}

export default function StrategyGrid({
  accounts,
  expandedSlug,
  onToggle,
}: StrategyGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(
    (slug: string) => {
      if (expandedSlug === slug) {
        onToggle(null);
      } else {
        onToggle(slug);
        // Scroll the card into view after a short delay for the animation
        requestAnimationFrame(() => {
          const card = document.getElementById(`card-${slug}`);
          if (card) {
            const rect = card.getBoundingClientRect();
            const offset = 80;
            if (rect.top < offset || rect.top > window.innerHeight * 0.5) {
              window.scrollTo({
                top: window.scrollY + rect.top - offset,
                behavior: "smooth",
              });
            }
          }
        });
      }
    },
    [expandedSlug, onToggle],
  );

  // Build children array with flatMap to splice detail after the expanded card
  const gridChildren = accounts.flatMap((account, index) => {
    const isExpanded = expandedSlug === account.slug;
    const elements = [
      <SectionEntrance key={account.slug} delay={index * 75}>
        <StrategyCard
          account={account}
          isExpanded={isExpanded}
          onToggle={() => handleToggle(account.slug)}
        />
      </SectionEntrance>,
    ];

    if (isExpanded) {
      elements.push(
        <AnimatePresence key={`detail-${account.slug}`} mode="wait">
          <StrategyDetail account={account} onClose={() => onToggle(null)} />
        </AnimatePresence>,
      );
    }

    return elements;
  });

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-24">
      <SectionEntrance>
        <div className="border-t border-border pt-8 mt-12 mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
            All Strategies
            <span className="ml-2 text-text-muted/60">({accounts.length})</span>
          </p>
        </div>
      </SectionEntrance>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      >
        {gridChildren}
      </div>
    </section>
  );
}
