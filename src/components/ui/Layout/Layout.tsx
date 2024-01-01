'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { usePathname } from 'next/navigation'
import { Navbar, Transition } from '@/components'
import { Container, Grid } from '@/system/components'

import { getColorForPath } from '@/utils/getColorForPath'
import * as S from './layout.css'

export const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const [activeColor, setActiveColor] = useState(getColorForPath(pathname))

  useEffect(() => {
    const updateColor = (): void => {
      setActiveColor(getColorForPath(pathname))
    }

    const frameId = window.requestAnimationFrame(() => {
      // 애니메이션이 끝난 후 색상 변경
      setTimeout(updateColor, 700) // 애니메이션 지속 시간에 맞춰 지연
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      // 타이머가 설정된 경우, 취소
      if (frameId) clearTimeout(frameId)
    }
  }, [pathname])

  // const routeStyle = S.backgroundColorVariant[pathname]

  return (
    <Container
      width="full"
      height="full"
      className={S.container}
      style={assignInlineVars({
        [S.brandColor]: activeColor,
      })}
    >
      <Transition>
        <Navbar />
        <Container maxWidth="full" centerContent className={S.ContainerStyle}>
          <Grid as="main" className={S.MainStyle}>
            <Grid as="section" className={S.SectionStyle}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Transition>
    </Container>
  )
}
