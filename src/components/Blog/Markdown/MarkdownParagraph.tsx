import React, { PropsWithChildren } from 'react'
import { Text } from '@/system/components'

const MarkdownParagraph = ({ children }: PropsWithChildren) => {
  return <Text marginY="medium">{children}</Text>
}

export default MarkdownParagraph
