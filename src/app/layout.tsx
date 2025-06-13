import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Mono } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Reignit Inc - AI-Powered Business Solutions",
  description: "Transform your business with AI-powered solutions that drive growth and efficiency. Book your free AI audit today.",
  keywords: "AI solutions, business transformation, CX AI, Workflow AI, Product Studio, Deep AI",
};

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${dmMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
