import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import ChatBot from "@/components/ChatBot";

const rajdhani = Rajdhani({
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southern Fireside & Home | Gas Logs, Fireplaces & Gas Installation in Anderson, SC",
  description:
    "Gas logs, fireplaces, inserts, fire pits, grills and gas line installation in Anderson, SC and the Upstate. Local showroom with live burning displays. Call (864) 225-8627.",
  keywords: [
    "gas logs Anderson SC",
    "fireplace store Anderson SC",
    "gas fireplace installation",
    "gas line installation Anderson",
    "fire pit installation Upstate SC",
    "gas grill hookup",
    "fireplace repair Anderson SC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <ChatBot />
      </body>
    </html>
  );
}
