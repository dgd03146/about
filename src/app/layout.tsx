import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout'
import { Grid, Container } from '@/design/components'
import * as S from './layout.css'

// import ThemeProviders from './themeProviders'
// import Toast from '@/components/common/toast'

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
      {/* <ThemeProviders> */}
      {/* <Toast /> */}
      <body className={`${inter.className} ${S.BodyStyle}`}>
        <Header />
        <Container maxWidth="full" centerContent className={S.ContainerStyle}>
          <Grid as="main" background="blue300" className={S.MainStyle}>
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
