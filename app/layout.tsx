import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

// Body: Plus Jakarta Sans - Premium geometric sans-serif
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// Headings: Space Mono - Futuristic computer aesthetic
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zuma Frontier Project | AI-Powered Operations",
  description: "Accelerating AI adoption at Zuma Indonesia through innovative automation, intelligent tools, and continuous improvement.",
  keywords: ["Zuma Indonesia", "AI Adoption", "Operations", "Automation", "Frontier Project"],
  openGraph: {
    title: "Zuma Frontier Project",
    description: "The Dawn of Intelligent Operations at Zuma Indonesia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
