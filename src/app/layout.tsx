import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import AssessmentButton from '../components/ui/AssessmentButton';
import ServiceRequestButton from '../components/ui/ServiceRequestButton';


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
  icons: {
    icon: [
      { url: '/images/reignit-logo.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        {children}
        <AssessmentButton />
        <ServiceRequestButton />
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
