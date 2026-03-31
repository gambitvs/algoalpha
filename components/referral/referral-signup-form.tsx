"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReferralSignupForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: POST to /api/referral when webhook is configured
    // const formData = new FormData(e.currentTarget);
    // await fetch("/api/referral", { method: "POST", body: formData });

    // For now, redirect to confirmation page
    router.push("/referral-submission");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First name"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-small font-medium text-text-secondary"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-small font-medium text-text-secondary"
        >
          Phone
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+1 (555) 000-0000"
          className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
        />
      </div>

      <div>
        <label
          htmlFor="referralCode"
          className="mb-1.5 block text-small font-medium text-text-secondary"
        >
          Referral Code <span className="text-text-muted">(optional)</span>
        </label>
        <Input
          id="referralCode"
          name="referralCode"
          type="text"
          placeholder="Enter referral code"
          className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "mt-2 h-11 w-full rounded-none bg-amber text-sm font-medium uppercase tracking-wide text-bg-deep hover:bg-amber-glow disabled:opacity-50",
        )}
        size="lg"
      >
        {isSubmitting ? "Submitting..." : "Join Referral Program"}
      </Button>
    </form>
  );
}
