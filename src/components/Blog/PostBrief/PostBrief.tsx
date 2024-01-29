import type { PostSummary } from '@/types'
import { Divider } from '@/components'
import { Box, Flex, Heading, Text } from '@/system/components'

type Props = {
  post: PostSummary
}

export const PostBrief = ({ post }: Props) => {
  return (
    <Flex flexDirection="column" fontFamily="nanumMyeongjo">
      <Flex gapX="small">
        {post.categories?.map((it) => (
          <Text
            key={it}
            text={it}
            fontWeight="bold"
            background="primary"
            paddingX="medium"
            borderRadius="large"
          />
        ))}
      </Flex>
      <Box>
        <Heading as="h1" fontSize="5xl" text={post.title} />
        <Heading as="h2" marginY="large" color="gray" text={post.description} />
      </Box>
      <Flex fontSize="sm" fontWeight="bold" gapX="small">
        <Text text="by Jung" />
        <Text text="·" />
        <Text color="gray" text={post.date} />
      </Flex>
      <Divider />
    </Flex>
  )
}
