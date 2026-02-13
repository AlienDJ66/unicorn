import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ============================================================
// METADATA - Update with your information
// Prompt: "Update the page title and description for SEO"
// ============================================================
export const metadata: Metadata = {
  title: "Bolun Du - Software Engineer & AI Researcher",
  description: "Software Engineer specializing in building scalable full-stack tools and intelligent agentic systems. Former Software Engineer at Meta and current AI Researcher.",
  keywords: ["Software Engineer", "AI Researcher", "Full-stack Developer", "Agentic AI", "Meta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
