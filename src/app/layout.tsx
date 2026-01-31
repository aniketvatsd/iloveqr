import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'iLoveQR - Free QR Code Generator',
  description: 'Create custom QR codes instantly. Simple, fast, and free. Generate QR codes for URLs, text, email, phone, WiFi, and more.',
  keywords: 'QR code, QR generator, free QR code, custom QR code, QR code maker',
  openGraph: {
    title: 'iLoveQR - Free QR Code Generator',
    description: 'Create custom QR codes instantly. Simple, fast, and free.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8588511176145119"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

