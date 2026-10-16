import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Itay Lisaey",
    "Novana",
    "CTO",
    "AI-native products",
    "LLM systems",
    "cloud architecture",
    "K-12 education technology",
    "engineering leadership",
    "Tokyo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
    firstName: "Itay",
    lastName: "Lisaey",
    username: "itaylisaey",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/avatar.svg",
    apple: "/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
