import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'], // Regular and Medium as requested
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'], // Extra Bold as requested
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Reignit Inc | AI-Powered Business Solutions',
  description: 'Custom AI chatbots, workflow automation, and innovative product development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}
