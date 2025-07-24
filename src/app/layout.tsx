// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@lib/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'KidBit',
  description: 'Welcome to KidBit - A fun and educational platform for kids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
