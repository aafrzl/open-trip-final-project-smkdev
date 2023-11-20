import Navigation from '@/components/Navbar/Navigation';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Trip',
  description: 'Open Trip adalah platform untuk wisata terbuka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
