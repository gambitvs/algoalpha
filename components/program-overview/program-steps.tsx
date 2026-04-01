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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const steps = [
  {
    number: 1,
    icon: Target,
    title: "Choose the Strategy(s)",
    body: "Our users can choose one or multiple strategies. Whether it's the straight equity or funded trader program, you can choose a combination of strategies that align with your goals.",
    detail:
      "After speaking with one of our Algorithmic Trading Associates, strategy selection is finalized and we move into enrollment.",
    link: { label: "View Strategies", href: "/showcase" },
    phase: "Select",
  },
  {
    number: 2,
    icon: FileCheck,
    title: "Enrollment",
    body: "Complete your software agreement and payment with our team. We make this process seamless with clear documentation and transparent terms.",
    phase: "Select",
  },
  {
    number: 3,
    icon: Building2,
    title: "Create Your Portal & Broker Accounts",
    body: "We walk you step by step through account creation with our portal at app.algoalpha.co. After registering, sign up with a compatible brokerage and create your MT4/MT5 account(s).",
    detail: "Have one account per algorithm for optimal performance tracking.",
    note: "Already have an MT4/MT5 account with compatible brokers? Skip to step 4.",
    phase: "Setup",
  },
  {
    number: 4,
    icon: Wallet,
    title: "Fund Your Broker Account",
    body: "Fund the accounts with the minimum or desired amounts for the strategy selected. Minimums range from $2,000 to $100,000 depending on strategy.",
    phase: "Setup",
  },
  {
    number: 5,
    icon: Rocket,
    title: "Submit for Activation",
    body: "Once your accounts are set up, submit for activation. If you have multiple accounts you'll submit each account for activation.",
    detail:
      "Our team will integrate the software to your accounts in your very own portal via secure API.",
    phase: "Launch",
  },
  {
    number: 6,
    icon: TrendingUp,
    title: "Watch the Trades Roll In",
    body: "Once complete, you'll receive activation confirmation and trades will start to occur. At this point all you need to do is monitor performance, and withdraw profits.",
    phase: "Launch",
  },
];

const highlights = [
  "Fully automated — no manual trading required",
  "24/7 trade execution across global markets",
  "Real-time monitoring through your portal",
  "Withdraw profits at any time",
];

export default function ProgramSteps() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Hero ── */}
      <div className="relative py-20 lg:py-32">
        {/* Radial gradient bg */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 0%, oklch(0.75 0.16 65 / 0.06), transparent 50%), radial-gradient(ellipse at 0% 100%, oklch(0.75 0.16 65 / 0.03), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEntrance>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                  Program Overview
                </p>
                <h1 className="text-h1 font-serif text-text-primary">
                  From Strategy Selection to{" "}
                  <span className="text-amber">Live Trading</span> in 6 Steps
                </h1>
                <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
                  Our streamlined onboarding process gets you from zero to
                  automated trading in as little as 30 minutes. No trading
                  experience required.
                </p>
              </SectionEntrance>

              <SectionEntrance delay={200}>
                <div className="mt-8">
                  <a
                    href="https://lp.algoalpha.co/portfolio-accelerator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </SectionEntrance>
            </div>

            {/* Right — highlights card */}
            <SectionEntrance delay={300}>
              <div className="rounded-xl border border-border bg-bg-surface p-8 lg:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber mb-6">
                  What You Get
                </p>
                <div className="space-y-4">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                      <span className="text-body text-text-primary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="font-mono text-2xl font-medium text-amber">
                        30
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
                        Min Setup
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-medium text-amber">
                        8
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
                        Strategies
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-2xl font-medium text-amber">
                        24/7
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
                        Automated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionEntrance>
          </div>
        </div>
      </div>

      {/* ── Steps ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-24">
        <SectionEntrance>
          <p className="mb-12 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            The 6-Step Process
          </p>
        </SectionEntrance>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <SectionEntrance key={step.number} delay={i * 100}>
                <div className="group h-full rounded-xl border border-border bg-bg-surface p-6 lg:p-8 transition-all hover:border-amber/30 hover:bg-bg-elevated relative overflow-hidden">
                  {/* Phase tag */}
                  <span className="absolute top-4 right-4 font-mono text-[8px] uppercase tracking-wider text-text-muted/40">
                    {step.phase}
                  </span>

                  {/* Icon + number row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10 border border-amber/20 transition-colors group-hover:bg-amber/15">
                      <Icon className="h-5 w-5 text-amber" />
                    </div>
                    <span className="font-serif text-4xl text-amber/15 select-none">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-h3 font-serif text-text-primary mb-3">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="text-small text-text-secondary leading-relaxed">
                    {step.body}
                  </p>

                  {step.detail && (
                    <p className="mt-3 text-small text-text-muted leading-relaxed">
                      {step.detail}
                    </p>
                  )}

                  {/* Note callout */}
                  {step.note && (
                    <div className="mt-4 flex gap-2.5 rounded-lg bg-bg-deep border border-border px-4 py-3">
                      <Info className="w-4 h-4 text-amber/50 shrink-0 mt-0.5" />
                      <p className="text-[12px] text-text-muted italic leading-relaxed">
                        {step.note}
                      </p>
                    </div>
                  )}

                  {/* Link */}
                  {step.link && (
                    <Link
                      href={step.link.href}
                      className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors group/link"
                    >
                      {step.link.label}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>
              </SectionEntrance>
            );
          })}
        </div>

        {/* Bottom callouts */}
        <SectionEntrance delay={700}>
          <div className="mt-12 rounded-xl bg-bg-surface border border-border p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <p className="text-body text-text-primary font-medium">
                  Need help at any point?
                </p>
                <p className="mt-1 text-small text-text-secondary">
                  Our team is always here to help. If you change your trading
                  account password, you&apos;ll need to reconnect — we&apos;ll
                  walk you through it.
                </p>
              </div>
              <a
                href="mailto:support@algoalpha.co"
                className="inline-flex items-center gap-2 font-mono text-sm text-amber hover:text-amber-glow transition-colors whitespace-nowrap"
              >
                support@algoalpha.co
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
