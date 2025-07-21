import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '../../lib/AuthContext'  // ✅ Correct relative path


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KidBit',
  description: 'Welcome to KidBit - A fun and educational platform for kids',
}

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
  )
}
