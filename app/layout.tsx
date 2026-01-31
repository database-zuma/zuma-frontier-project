import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Modal.com style: Premium geometric sans-serif with tight letter-spacing
// Plus Jakarta Sans is similar to Söhne (Modal's font)
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
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
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
