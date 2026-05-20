import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Krishna Chaitanya | AI Engineer",
  description:
    "AI Engineer, Full Stack Developer, ERP Workflow Builder, and AI Application Developer specializing in Python, Next.js, FastAPI, Supabase, and LLM workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        scroll-smooth
        antialiased
      `}
    >
      <body
        className="
          min-h-full
          overflow-x-hidden
          bg-slate-50
          text-slate-900
        "
      >
        {children}
      </body>
    </html>
  );
}