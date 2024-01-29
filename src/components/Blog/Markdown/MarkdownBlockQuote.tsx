import React, { PropsWithChildren } from 'react'
import { Text } from '@/system/components'

export const MarkdownBlockQuote = ({ children }: PropsWithChildren) => {
  return (
    <Text as="blockquote" fontFamily="nanumMyeongjo" fontWeight="bold">
      {children}
    </Text>
  )
}
