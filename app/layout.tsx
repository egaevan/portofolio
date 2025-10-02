import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { profile } from "@/lib/data";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = `${profile.name} – ${profile.title}`;

export const metadata: Metadata = {
  title,
  description: profile.summary,
  openGraph: {
    title,
    description: profile.summary,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-[#050505] text-slate-100">
      <body className={`${inter.className} min-h-screen bg-transparent text-slate-100`}>
        <Header />
        <main id="top" className="container-section">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
