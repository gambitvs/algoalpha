"use client";

import SectionEntrance from "@/components/layout/section-entrance";

const blocks = [
  {
    number: "01",
    label: "EXECUTION",
    title: "Automated Execution",
    description:
      "State-of-the-art trading technology that executes trades on your behalf — without entering a single trade manually. Our algorithms monitor 30+ markets around the clock, entering and exiting positions based on AI and machine learning — not gut feelings.",
    stats: [
      { value: "24/7", label: "Market Coverage" },
      { value: "0", label: "Manual Trades" },
      { value: "30+", label: "Trading Pairs" },
    ],
  },
  {
    number: "02",
    label: "ONBOARDING",
    title: "Concierge Onboarding",
    description:
      "Every member goes through a comprehensive yet simple onboarding process, designed so you can self-manage with confidence after setup. From broker selection to algorithm activation, our streamlined process gets you live in under 30 minutes.",
    stats: [
      { value: "<30 min", label: "Integration Time" },
      { value: "<24h", label: "Time to Live" },
      { value: "∞", label: "Ongoing Support" },
    ],
  },
  {
    number: "03",
    label: "VERIFICATION",
    title: "Independently Verified Performance",
    description:
      "All of Algo Alpha's strategies are third-party verified through MyFXBook and CPA-audited, allowing you to trust and verify returns simultaneously. No black boxes — complete transparency into every trade.",
    stats: [
      { value: "100%", label: "Transparency" },
      { value: "3rd Party", label: "Verification" },
      { value: "Live", label: "Track Record" },
    ],
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <div className="mb-20 lg:mb-28">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              Why Algo Alpha
            </p>
            <h2 className="text-h2 font-serif text-text-primary max-w-3xl">
              What Sets Algo Alpha Apart
            </h2>
            <p className="mt-5 max-w-xl text-body text-text-secondary leading-relaxed">
              Gain access to our proven technology outperforming markets with
              alternative trading strategies.
            </p>
          </div>
        </SectionEntrance>

        <div className="flex flex-col gap-0">
          {blocks.map((block, i) => (
            <SectionEntrance key={block.number} delay={i * 200}>
              <div className="border-t border-border">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 py-14 lg:py-20">
                  {/* Left column: Number + Label */}
                  <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start gap-4 lg:gap-3">
                    <span className="font-mono text-[clamp(3rem,5vw,5rem)] font-medium leading-none text-amber/15 select-none">
                      {block.number}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                      {block.label}
                    </span>
                  </div>

                  {/* Middle column: Title + Description */}
                  <div className="lg:col-span-6 lg:pr-12">
                    <h3 className="text-h3 font-serif text-text-primary mb-4">
                      {block.title}
                    </h3>
                    <p className="text-body text-text-secondary leading-relaxed max-w-lg">
                      {block.description}
                    </p>
                  </div>

                  {/* Right column: Stats */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8 lg:justify-center lg:border-l lg:border-border lg:pl-10">
                    {block.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="font-mono text-[clamp(1.5rem,2vw,2rem)] font-medium text-text-primary tracking-tight">
                          {stat.value}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
