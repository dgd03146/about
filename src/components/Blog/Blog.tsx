'use client'

import { Container, Flex } from '@/system/components'
import { PostInfo } from '@/types'
import * as styles from './Blog.css'
import { Category } from './Category'
import { PostLists } from './PostLists'
import { useFilteredPosts, useQueryParam } from './hooks'

type Props = { posts: PostInfo[] }

const param = 'category'

export const Blog = ({ posts }: Props) => {
  const { paramValue } = useQueryParam(param)
  const { filteredPosts, filtered, setFiltered } = useFilteredPosts(
    posts,
    paramValue,
  )

  return (
    <Container className={styles.container}>
      <Flex className={styles.blogSection}>
        <Category filtered={filtered} setFiltered={setFiltered} />
        <PostLists posts={filteredPosts} />
      </Flex>
    </Container>
  )
}
