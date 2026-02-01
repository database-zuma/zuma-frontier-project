import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Body: Plus Jakarta Sans - Premium geometric sans-serif
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zuma Frontier Project | AI-Powered Operations",
  description: "Accelerating AI adoption at Zuma Indonesia through innovative automation, intelligent tools, and continuous improvement. Transforming operations with AI-powered applications, assistants, and data-driven strategy.",
  keywords: ["Zuma Indonesia", "AI Adoption", "Operations", "Automation", "Frontier Project", "AI Assistants", "Workflow Automation", "Data Strategy", "Enterprise AI"],
  authors: [{ name: "Continuous Improvement Team" }],
  creator: "Zuma Indonesia",
  publisher: "Zuma Indonesia",
  robots: "index, follow",
  openGraph: {
    title: "Zuma Frontier Project | AI-Powered Operations",
    description: "The Dawn of Intelligent Operations at Zuma Indonesia. Transforming how we work through AI-powered applications, assistants, and automation.",
    type: "website",
    url: "https://frontier-landing-page.vercel.app",
    siteName: "Zuma Frontier Project",
    locale: "id_ID",
    images: [
      {
        url: "https://frontier-landing-page.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zuma Frontier Project - AI-Powered Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuma Frontier Project | AI-Powered Operations",
    description: "The Dawn of Intelligent Operations at Zuma Indonesia",
    images: ["https://frontier-landing-page.vercel.app/og-image.jpg"],
    creator: "@zuma.id",
  },
  alternates: {
    canonical: "https://frontier-landing-page.vercel.app",
  },
  verification: {
    google: "your-google-verification-code", // Add when available
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
