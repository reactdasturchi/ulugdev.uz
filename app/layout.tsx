import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Preloader } from "@/components/preloader";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ulugdev.uz"),
  title: {
    default: "Ulugbek Eshnazarov | Full-Stack Developer",
    template: "%s | ulugdev.uz",
  },
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
    "O'zbekiston",
    "dasturchi",
    "portfolio",
  ],
  authors: [{ name: "Ulugbek Eshnazarov" }],
  creator: "Ulugbek Eshnazarov",
  publisher: "Ulugbek Eshnazarov",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ulugbek Eshnazarov | Full-Stack Developer",
    description: "Full-Stack Developer — Zamonaviy web ilovalar yarataman",
    url: "https://ulugdev.uz",
    siteName: "ulugdev.uz",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ulugbek Eshnazarov - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulugbek Eshnazarov | Full-Stack Developer",
    description: "Full-Stack Developer — Zamonaviy web ilovalar yarataman",
    images: ["/og-image.png"],
    creator: "@ulugdev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            {/* Preloader */}
            <Preloader />

            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Grid Background */}
            <div className="grid-background" />

            {/* Navigation */}
            <Navigation />

            {children}

            {/* Footer */}
            <Footer />

            {/* Scroll to top button */}
            <ScrollToTop />

            {/* Toast notifications */}
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "#18181b",
                  border: "1px solid #27272a",
                  color: "#fff",
                },
              }}
            />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
