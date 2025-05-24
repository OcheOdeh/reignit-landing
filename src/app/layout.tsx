import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reignit Inc - AI-Powered Business Solutions",
  description: "Transform your business with AI-powered solutions that drive growth and efficiency. Book your free AI audit today.",
  keywords: "AI solutions, business transformation, CX AI, Workflow AI, Product Studio, Deep AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
