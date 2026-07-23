"use client";

import { motion } from "framer-motion";

const highlights = [
  "🎓 Computer Science Student",
  "💻 Full-Stack Developer",
  "🔐 Cybersecurity Enthusiast",
  "🌍 Based in Ghana",
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-blue-500 font-semibold uppercase tracking-wider">
          About Me
        </p>

        <h2 className="text-4xl font-bold">
          Building modern and secure digital experiences.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        I&apos;m <span className="font-semibold text-white">Utech</span>, a
          passionate Full-Stack Developer and Cybersecurity Enthusiast from
          Ghana. I enjoy creating fast, secure and user-friendly web
          applications using modern technologies like Next.js, TypeScript,
          Tailwind CSS, Node.js and PostgreSQL.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-blue-500"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}