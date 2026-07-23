"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 sm:pt-32 lg:pt-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >

          <p className="mb-4 font-semibold text-blue-500">
            Hello, I&apos;m
          </p>


          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            Utech
          </h1>


          <h2 className="mt-6 text-lg text-gray-300 sm:text-xl md:text-3xl">
            Full-Stack Developer
            <br className="sm:hidden" />
            {" "} & Cybersecurity Enthusiast
          </h2>


          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
            I build secure, scalable, and modern web applications using
            Next.js, TypeScript, Tailwind CSS, Node.js, Prisma, and PostgreSQL.
          </p>


          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <button
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold shadow-lg shadow-blue-600/30 transition hover:scale-105 hover:bg-blue-500"
            >
              View Projects
            </button>


            <a
              href="/Utech-CV.pdf"
              download
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-center font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Download CV
            </a>

          </div>


        </motion.div>


        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <ProfileCard />
        </motion.div>


      </div>
    </section>
  );
}