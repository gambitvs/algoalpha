import type { Metadata } from "next";
import { BookOpen, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You for Your Interest",
};

export default function DQPage() {
  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center px-4 py-16">
      <div className="max-w-[560px] text-center">
        <h1 className="font-serif text-h2 text-text-primary mb-6">
          Thank You for Your Interest
        </h1>

        <p className="text-body text-text-secondary mb-4">
          We appreciate you taking the time to apply. After reviewing your
          responses, our program may not be the best fit at this time. Our
          algorithmic trading strategies are designed for accounts with certain
          capital thresholds to ensure optimal performance and risk management.
        </p>

        <p className="text-body text-text-secondary mb-10">
          That said, we believe in helping every investor grow. Here are some
          resources that can help you build your knowledge and work toward your
          financial goals:
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://info.algoalpha.co/download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-none bg-amber text-bg-deep hover:bg-amber-glow px-6 h-11 font-sans text-sm font-medium uppercase tracking-wide transition-colors"
          >
            <BookOpen className="size-4" />
            Download Our Free EBook
          </a>

          <a
            href="https://info.algoalpha.co/qsc-program-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-none border border-border bg-bg-surface text-text-primary hover:bg-bg-elevated px-6 h-11 font-sans text-sm font-medium uppercase tracking-wide transition-colors"
          >
            <GraduationCap className="size-4" />
            Explore QuickStart Course
          </a>
        </div>

        <p className="mt-12 text-small text-text-muted">
          Questions? Reach us at{" "}
          <a
            href="mailto:support@algoalpha.co"
            className="text-amber hover:underline"
          >
            support@algoalpha.co
          </a>
        </p>
      </div>
    </div>
  );
}
