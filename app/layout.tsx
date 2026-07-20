import type { Metadata } from "next";
import localFont from "next/font/local";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

// Self-hosted copies of the Google fonts the design references (latin subset),
// so builds don't depend on fonts.googleapis.com being reachable.
const bricolage = localFont({
  src: "./fonts/bricolage-var-latin.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = localFont({
  src: "./fonts/instrument-var-latin.woff2",
  weight: "400 700",
  variable: "--font-instrument",
  display: "swap",
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/spacemono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/spacemono-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

const boldmatte = localFont({
  src: "./fonts/boldmatte.ttf",
  variable: "--font-boldmatte",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raju — Full-Stack Web Developer",
  description:
    "Rifat Sarker (Raju) — full-stack web developer from Rajshahi, Bangladesh. Next.js, TypeScript & PostgreSQL under the hood, micro-interactions on top.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${spaceMono.variable} ${boldmatte.variable}`}
    >
      <body className="font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
