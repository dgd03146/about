'use client'

import PopularList from '@/components/PopularList'
import { Box } from '@/design/components'
import { Button } from '@/design/components/Button'
import { Center } from '@/design/components/Center'
import { Container } from '@/design/components/Container/Container'
import { Stack } from '@/design/components/Stack/Stack'
// import List from '@/design/components/List/List'
import Test from '@/design/components/test'
import TestHook from '@/hooks/testHooks'

export default function Home() {
  const maxWidth = 'xsmall' || ''

  return (
    <div>
      <main>
        <TestHook />
        <Box as="h1" color="blue500" padding="large" marginY="xxlarge">
          hihi
        </Box>
        <Button variant="transparent" text="hihi" />
        <Center as="h3">
          <Button text="This is in the Center Component" />
        </Center>
        <Container as="div">
          <Box as="li" maxWidth={maxWidth}>
            여기는 콘테이너
          </Box>
        </Container>
        <Test name="hihi" type="hih" />
        <PopularList />
        <Stack space="medium" align="center">
          <div>첫 번째 요소</div>
          <div>두 번째 요소</div>
          <div>세 번째 요소</div>
        </Stack>
      </main>
    </div>
  )
}
