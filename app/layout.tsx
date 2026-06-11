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
  title: "Zameer's Engineering Portfolio",
  description: "Mechanical engineering portfolio featuring CFD, design and engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-full bg-black text-white">
      <nav className="flex justify-center gap-8 py-6 text-lg font-medium">
        <a href="/" className="text-zinc-400 hover:text-white transition-colors">
          Home
        </a>

        <a href="/projects" className="text-zinc-400 hover:text-white transition-colors">
          Projects
        </a>

        <a href="/about" className="text-zinc-400 hover:text-white transition-colors">
          About
        </a>
      </nav>

      {children}
    </body>
  </html>
);
}
