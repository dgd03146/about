import { Metadata } from 'next'
import {
  Inter,
  Black_Ops_One,
  Noto_Sans_JP,
  DM_Sans,
  Onest,
  Playfair_Display,
} from 'next/font/google'
// // import localFont from 'next/font/local'
// import { Navbar, Transition } from '@/components'

// import { Grid, Container } from '@/system/components'
// import * as S from '../components/ui/Layout/Layout.css'
import { Layout } from '@/components/ui/Layout/Layout'

// import ThemeProviders from './themeProviders'
// import Toast from '@/components/common/toast'

const noto = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
})

const rubik = Black_Ops_One({
  display: 'swap',
  weight: '400',
  variable: '--font-rubik',
  subsets: ['latin'],
})

const dmSans = DM_Sans({
  display: 'swap',
  weight: '400',
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const onest = Onest({
  display: 'swap',
  weight: '400',
  variable: '--font-onest',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  display: 'swap',
  weight: '500',
  variable: '--font-playfair',
  subsets: ['latin'],
})

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
    <html
      lang="en"
      className={`${inter.variable} ${rubik.variable} ${noto.variable} ${dmSans.variable} ${onest.variable} ${playfair.variable}`}
    >
      {/* <ThemeProviders> */}
      {/* <Toast /> */}

      <body>
        <Layout>{children}</Layout>
      </body>

      {/* </ThemeProviders> */}
    </html>
  )
}
