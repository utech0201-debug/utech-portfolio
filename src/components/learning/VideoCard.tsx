"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Network, Cpu } from "lucide-react";
import type { LearningVideo } from "@/data/videos";

type VideoCardProps = {
  video: LearningVideo;
  onSelect: (video: LearningVideo) => void;
};

const categoryIcons = {
  Networking: Network,
  Cybersecurity: ShieldCheck,
  Hardware: Cpu,
};

export default function VideoCard({
  video,
  onSelect,
}: VideoCardProps) {
  const Icon = categoryIcons[video.category];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        shadow-xl
        shadow-black/10
        backdrop-blur-xl
      "
    >
      <button
        type="button"
        onClick={() => onSelect(video)}
        className="
          block
          w-full
          text-left
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-blue-500
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
        "
        aria-label={`Watch ${video.title}`}
      >
        {/* Video preview */}
        <div className="relative aspect-video overflow-hidden bg-black">
          <video
            src={video.video}
            poster={video.poster}
            preload="metadata"
            muted
            playsInline
            className="
              h-full
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          {/* Play button */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <span
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-lg
                shadow-blue-600/30
                transition
                duration-300
                group-hover:scale-110
                group-hover:bg-blue-500
              "
            >
              <Play
                size={22}
                fill="currentColor"
                className="ml-0.5"
              />
            </span>
          </div>

          {/* Category */}
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-black/60
              px-3
              py-1.5
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            <Icon size={14} />
            {video.category}
          </div>

          {/* Level */}
          <span
            className="
              absolute
              bottom-4
              right-4
              rounded-full
              bg-black/60
              px-3
              py-1
              text-xs
              text-gray-200
              backdrop-blur-md
            "
          >
            {video.level}
          </span>
        </div>

        {/* Card content */}
        <div className="p-6">
          <h3
            className="
              text-xl
              font-bold
              text-white
              transition
              group-hover:text-blue-400
            "
          >
            {video.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-gray-400
            "
          >
            {video.description}
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              text-sm
            "
          >
            <span className="text-blue-400">
              Watch lesson
            </span>

            <span
              className="
                flex
                items-center
                gap-1
                text-gray-500
                transition
                group-hover:text-gray-300
              "
            >
              <Play size={14} />
              Play
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
