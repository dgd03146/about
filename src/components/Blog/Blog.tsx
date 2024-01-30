'use client'

import { Container, Flex } from '@/system/components'
import { PostContent } from '@/types'
import * as styles from './Blog.css'
import { Category } from './Category'
import { PostLists } from './PostLists'
import { useQueryParam, useFilteredPosts } from '.'

type Props = { posts: PostContent[] }

const param = 'category'

export const Blog = ({ posts }: Props) => {
  const { paramValue } = useQueryParam(param)
  const { filteredPosts, filtered, setFiltered } = useFilteredPosts(
    posts,
    paramValue,
  )

  return (
    <Container>
      <Flex as="section" className={styles.section}>
        <Category filtered={filtered} setFiltered={setFiltered} />
        <PostLists posts={filteredPosts} />
      </Flex>
    </Container>
  )
}
