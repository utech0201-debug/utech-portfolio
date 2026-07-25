"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Play, ShieldCheck, Network, Cpu } from "lucide-react";
import type { LearningVideo } from "@/data/videos";

type VideoPlayerProps = {
  video: LearningVideo | null;
  onClose: () => void;
};

const categoryIcons = {
  Networking: Network,
  Cybersecurity: ShieldCheck,
  Hardware: Cpu,
};

export default function VideoPlayer({
  video,
  onClose,
}: VideoPlayerProps) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            backdrop-blur-md
            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-y-auto
              rounded-3xl
              border
              border-white/10
              bg-slate-950
              shadow-2xl
              shadow-black/50
            "
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video player"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/60
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/10
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
              "
            >
              <X size={20} />
            </button>

            {/* Video */}
            <div className="relative aspect-video w-full bg-black">
              <video
                key={video.video}
                src={video.video}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Information */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {(() => {
                  const Icon = categoryIcons[video.category];

                  return (
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-blue-500/10
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-blue-300
                      "
                    >
                      <Icon size={14} />
                      {video.category}
                    </span>
                  );
                })()}

                <span
                  className="
                    rounded-full
                    bg-white/5
                    px-3
                    py-1.5
                    text-xs
                    text-gray-400
                  "
                >
                  {video.level}
                </span>
              </div>

              <h2
                className="
                  mt-5
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                {video.title}
              </h2>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                "
              >
                {video.description}
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-500
                "
              >
                <Play size={15} />
                <span>Learning Lab</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
