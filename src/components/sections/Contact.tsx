"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully 🚀");
        setForm(initialForm);
      } else {
        setStatus(data.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="section-kicker">Let&apos;s connect</p>
          <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">Open to opportunities</span>
        </div>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Let&apos;s build something amazing
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          I&apos;m open to internships, freelance projects, collaborations,
          and opportunities where I can build impactful software.
        </p>

        <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-600">Focus</p>
            <p className="mt-1 text-sm font-semibold text-gray-200">Full-Stack</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-600">Interest</p>
            <p className="mt-1 text-sm font-semibold text-gray-200">Cybersecurity</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
            <p className="text-xs uppercase tracking-wider text-gray-600">Based in</p>
            <p className="mt-1 text-sm font-semibold text-gray-200">Ghana</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-5">
          <label className="sr-only" htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            required
            minLength={2}
            maxLength={80}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-3 outline-none focus:border-blue-500"
          />

          <label className="sr-only" htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            required
            maxLength={254}
            type="email"
            autoComplete="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-3 outline-none focus:border-blue-500"
          />

          <label className="sr-only" htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-5 py-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>

        {status && (
          <p role="status" aria-live="polite" className="mt-5 text-center text-sm text-blue-400">
            {status}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:utech0201@gmail.com" className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10">
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://github.com/utech0201-debug"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            <SiGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/Utech0201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
