import React from 'react';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://markgp.com'),
  robots: { index: true, follow: true },
  openGraph: { siteName: 'markgp.com' },
  title: {
    default: 'Marat Kuzakhmetov – Frontend Engineer',
    template: '%s | Marat Kuzakhmetov',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibmPlexSans.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
