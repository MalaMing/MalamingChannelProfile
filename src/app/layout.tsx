import type { Metadata } from "next";

import { Staatliches } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { staatliches400 } from "@/libs/font";

export const metadata: Metadata = {
  title: "Malaming Portfolio",
  description: "This is a portfolio website for Malaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={staatliches400.className + " flex flex-col items-center min-h-screen border bg-[url('/background.png')] bg-cover"}>
        <Navbar />
        <div className="flex flex-col container">
          {children}
        </div>
      </body>
    </html>
  );
}
