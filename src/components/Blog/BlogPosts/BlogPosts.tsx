'use client'

import type { PostInfo } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
// import { posts } from '@/data/posts'
import Masonry from 'react-masonry-css'

import { Box } from '@/system/components'
import Post from '../Post'
import * as styles from './BlogPost.css'
import { useState } from 'react'

type Props = {
  setSelected: Dispatch<SetStateAction<null>>
  posts: PostInfo[]
}

const breakPoints = {
  default: 5,

  1200: 4,
  1080: 3,
  768: 2,
  480: 1,
}

const BlogPosts = ({ posts }: Props) => {
  return (
    <Box>
      <Masonry
        breakpointCols={breakPoints}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {posts.map((post, index) => (
          <Post
            key={post.id}
            index={index}
            // setSelected={setSelected}
            post={post}
          />
        ))}
      </Masonry>
    </Box>
  )
}

export default BlogPosts
