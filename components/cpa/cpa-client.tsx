"use client";

import SectionEntrance from "@/components/layout/section-entrance";
import CPATable from "@/components/cpa/cpa-table";
import TrustpilotPlaceholder from "@/components/shared/trustpilot-placeholder";
import FAQs from "@/components/home/faqs";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";

export default function CPAClient() {
  return (
    <main className="bg-bg-deep">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.75 0.16 65) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionEntrance>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              CPA Certifications
            </p>
            <h1 className="text-h1 font-serif text-text-primary">
              CPA Verification
            </h1>
            <p className="text-body text-text-secondary max-w-3xl mt-5">
              Our strategies here at Algo Alpha aren&apos;t just MyFXBook 3rd
              party verified but also go through independent CPA verification.
              That way as it relates to strategy what you see is what you get.
              Review them below.
            </p>
            <p className="text-micro text-text-muted italic mt-4">
              Past performance is not indicative of future results. All trading
              involves risk and may not be suitable for all investors.
            </p>
          </SectionEntrance>
        </div>
      </section>

      {/* CPA Verification Table */}
      <CPATable />

      {/* Trustpilot */}
      <TrustpilotPlaceholder />

      {/* FAQs */}
      <FAQs />

      {/* Get Started Steps */}
      <GetStartedSteps />

      {/* Resource CTA */}
      <ResourceCTA />

      {/* Page Disclaimer */}
      <PageDisclaimer />
    </main>
  );
}
