import React, { PropsWithChildren } from 'react'
import { Text } from '@/system/components'

export const MarkdownParagraph = ({ children }: PropsWithChildren) => {
  return <Text marginY="medium">{children}</Text>
}
