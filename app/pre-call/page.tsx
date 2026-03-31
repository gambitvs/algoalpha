"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check, BookOpen, Play } from "lucide-react";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const checklistItems = [
  "Your investment goals and risk tolerance",
  "Questions about our algorithmic strategies",
  "Your current portfolio overview",
  "Timeline for getting started",
];

const resources = [
  {
    title: "How Algo Alpha Works",
    description:
      "A walkthrough of our trading technology and how it integrates with your brokerage.",
    href: "https://www.youtube.com/watch?v=vsup7V6v-Zo",
    icon: Play,
    external: true,
  },
  {
    title: "Client Results & Strategies",
    description:
      "Hear from our members and learn about the strategies powering their portfolios.",
    href: "https://www.youtube.com/watch?v=Dannp9g6Fjs",
    icon: Play,
    external: true,
  },
  {
    title: "Download Our EBook",
    description:
      "A comprehensive guide to algorithmic trading and portfolio diversification.",
    href: "https://info.algoalpha.co/download",
    icon: BookOpen,
    external: true,
  },
];

export default function PreCallPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-deep px-6 py-24">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        <div className="text-center">
          <motion.h1
            className={cn("font-heading text-h2 text-text-primary")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.1 }}
          >
            Prepare for Your Consultation
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-md text-body text-text-secondary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.25 }}
          >
            Getting the most out of your consultation starts with a little
            preparation. Here&apos;s what to have ready.
          </motion.p>
        </div>

        {/* Checklist */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.4 }}
        >
          <h2 className="mb-4 font-mono text-small uppercase tracking-wide text-amber">
            What to Prepare
          </h2>
          <ul className="space-y-3">
            {checklistItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-body text-text-secondary"
              >
                <span className="mt-[0.3em] flex h-5 w-5 shrink-0 items-center justify-center border border-border">
                  <Check className="h-3 w-3 text-amber" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.55 }}
        >
          <h2 className="mb-4 font-mono text-small uppercase tracking-wide text-amber">
            Resources
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  target={resource.external ? "_blank" : undefined}
                  rel={resource.external ? "noopener noreferrer" : undefined}
                  className="group block rounded-lg border border-border bg-bg-surface p-5 transition-colors hover:border-border-active hover:bg-bg-elevated"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center border border-border transition-colors group-hover:border-amber">
                    <Icon className="h-4 w-4 text-amber" />
                  </div>
                  <h3 className="text-sm font-medium text-text-primary">
                    {resource.title}
                  </h3>
                  <p className="mt-1 text-small text-text-muted">
                    {resource.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom encouragement */}
        <motion.p
          className="mt-14 text-center text-body text-text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          We&apos;re excited to show you what Algo Alpha can do for your
          portfolio. See you soon.
        </motion.p>
      </motion.div>
    </div>
  );
}
