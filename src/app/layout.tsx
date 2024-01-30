import { Metadata } from 'next'
import {
  Inter,
  Black_Ops_One,
  Noto_Sans_JP,
  DM_Sans,
  Playfair_Display,
  Nanum_Myeongjo,
} from 'next/font/google'
import localFont from 'next/font/local'

// import { Navbar, Transition } from '@/components'

import { Layout } from '@/components/ui'

// import ThemeProviders from './themeProviders'
// import Toast from '@/components/common/toast'

const noto = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
})

const nanumMyeongjo = Nanum_Myeongjo({
  display: 'swap',
  weight: '400',
  variable: '--font-nanumMyeongjo',
  subsets: ['latin'],
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
      className={`${pretendard.variable} ${inter.variable} ${rubik.variable} ${noto.variable} ${dmSans.variable}  ${playfair.variable} ${nanumMyeongjo.variable}`}
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
