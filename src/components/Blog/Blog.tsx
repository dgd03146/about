import { Container, Flex } from '@/system/components'
import * as styles from './Blog.css'
import { BlogList } from './BlogList'

import Category from './Category/Category'

export const Blog = () => {
  return (
    <Container className={styles.container}>
      <Flex className={styles.blogSection}>
        <Category />
        <BlogList />
      </Flex>
    </Container>
  )
}
