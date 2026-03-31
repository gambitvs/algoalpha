"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ClientReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: POST to /api/client-referral when webhook is configured
    // const formData = new FormData(e.currentTarget);
    // await fetch("/api/client-referral", { method: "POST", body: formData });

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSuccess(true);
  }

  if (isSuccess) {
    return (
      <div className="mt-10 rounded-lg border border-border bg-bg-surface p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center border border-amber">
          <Check className="h-5 w-5 text-amber" />
        </div>
        <h3 className="mt-4 font-heading text-h3 text-text-primary">
          Referral Submitted
        </h3>
        <p className="mt-2 text-body text-text-secondary">
          Thank you for referring a friend to Algo Alpha. We&apos;ll reach out
          to them shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="yourName"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            Your Name
          </label>
          <Input
            id="yourName"
            name="yourName"
            type="text"
            required
            placeholder="Your full name"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
        <div>
          <label
            htmlFor="yourEmail"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            Your Email
          </label>
          <Input
            id="yourEmail"
            name="yourEmail"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="friendName"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            Friend&apos;s Name
          </label>
          <Input
            id="friendName"
            name="friendName"
            type="text"
            required
            placeholder="Friend's full name"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
        <div>
          <label
            htmlFor="friendEmail"
            className="mb-1.5 block text-small font-medium text-text-secondary"
          >
            Friend&apos;s Email
          </label>
          <Input
            id="friendEmail"
            name="friendEmail"
            type="email"
            required
            placeholder="friend@example.com"
            className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="friendPhone"
          className="mb-1.5 block text-small font-medium text-text-secondary"
        >
          Friend&apos;s Phone
        </label>
        <Input
          id="friendPhone"
          name="friendPhone"
          type="tel"
          required
          placeholder="+1 (555) 000-0000"
          className="h-11 rounded-none border-border bg-bg-surface text-text-primary placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-amber/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-small font-medium text-text-secondary"
        >
          Message <span className="text-text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Anything you'd like us to know about your referral..."
          className={cn(
            "w-full min-w-0 rounded-none border border-border bg-bg-surface px-2.5 py-2.5 text-base text-text-primary transition-colors outline-none placeholder:text-text-muted focus-visible:border-amber focus-visible:ring-3 focus-visible:ring-amber/20 md:text-sm",
          )}
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
        {isSubmitting ? "Submitting..." : "Submit Referral"}
      </Button>
    </form>
  );
}
