import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import AuthProvider from './auth/Provider';
import GoogleAnalyticsScript from './components/GoogleAnalyticsScript';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Next App',
    default: 'Next App',
  },
  description: 'A Next.js tutorial project exploring the App Router, API routes, Prisma ORM, and Zod validation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalyticsScript />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Navbar/>
        <main className="p-5">{children}
        </main>
        </AuthProvider>
      </body>
    </html>
  );
}
