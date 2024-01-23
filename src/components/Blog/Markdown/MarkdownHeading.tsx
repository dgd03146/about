import { PropsWithChildren } from 'react'
import { Heading } from '@/system/components'

export const MarkdownH1 = ({ children }: PropsWithChildren) => (
  <Heading as="h1" marginTop="xxxlarge" marginBottom="large">
    {children}
  </Heading>
)

export const MarkdownH2 = ({ children }: PropsWithChildren) => (
  <Heading as="h2" marginTop="xxlarge" marginBottom="medium">
    {children}
  </Heading>
)

export const MarkdownH3 = ({ children }: PropsWithChildren) => (
  <Heading as="h3" marginTop="large" marginBottom="medium">
    {children}
  </Heading>
)

export const MarkdownH4 = ({ children }: PropsWithChildren) => (
  <Heading as="h4" marginTop="small" marginBottom="xsmall">
    {children}
  </Heading>
)
