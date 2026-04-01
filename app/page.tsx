import Hero from "@/components/home/hero";
import StrategySuite from "@/components/home/strategy-suite";
import Differentiators from "@/components/home/differentiators";
import Results from "@/components/home/results";
import CtaBanner from "@/components/home/cta-banner";
import Programs from "@/components/home/programs";
import FAQs from "@/components/home/faqs";
import Resources from "@/components/home/resources";

export default function Home() {
  return (
    <>
      <Hero />
      <StrategySuite />
      <Differentiators />
      <Results />
      <CtaBanner />
      <Programs />
      <FAQs />
      <Resources />
    </>
  );
}
