import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Holtkamp Tweewielers",
    default: "Holtkamp Tweewielers | Dé fietsspecialist in Hengelo",
  },
  description: "Holtkamp Tweewielers, sinds 1900 een begrip in Hengelo. Voor e-bikes, stadsfietsen en degelijk onderhoud.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://holtkamptweewielers.nl",
    siteName: "Holtkamp Tweewielers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
