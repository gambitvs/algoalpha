"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { VideoResource } from "@/lib/types";

interface VideoCardProps {
  video: VideoResource;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <motion.div
      layout={!prefersReducedMotion}
      className="overflow-hidden rounded-xl border border-border bg-bg-surface"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="p-4">
              <button
                onClick={() => setIsExpanded(false)}
                className="text-sm text-text-muted transition-colors hover:text-text-secondary"
              >
                Collapse
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsExpanded(true)}
            className="flex w-full items-center gap-6 p-4 text-left lg:p-6"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video w-24 sm:w-40 shrink-0 overflow-hidden rounded-lg lg:w-56">
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="h-full w-full object-cover"
              />
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-serif text-lg text-text-primary lg:text-[22px]">
                {video.title}
              </h3>
              <p className="line-clamp-2 text-[15px] text-text-secondary">
                {video.description}
              </p>
            </div>

            {/* Play button */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-bg-elevated">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1 h-5 w-5 text-amber"
              >
                <path
                  d="M8 5.14v13.72a1 1 0 001.5.86l11.5-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
