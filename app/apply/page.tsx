import type { Metadata } from "next";
import JotFormApplication from "@/components/apply/jotform-application";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Discover Algo Alpha's diversified portfolio strategies, engineered for investors and busy professionals. See if you qualify.",
};

export default function ApplyPage() {
  return <JotFormApplication />;
}
