"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-blue-500 font-semibold">
            Hello, I&apos;m
          </p>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
            Utech
          </h1>

          <h2 className="mt-6 text-xl text-gray-300 md:text-3xl">
            Full-Stack Developer & Cybersecurity Enthusiast
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I build secure, scalable, and modern web applications using
            Next.js, TypeScript, Tailwind CSS, Node.js, Prisma, and PostgreSQL.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-500">
              View Projects
            </button>

           <a
  href="/Utech-CV.pdf"
  download
  className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
>
  Download CV
</a>
          </div>
        </motion.div>

        {/* Right Side */}
        <ProfileCard />
      </div>
    </section>
  );
}