'use client'

import { Container, Flex, Heading } from '@/system/components'
import { PhotoLists } from '.'

export type Post = {
  id: number
  src: string
  title: string
  subtitle: string
  tag: string
}

type Props = {
  posts: Post[]
}

export const Travel = ({ posts }: Props) => {
  return (
    <Container>
      <Flex justifyContent="space-between" marginY="xlarge" alignItems="center">
        <Heading
          as="h1"
          fontFamily="hero"
          color="red"
          text="GALLERY"
          fontSize="8xl"
        />
        {/* <Heading
          as="h1"
          fontFamily="hero"
          color="black"
          text="&"
          fontSize="5xl"
        /> */}
        <Heading
          as="h1"
          fontFamily="hero"
          color="blue"
          text="COLLECTION"
          fontSize="8xl"
        />
      </Flex>
      <PhotoLists posts={posts} />
    </Container>
  )
}
