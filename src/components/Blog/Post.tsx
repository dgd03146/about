import type { PostInfo } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Heading, Stack, Flex, Text } from '@/system/components'
import * as styles from './Post.css'
import { imageWrapper } from './Post.css'

type Props = {
  // setSelected: Dispatch<SetStateAction<null>>
  post: PostInfo
  index: number
}

const cardBackground = [
  'black',
  'blue',
  'green',
  'red',
  'orange',
  'primary',
] as const

const Post = ({ post, index }: Props) => {
  const { title, description, coverImage, coverImageHeight, date } = post

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      style={assignInlineVars({
        [styles.imageHeight]: `${coverImageHeight}px`,
      })}
    >
      <Link href="/">
        <Box
          className={styles.card}
          // background={cardBackground[index % cardBackground.length]}
          background="black"
        >
          <Box className={styles.front}>
            <Box className={styles.imageWrapper}>
              <Image
                src={coverImage}
                fill
                alt={title || 'post image'}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>
            <Box padding="medium" background="white">
              <Heading
                as="h4"
                text={title}
                fontFamily="pretendard"
                fontWeight="bold"
                color="black"
              />
            </Box>
          </Box>
          <Box className={styles.back}>
            <Stack padding="medium" gapY="large">
              <Flex justifyContent="space-between">
                <Image
                  src={coverImage}
                  alt={title || 'post image'}
                  width={80}
                  height={100}
                />
                <Heading as="h4" text="15. July 2023" />
              </Flex>
              <Stack gapY="large">
                <Heading as="h4" text={title} fontWeight="bold" />
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
