"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function CtaBanner() {
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left — messaging */}
            <div className="lg:col-span-7">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-dim">
                Get Started
              </p>
              <h2 className="text-h2 font-serif text-bg-deep leading-tight">
                Ready to Talk Strategy?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-bg-deep/60 leading-relaxed">
                Schedule a private consultation with our team. We&apos;ll walk
                you through live demonstrations, our research, and how simple it
                is to get started.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <a
                href="https://lp.algoalpha.co/portfolio-accelerator"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-bg-deep px-8 py-4 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5"
              >
                Request Private Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </SectionEntrance>

        {/* Decorative divider */}
        <div className="mt-16 pt-10 border-t border-bg-deep/10">
          <SectionEntrance delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "6", label: "Trading Strategies" },
                { value: "30+", label: "Market Pairs" },
                { value: "24/7", label: "Automated Trading" },
                { value: "3rd Party", label: "Verified Results" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl font-medium text-bg-deep tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg-deep/40 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionEntrance>
        </div>
      </div>
    </section>
  );
}
