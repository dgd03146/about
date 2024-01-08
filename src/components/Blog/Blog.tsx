'use client'

import { PropsWithChildren, useState, useEffect } from 'react'
import { Container, Flex } from '@/system/components'
import * as styles from './Blog.css'
// import BlogPosts from './BlogPosts/BlogPosts'
import Category from './Category/Category'
import { PostInfo } from '@/types'
import BlogPosts from './BlogPosts/BlogPosts'
import { getFiltered } from '@/utils/getFilteredPosts'

type Props = { posts: PostInfo[] }

export const Blog = ({ posts }: Props) => {
  const [filtered, setFiltered] = useState('ALL')
  const [activeCategory, setActiveCategory] = useState(0)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFilteredPosts(getFiltered(posts, filtered))
  }, [filtered])

  return (
    <Container className={styles.container}>
      <Flex className={styles.blogSection}>
        <Category
          filtered={filtered}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <BlogPosts posts={filteredPosts} />
      </Flex>
    </Container>
  )
}
