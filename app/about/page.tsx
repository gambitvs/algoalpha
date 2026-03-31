import type { Metadata } from "next";
import SectionEntrance from "@/components/layout/section-entrance";
import AboutHero from "@/components/about/about-hero";
import VisionCards from "@/components/about/vision-cards";
import TeamProfiles from "@/components/about/team-profiles";
import PerformanceGallery from "@/components/about/performance-gallery";
import ClientResults from "@/components/about/client-results";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Algo Alpha's mission to make institutional-grade algorithmic trading technology accessible to individual investors.",
  openGraph: {
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Algo Alpha",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <SectionEntrance>
        <AboutHero />
      </SectionEntrance>

      <SectionEntrance delay={100}>
        <VisionCards />
      </SectionEntrance>

      <SectionEntrance delay={150}>
        <TeamProfiles />
      </SectionEntrance>

      <SectionEntrance delay={200}>
        <PerformanceGallery />
      </SectionEntrance>

      <SectionEntrance delay={250}>
        <ClientResults />
      </SectionEntrance>
    </main>
  );
}
