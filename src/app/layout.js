import { Geist, Geist_Mono } from "next/font/google";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YouEngage",
  description: "YouEngage Foundation Website",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {children}
      </body>
    </html> 
  );
}
