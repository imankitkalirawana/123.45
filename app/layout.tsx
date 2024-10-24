import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Sonner from '@/components/providers';
import Navbar from '@/components/sections/Navbar';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: '12345',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-background text-foreground"
    >
      <body>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Navbar />
            {children}
            <Sonner />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
