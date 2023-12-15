import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
} from '@/design/components'
import TestHook from '@/hooks/testHooks'
import PopularList from './PopularList'

const Practice = () => {
  return (
    <div>
      <TestHook />
      <Box
        as="p"
        background="blue500"
        paddingY="large"
        paddingX="xxxlarge"
        fontSize="xlarge"
      >
        hihi
      </Box>
      <Button variant="solid" text="버튼버튼임" />
      <Center as="h2">
        <Button variant="solid" text="This is in the Center Component" />
      </Center>
      <Container as="div" paddingY="xxxlarge">
        <Box as="li" color="teal200">
          여기는 콘테이너
        </Box>
      </Container>
      <PopularList />
      <Stack space="medium" alignItems="center">
        <div>첫 번째 요소</div>
        <div>두 번째 요소</div>
        <div>세 번째 요소</div>
      </Stack>
      <Heading as="h1">이거는 헤딩</Heading>
      <Text text="이거는 텍스트야야야" variant="solid" />
    </div>
  )
}

export default Practice
