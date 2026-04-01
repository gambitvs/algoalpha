import ProgramSteps from "@/components/program-overview/program-steps";
import GetStartedSteps from "@/components/shared/get-started-steps";
import ResourceCTA from "@/components/shared/resource-cta";
import PageDisclaimer from "@/components/shared/page-disclaimer";

export default function ProgramOverviewPage() {
  return (
    <main>
      <ProgramSteps />
      <GetStartedSteps />
      <ResourceCTA />
      <PageDisclaimer />
    </main>
  );
}
