import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Medi Vision | Guiding Futures. Building Careers.",
  description:
    "Your Trusted Partner for Global Education. Helping students secure admissions in top universities in India and Abroad. Expert career counseling, visa processing, and university selection.",
  keywords: [
    "Admission Consultancy",
    "Study Abroad",
    "Study in India",
    "Career Counseling",
    "University Admissions",
  ],
  authors: [{ name: "Medi Vision Career Pvt. Ltd." }],
  openGraph: {
    title: "Medi Vision | Guiding Futures.",
    description: "Your Trusted Partner for Global Education.",
    url: "https://medivisioncareer.com",
    siteName: "Medi Vision",
    locale: "en_IN",
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
        className={`${inter.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
