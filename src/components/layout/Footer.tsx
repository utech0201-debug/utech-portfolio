import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-xl font-black text-white">
            Utech<span className="text-blue-400">.</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
            Full-stack development, cybersecurity exploration and practical
            technology learning — built from Ghana.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <Link href="/learning" className="transition hover:text-white">Learning Lab</Link>
            <Link href="/#about" className="transition hover:text-white">About</Link>
            <Link href="/#contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Connect</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
            <a href="mailto:utech0201@gmail.com" className="flex items-center gap-2 transition hover:text-white"><Mail size={15}/> Email <ArrowUpRight size={13}/></a>
            <a href="https://github.com/utech0201-debug" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a>
            <a href="https://www.linkedin.com/in/Utech0201" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-white"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={13}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Utech. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}