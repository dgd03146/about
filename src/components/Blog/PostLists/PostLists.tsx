import type { PostContent } from '@/types'

import Masonry from 'react-masonry-css'
import { Box } from '@/system/components'
import Post from '../Post/Post'
import * as styles from './PostList.css'

type Props = {
  posts: PostContent[]
}

const breakPoints = {
  default: 5,

  1200: 4,
  1080: 3,
  768: 2,
  480: 2,
}

export const PostLists = ({ posts }: Props) => {
  return (
    <Box>
      <Masonry
        breakpointCols={breakPoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {posts.map((post, index) => (
          <Post key={post.id} index={index} post={post} />
        ))}
      </Masonry>
    </Box>
  )
}
