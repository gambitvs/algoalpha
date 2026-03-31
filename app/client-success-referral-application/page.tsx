import type { Metadata } from "next";
import { ClientReferralForm } from "@/components/referral/client-referral-form";

export const metadata: Metadata = {
  title: "Refer a Friend",
};

export default function ClientSuccessReferralPage() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24">
      <p className="font-mono text-small uppercase tracking-wide text-amber">
        Client Referral
      </p>
      <h1 className="mt-3 font-heading text-h2 text-text-primary">
        Refer a Friend
      </h1>
      <p className="mt-4 max-w-md text-body text-text-secondary">
        As a valued member, refer someone you know to Algo Alpha. Share the
        opportunity and help others take control of their financial future.
      </p>

      <ClientReferralForm />
    </div>
  );
}
