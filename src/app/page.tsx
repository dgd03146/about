import { Box } from '@/design/components'
import TestHook from '@/hooks/testHooks'

export default function Home() {
  return (
    <div>
      <main>
        <h4>Welcome to Next.js</h4>
        <button type="button"> Visit the Github </button>
        <TestHook />
        <Box as="p">This is a test of the emergency broadcast system</Box>
      </main>
    </div>
  )
}
