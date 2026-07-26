"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BookOpen,
  Network,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { learningVideos } from "@/data/videos";

export default function LearningBillboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % learningVideos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeVideo = learningVideos[activeIndex];

  return (
    <section
      aria-label="Utech Learning Lab"
      className="
        relative
        overflow-hidden
        px-6
        py-16
        sm:py-20
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-blue-500/20
            bg-slate-950
            shadow-2xl
            shadow-blue-950/20
          "
        >
          {/* Grid background */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-20
              [background-image:linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          {/* Scan line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-blue-500/10
              to-transparent
              blur-xl
            "
          />

          <div
            className="
              relative
              grid
              gap-10
              p-7
              sm:p-10
              lg:grid-cols-[1.4fr_0.8fr]
              lg:p-14
            "
          >
            {/* Main billboard */}
            <div>
              {/* Live status */}
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-emerald-400
                  "
                >
                  <motion.span
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />
                  Live Learning Lab
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1.5
                    text-xs
                    text-gray-400
                  "
                >
                  <Radio size={13} />
                  UTECH // EDU
                </div>
              </div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-7"
              >
                <div className="flex items-center gap-3">
                  <BookOpen
                    size={22}
                    className="text-blue-400"
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-blue-400
                    "
                  >
                    Utech Learning Lab
                  </span>
                </div>

                <h2
                  className="
                    mt-4
                    max-w-3xl
                    text-4xl
                    font-black
                    leading-[1.05]
                    tracking-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Master the Network.
                  <br />
                  <span className="text-blue-500">
                    Understand the Attack.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-2xl
                    text-base
                    leading-7
                    text-gray-400
                    sm:text-lg
                  "
                >
                  Explore short visual lessons covering
                  networking, cybersecurity, computer systems,
                  and core technology concepts.
                </p>
              </motion.div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#learning"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-600/20
                    transition
                    hover:bg-blue-500
                    hover:shadow-blue-500/30
                  "
                >
                  <Play size={16} fill="currentColor" />
                  Explore Learning Lab
                </a>

                <a
                  href="#learning"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-gray-300
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  View all lessons
                  <ArrowDown size={16} />
                </a>
              </div>
            </div>

            {/* Live topic monitor */}
            <div
              className="
                relative
                flex
                min-h-[300px]
                flex-col
                justify-between
                rounded-3xl
                border
                border-white/10
                bg-black/30
                p-6
                backdrop-blur-xl
                sm:p-7
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                  "
                >
                  Now Exploring
                </span>

                <Sparkles
                  size={17}
                  className="text-blue-400"
                />
              </div>

              <motion.div
                key={activeVideo.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="py-8"
              >
                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-widest
                    text-blue-400
                  "
                >
                  {activeVideo.category === "Networking" && (
                    <Network size={15} />
                  )}

                  {activeVideo.category === "Cybersecurity" && (
                    <ShieldCheck size={15} />
                  )}

                  {activeVideo.category === "Hardware" && (
                    <Sparkles size={15} />
                  )}

                  {activeVideo.category}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {activeVideo.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {activeVideo.level} lesson
                </p>
              </motion.div>

              {/* Topic progress */}
              <div>
                <div className="mb-3 flex justify-between text-xs">
                  <span className="text-gray-600">
                    LESSON STREAM
                  </span>

                  <span className="font-mono text-blue-400">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(learningVideos.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    animate={{
                      width: `${
                        ((activeIndex + 1) /
                          learningVideos.length) *
                        100
                      }%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full rounded-full bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div
            className="
              relative
              overflow-hidden
              border-t
              border-white/10
              bg-black/30
              px-6
              py-3
              sm:px-10
            "
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                flex
                w-max
                items-center
                gap-8
                whitespace-nowrap
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              {[...learningVideos, ...learningVideos].map(
                (video, index) => (
                  <span
                    key={`${video.id}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <span className="text-blue-500">◆</span>
                    {video.title}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats beneath billboard */}
        <div
          className="
            mx-auto
            mt-6
            flex
            max-w-3xl
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-3
            text-center
            text-xs
            uppercase
            tracking-[0.16em]
            text-gray-600
          "
        >
          <span>15+ Visual Lessons</span>
          <span>Networking</span>
          <span>Cybersecurity</span>
          <span>Hardware</span>
          <span>Built by Utech</span>
        </div>
      </div>
    </section>
  );
}
