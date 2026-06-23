import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteShell from "./components/SiteShell";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Box Truck Dispatch Services for Owner Operators",
  description:
    "Box truck dispatch services for owner operators and fleets, including load booking, rate negotiation, paperwork support, and route planning.",
  keywords: [
    "box truck dispatch",
    "box truck dispatch service",
    "truck dispatching services",
    "box truck owner operator",
    "freight dispatch",
    "load booking",
    "rate negotiation",
    "truck dispatcher",
  ],
  applicationName: "Box Truck Dispatching",
  authors: [{ name: "Box Truck Dispatching" }],
  creator: "Box Truck Dispatching",
  publisher: "Box Truck Dispatching",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Box Truck Dispatch Services for Owner Operators",
    description:
      "Box truck dispatch services for owner operators and fleets, including load booking, rate negotiation, paperwork support, and route planning.",
    url: "/",
    siteName: "Box Truck Dispatching",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Box Truck Dispatch Services for Owner Operators",
    description:
      "Box truck dispatch services for owner operators and fleets, including load booking, rate negotiation, paperwork support, and route planning.",
  },
  category: "Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F8FAFC] font-[Arial,Helvetica,sans-serif] text-[#171717]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}