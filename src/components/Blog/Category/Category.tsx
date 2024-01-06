'use client'

import { motion } from 'framer-motion'
import { Container, Heading, Flex } from '@/system/components'
import * as styles from './Category.css'

const category = [
  { title: 'ALL' },
  { title: 'UK' },
  { title: 'KOREA' },
  { title: 'TRAVEL' },
]

const Category = () => {
  return (
    <Container className={styles.container}>
      <Flex className={styles.categoryContainer}>
        {category.map(({ title }, index) => (
          // FIXME: 재사용 컴포넌트로 바꾸기. Image, category 두개에서 사용됨
          <motion.div
            key={title}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <Heading key={index} as="h1" className={styles.categoryName}>
              {title}
            </Heading>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}

export default Category
