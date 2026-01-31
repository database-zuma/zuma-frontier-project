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
  title: "Zuma Frontier Project | The Dawn of Intelligent Operations",
  description: "Accelerating AI adoption at Zuma Indonesia through innovative automation, intelligent tools, and continuous improvement. Pioneering the future of operations.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
