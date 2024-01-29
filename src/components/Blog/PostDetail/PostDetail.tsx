import { ReactNode } from 'react'
import { Box } from '@/system/components'
import * as styles from './PostDetail.css'

export const PostDetail = ({ children }: { children: ReactNode }) => {
  return <Box className={styles.container}>{children}</Box>
}
