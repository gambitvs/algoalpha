"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

interface ScrollProgressTrackerProps {
  sectionRefs: {
    video: React.RefObject<HTMLElement | null>;
    strategies: React.RefObject<HTMLElement | null>;
    portal: React.RefObject<HTMLElement | null>;
    resources: React.RefObject<HTMLElement | null>;
  };
}

const SEGMENTS = [
  { key: "video", label: "Video" },
  { key: "strategies", label: "Strategies" },
  { key: "portal", label: "Portal" },
  { key: "resources", label: "Resources" },
] as const;

type SectionKey = (typeof SEGMENTS)[number]["key"];

function useSectionProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollY } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const height = rect.height;

    if (latestY < top) {
      setProgress(0);
    } else if (latestY >= top + height) {
      setProgress(1);
    } else {
      setProgress((latestY - top) / height);
    }
  });

  return progress;
}

function SegmentButton({
  label,
  progress,
  isActive,
  onClick,
  reducedMotion,
}: {
  label: string;
  progress: number;
  isActive: boolean;
  onClick: () => void;
  reducedMotion: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center gap-1 cursor-pointer group"
    >
      <span
        className={`font-mono text-[9px] uppercase tracking-wider transition-colors duration-200 ${
          isActive ? "text-amber" : "text-text-muted"
        } group-hover:text-amber`}
      >
        {label}
      </span>
      <div className="w-full h-[2px] rounded-full bg-border/30 overflow-hidden">
        {reducedMotion ? (
          <div
            className="h-full bg-amber rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        ) : (
          <motion.div
            className="h-full bg-amber rounded-full origin-left"
            style={{ scaleX: progress }}
          />
        )}
      </div>
    </button>
  );
}

export default function ScrollProgressTracker({
  sectionRefs,
}: ScrollProgressTrackerProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  const videoProgress = useSectionProgress(sectionRefs.video);
  const strategiesProgress = useSectionProgress(sectionRefs.strategies);
  const portalProgress = useSectionProgress(sectionRefs.portal);
  const resourcesProgress = useSectionProgress(sectionRefs.resources);

  const progressMap: Record<SectionKey, number> = {
    video: videoProgress,
    strategies: strategiesProgress,
    portal: portalProgress,
    resources: resourcesProgress,
  };

  const handleClick = useCallback(
    (key: SectionKey) => {
      sectionRefs[key].current?.scrollIntoView({ behavior: "smooth" });
    },
    [sectionRefs],
  );

  const isActive = (key: SectionKey) => {
    const p = progressMap[key];
    return p > 0 && p < 1;
  };

  if (prefersReducedMotion) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-bg-deep/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center gap-2">
          {SEGMENTS.map((seg) => (
            <SegmentButton
              key={seg.key}
              label={seg.label}
              progress={progressMap[seg.key]}
              isActive={isActive(seg.key)}
              onClick={() => handleClick(seg.key)}
              reducedMotion
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 h-10 bg-bg-deep/95 backdrop-blur-sm border-b border-border/50 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center gap-2">
        {SEGMENTS.map((seg) => (
          <SegmentButton
            key={seg.key}
            label={seg.label}
            progress={progressMap[seg.key]}
            isActive={isActive(seg.key)}
            onClick={() => handleClick(seg.key)}
            reducedMotion={false}
          />
        ))}
      </div>
    </motion.div>
  );
}
