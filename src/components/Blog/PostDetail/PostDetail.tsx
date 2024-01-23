import { ReactNode } from 'react'
import { Box } from '@/system/components'
import * as styles from './PostDetail.css'

// FIXME: PostDetail 없어도 될듯?

const PostDetail = ({ children }: { children: ReactNode }) => {
  return <Box className={styles.container}>{children}</Box>
}

export default PostDetail
