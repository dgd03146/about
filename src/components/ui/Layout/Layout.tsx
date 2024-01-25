'use client'

import React, { ReactNode } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components'
import { Container, Grid } from '@/system/components'

import { getColorForPath } from '@/utils/getColorForPath'
import * as S from './Layout.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <Container
      className={S.container}
      style={assignInlineVars({
        [S.brandColor]: getColorForPath(pathname),
      })}
    >
      {/* <Transition> */}
      <Navbar />
      <Container centerContent className={S.ContainerStyle}>
        <Grid as="main" className={S.MainStyle}>
          <Grid as="section" className={S.SectionStyle}>
            {children}
          </Grid>
        </Grid>
      </Container>
      {/* </Transition> */}
    </Container>
  )
}
