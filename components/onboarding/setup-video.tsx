"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface SetupVideoProps {
  youtubeId: string;
}

export default function SetupVideo({ youtubeId }: SetupVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8 lg:py-12"
    >
      {playing ? (
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title="Setup Guide"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
        >
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt="Watch setup video"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber/90 transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-bg-deep fill-bg-deep ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="font-mono text-[10px] uppercase tracking-wider text-white/70">
              Watch Setup Guide
            </p>
          </div>
        </button>
      )}
    </motion.div>
  );
}
