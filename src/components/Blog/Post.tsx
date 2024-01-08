import type { PostInfo } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Box, Heading } from '@/system/components'
import * as styles from './Post.css'

type Props = {
  // setSelected: Dispatch<SetStateAction<null>>
  post: PostInfo
}

const Post = ({ post }: Props) => {
  const { title, description, coverImage, coverImageHeight, date } = post

  console.log(coverImageHeight)

  console.log(coverImage)
  return (
    <Box className={styles.container}>
      <motion.div
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        className={styles.imageWrapper}
        style={assignInlineVars({
          [styles.imageHeight]: `${coverImageHeight}px`,
        })}
      >
        <Image
          src={coverImage}
          fill
          alt="post image"
          className={styles.image}
        />
      </motion.div>
      <Heading as="h2" text={title} />
    </Box>
  )
}

export default Post
