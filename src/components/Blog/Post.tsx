import type { PostContent } from '@/types'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Stack, Flex, Text } from '@/system/components'
import * as styles from './Post.css'

type Props = {
  post: PostContent
  index: number
}

// const cardBackground = ['primary', 'orange', 'red', 'green', 'blue'] as const

const Post = ({ post, index }: Props) => {
  const { slug, title, description, coverImage, coverImageHeight, date } = post

  return (
    <motion.div
      layout
      className={styles.container}
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      style={assignInlineVars({
        [styles.imageHeight]: `${coverImageHeight}px`,
      })}
    >
      <Link href={`blog/${slug}`}>
        <Box
          className={styles.card}
          // background={cardBackground[index % cardBackground.length]}
          background="red"
          fontFamily="pretendard"
        >
          <Box className={styles.front}>
            <Box className={styles.imageWrapper}>
              <Image
                src={coverImage || ''}
                fill
                alt={title || 'post image'}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
            <Box padding="medium" background="white">
              <Text text={title} fontWeight="bold" color="black" />
            </Box>
          </Box>
          <Box className={styles.back}>
            <Stack padding="medium" gapY="large">
              <Flex justifyContent="space-between">
                <Image
                  src={coverImage || ''}
                  alt={title || 'post image'}
                  width={80}
                  height={100}
                />
                <Text text={date} />
              </Flex>
              <Stack gapY="large">
                <Text text={title} fontWeight="bold" />
                <Text text={description} />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Link>
    </motion.div>
  )
}

export default Post
