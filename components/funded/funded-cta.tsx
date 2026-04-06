"use client";

import { ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function FundedCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-warm-white text-bg-deep overflow-hidden">
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
          <div className="flex flex-col items-center text-center">
            <h2 className="text-h2 font-serif text-bg-deep">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-bg-deep/60 max-w-lg leading-relaxed">
              Schedule a private consultation with our team. We&apos;ll walk you
              through the strategies, the broker setup, and how you can be
              trading in under 30 minutes.
            </p>
            <div className="mt-8">
              <a
                href="https://lp.algoalpha.co/portfolio-accelerator"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-bg-deep px-8 py-4 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5"
              >
                Book Your Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </SectionEntrance>
      </div>
    </section>
  );
}
