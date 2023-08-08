'use client'

import { ThemeProvider } from 'next-themes'

function ThemeProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ThemeProviders
