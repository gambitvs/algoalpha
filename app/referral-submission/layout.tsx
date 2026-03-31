import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Submitted",
};

export default function ReferralSubmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
