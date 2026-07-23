import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://traboulsiest.net"),
  title: {
    default: `${siteConfig.fullName} | Commercial Kitchen Equipment Lebanon`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Traboulsi Est. supplies commercial kitchen, refrigeration and stainless steel equipment to restaurants, hotels, hospitals, bakeries and supermarkets across Lebanon since 1982.",
  keywords: [
    "commercial kitchen equipment Lebanon",
    "restaurant equipment Lebanon",
    "refrigeration Lebanon",
    "hospital equipment Lebanon",
    "bakery equipment Lebanon",
    "Traboulsi Est",
  ],
  openGraph: {
    title: `${siteConfig.fullName} | Commercial Kitchen Equipment Lebanon`,
    description: siteConfig.tagline,
    url: "https://traboulsiest.net",
    siteName: siteConfig.fullName,
    locale: "en",
    type: "website",
  },
  icons: {
    icon: siteConfig.logo,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
