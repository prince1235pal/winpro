import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WinPro - Free Fire Tournament Platform",
  description: "The #1 Free Fire tournament platform. Join exciting tournaments, create teams, track rankings, and win amazing prizes.",
  keywords: ["WinPro", "Free Fire", "Tournament", "Gaming", "Esports", "Prizes"],
  authors: [{ name: "WinPro Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "WinPro - Free Fire Tournament Platform",
    description: "Join exciting Free Fire tournaments and win amazing prizes",
    url: "https://winproofficial.com",
    siteName: "WinPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WinPro - Free Fire Tournament Platform",
    description: "Join exciting Free Fire tournaments and win amazing prizes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
