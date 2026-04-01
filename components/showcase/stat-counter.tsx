"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  format?: "compact" | "integer" | "decimal";
  label: string;
  delay?: number;
  large?: boolean;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  format = "decimal",
  label,
  delay = 0,
  large = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = performance.now() + delay;
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = EASE_OUT_EXPO(progress);
      setDisplayValue(eased * value);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, delay, prefersReducedMotion]);

  function formatValue(n: number): string {
    const abs = Math.abs(n);
    switch (format) {
      case "compact":
        if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
        if (abs >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
        return n.toFixed(0);
      case "integer":
        return Math.round(n).toLocaleString();
      case "decimal":
      default:
        return n.toFixed(n >= 100 ? 0 : 1);
    }
  }

  return (
    <div ref={ref}>
      <p
        className={`font-mono font-medium tracking-tight text-amber ${
          large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {prefix}
        {formatValue(displayValue)}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
        {label}
      </p>
    </div>
  );
}
