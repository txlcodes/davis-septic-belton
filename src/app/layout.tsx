import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import ChatBot from "@/components/ChatBot";

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davis Septic, Grading & Pumping | Septic Pumping & Installs in Belton & Anderson, SC",
  description:
    "Septic tank pumping, septic installation, grading, land clearing and drain-field repair in Belton, Anderson & the Upstate SC. 30+ years, 5.0★ across 230 reviews. Call (864) 617-5035.",
  keywords: [
    "septic pumping Belton SC",
    "septic tank pumping Anderson SC",
    "septic system installation Upstate SC",
    "grading and land clearing Anderson SC",
    "drain field repair Belton SC",
    "septic inspection real estate SC",
    "gravel driveway Belton SC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <ChatBot />
      </body>
    </html>
  );
}
