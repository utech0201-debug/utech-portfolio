"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 sm:pt-32 lg:pt-20">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            <span className="status-dot" />
            Full-Stack Developer • Cybersecurity
          </div>

          <p className="font-mono text-sm text-gray-500">Hello, I&apos;m</p>
          <h1 className="mt-2 text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Utech<span className="text-blue-500">.</span>
          </h1>

          <h2 className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-gray-200 sm:text-2xl md:text-3xl">
            I build secure, scalable and modern digital experiences.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
            Next.js, TypeScript, Node.js, PostgreSQL and cybersecurity — turning
            ideas into products that are built to learn, grow and last.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Explore my work <span className="ml-2">→</span>
            </a>
            <a
              href="/Utech-CV.pdf"
              download="Oscar_Dziedzzorm_CV.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-400/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500 lg:justify-start">
            <span>🇬🇭 Ghana</span>
            <span>•</span>
            <span>Open to internships</span>
            <span>•</span>
            <span>Building UTECH</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative">
              <ProfileCard />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}