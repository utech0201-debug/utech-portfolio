"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Code2,
  Rocket,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: "15+",
    icon: Rocket,
  },
  {
    title: "Technologies",
    value: "20+",
    icon: Code2,
  },
  {
    title: "Security Labs",
    value: "10+",
    icon: ShieldCheck,
  },
  {
    title: "Learning",
    value: "Daily",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold text-blue-600 dark:text-blue-400">
          ABOUT ME
        </p>

        <h2 className="mt-2 text-4xl font-black text-zinc-900 dark:text-white">
          Building modern digital experiences.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-gray-400">
          I&apos;m Oscar Dziedzorm, also known as <strong>Utech</strong>,
          a passionate Full-Stack Developer and Cybersecurity enthusiast
          from Ghana.

          I enjoy building scalable web applications,
          secure authentication systems,
          interactive user experiences,
          and learning modern software architecture.

          My goal is to become a world-class Software Engineer while
          contributing to cybersecurity research and open-source projects.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">

        {/* Left Card */}

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-gray-200
            bg-white/70
            p-8
            shadow-xl
            backdrop-blur-xl

            dark:border-white/10
            dark:bg-white/5
          "
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Who I Am
          </h3>

          <p className="mt-5 leading-8 text-zinc-600 dark:text-gray-400">
            I specialize in building secure full-stack applications
            using modern technologies including Next.js,
            React,
            TypeScript,
            Tailwind CSS,
            Node.js,
            Prisma and PostgreSQL.

            I&apos;m also passionate about ethical hacking,
            penetration testing,
            Linux,
            networking and application security.
          </p>

          <div className="mt-8 rounded-2xl bg-zinc-900 p-6 text-green-400 dark:bg-black">
            <pre className="text-sm">
{`const developer = {
  name: "Utech",
  role: "Full Stack Developer",
  location: "Ghana",
  loves: [
    "Next.js",
    "Cybersecurity",
    "Open Source"
  ]
}`}
            </pre>
          </div>
        </motion.div>

        {/* Right Card */}

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white/70
                  p-8
                  shadow-lg
                  backdrop-blur-xl

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <Icon
                  className="text-blue-600 dark:text-blue-400"
                  size={34}
                />

                <h3 className="mt-6 text-4xl font-black text-zinc-900 dark:text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-zinc-600 dark:text-gray-400">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}