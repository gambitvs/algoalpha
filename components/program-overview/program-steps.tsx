"use client";

import Link from "next/link";
import {
  Target,
  FileCheck,
  Building2,
  Wallet,
  Rocket,
  TrendingUp,
  Info,
  Mail,
} from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const phases = [
  {
    label: "Phase 1 — Select",
    steps: [
      {
        number: 1,
        icon: Target,
        title: "Choose the Strategy(s)",
        body: [
          "Our users can choose one or multiple strategies. Whether it's the straight equity or funded trader program, you can choose a combination of strategies that align with your goals.",
          "After speaking with one of our Algorithmic Trading Associates, strategy selection is finalized and we move into enrollment.",
        ],
        link: { label: "View Strategies", href: "/showcase" },
      },
      {
        number: 2,
        icon: FileCheck,
        title: "Enrollment",
        body: ["Complete your software agreement and payment with our team."],
      },
    ],
  },
  {
    label: "Phase 2 — Setup",
    steps: [
      {
        number: 3,
        icon: Building2,
        title: "Create Your Portal & Broker Accounts",
        body: [
          "1. We walk you step by step through account creation with our portal app.algoalpha.co",
          "2. After registering sign up with a compatible brokerage, and create your MT4/MT5 account(s). Have one account per algorithm.",
        ],
        note: "If you have an MT4/MT5 account already with compatible brokers then you can skip to step 4.",
      },
      {
        number: 4,
        icon: Wallet,
        title: "Fund Your Broker Account",
        body: [
          "Fund the accounts with the minimum or desired amounts for the strategy selected.",
        ],
      },
    ],
  },
  {
    label: "Phase 3 — Launch",
    steps: [
      {
        number: 5,
        icon: Rocket,
        title: "Submit for Activation",
        body: [
          "Once your accounts are set up, submit for activation. If you have multiple accounts you'll submit each account for activation.",
          "Our team will integrate the software to your accounts in your very own portal via secure API.",
        ],
      },
      {
        number: 6,
        icon: TrendingUp,
        title: "Watch the Trades Roll In",
        body: [
          "Once complete, you'll receive activation confirmation and trades will start to occur. At this point all you need to do is monitor performance, and withdraw profits.",
        ],
      },
    ],
  },
];

const allSteps = phases.flatMap((p) => p.steps);

export default function ProgramSteps() {
  let globalIndex = 0;

  return (
    <section className="relative overflow-hidden">
      {/* ── Hero ── */}
      <div
        className="relative py-16 lg:py-24"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, oklch(0.75 0.16 65 / 0.03), transparent 60%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Program Overview
            </p>
            <h1 className="text-h1 font-serif text-text-primary">
              Overview of Our Program
            </h1>
            <p className="mt-4 text-body text-text-secondary max-w-2xl">
              Getting started with Algo Alpha is straightforward. Our onboarding
              process is broken into 6 clear steps across 3 phases — select your
              strategies, set up your accounts, and launch automated trading.
            </p>
          </SectionEntrance>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 lg:left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber/20 via-amber/10 to-border" />

          {phases.map((phase) => (
            <div key={phase.label} className="relative">
              {/* Phase label */}
              <SectionEntrance delay={globalIndex * 100}>
                <div className="relative pl-14 lg:pl-20 pt-10 pb-2">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-amber/40">
                    {phase.label}
                  </p>
                </div>
              </SectionEntrance>

              {phase.steps.map((step) => {
                const Icon = step.icon;
                const idx = globalIndex++;
                return (
                  <SectionEntrance key={step.number} delay={idx * 100}>
                    <div className="relative py-8 pl-14 lg:pl-20">
                      {/* Icon on the timeline */}
                      <div className="absolute left-0 lg:left-4 top-8 w-10 h-10 flex items-center justify-center rounded-lg bg-amber/10 border border-amber/20 z-10">
                        <Icon className="w-5 h-5 text-amber" />
                      </div>

                      {/* Content area */}
                      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8 items-start">
                        {/* Decorative number */}
                        <span className="hidden lg:block text-4xl font-serif text-amber/15 leading-none select-none -mt-1">
                          {String(step.number).padStart(2, "0")}
                        </span>

                        <div>
                          {/* Mobile number + Title */}
                          <div className="flex items-baseline gap-3 lg:gap-0">
                            <span className="lg:hidden text-4xl font-serif text-amber/15 leading-none select-none">
                              {String(step.number).padStart(2, "0")}
                            </span>
                            <h3 className="text-h3 font-serif text-text-primary">
                              {step.title}
                            </h3>
                          </div>

                          {/* Body paragraphs */}
                          <div className="mt-3 space-y-3">
                            {step.body.map((paragraph, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-body text-text-secondary leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* Optional note */}
                          {"note" in step && step.note && (
                            <div className="mt-4 flex gap-2.5 rounded-lg bg-bg-elevated border border-border px-4 py-3">
                              <Info className="w-4 h-4 text-amber/50 shrink-0 mt-0.5" />
                              <p className="text-small text-text-muted italic leading-relaxed">
                                {step.note}
                              </p>
                            </div>
                          )}

                          {/* Optional link */}
                          {"link" in step && step.link && (
                            <Link
                              href={step.link.href}
                              className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors group"
                            >
                              {step.link.label}
                              <span className="transition-transform group-hover:translate-x-1">
                                &rarr;
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </SectionEntrance>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Bottom callout ── */}
        <SectionEntrance delay={allSteps.length * 100}>
          <div className="mt-12 rounded-lg bg-bg-surface border border-border p-5">
            <p className="text-body text-text-secondary italic leading-relaxed">
              Note: if at any time you change your password to your trading
              account you will need to reconnect them.
            </p>
          </div>
        </SectionEntrance>

        <SectionEntrance delay={allSteps.length * 100 + 100}>
          <p className="mt-6 text-body text-text-secondary">
            Our team is always here to help via email at{" "}
            <a
              href="mailto:support@algoalpha.co"
              className="text-amber hover:text-amber-glow transition-colors underline underline-offset-2"
            >
              support@algoalpha.co
            </a>
          </p>
        </SectionEntrance>
      </div>
    </section>
  );
}
