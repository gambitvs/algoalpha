"use client";

import {
  Shield,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";
import CPATable from "@/components/cpa/cpa-table";
import TrustpilotReviews from "@/components/shared/trustpilot-placeholder";
import FAQs from "@/components/home/faqs";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";

const verificationLayers = [
  {
    icon: Shield,
    title: "MyFXBook Verified",
    desc: "All live accounts are connected to MyFXBook for real-time, independent performance tracking.",
  },
  {
    icon: FileCheck,
    title: "CPA Audited",
    desc: "Each strategy undergoes independent CPA verification to ensure reported results match actual trading activity.",
  },
  {
    icon: CheckCircle2,
    title: "What You See Is What You Get",
    desc: "No simulated results, no cherry-picked timeframes. Full transparency from inception to today.",
  },
];

export default function CPAClient() {
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
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, oklch(0.75 0.16 65 / 0.05), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionEntrance>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                  CPA Certifications
                </p>
                <h1 className="text-h1 font-serif text-text-primary">
                  Independent{" "}
                  <span className="text-amber">CPA Verification</span>
                </h1>
                <p className="text-body text-text-secondary max-w-lg mt-6 leading-relaxed">
                  Our strategies aren&apos;t just MyFXBook 3rd party verified —
                  they also go through independent CPA verification. What you
                  see is what you get.
                </p>
              </SectionEntrance>

              <SectionEntrance delay={200}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="/join/apply"
                    className="inline-flex h-12 items-center gap-3 bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep transition-colors hover:bg-amber-glow"
                  >
                    View Live Performance
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-micro text-text-muted italic mt-4">
                  Past performance is not indicative of future results.
                </p>
              </SectionEntrance>
            </div>

            {/* Right — verification layers */}
            <SectionEntrance delay={300}>
              <div className="space-y-4">
                {verificationLayers.map((layer, i) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.title}
                      className="rounded-xl border border-border bg-bg-surface p-5 flex items-start gap-4 transition-colors hover:border-amber/20"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10 border border-amber/20">
                        <Icon className="h-5 w-5 text-amber" />
                      </div>
                      <div>
                        <h3 className="font-mono text-sm font-medium text-text-primary">
                          {layer.title}
                        </h3>
                        <p className="mt-1 text-small text-text-secondary leading-relaxed">
                          {layer.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionEntrance>
          </div>
        </div>
      </section>

      {/* ── CPA Table ── */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Strategy Verification Status
            </p>
          </SectionEntrance>
          <SectionEntrance delay={100}>
            <CPATable />
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
