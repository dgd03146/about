'use client'

import { PropsWithChildren, useState } from 'react'
import { Container, Flex } from '@/system/components'
import * as styles from './Blog.css'
// import BlogPosts from './BlogPosts/BlogPosts'
import Category from './Category/Category'
import ImageModal from './ImageModal'

type Props = {} & PropsWithChildren

export const Blog = ({ children }: Props) => {
  const [selected, setSelected] = useState(null)
  const [filtered, setFiltered] = useState()
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <Container className={styles.container}>
      <Flex className={styles.blogSection}>
        <Category
          filtered={filtered}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {children}
        <ImageModal selected={selected} setSelected={setSelected} />
      </Flex>
    </Container>
  )
}
