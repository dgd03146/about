'use client'

import { motion } from 'framer-motion'
import { Button, Container, Flex, Text } from '@/system/components'
import * as styles from './Category.css'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  filtered: boolean
  setFiltered: Dispatch<SetStateAction<boolean>>
  activeCategory: number
  setActiveCategory: Dispatch<SetStateAction<number>>
}

const category = [
  { title: 'All' },
  { title: 'Uk' },
  { title: 'Korea' },
  { title: 'Travel' },
]

const Category = ({
  filtered,
  setFiltered,
  activeCategory,
  setActiveCategory,
}: Props) => {
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
            <Button>
              <Text key={index} className={styles.categoryName} text={title} />
            </Button>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}

export default Category
