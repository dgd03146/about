import { Metadata } from 'next'
import { Inter, Black_Ops_One } from 'next/font/google'
// import localFont from 'next/font/local'
import { Header } from '@/layouts'
import { Grid, Container } from '@/system/components'
import * as S from './layout.css'

// import ThemeProviders from './themeProviders'
// import Toast from '@/components/common/toast'

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
      {/* <ThemeProviders> */}
      {/* <Toast /> */}
      <body className={`${inter.className} ${rubik.className} ${S.BodyStyle} `}>
        <Header />
        <Container maxWidth="full" centerContent>
          <Grid as="main" className={S.MainStyle}>
            <Grid as="section" className={S.SectionStyle}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </body>
      {/* </ThemeProviders> */}
    </html>
  )
}
