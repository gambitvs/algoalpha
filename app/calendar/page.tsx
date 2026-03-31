import type { Metadata } from "next";
import { CalendarDays, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Consultation",
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-bg-deep flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[720px]">
        <h1 className="font-serif text-h2 text-text-primary text-center mb-10">
          Book Your Consultation
        </h1>

        {/* Calendar embed placeholder */}
        <div className="rounded-2xl border border-border bg-bg-surface p-12 flex flex-col items-center justify-center min-h-[400px] text-center">
          <CalendarDays
            className="size-16 text-amber-dim mb-6"
            strokeWidth={1}
          />

          <p className="text-body text-text-secondary mb-2">
            Calendar integration will be configured with your scheduling tool.
          </p>

          <p className="text-small text-text-muted">
            Once connected, you will be able to select a date and time for your
            private consultation directly on this page.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-text-muted text-small">
          <Mail className="size-4" />
          <span>
            Questions? Contact{" "}
            <a
              href="mailto:support@algoalpha.co"
              className="text-amber hover:underline"
            >
              support@algoalpha.co
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
