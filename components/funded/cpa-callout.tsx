"use client";

import Link from "next/link";
import { Shield, FileCheck, ArrowRight } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

const badges = [
  {
    Icon: Shield,
    title: "MyFXBook 3rd Party Verified",
    description: "Live track record. 100% transparency.",
  },
  {
    Icon: FileCheck,
    title: "CPA Audited Returns",
    description: "Independent review of all trade data.",
  },
];

export default function CpaCallout() {
  return (
    <section className="py-16 lg:py-24 bg-warm-white text-bg-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-dim">
            INDEPENDENTLY VERIFIED
          </p>

          {/* Badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {badges.map(({ Icon, title, description }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/10 border border-amber/20">
                  <Icon className="w-5 h-5 text-amber-dim" />
                </div>
                <div>
                  <p className="font-mono text-sm font-medium">{title}</p>
                  <p className="mt-1 text-small text-bg-deep/60">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="mt-8">
            <Link
              href="/cpa-certifications"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber-dim hover:text-amber transition-colors"
            >
              View CPA Letters
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs italic text-bg-deep/40">
            Past performance is not indicative of future results.
          </p>
        </SectionEntrance>
      </div>
    </section>
  );
}
