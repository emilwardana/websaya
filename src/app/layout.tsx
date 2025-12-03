// src/app/layout.tsx
import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Press_Start_2P } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette"; // remove if you don't have it

// ---- Fonts ----
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
const press = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press",
});

// ---- SEO / Meta ----
export const metadata: Metadata = {
  title: "Emil Wardana",
  description: "Personal web • Playground & Digital Garden",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${press.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Page shell */}
          <div className="flex min-h-screen flex-col bg-[var(--color-body)] text-[var(--color-primary)] font-sans selection:bg-[var(--color-accent)] selection:text-black">
            <Navbar />

            <main className="flex flex-col flex-1">{children}</main>

            <Footer />
          </div>

          {/* Mount once so it's available everywhere */}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
