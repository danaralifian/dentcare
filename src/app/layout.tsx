import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dentcare",
  description: "At DentCare, we believe every smile tells a story. Our mission is to provide personalized, high-quality dental care that keeps your teeth healthy and your confidence glowing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
