'use client'

import PopularList from '@/components/PopularList'
import { Box, Button, Container, Stack, Center } from '@/design/components'
import { Heading } from '@/design/components/Typography/Heading'
import { Text } from '@/design/components/Typography/Text'
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
        <Button variant="solid" text="버튼버튼임" />
        <Center as="h3">
          <Button text="This is in the Center Component" />
        </Center>
        <Container as="div">
          <Box as="li" maxWidth={maxWidth}>
            여기는 콘테이너
          </Box>
        </Container>
        <Test name="hihi" />
        <PopularList />
        <Stack space="medium" alignItems="center">
          <div>첫 번째 요소</div>
          <div>두 번째 요소</div>
          <div>세 번째 요소</div>
        </Stack>
        <Heading as="h2">이거는 헤딩</Heading>
        <Text text="이거는 텍스트야야야" variant="solid" paddingY="large" />
      </main>
    </div>
  )
}
