"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Y-axis labels (bottom to top)
const Y_LABELS = ["0%", "20%", "40%", "60%", "80%"];

// SVG dimensions
const W = 560;
const H = 320;
const PAD_LEFT = 48;
const PAD_RIGHT = 24;
const PAD_TOP = 24;
const PAD_BOTTOM = 40;
const CHART_W = W - PAD_LEFT - PAD_RIGHT;
const CHART_H = H - PAD_TOP - PAD_BOTTOM;

function yPos(pct: number) {
  return PAD_TOP + CHART_H - (pct / 80) * CHART_H;
}

// Traditional line: gentle slope to ~20%
const traditionalPoints = [
  [0, 2],
  [0.15, 4],
  [0.3, 7],
  [0.45, 10],
  [0.6, 13],
  [0.75, 16],
  [0.9, 18],
  [1, 20],
];

// Algo Alpha line: steep climb to ~65%
const algoAlphaPoints = [
  [0, 2],
  [0.1, 5],
  [0.2, 10],
  [0.3, 18],
  [0.4, 28],
  [0.5, 38],
  [0.6, 46],
  [0.7, 52],
  [0.8, 57],
  [0.9, 62],
  [1, 65],
];

function pointsToPath(points: number[][]) {
  return points
    .map((p, i) => {
      const x = PAD_LEFT + p[0] * CHART_W;
      const y = yPos(p[1]);
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

const traditionalPath = pointsToPath(traditionalPoints);
const algoAlphaPath = pointsToPath(algoAlphaPoints);

// Approximate path lengths for stroke animation
const TRAD_LENGTH = 520;
const ALGO_LENGTH = 620;

export default function HeroChart() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = isInView && !prefersReducedMotion;

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
        animate={
          shouldAnimate
            ? { opacity: 1, y: 0 }
            : prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : {}
        }
        transition={{
          duration: 0.3,
          ease: EASE_OUT_EXPO,
        }}
        className="relative rounded-xl border border-border bg-bg-surface p-6 overflow-hidden"
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.22 0.01 60) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="relative w-full h-auto"
          role="img"
          aria-label="Performance comparison chart showing Algo Alpha outperforming traditional investment strategies"
        >
          {/* Y-axis labels */}
          {Y_LABELS.map((label, i) => {
            const y = yPos(i * 20);
            return (
              <motion.text
                key={label}
                x={PAD_LEFT - 12}
                y={y + 4}
                textAnchor="end"
                className="fill-text-muted font-mono"
                style={{ fontSize: "11px" }}
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={
                  shouldAnimate
                    ? { opacity: 1 }
                    : prefersReducedMotion
                      ? { opacity: 1 }
                      : {}
                }
                transition={{
                  duration: 0.3,
                  delay: 0.3,
                  ease: EASE_OUT_EXPO,
                }}
              >
                {label}
              </motion.text>
            );
          })}

          {/* Horizontal grid lines */}
          {Y_LABELS.map((label, i) => {
            const y = yPos(i * 20);
            return (
              <motion.line
                key={`grid-${label}`}
                x1={PAD_LEFT}
                y1={y}
                x2={W - PAD_RIGHT}
                y2={y}
                className="stroke-border"
                strokeWidth={0.5}
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                animate={
                  shouldAnimate
                    ? { opacity: 1 }
                    : prefersReducedMotion
                      ? { opacity: 1 }
                      : {}
                }
                transition={{
                  duration: 0.3,
                  delay: 0.3,
                  ease: EASE_OUT_EXPO,
                }}
              />
            );
          })}

          {/* Traditional line */}
          <motion.path
            d={traditionalPath}
            fill="none"
            className="stroke-text-muted"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={TRAD_LENGTH}
            initial={
              prefersReducedMotion ? {} : { strokeDashoffset: TRAD_LENGTH }
            }
            animate={
              shouldAnimate
                ? { strokeDashoffset: 0 }
                : prefersReducedMotion
                  ? { strokeDashoffset: 0 }
                  : {}
            }
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
            }}
          />

          {/* Algo Alpha line with glow */}
          <motion.path
            d={algoAlphaPath}
            fill="none"
            className="stroke-amber"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={ALGO_LENGTH}
            style={{
              filter: "drop-shadow(0 0 6px oklch(0.8 0.18 65))",
            }}
            initial={
              prefersReducedMotion ? {} : { strokeDashoffset: ALGO_LENGTH }
            }
            animate={
              shouldAnimate
                ? { strokeDashoffset: 0 }
                : prefersReducedMotion
                  ? { strokeDashoffset: 0 }
                  : {}
            }
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: EASE_OUT_EXPO,
            }}
          />

          {/* Traditional endpoint label */}
          <motion.g
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={
              shouldAnimate
                ? { opacity: 1 }
                : prefersReducedMotion
                  ? { opacity: 1 }
                  : {}
            }
            transition={{ duration: 0.3, delay: 2.3 }}
          >
            <rect
              x={PAD_LEFT + CHART_W - 100}
              y={yPos(20) + 8}
              width={96}
              height={22}
              rx={4}
              className="fill-bg-elevated"
              stroke="oklch(0.30 0.01 60)"
              strokeWidth={0.5}
            />
            <text
              x={PAD_LEFT + CHART_W - 52}
              y={yPos(20) + 23}
              textAnchor="middle"
              className="fill-text-secondary font-mono"
              style={{ fontSize: "10px", letterSpacing: "0.08em" }}
            >
              TRADITIONAL
            </text>
          </motion.g>

          {/* Algo Alpha endpoint label */}
          <motion.g
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={
              shouldAnimate
                ? { opacity: 1 }
                : prefersReducedMotion
                  ? { opacity: 1 }
                  : {}
            }
            transition={{ duration: 0.3, delay: 2.5 }}
          >
            <rect
              x={PAD_LEFT + CHART_W - 84}
              y={yPos(65) - 22}
              width={86}
              height={20}
              rx={4}
              className="fill-amber/20"
            />
            <text
              x={PAD_LEFT + CHART_W - 41}
              y={yPos(65) - 8}
              textAnchor="middle"
              className="fill-amber font-mono"
              style={{
                fontSize: "9px",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              ALGO ALPHA
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* Disclaimer */}
      <p className="mt-3 text-center text-micro italic text-text-muted">
        Chart for illustrative purposes only. Past performance does not
        guarantee future results.
      </p>
    </div>
  );
}
