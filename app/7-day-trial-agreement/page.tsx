import { Metadata } from "next";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";

export const metadata: Metadata = {
  title: "7 Day Trial Agreement",
};

export default function SevenDayTrialAgreementPage() {
  return (
    <LegalPageLayout title="7 Day Trial Agreement">
      <p>
        Trial agreement terms will be provided during the onboarding process.
        For questions, contact{" "}
        <a href="mailto:support@algoalpha.co">support@algoalpha.co</a>.
      </p>
    </LegalPageLayout>
  );
}
