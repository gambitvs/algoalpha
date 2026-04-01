"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { strategyCards } from "@/lib/constants";
import StrategyCard from "@/components/home/strategy-card";
import SectionEntrance from "@/components/layout/section-entrance";

interface MyfxbookAccount {
  name: string;
  slug: string;
  id: string;
  gain: string;
  drawdown: string;
}

export default function StrategySuite() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const [apiData, setApiData] = useState<Record<string, MyfxbookAccount>>({});

  // Fetch live data from the myfxbook API
  useEffect(() => {
    fetch("/api/myfxbook")
      .then((r) => r.json())
      .then((data) => {
        if (data?.accounts?.length > 0) {
          const map: Record<string, MyfxbookAccount> = {};
          for (const acc of data.accounts) {
            map[acc.id] = acc;
          }
          setApiData(map);
        }
      })
      .catch(() => {
        // Fallback data in constants is fine
      });
  }, []);

  const active = strategyCards[activeIndex];

  return (
    <section id="strategies" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <div className="mb-4 max-w-3xl">
            <h2 className="text-h2 font-serif text-text-primary">
              Our Strategies
            </h2>
            <p className="mt-4 text-body text-text-secondary">
              Algo Alpha&apos;s Strategy Suite Makes It Simple for Investors to
              Select Strategies Based on Performance Objectives and Risk
              Tolerance
            </p>
          </div>
          <p className="mb-10 text-small italic text-text-muted">
            Past performance is not indicative of guaranteed future results.
            Please read disclosures on our site for more details.
          </p>
        </SectionEntrance>

        <SectionEntrance delay={200}>
          {/* Tab selector */}
          <div className="mb-8 overflow-x-auto">
            <div className="inline-flex min-w-full gap-1 rounded-lg bg-bg-surface p-1">
              {strategyCards.map((s, i) => {
                const isGold = s.slug === "gold-alpha";
                const isActive = activeIndex === i;

                return (
                  <button
                    key={s.slug}
                    onClick={() => setActiveIndex(i)}
                    className={`relative whitespace-nowrap px-3 py-2 text-xs sm:text-sm sm:px-4 font-medium uppercase tracking-wide transition-all ${
                      isActive
                        ? isGold
                          ? "text-amber"
                          : "text-text-primary"
                        : isGold
                          ? "text-amber/50 hover:text-amber/80"
                          : "text-text-muted hover:text-text-secondary"
                    }`}
                    style={
                      isGold
                        ? {
                            textShadow: isActive
                              ? "0 0 20px oklch(0.75 0.16 65 / 0.6), 0 0 40px oklch(0.75 0.16 65 / 0.3)"
                              : "0 0 12px oklch(0.75 0.16 65 / 0.2)",
                          }
                        : undefined
                    }
                  >
                    {s.name}
                    {isActive && (
                      <motion.div
                        layoutId="strategy-tab-indicator"
                        className={`absolute inset-x-0 bottom-0 h-0.5 ${isGold ? "bg-amber shadow-[0_0_8px_oklch(0.75_0.16_65_/_0.5)]" : "bg-amber"}`}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Strategy content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <StrategyCard
                strategy={active}
                apiAccount={apiData[active.myfxbookId]}
              />
            </motion.div>
          </AnimatePresence>
        </SectionEntrance>
      </div>
    </section>
  );
}
