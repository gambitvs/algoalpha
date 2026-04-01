"use client";

import { ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const steps = {
  straightEquity: [
    "Choose a strategy",
    "Connect Your Account",
    "Turn on Software",
    "Watch it Run",
  ],
  fundedTrader: [
    "Choose a compatible* strategy",
    "Create account",
    "Fund Account",
    "Receive 10x Capital",
    "Connect Account",
    "Turn On Software",
    "Watch it Run",
  ],
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative py-16 lg:py-24 bg-warm-white text-bg-deep overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.12 0.01 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.12 0.01 60) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-dim">
            Get Started
          </p>
          <h2 className="text-h2 font-serif text-bg-deep mb-12">
            Our Programs
          </h2>
        </SectionEntrance>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Straight Equity */}
          <SectionEntrance delay={100}>
            <div className="flex flex-col h-full rounded-xl border border-bg-deep/10 bg-bg-deep/[0.03] p-6 lg:p-8">
              <h3 className="text-h3 font-serif text-bg-deep mb-6">
                Straight Equity
              </h3>

              <ul className="space-y-3 mb-8 flex-1">
                {steps.straightEquity.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 font-mono text-[10px] font-medium text-amber-dim">
                      {i + 1}
                    </span>
                    <span className="text-sm text-bg-deep/80">{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-bg-deep/10">
                <p className="font-mono text-[11px] uppercase tracking-wider text-bg-deep/40 mb-1">
                  Starting at
                </p>
                <p className="font-serif text-3xl text-bg-deep">$4,997*</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-amber-dim transition-colors hover:text-amber"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SectionEntrance>

          {/* Funded Trader */}
          <SectionEntrance delay={200}>
            <div className="flex flex-col h-full rounded-xl border border-amber/20 bg-bg-deep/[0.03] p-6 lg:p-8">
              <h3 className="text-h3 font-serif text-bg-deep mb-4">
                Funded Trader
              </h3>

              <p className="text-sm leading-relaxed text-bg-deep/60 mb-6">
                This is not a prop firm, we help our users take advantage of
                broker contribution programs designed to help users harness more
                profits.
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {steps.fundedTrader.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 font-mono text-[10px] font-medium text-amber-dim">
                      {i + 1}
                    </span>
                    <span className="text-sm text-bg-deep/80">{step}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] font-mono uppercase tracking-wider text-bg-deep/40 mb-6">
                Current compatible softwares:{" "}
                <span className="text-bg-deep/70">Alpha X, Alpha Core</span>
              </p>

              <div className="mt-auto pt-6 border-t border-bg-deep/10">
                <p className="font-mono text-[11px] uppercase tracking-wider text-bg-deep/40 mb-1">
                  Starting at
                </p>
                <p className="font-serif text-3xl text-bg-deep">$7,500*</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-amber-dim transition-colors hover:text-amber"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SectionEntrance>

          {/* Institutional Alpha */}
          <SectionEntrance delay={300}>
            <div className="flex flex-col h-full rounded-xl border border-bg-deep/10 bg-bg-deep/[0.03] p-6 lg:p-8">
              <h3 className="text-h3 font-serif text-bg-deep mb-6">
                Institutional Alpha
              </h3>

              <p className="text-sm leading-relaxed text-bg-deep/60 mb-8 flex-1">
                Are you a hedge fund with over $10M AUM, seeking to layer in
                additional performance to increase your returns?
              </p>

              <p className="text-sm leading-relaxed text-bg-deep/80 mb-8">
                Request a private consultation to see how we can help.
              </p>

              <div className="mt-auto">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-bg-deep px-6 py-3 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}
