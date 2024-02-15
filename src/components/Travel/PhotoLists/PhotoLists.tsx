import type { Post } from '../Travel'

import Masonry from 'react-masonry-css'

import { PhotoCard } from '..'
import * as styles from './PhotoList.css'

const breakPoints = {
  default: 4,

  1200: 4,
  1080: 3,
  768: 2,
  480: 2,
}

type Props = {
  posts: Post[]
}

export const PhotoLists = ({ posts }: Props) => {
  return (
    <Masonry
      breakpointCols={breakPoints}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {posts.map((post) => (
        <PhotoCard key={post.id} post={post} />
      ))}
    </Masonry>
  )
}
