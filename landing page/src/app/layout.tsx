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
  title: "WinPro - India's #1 Free Fire Tournament App | Play & Earn Real Money",
  description: "Join WinPro to participate in daily Free Fire tournaments and win real cash prizes. Instant withdrawals, secure platform, 24/7 support. Download APK now!",
  keywords: ["WinPro", "Free Fire", "tournament", "earn money", "gaming", "mobile esports", "Free Fire tournaments", "real cash prizes", "Android gaming", "battle royale"],
  authors: [{ name: "WinPro Team" }],
  icons: {
    icon: "https://abundant-rose-viw5kjqoru.edgeone.app/WhatsApp%20Image%202025-11-09%20at%2011.11.51_e369c1df.jpg",
  },
  openGraph: {
    title: "WinPro - India's #1 Free Fire Tournament App",
    description: "Play Free Fire tournaments and win real cash prizes. Daily tournaments, instant withdrawals, trusted by thousands of gamers.",
    url: "https://winpro.app",
    siteName: "WinPro",
    type: "website",
    images: [
      {
        url: "https://abundant-rose-viw5kjqoru.edgeone.app/WhatsApp%20Image%202025-11-09%20at%2011.11.51_e369c1df.jpg",
        width: 1200,
        height: 630,
        alt: "WinPro - Free Fire Tournament App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WinPro - Play Free Fire Tournaments & Win Real Money",
    description: "Join India's biggest Free Fire tournament platform. Daily contests, instant withdrawals, trusted by gamers nationwide.",
    images: ["https://abundant-rose-viw5kjqoru.edgeone.app/WhatsApp%20Image%202025-11-09%20at%2011.11.51_e369c1df.jpg"],
  },
  metadataBase: new URL("https://winpro.app"),
  alternates: {
    canonical: "/",
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
