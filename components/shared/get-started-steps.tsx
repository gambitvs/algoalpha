"use client";

import { BarChart3, Link2, Zap } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const steps = [
  {
    number: "01",
    icon: BarChart3,
    title: "Choose the Strategy(s)",
    description:
      "Pick from our curated suite of algorithmic strategies across forex, crypto, and metals.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect Your Broker",
    description:
      "Link your MT4/MT5 broker account through our secure portal in minutes.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Turn on and Watch it Run",
    description:
      "Trades execute automatically 24/7. Monitor performance and withdraw profits anytime.",
  },
];

export default function GetStartedSteps() {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Gradient fade in from bg-deep */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-bg-deep to-transparent" />
      <div className="absolute inset-0 bg-bg-surface -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-deep to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            How to Get Started
          </p>
          <h2 className="text-h2 font-serif text-text-primary max-w-xl">
            Add Algorithmic Trading to Your Portfolio in 3 Simple Steps
          </h2>
          <p className="mt-4 text-body text-text-secondary max-w-lg">
            Our simple process allows beginners and experts to add algorithmic
            trading to their portfolio in as little as 30 minutes.
          </p>
        </SectionEntrance>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <SectionEntrance key={step.number} delay={i * 100}>
                <div className="relative rounded-lg bg-bg-deep border border-border p-6 text-center transition-colors hover:border-amber/30 group">
                  {/* Icon badge */}
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 border border-amber/20 transition-colors group-hover:bg-amber/15">
                    <Icon className="h-5 w-5 text-amber" />
                  </div>

                  {/* Number */}
                  <span className="font-mono text-[11px] text-amber uppercase tracking-[0.15em]">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-h3 font-serif text-text-primary">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-small text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SectionEntrance>
            );
          })}
        </div>
      </div>
    </section>
  );
}
