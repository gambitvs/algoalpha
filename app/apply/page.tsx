import { ApplicationWizard } from "@/components/apply/application-wizard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Discover Algo Alpha's diversified portfolio strategies, engineered for investors and busy professionals. See if you qualify.",
};

export default function ApplyPage() {
  return <ApplicationWizard />;
}
