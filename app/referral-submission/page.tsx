"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function ReferralSubmissionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-deep px-6 py-24">
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        {/* Decorative amber line */}
        <motion.div
          className="mx-auto h-px w-12 bg-amber"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.2 }}
        />

        <motion.h1
          className={cn("mt-8 font-heading text-h2 text-text-primary")}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.3 }}
        >
          Thank You for Signing Up
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-md text-body text-text-secondary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.45 }}
        >
          You&apos;re now enrolled in the Algo Alpha Referral Program.
          We&apos;ll be in touch with everything you need to start sharing Algo
          Alpha with your network and earning rewards.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.6 }}
        >
          <Link href="/">
            <Button
              className="h-11 rounded-none bg-amber px-8 text-sm font-medium uppercase tracking-wide text-bg-deep hover:bg-amber-glow"
              size="lg"
            >
              Return to Homepage
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
