"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

      {/* Network Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-60
        "
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Gentle dark readability overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/25
          via-black/20
          to-black/55
        "
      />

      {/* Subtle blue atmospheric glow */}
      <motion.div
        initial={false}
        animate={{
          x: [0, 100, -60, 0],
          y: [0, -60, 60, 0],
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
          bg-blue-500/10
          blur-[140px]
        "
      />

      {/* Subtle cyan glow */}
      <motion.div
        initial={false}
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -60, 0],
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
          bg-cyan-400/10
          blur-[160px]
        "
      />

      {/* Very subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(to_right,#38bdf822_1px,transparent_1px),linear-gradient(to_bottom,#38bdf822_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      />

      {/* Edge vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.35)_100%)]
        "
      />

    </div>
  );
}
