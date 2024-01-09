'use client'

import { PropsWithChildren, useState, useEffect } from 'react'
import { Container, Flex } from '@/system/components'
import * as styles from './Blog.css'
// import BlogPosts from './BlogPosts/BlogPosts'
import Category from './Category/Category'
import { PostInfo } from '@/types'
import BlogPosts from './BlogPosts/BlogPosts'
import { getFilterPost } from '@/utils/getFilteredPosts'
import { useParams, useSearchParams } from 'next/navigation'

type Props = { posts: PostInfo[] }

export const Blog = ({ posts }: Props) => {
  const [activeCategory, setActiveCategory] = useState(0)

  const [filtered, setFiltered] = useState('ALL')

  const [filteredPosts, setFilteredPosts] = useState(posts)

  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  useEffect(() => {
    setFiltered(category || 'ALL')
  }, [category])

  useEffect(() => {
    setFilteredPosts(getFilterPost(posts, filtered))
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
