"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Learning", href: "/learning" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-400/10 font-black text-blue-300">
            U
          </span>
          <span className="text-lg font-black tracking-tight text-white">
            Utech<span className="text-blue-400">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2 text-xs font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden rounded-lg border border-blue-400/20 bg-blue-400/10 px-3.5 py-2 text-xs font-semibold text-blue-200 transition hover:border-blue-400/40 hover:bg-blue-400/15 sm:inline-flex"
        >
          Let&apos;s connect
        </Link>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
