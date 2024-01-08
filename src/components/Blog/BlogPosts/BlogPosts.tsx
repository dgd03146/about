'use client'

import type { PostInfo } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
// import { posts } from '@/data/posts'
import Masonry from 'react-masonry-css'

import { Box } from '@/system/components'
import Post from '../Post'
import * as styles from './BlogPost.css'

type Props = {
  setSelected: Dispatch<SetStateAction<null>>
  posts: PostInfo[]
}

const breakPoints = {
  default: 3,
  1100: 2,
  700: 1,
}

const BlogPosts = ({ posts }: Props) => {
  return (
    <Box>
      <Masonry
        breakpointCols={breakPoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {posts.map((post) => (
          <Post
            key={post.id}
            // setSelected={setSelected}
            post={post}
          />
        ))}
      </Masonry>
    </Box>
  )
}

export default BlogPosts
