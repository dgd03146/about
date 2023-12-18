'use client'

import { Container, Flex } from '@/system/components'
import { AnimatedText } from './Animation'
import * as S from './Home.css'

export const Home = () => {
  return (
    <Container as="section" className={S.ContainerStyle}>
      <Flex flexDirection="column" width="full" fontFamily="hero">
        <AnimatedText
          title="GEOJUNG IM"
          text={[
            'JUST GO WITH THE FLOW!',
            'TRAVEL. FASHION. CODING.',
            'FOOD. PHOTOGRAPHY.',
          ]}
          repeatDelay={10000}
        />
      </Flex>
    </Container>
  )
}
