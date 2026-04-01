"use client";

import { ArrowRight, Play } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";
import TrustpilotPlaceholder from "@/components/shared/trustpilot-placeholder";
import FAQs from "@/components/home/faqs";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const stats = [
  { value: "400+", label: "Clients Served" },
  { value: "4.8/5", label: "Rating" },
  { value: "5+", label: "Case Studies" },
];

const caseStudies = [
  {
    name: "Sales Pro",
    quote:
      "Achieved remarkable results with our algorithmic trading strategies.",
  },
  {
    name: "Ron",
    quote: "Consistent returns that exceeded initial expectations.",
  },
  {
    name: "William Platt",
    quote: "A transformative experience in algorithmic investing.",
  },
  {
    name: "Internal 5k",
    quote: "Starting small and scaling to significant returns.",
  },
  {
    name: "Chris Ripatti",
    quote: "Professional-grade trading accessible to individual investors.",
  },
];

export default function ReviewsClient() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Dot-grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.75 0.16 65) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Reviews &amp; Case Studies
            </p>
            <h1 className="text-h1 font-serif text-text-primary mt-4">
              Our Client&apos;s Experience
              <br className="hidden sm:block" /> with Algorithmic Trading
            </h1>
          </SectionEntrance>

          <SectionEntrance delay={100}>
            <div className="mt-8 grid grid-cols-3 gap-8 border-t border-b border-border py-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-mono text-2xl sm:text-3xl font-medium text-amber">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionEntrance>

          <SectionEntrance delay={150}>
            <p className="text-micro text-text-muted italic mt-6">
              Past performance does not guarantee future results. All trading
              involves risk. Read our disclosures before investing.
            </p>
          </SectionEntrance>
        </div>
      </section>

      {/* ── Case Studies Grid ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <SectionEntrance key={study.name} delay={index * 75}>
                <div className="group rounded-lg border border-border bg-bg-surface p-6 transition-all hover:border-amber/30 hover:bg-bg-elevated">
                  <p className="font-mono text-3xl text-amber/15">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="h-px bg-border mt-2 mb-4" />
                  <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                    Case Study
                  </p>
                  <h3 className="text-h3 font-serif text-text-primary mt-1">
                    {study.name}
                  </h3>
                  <p className="text-small text-text-secondary italic mt-3 leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-amber hover:text-amber-glow transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </SectionEntrance>
            ))}
          </div>

          {/* ── Video Testimonials Placeholder ── */}
          <SectionEntrance delay={400}>
            <div className="mt-12 rounded-xl border border-dashed border-border/50 bg-bg-surface/30 py-16 text-center">
              <Play className="w-12 h-12 text-amber/20 mx-auto mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                Video Testimonials Coming Soon
              </p>
            </div>
          </SectionEntrance>
        </div>
      </section>

      {/* ── Shared Sections ── */}
      <TrustpilotPlaceholder />
      <FAQs />
      <GetStartedSteps />
      <ResourceCTA />
      <PageDisclaimer />
    </main>
  );
}
