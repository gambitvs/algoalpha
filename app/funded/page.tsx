"use client";

import { useEffect, useState } from "react";
import type { ShowcaseAccountData } from "@/app/api/showcase/route";
import { FALLBACK_ACCOUNTS } from "@/lib/fallback-showcase-data";
import FundedHero from "@/components/funded/funded-hero";
import CapitalMultiplier from "@/components/funded/capital-multiplier";
import PropFirmComparison from "@/components/funded/prop-firm-comparison";
import RiskGauge from "@/components/funded/risk-gauge";
import FundedStrategies from "@/components/funded/funded-strategies";
import CPACallout from "@/components/funded/cpa-callout";
import OnboardingTimeline from "@/components/funded/onboarding-timeline";
import FundedFAQ from "@/components/funded/funded-faq";
import FundedCTA from "@/components/funded/funded-cta";
import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const FUNDED_SLUGS = ["alpha-y", "alpha-core", "alpha-x"];

export default function FundedPage() {
  const [accounts, setAccounts] =
    useState<ShowcaseAccountData[]>(FALLBACK_ACCOUNTS);

  useEffect(() => {
    fetch("/api/showcase")
      .then((res) => res.json())
      .then((data) => {
        if (data?.accounts?.length) {
          const hasRealData = data.accounts.some(
            (a: { gain: string }) => a.gain && a.gain !== "—" && a.gain !== "",
          );
          if (hasRealData) {
            setAccounts(data.accounts);
          }
        }
      })
      .catch(() => {});
  }, []);

  const fundedAccounts = FUNDED_SLUGS.map(
    (slug) =>
      accounts.find((a) => a.slug === slug) ||
      FALLBACK_ACCOUNTS.find((a) => a.slug === slug)!,
  ).filter(Boolean);

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary">
      <FundedHero />
      <CapitalMultiplier />
      <PropFirmComparison />
      <RiskGauge />
      <FundedStrategies accounts={fundedAccounts} />
      <CPACallout />
      <OnboardingTimeline />
      <FundedFAQ />
      <FundedCTA />
      <TrustpilotReviews />
      <PageDisclaimer />
    </main>
  );
}
