"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, GraduationCap } from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-4xl font-bold text-white shadow-lg">
        U
      </div>

      <h3 className="text-center text-2xl font-bold">Utech</h3>

      <p className="mt-2 text-center text-gray-400">
        Full-Stack Developer
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <Code2 className="text-blue-400" />
          <span>Modern Web Applications</span>
        </div>

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-400" />
          <span>Cybersecurity</span>
        </div>

        <div className="flex items-center gap-3">
          <GraduationCap className="text-purple-400" />
          <span>Computer Science Student</span>
        </div>
      </div>
    </motion.div>
  );
}