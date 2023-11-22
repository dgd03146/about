'use client'

import { Box } from '@/design/components'
import { Button } from '@/design/components/Button'
import Center from '@/design/components/Center/Center'
import TestHook from '@/hooks/testHooks'

export default function Home() {
  return (
    <div>
      <main>
        <h4>Welcome to Next.js</h4>
        <button type="button"> Visit the Github </button>
        <TestHook />
        <Box as="h1" color="blue500" padding="large">
          hihi
        </Box>
        <Button variant="transparent" text="hihi" />
        <Center as="h1">
          <Button text="This is in the Center Component" />
          <Box as="h2" color="black">
            This is in Center Component
          </Box>
        </Center>
      </main>
    </div>
  )
}
