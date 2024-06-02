import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Clone - Josue Zavala",
  description: "This project is a clone of GitHub just for practice",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#0d1117]">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
