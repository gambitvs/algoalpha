import type { Metadata } from "next";
import { ReferralSignupForm } from "@/components/referral/referral-signup-form";

export const metadata: Metadata = {
  title: "Referral Program",
};

export default function ReferralSignupPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24">
      <p className="font-mono text-small uppercase tracking-wide text-amber">
        Referral Program
      </p>
      <h1 className="mt-3 font-heading text-h2 text-text-primary">
        Referral Program
      </h1>
      <p className="mt-4 max-w-md text-body text-text-secondary">
        Join the Algo Alpha Referral Program and earn rewards for introducing
        new members to our trading platform. Fill out the form below to get
        started.
      </p>

      <ReferralSignupForm />
    </div>
  );
}
