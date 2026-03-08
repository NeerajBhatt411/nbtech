import { Geist, Geist_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { RevealOnScroll, SplashCursor } from "@/components/ui";
import { defaultMetadata } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <SplashCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <RevealOnScroll rootMargin="0px 0px 0px 0px" threshold={0}>
          <Footer />
        </RevealOnScroll>
      </body>
    </html>
  );
}

