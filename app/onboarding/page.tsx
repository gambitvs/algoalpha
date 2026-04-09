"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollProgressTracker from "@/components/onboarding/scroll-progress-tracker";
import OnboardingHeader from "@/components/onboarding/onboarding-header";
import OnboardingHero from "@/components/onboarding/onboarding-hero";
import ProgramToggle from "@/components/onboarding/program-toggle";
import SetupVideo from "@/components/onboarding/setup-video";
import ActivationCards, {
  SE_ALGOS,
  FTP_ALGOS,
} from "@/components/onboarding/activation-cards";
import PortalManagement from "@/components/onboarding/portal-management";
import HelpfulResources from "@/components/onboarding/helpful-resources";
import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const VIDEO_IDS: Record<string, string> = {
  "straight-equity": "IVSHBzqK7m8",
  "funded-trader": "QShNE4LI27c",
};

type ProgramTab = "straight-equity" | "funded-trader";

export default function OnboardingPage() {
  const [activeTab, setActiveTab] = useState<ProgramTab>(() => {
    // Support ?program=funded deep-link from enrollment emails
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("program") === "funded") return "funded-trader";
    }
    return "straight-equity";
  });
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Section refs for the scroll progress tracker
  const videoRef = useRef<HTMLDivElement>(null);
  const strategiesRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Reset expanded card when switching tabs
  function handleTabChange(tab: ProgramTab) {
    setExpandedCard(null);
    setActiveTab(tab);
  }

  const algos = activeTab === "straight-equity" ? SE_ALGOS : FTP_ALGOS;

  return (
    <main className="min-h-screen bg-bg-deep text-text-primary pt-10">
      <ScrollProgressTracker
        sectionRefs={{
          video: videoRef,
          strategies: strategiesRef,
          portal: portalRef,
          resources: resourcesRef,
        }}
      />

      <OnboardingHeader />
      <OnboardingHero />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProgramToggle activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Video section — swaps per tab */}
      <div ref={videoRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`video-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
          >
            <SetupVideo youtubeId={VIDEO_IDS[activeTab]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Activation cards — swaps per tab */}
      <div ref={strategiesRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`cards-${activeTab}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
          >
            <ActivationCards
              algos={algos}
              expandedCard={expandedCard}
              onToggle={(slug) =>
                setExpandedCard((prev) => (prev === slug ? null : slug))
              }
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Shared sections — always visible regardless of tab */}
      {/* Portal section removed — Wistia video c58qtx8rgr is unavailable */}
      <div ref={portalRef} />

      <div ref={resourcesRef}>
        <HelpfulResources />
      </div>

      <TrustpilotReviews />
      <PageDisclaimer />
    </main>
  );
}
