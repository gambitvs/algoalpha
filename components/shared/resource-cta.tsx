"use client";

import { ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

export default function ResourceCTA() {
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
                Ready to Discuss Your Portfolio?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-bg-deep/60 leading-relaxed">
                Algorithmic Trading In Your Portfolio is just a few clicks away.
                Schedule a private consultation with our team.
              </p>
              <div className="mt-8">
                <a
                  href="/apply"
                  className="group inline-flex items-center gap-3 bg-bg-deep px-8 py-4 text-sm font-medium uppercase tracking-wide text-warm-white transition-all hover:gap-5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right — decorative */}
            <div className="lg:col-span-5 hidden sm:flex justify-end">
              <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-bg-deep/10">
                <div
                  className="aspect-[4/3] bg-bg-deep/5"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 50%, oklch(0.75 0.16 65 / 0.08), transparent 60%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-bg-deep/10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-bg-deep/40"
                        >
                          <path
                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-bg-deep/30">
                        Live Performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionEntrance>

        {/* Stats bar */}
        <div className="mt-16 pt-10 border-t border-bg-deep/10">
          <SectionEntrance delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: "8", label: "Trading Strategies" },
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
