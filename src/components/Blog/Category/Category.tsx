'use client'

import { motion } from 'framer-motion'
import { Container, Heading, Stack, Flex } from '@/system/components'

const category = [
  { title: 'ALL' },
  { title: 'UK' },
  { title: 'KOREA' },
  { title: 'TRAVEL' },
]

const Category = () => {
  return (
    <Container width="w-1/5">
      <Flex gapX="xxlarge">
        {category.map(({ title }, index) => (
          // FIXME: 재사용 컴포넌트로 바꾸기. Image, category 두개에서 사용됨
          <motion.div
            key={title}
            // className={styles.item}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <Heading key={index} as="h1" fontSize="8xl" fontFamily="hero">
              {title}
            </Heading>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}

export default Category
