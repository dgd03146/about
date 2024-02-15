import type { Post } from '../Travel'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Box, Text } from '@/system/components'
import * as styles from './PhotoDetail.css'

type Props = {
  post: Post
}

export const PhotoDetail = ({ post }: Props) => {
  return (
    <Box className={styles.container}>
      <motion.div layoutId={`card-${post.id}`} className={styles.imageWrapper}>
        <Image src={post.src} fill alt="Modal Image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.motionBox}
      >
        <Text text={post.title} />
      </motion.div>
    </Box>
  )
}
