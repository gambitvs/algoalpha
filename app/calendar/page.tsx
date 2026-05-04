import type { Metadata } from "next";
import { Mail } from "lucide-react";

import CalendarBookingEmbed from "@/components/calendar/calendar-booking-embed";

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

        <CalendarBookingEmbed />

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
