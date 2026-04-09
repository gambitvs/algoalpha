"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgramToggleProps {
  activeTab: "straight-equity" | "funded-trader";
  onTabChange: (tab: "straight-equity" | "funded-trader") => void;
}

const tabs = [
  { id: "straight-equity" as const, label: "Straight Equity" },
  { id: "funded-trader" as const, label: "Funded Trader" },
];

export default function ProgramToggle({
  activeTab,
  onTabChange,
}: ProgramToggleProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative py-4 font-mono text-sm uppercase tracking-wider ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary transition-colors"
                }`}
              >
                {tab.label}
                {isActive &&
                  (prefersReducedMotion ? (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber" />
                  ) : (
                    <motion.div
                      layoutId="onboarding-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  ))}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
