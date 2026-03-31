import Hero from "@/components/home/hero";
import Differentiators from "@/components/home/differentiators";
import HowItWorks from "@/components/home/how-it-works";
import StrategySuite from "@/components/home/strategy-suite";
import Results from "@/components/home/results";
import Testimonials from "@/components/home/testimonials";
import Resources from "@/components/home/resources";
import CtaBanner from "@/components/home/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentiators />
      <HowItWorks />
      <StrategySuite />
      <Results />
      <Testimonials />
      <Resources />
      <CtaBanner />
    </>
  );
}
