"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Search, Sparkles } from "lucide-react";

import {
  learningVideos,
  videoCategories,
  type LearningVideo,
  type VideoCategory,
} from "@/data/videos";

import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";

export default function LearningLab() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | VideoCategory
  >("All");

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedVideo, setSelectedVideo] =
    useState<LearningVideo | null>(null);

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return learningVideos.filter((video) => {
      const matchesCategory =
        activeCategory === "All" ||
        video.category === activeCategory;

      const matchesSearch =
        !query ||
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section
        id="learning"
        className="
          relative
          overflow-hidden
          px-6
          py-24
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div
              className="
                mx-auto
                mb-5
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-blue-300
              "
            >
              <BookOpen size={16} />
              Learning Lab
            </div>

            <h2
              className="
                text-3xl
                font-black
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Networking & Cybersecurity
              <span className="text-blue-500"> Explained</span>
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-gray-400
                sm:text-lg
              "
            >
              Short visual lessons covering networking,
              cybersecurity, computer systems, and
              fundamental technology concepts.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="
              mx-auto
              mt-10
              flex
              w-fit
              flex-wrap
              items-center
              justify-center
              gap-3
              text-sm
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-gray-300
              "
            >
              <Sparkles size={15} className="text-blue-400" />
              {learningVideos.length} learning videos
            </div>

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-gray-400
              "
            >
              {filteredVideos.length} shown
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mt-12 space-y-5">
            {/* Search */}
            <div className="relative mx-auto max-w-2xl">
              <Search
                size={19}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search networking, DDoS, TCP/IP, VPN..."
                aria-label="Search learning videos"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  py-4
                  pl-12
                  pr-4
                  text-sm
                  text-white
                  outline-none
                  backdrop-blur-xl
                  placeholder:text-gray-600
                  transition
                  focus:border-blue-500/50
                  focus:bg-white/[0.07]
                  focus:ring-2
                  focus:ring-blue-500/10
                "
              />
            </div>

            {/* Category filters */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
              "
            >
              {videoCategories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      rounded-full
                      border
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      transition
                      ${
                        isActive
                          ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video grid */}
          <AnimatePresence mode="popLayout">
            {filteredVideos.length > 0 ? (
              <motion.div
                layout
                className="
                  mt-12
                  grid
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {filteredVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(index * 0.04, 0.2),
                    }}
                  >
                    <VideoCard
                      video={video}
                      onSelect={setSelectedVideo}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  mt-12
                  rounded-3xl
                  border
                  border-dashed
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-20
                  text-center
                "
              >
                <Search
                  size={32}
                  className="mx-auto text-gray-600"
                />

                <h3 className="mt-5 text-xl font-bold text-white">
                  No lessons found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search term or select a
                  different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="
                    mt-6
                    rounded-full
                    bg-blue-600
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-500
                  "
                >
                  Reset filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Video modal */}
      <VideoPlayer
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}
