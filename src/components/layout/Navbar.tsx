"use client";

import Link from "next/link";
import ThemeToggle from "@/components/shared/ThemeToggle";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-black text-blue-500"
        >
          Utech
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}

          <ThemeToggle />
        </nav>


        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}