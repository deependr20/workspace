'use client';

import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/navigation/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-slate-950">
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
