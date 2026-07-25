"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.2,
      }}
      className="relative w-full max-w-sm"
    >
      {/* Animated Glow */}

      <div
        className="
          absolute
          -inset-1
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-purple-600
          opacity-40
          blur-xl
          animate-pulse
        "
      />

      {/* Main Card */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Status */}

        <div
          className="
            mb-6
            flex
            justify-center
          "
        >
          <span
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              px-4
              py-2
              text-sm
              text-green-400
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-500
              "
            />

            Available for Internship
          </span>
        </div>

        {/* Avatar */}

        <div
          className="
            relative
            mx-auto
            h-32
            w-32
            overflow-hidden
            rounded-full
            border-4
            border-blue-500/30
            shadow-lg
          "
        >
          <Image
            src="/profile.png"
            alt="Oscar Dziedzorm"
            fill
            className="object-cover"
          />
        </div>

        {/* Identity */}

        <div
          className="
            mt-6
            text-center
          "
        >
          <h3
            className="
              text-2xl
              font-black
              text-white
            "
          >
            Oscar Dziedzorm
          </h3>

          <p
            className="
              mt-1
              font-semibold
              text-blue-400
            "
          >
            Utech
          </p>

          <p
            className="
              mt-3
              text-sm
              text-gray-400
            "
          >
            Full-Stack Developer
            <br />
            &
            Cybersecurity Enthusiast
          </p>
        </div>

        {/* Location */}

        <div
          className="
            mt-5
            flex
            justify-center
          "
        >
          <span
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-400
            "
          >
            <MapPin size={16} />
            Ghana
          </span>
        </div>

        {/* Roles */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              text-sm
              text-gray-300
            "
          >
            <Code2
              size={18}
              className="text-blue-400"
            />

            Dev
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3
              text-sm
              text-gray-300
            "
          >
            <ShieldCheck
              size={18}
              className="text-cyan-400"
            />

            Security
          </div>
        </div>

        {/* Tech Stack */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            justify-center
            gap-2
          "
        >
          {[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "Prisma",
            "PostgreSQL",
            "Kali Linux",
          ].map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-blue-500/10
                px-3
                py-1
                text-xs
                text-blue-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub */}

        <a
          href="https://github.com/utech0201-debug"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-white
            px-5
            py-3
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          <SiGithub size={18} />
          View GitHub
        </a>
      </div>
    </motion.div>
  );
}
