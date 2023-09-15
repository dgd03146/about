import { Box } from '@/design/components'
import { root } from '@/design/components/Test.css'
import TestHook from '@/hooks/testHooks'

export default function Home() {
  return (
    <div>
      <main>
        <h4>Welcome to Next.js</h4>
        <button type="button"> Visit the Github </button>
        <TestHook />
        <Box as="h1" color="blue500">
          hihi
        </Box>
        <div className={root}>바닐라 테스트</div>
      </main>
    </div>
  )
}
