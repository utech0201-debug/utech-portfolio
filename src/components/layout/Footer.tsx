export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Utech. Built with Next.js & Tailwind CSS.
    </footer>
  );
}