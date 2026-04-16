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
  title: "ryuu | Itachi Portfolio",
  description: "Personal portfolio with Itachi-inspired visual style.",
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
      <body className="min-h-full bg-[#080808] text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(170,11,28,0.25),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,0,51,0.15),transparent_40%)]" />
        <header className="sticky top-0 z-50 border-b border-red-900/40 bg-black/70 backdrop-blur-md">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="text-lg font-bold tracking-[0.2em] text-red-500">
              RYUU
            </a>
            <div className="flex items-center gap-4 text-sm text-zinc-300">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
