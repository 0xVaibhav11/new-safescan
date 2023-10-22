import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import localFont from "next/font/local";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = localFont({
  src: "../assets/fonts/DisplayPixel.woff2",
  variable: "--font-display",
  display: "swap",
  preload: true,
});
const body = localFont({
  src: "../assets/fonts/GTWalsheimPro.woff2",
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SafeScan",
  description: "SafeScan ethOnline2023 project! ✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} ${body.variable} font-sans max-w-screen `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
