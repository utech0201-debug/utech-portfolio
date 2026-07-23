import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utech | Full-Stack Developer",
  description:
    "Utech is a Full-Stack Developer specializing in Next.js, TypeScript, modern web applications, and cybersecurity.",
  keywords: [
    "Utech",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "React Developer",
    "Cybersecurity",
    "Ghana Developer",
  ],
  authors: [
    {
      name: "Utech",
    },
  ],
  creator: "Utech",

  openGraph: {
    title: "Utech | Full-Stack Developer",
    description:
      "Building secure, scalable, and modern digital experiences.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utech | Full-Stack Developer",
    description:
      "Full-Stack Developer & Cybersecurity Enthusiast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}