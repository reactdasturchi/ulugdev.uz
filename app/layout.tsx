import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navigation } from "@/components/navigation";
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
  title: "Ulugbek Eshnazarov | Full-Stack Developer",
  description:
    "Full-Stack Developer — Zamonaviy web ilovalar yarataman. React, Next.js, TypeScript, Node.js",
  keywords: [
    "Ulugbek Eshnazarov",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Uzbekistan",
  ],
  authors: [{ name: "Ulugbek Eshnazarov" }],
  openGraph: {
    title: "Ulugbek Eshnazarov | Full-Stack Developer",
    description: "Full-Stack Developer — Zamonaviy web ilovalar yarataman",
    url: "https://ulugdev.uz",
    siteName: "ulugdev.uz",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulugbek Eshnazarov | Full-Stack Developer",
    description: "Full-Stack Developer — Zamonaviy web ilovalar yarataman",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {/* Noise Overlay */}
          <div className="noise-overlay" />

          {/* Grid Background */}
          <div className="grid-background" />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navigation />

          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
