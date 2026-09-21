import type { Metadata } from "next";
import Link from "next/link";

import LearningLab from "@/components/learning/LearningLab";

export const metadata: Metadata = {
  title: "Learning Lab",
  description:
    "Visual lessons covering networking, cybersecurity, computer systems, and practical technology concepts.",
  alternates: {
    canonical: "https://utech-portfolio.vercel.app/learning",
  },
  openGraph: {
    title: "Learning Lab | Utech",
    description:
      "Visual lessons covering networking, cybersecurity, computer systems, and practical technology concepts.",
    url: "https://utech-portfolio.vercel.app/learning",
    siteName: "Utech Portfolio",
    type: "website",
  },
};

export default function LearningPage() {
  return (
    <main className="min-h-screen pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          ← Back to home
        </Link>
      </div>

      <LearningLab />
    </main>
  );
}
