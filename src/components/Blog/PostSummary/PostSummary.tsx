import Divider from '@/components/ui/Divider/Divider'
import { Box, Flex, Heading, Text } from '@/system/components'
import { PostSummaryInfo } from '@/types'

type Props = {
  post: PostSummaryInfo
}

const PostSummary = ({ post }: Props) => {
  return (
    <Flex flexDirection="column" fontFamily="nanumMyeongjo">
      <Flex>
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

export default PostSummary
