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
      className="relative py-16 lg:py-24 overflow-hidden"
      style={{ background: "var(--programs-bg, oklch(0.95 0.005 80))" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--aa-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
            Get Started
          </p>
          <h2 className="text-h2 font-serif text-text-primary mb-12">
            Our Programs
          </h2>
        </SectionEntrance>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Straight Equity — white card */}
          <SectionEntrance delay={100}>
            <div className="flex flex-col h-full rounded-xl bg-bg-surface border border-border shadow-lg shadow-black/5 p-6 lg:p-8 relative overflow-hidden">
              {/* Top amber accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber via-amber-glow to-amber" />

              <h3 className="text-h3 font-serif text-text-primary mb-6 mt-2">
                Straight Equity
              </h3>

              <ul className="space-y-3 mb-8 flex-1">
                {steps.straightEquity.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 border border-amber/20 font-mono text-[10px] font-medium text-amber">
                      {i + 1}
                    </span>
                    <span className="text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-1">
                  Starting at
                </p>
                <p className="font-serif text-3xl text-text-primary">$4,997*</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-amber transition-colors hover:text-amber-glow"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SectionEntrance>

          {/* Funded Trader — white card with amber border */}
          <SectionEntrance delay={200}>
            <div className="flex flex-col h-full rounded-xl bg-bg-surface border border-amber/30 shadow-lg shadow-amber/5 p-6 lg:p-8 relative overflow-hidden">
              {/* Top amber accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-dim via-amber to-amber-dim" />

              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-amber/10 border border-amber/20 text-amber px-2 py-1 rounded-sm">
                  Popular
                </span>
              </div>

              <h3 className="text-h3 font-serif text-text-primary mb-4 mt-2">
                Funded Trader
              </h3>

              <p className="text-sm leading-relaxed text-text-secondary mb-6">
                This is not a prop firm, we help our users take advantage of
                broker contribution programs designed to help users harness more
                profits.
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {steps.fundedTrader.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 border border-amber/20 font-mono text-[10px] font-medium text-amber">
                      {i + 1}
                    </span>
                    <span className="text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] font-mono uppercase tracking-wider text-text-muted mb-6">
                Compatible softwares:{" "}
                <span className="text-text-primary">Alpha X, Alpha Core</span>
              </p>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-1">
                  Starting at
                </p>
                <p className="font-serif text-3xl text-text-primary">$7,500*</p>
              </div>

              <div className="mt-6">
                <a
                  href="https://lp.algoalpha.co/portfolio-accelerator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-amber transition-colors hover:text-amber-glow"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </SectionEntrance>

          {/* Institutional Alpha — DARK inverted card */}
          <SectionEntrance delay={300}>
            <div
              className="flex flex-col h-full rounded-xl p-6 lg:p-8 relative overflow-hidden shadow-xl"
              style={{
                background: "oklch(0.10 0.01 60)",
                color: "oklch(0.93 0.01 80)",
              }}
            >
              {/* Subtle amber glow at top */}
              <div
                className="absolute top-0 left-0 right-0 h-32 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at top, oklch(0.75 0.16 65 / 0.4), transparent 70%)",
                }}
              />

              <div className="relative">
                <p className="font-mono text-[9px] uppercase tracking-widest text-amber mb-4">
                  Enterprise
                </p>
                <h3
                  className="text-h3 font-serif mb-6"
                  style={{ color: "oklch(0.96 0.005 80)" }}
                >
                  Institutional Alpha
                </h3>

                <p
                  className="text-sm leading-relaxed mb-8 flex-1"
                  style={{ color: "oklch(0.65 0.02 60)" }}
                >
                  Are you a hedge fund with over $10M AUM, seeking to layer in
                  additional performance to increase your returns?
                </p>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "oklch(0.75 0.02 60)" }}
                >
                  Request a private consultation to see how we can help.
                </p>

                <div className="mt-auto">
                  <a
                    href="https://lp.algoalpha.co/portfolio-accelerator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-amber px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all hover:bg-amber-glow hover:gap-5"
                    style={{ color: "oklch(0.10 0.01 60)" }}
                  >
                    Request Consultation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}
