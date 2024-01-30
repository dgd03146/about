'use client'

import React, { ReactNode } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components'
import { Container, Grid } from '@/system/components'
import { getColorForPath } from '@/utils'
import * as styles from './Layout.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  return (
    <Container
      className={styles.container}
      style={assignInlineVars({
        [styles.brandColor]: getColorForPath(pathname),
      })}
    >
      {/* <Transition> */}
      <Navbar />
      <Container centerContent>
        <Grid as="main" className={styles.main}>
          <Grid as="section" className={styles.section}>
            {children}
          </Grid>
        </Grid>
      </Container>
      {/* </Transition> */}
    </Container>
  )
}
