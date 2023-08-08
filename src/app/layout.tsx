import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Toast from '@/components/common/toast'
import ThemeProviders from './themeProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProviders>
        <Toast />
        <body className={inter.className}>{children}</body>
      </ThemeProviders>
    </html>
  )
}
