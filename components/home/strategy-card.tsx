"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { StrategyVariant } from "@/lib/types";

interface StrategyCardProps {
  strategyName: string;
  variant: StrategyVariant;
}

function riskBadgeClass(settings: StrategyVariant["settings"]): string {
  switch (settings) {
    case "Conservative":
      return "bg-badge-conservative/15 text-badge-conservative border-badge-conservative/30";
    case "Moderate":
      return "bg-badge-moderate/15 text-badge-moderate border-badge-moderate/30";
    case "Aggressive":
      return "bg-badge-aggressive/15 text-badge-aggressive border-badge-aggressive/30";
  }
}

export default function StrategyCard({
  strategyName,
  variant,
}: StrategyCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-bg-surface p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h3 font-serif text-text-primary">
          {strategyName}
          {variant.settings && (
            <span className="ml-2 text-base font-sans text-text-secondary">
              {variant.settings !== "Conservative" &&
              variant.settings !== "Moderate"
                ? ""
                : `\u2014 ${variant.settings}`}
            </span>
          )}
        </h3>
        <Badge
          className={`shrink-0 border ${riskBadgeClass(variant.settings)}`}
        >
          {variant.settings}
        </Badge>
      </div>

      {/* Stats grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
            Market
          </span>
          <p className="mt-1 font-mono text-sm text-text-primary">
            {variant.market}
          </p>
        </div>
        <div>
          <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
            Return YTD
          </span>
          <p className="mt-1 font-mono text-lg font-medium text-amber">
            {variant.returnYTD}
          </p>
        </div>
        <div>
          <span className="text-micro font-mono uppercase tracking-widest text-text-muted">
            Position Size
          </span>
          <p className="mt-1 font-mono text-sm text-text-primary">
            {variant.positionSize}
          </p>
        </div>
      </div>

      {/* Performance screenshot */}
      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-[16/9] w-full bg-bg-deep">
          <Image
            src={variant.screenshotPath}
            alt={`${strategyName} ${variant.settings} performance`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="https://lp.algoalpha.co/portfolio-accelerator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center border border-amber px-6 text-sm font-medium text-amber transition-colors hover:bg-amber/10"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
