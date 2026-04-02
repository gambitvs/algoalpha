"use client";

import { ArrowRight, Play, Quote, Shield, Star } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";
import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import FAQs from "@/components/home/faqs";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const caseStudies = [
  {
    name: "Sales Pro",
    quote:
      "The algorithmic strategies delivered exactly what was promised — consistent, hands-off returns that let me focus on building my business.",
    metric: "+42%",
    metricLabel: "Portfolio Growth",
  },
  {
    name: "Ron",
    quote:
      "After years of trying to trade manually, Algo Alpha's systematic approach finally gave me the consistency I was looking for. The transparency is what sold me.",
    metric: "18mo",
    metricLabel: "Active Client",
  },
  {
    name: "William Platt",
    quote:
      "What impressed me most was the risk management. Every trade has defined parameters — no guessing, no emotion. Just disciplined execution.",
    metric: "3",
    metricLabel: "Strategies Active",
  },
  {
    name: "Internal 5k",
    quote:
      "Started with just $5,000 to test the waters. The results spoke for themselves — scaled up within the first quarter.",
    metric: "$5K",
    metricLabel: "Starting Capital",
  },
  {
    name: "Chris Ripatti",
    quote:
      "As someone who's worked in finance, I can tell the difference between marketing and real performance. Algo Alpha's MyFXBook verification sealed the deal.",
    metric: "Verified",
    metricLabel: "Via MyFXBook",
  },
];

const trustPoints = [
  {
    icon: Shield,
    title: "3rd Party Verified",
    desc: "All results independently verified through MyFXBook",
  },
  {
    icon: Star,
    title: "CPA Audited",
    desc: "Independent CPA verification of strategy performance",
  },
];

export default function ReviewsClient() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.75 0.16 65) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 80%, oklch(0.75 0.16 65 / 0.04), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEntrance>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                  Reviews &amp; Case Studies
                </p>
                <h1 className="text-h1 font-serif text-text-primary mt-4">
                  Real Results from{" "}
                  <span className="text-amber">Real Clients</span>
                </h1>
                <p className="mt-6 text-body text-text-secondary max-w-lg leading-relaxed">
                  Don&apos;t take our word for it. Our clients&apos; experiences
                  speak to the transparency, consistency, and professionalism
                  that define Algo Alpha.
                </p>
              </SectionEntrance>

              <SectionEntrance delay={200}>
                <div className="mt-8 grid grid-cols-3 gap-6">
                  {[
                    { value: "400+", label: "Clients" },
                    { value: "4.8/5", label: "Avg Rating" },
                    { value: "$300M+", label: "Daily Volume" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-mono text-2xl font-medium text-amber">
                        {stat.value}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionEntrance>
            </div>

            {/* Right — trust badges */}
            <SectionEntrance delay={300}>
              <div className="space-y-4">
                {trustPoints.map((tp) => {
                  const Icon = tp.icon;
                  return (
                    <div
                      key={tp.title}
                      className="rounded-xl border border-border bg-bg-surface p-6 flex items-start gap-4 transition-colors hover:border-amber/20"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber/10 border border-amber/20">
                        <Icon className="h-5 w-5 text-amber" />
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-medium text-text-primary">
                          {tp.title}
                        </h3>
                        <p className="mt-1 text-small text-text-secondary">
                          {tp.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <p className="text-micro text-text-muted italic pl-1">
                  Past performance does not guarantee future results. All
                  trading involves risk.
                </p>
              </div>
            </SectionEntrance>
          </div>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <div className="rounded-xl border border-amber/20 bg-bg-surface p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber via-amber-glow to-amber" />
              <Quote className="w-10 h-10 text-amber/15 mb-6" />
              <blockquote className="text-h3 font-serif text-text-primary leading-relaxed max-w-3xl">
                &ldquo;{caseStudies[0].quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
                  {caseStudies[0].name}
                </p>
                <span className="font-mono text-amber text-lg font-medium">
                  {caseStudies[0].metric}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                  {caseStudies[0].metricLabel}
                </span>
              </div>
            </div>
          </SectionEntrance>
        </div>
      </section>

      {/* ── Case Studies Grid ── */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              More Client Stories
            </p>
          </SectionEntrance>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.slice(1).map((study, index) => (
              <SectionEntrance key={study.name} delay={index * 100}>
                <div className="group h-full rounded-xl border border-border bg-bg-surface p-6 lg:p-8 transition-all hover:border-amber/30 hover:bg-bg-elevated">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
                        Case Study
                      </p>
                      <h3 className="text-h3 font-serif text-text-primary mt-1">
                        {study.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="font-mono text-xl font-medium text-amber">
                        {study.metric}
                      </p>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-text-muted">
                        {study.metricLabel}
                      </p>
                    </div>
                  </div>

                  <p className="text-small text-text-secondary italic leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </p>

                  <a
                    href="https://lp.algoalpha.co/portfolio-accelerator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </SectionEntrance>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <div className="rounded-xl border border-dashed border-border/50 bg-gradient-to-br from-bg-surface/50 to-bg-deep py-20 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, oklch(0.75 0.16 65) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber/10 border border-amber/20">
                  <Play className="w-8 h-8 text-amber/40" />
                </div>
                <h3 className="text-h3 font-serif text-text-primary">
                  Video Testimonials
                </h3>
                <p className="mt-2 text-small text-text-muted max-w-sm mx-auto">
                  Client video testimonials are being produced and will be
                  featured here soon.
                </p>
              </div>
            </div>
          </SectionEntrance>
        </div>
      </section>

      <TrustpilotReviews />
      <FAQs />
      <GetStartedSteps />
      <ResourceCTA />
      <PageDisclaimer />
    </main>
  );
}
