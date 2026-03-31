"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

function AnimatedCheckmark() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Circle */}
      <motion.circle
        cx="40"
        cy="40"
        r="36"
        stroke="var(--color-amber)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
      />
      {/* Checkmark */}
      <motion.path
        d="M24 42L34 52L56 30"
        stroke="var(--color-amber)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.9 }}
      />
    </motion.svg>
  );
}

const bulletItems = [
  "Your investment goals and risk tolerance",
  "An overview of Algo Alpha's algorithmic strategies",
  "How our platform integrates with your brokerage",
  "Pricing, onboarding, and next steps",
];

export default function CallBookedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-deep px-6 py-24">
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <AnimatedCheckmark />

        <motion.h1
          className={cn("mt-8 font-heading text-h2 text-text-primary")}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.4 }}
        >
          Your Consultation is Booked
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-md text-body text-text-secondary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.55 }}
        >
          We&apos;re looking forward to speaking with you. During your
          consultation, our team will walk you through everything you need to
          know about getting started with Algo Alpha.
        </motion.p>

        <motion.div
          className="mx-auto mt-8 max-w-sm text-left"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.7 }}
        >
          <p className="mb-3 text-small font-medium uppercase tracking-wide text-amber">
            What we&apos;ll cover
          </p>
          <ul className="space-y-2">
            {bulletItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-body text-text-secondary"
              >
                <span className="mt-[0.35em] block h-1.5 w-1.5 shrink-0 bg-amber" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.85 }}
        >
          <Link href="/pre-call">
            <Button
              className="h-11 rounded-none bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep hover:bg-amber-glow"
              size="lg"
            >
              Prepare for Your Call
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
