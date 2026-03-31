"use client";

import { videos } from "@/lib/constants";
import VideoCard from "@/components/shared/video-card";
import SectionEntrance from "@/components/layout/section-entrance";

export default function Resources() {
  return (
    <section id="resources" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionEntrance>
          <h2 className="mb-10 text-h2 font-serif text-text-primary">
            Resources
          </h2>
        </SectionEntrance>

        <div className="flex flex-col gap-4 sm:gap-6">
          {videos.map((video, i) => (
            <SectionEntrance key={video.youtubeId} delay={i * 200}>
              <VideoCard video={video} />
            </SectionEntrance>
          ))}
        </div>
      </div>
    </section>
  );
}
