"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      className="
      fixed
      inset-0
      -z-10
      overflow-hidden

      bg-white
      dark:bg-black

      transition-colors
      duration-500
      "
    >
      {/* Main Gradient */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-br

        from-blue-50
        via-white
        to-cyan-50

        dark:from-slate-950
        dark:via-black
        dark:to-slate-900
        "
      />

      {/* Blue Blob */}
      <motion.div
        initial={false}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-[-12rem]
        top-[-12rem]

        h-[30rem]
        w-[30rem]

        rounded-full

        bg-blue-400/30
        dark:bg-blue-600/25

        blur-[140px]
        "
      />

      {/* Cyan Blob */}
      <motion.div
        initial={false}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-12rem]
        right-[-12rem]

        h-[34rem]
        w-[34rem]

        rounded-full

        bg-cyan-400/30
        dark:bg-cyan-500/20

        blur-[160px]
        "
      />

      {/* Purple Blob */}
      <motion.div
        initial={false}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-1/2
        top-1/3

        h-[22rem]
        w-[22rem]

        -translate-x-1/2

        rounded-full

        bg-violet-400/20
        dark:bg-violet-500/15

        blur-[120px]
        "
      />

      {/* Decorative Grid */}
      <div
        className="
        absolute
        inset-0

        opacity-[0.04]

        dark:opacity-[0.03]

        bg-[linear-gradient(to_right,#2563eb22_1px,transparent_1px),linear-gradient(to_bottom,#2563eb22_1px,transparent_1px)]

        bg-[size:70px_70px]
        "
      />

      {/* Radial Fade */}
      <div
        className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.05))]

        dark:bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.45))]
        "
      />
    </div>
  );
}