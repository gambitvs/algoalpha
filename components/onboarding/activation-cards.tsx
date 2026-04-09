"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, X, ArrowRight, ExternalLink } from "lucide-react";
import SectionEntrance from "@/components/layout/section-entrance";

/* ------------------------------------------------------------------ */
/*  Data types                                                        */
/* ------------------------------------------------------------------ */

export interface AlgoData {
  name: string;
  slug: string;
  broker: string;
  platform: string;
  leverage?: string;
  setupDocUrl: string;
  steps: string[];
}

export interface ActivationCardsProps {
  algos: AlgoData[];
  expandedCard: string | null;
  onToggle: (slug: string | null) => void;
}

/* ------------------------------------------------------------------ */
/*  Hardcoded algo constants                                          */
/* ------------------------------------------------------------------ */

export const SE_ALGOS: AlgoData[] = [
  {
    name: "Gold Alpha",
    slug: "gold-alpha",
    broker: "GODO, OX Securities, GNT",
    platform: "MT4/MT5",
    leverage: "1:500 recommended (min 1:200)",
    setupDocUrl:
      "https://docs.google.com/document/d/1k8gJKiuzE61c8XJojO1YqS9YK3B7HhdYcpLIhbrUP88/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Open broker account with 1:500 leverage (minimum 1:200)",
      "Create MT5 live account — save login, password, and investor password",
      "Deposit funds and allow clearing before proceeding",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically; optional MT5 mobile app",
    ],
  },
  {
    name: "Crypto Alpha",
    slug: "crypto-alpha",
    broker: "GNT, GODO, OX Securities",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/1HAa9WEbldnkKgVgpHtIFKlbNnao3fX4hEmyQM9QCaMA/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Open broker account using provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — monitor via MT5 app and MyFXBook",
    ],
  },
  {
    name: "Alpha Core",
    slug: "alpha-core",
    broker: "GNT, GODO, OX Securities",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/1RF-fbbtkdo4iBLYV27FKFEFpyi5_JWpt6OtpEVk0k08/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Open broker account using provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically",
    ],
  },
  {
    name: "Alpha Trader",
    slug: "alpha-trader",
    broker: "GNT, GODO, OX Securities",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/1rqw0kmSdTGp4gCb_VJarFkdCuAN-lKfnJc96hHjbN2s/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Open broker account using provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically",
    ],
  },
  {
    name: "Intelligent Portfolio",
    slug: "intelligent-portfolio",
    broker: "GNT, GODO, OX Securities",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/forms/d/1d09MwHYybm_zQ0bsdG3MRkQ_7NRuUHrluVRFqrDkjng/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Open broker account using provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically",
    ],
  },
];

export const FTP_ALGOS: AlgoData[] = [
  {
    name: "Alpha X Funded",
    slug: "alpha-x-funded",
    broker: "GNT X (Funded Trader Program)",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/10zCzng51_A7HmyompG1Pxpc_cIoutHrgaftPtB3jiOU/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Sign up for GNT X account using the provided tracking link",
      "Create MT5 live account — save login, password, investor password",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — monitor via MT5 app and MyFXBook",
    ],
  },
  {
    name: "Alpha Y Funded",
    slug: "alpha-y-funded",
    broker: "GNT X (via GNT X Account)",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/1NGnXrUmoKFiUR_S3ziHjdn4T1PEw0r7h4ws8sPzFhYQ/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Sign up for GNT X account using the provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically",
    ],
  },
  {
    name: "Alpha Core Funded",
    slug: "alpha-core-funded",
    broker: "GNT X",
    platform: "MT5",
    setupDocUrl:
      "https://docs.google.com/document/d/1RF-fbbtkdo4iBLYV27FKFEFpyi5_JWpt6OtpEVk0k08/edit",
    steps: [
      "Register at app.algoalpha.co/register and verify email",
      "Sign up for GNT X account using the provided tracking link",
      "Create MT5 live account — save all credentials securely",
      "Deposit funds and wait for clearing",
      "Submit activation form with purchase email and MT5 login",
      "Go live — trades execute automatically",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Spring config                                                     */
/* ------------------------------------------------------------------ */

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 28,
};

/* ------------------------------------------------------------------ */
/*  Collapsed card                                                    */
/* ------------------------------------------------------------------ */

function CollapsedCard({
  algo,
  index,
  isExpanded,
  isDimmed,
  onToggle,
  prefersReducedMotion,
}: {
  algo: AlgoData;
  index: number;
  isExpanded: boolean;
  isDimmed: boolean;
  onToggle: (slug: string | null) => void;
  prefersReducedMotion: boolean | null;
}) {
  if (isExpanded) return null;

  const dimProps = prefersReducedMotion
    ? {}
    : {
        animate: {
          opacity: isDimmed ? 0.4 : 1,
          scale: isDimmed ? 0.97 : 1,
        },
        transition: { duration: 0.2 },
      };

  return (
    <motion.div
      layout={!prefersReducedMotion}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: isDimmed ? 0.4 : 1,
        scale: isDimmed ? 0.97 : 1,
      }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { ...springTransition, delay: index * 0.06 }
      }
      {...(isDimmed && !prefersReducedMotion ? dimProps : {})}
      className={`rounded-lg border border-border bg-bg-surface p-6 cursor-pointer transition-all duration-200 hover:border-amber/30 ${
        isDimmed ? "pointer-events-none" : ""
      }`}
      onClick={() => onToggle(algo.slug)}
    >
      <h3 className="font-serif text-xl text-text-primary">{algo.name}</h3>

      <div className="mt-3 space-y-1">
        <p className="font-mono text-[12px] text-text-secondary">
          Broker: {algo.broker}
        </p>
        <p className="font-mono text-[12px] text-text-secondary">
          Platform: {algo.platform}
        </p>
        {algo.leverage && (
          <p className="font-mono text-[12px] text-text-secondary">
            Leverage: {algo.leverage}
          </p>
        )}
      </div>

      <button className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
        View Details
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
      </button>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Expanded card                                                     */
/* ------------------------------------------------------------------ */

function ExpandedCard({
  algo,
  onToggle,
  prefersReducedMotion,
}: {
  algo: AlgoData;
  onToggle: (slug: string | null) => void;
  prefersReducedMotion: boolean | null;
}) {
  return (
    <motion.div
      layout={!prefersReducedMotion}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
      transition={prefersReducedMotion ? { duration: 0 } : springTransition}
      className="col-span-full rounded-lg border border-border bg-bg-surface p-8"
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-serif text-xl text-text-primary">{algo.name}</h3>

          <div className="mt-3 space-y-1">
            <p className="font-mono text-[12px] text-text-secondary">
              Broker: {algo.broker}
            </p>
            <p className="font-mono text-[12px] text-text-secondary">
              Platform: {algo.platform}
            </p>
            {algo.leverage && (
              <p className="font-mono text-[12px] text-text-secondary">
                Leverage: {algo.leverage}
              </p>
            )}
          </div>
        </div>

        <button
          onClick={() => onToggle(null)}
          className="rounded-md p-1.5 text-text-muted hover:text-text-primary hover:bg-bg-surface transition-colors"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-6" />

      {/* Steps */}
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber mb-4">
        Setup Steps
      </p>

      <ol className="space-y-3">
        {algo.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber/10 border border-amber/20 font-mono text-[10px] text-amber flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <span className="text-sm text-text-secondary leading-relaxed">
              {step}
            </span>
          </li>
        ))}
      </ol>

      {/* Action buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={algo.setupDocUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-amber hover:text-amber-glow transition-colors"
        >
          Open Setup Guide
          <ExternalLink className="h-3.5 w-3.5" />
        </a>

        <a
          href={algo.setupDocUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] bg-amber text-bg-deep px-6 py-3 rounded-md hover:brightness-110 transition-all"
        >
          Submit Activation Form
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function ActivationCards({
  algos,
  expandedCard,
  onToggle,
}: ActivationCardsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">
            Your Strategies
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Select a strategy to view setup instructions and activate.
          </p>
        </SectionEntrance>

        <motion.div
          layout={!prefersReducedMotion}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {algos.map((algo, i) => {
              const isExpanded = expandedCard === algo.slug;
              const isDimmed =
                expandedCard !== null && expandedCard !== algo.slug;

              if (isExpanded) {
                return (
                  <ExpandedCard
                    key={algo.slug}
                    algo={algo}
                    onToggle={onToggle}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                );
              }

              return (
                <CollapsedCard
                  key={algo.slug}
                  algo={algo}
                  index={i}
                  isExpanded={false}
                  isDimmed={isDimmed}
                  onToggle={onToggle}
                  prefersReducedMotion={prefersReducedMotion}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
