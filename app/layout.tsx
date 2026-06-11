import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamza Ali | Full Stack Software Engineer",
  description:
    "Full Stack Engineer with 4+ years building production systems. Specializes in Node.js/NestJS backends and React/Next.js frontends.",
  keywords: [
    "Full Stack Engineer",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Lahore",
  ],
  authors: [{ name: "Hamza Ali", url: "https://github.com/Hamzaali120799" }],
  openGraph: {
    title: "Hamza Ali | Full Stack Software Engineer",
    description:
      "Full Stack Engineer with 4+ years building production systems. Specializes in Node.js/NestJS backends and React/Next.js frontends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
