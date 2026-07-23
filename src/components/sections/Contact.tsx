"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
      >

        <p className="text-blue-500 font-semibold uppercase">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Let&apos;s build something amazing
        </h2>


        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          I&apos;m open to internships, freelance projects,
          collaborations, and opportunities where I can
          build impactful software.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            <Mail size={18}/>
            Email Me
          </a>


          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            <SiGithub size={18}/>
GitHub
          </a>


          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
          >
            <FaLinkedin size={18}/>
            LinkedIn
          </a>

        </div>

      </motion.div>
    </section>
  );
}