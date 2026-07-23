"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900" />

      {/* Blue blob */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-blue-600/25 blur-[120px]"
      />

      {/* Cyan blob */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Purple blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[110px]"
      />
    </div>
  );
}