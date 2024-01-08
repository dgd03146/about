'use client'

import { motion } from 'framer-motion'
import { Button, Container, Flex, Text, Heading } from '@/system/components'
import * as styles from './Category.css'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'

type Props = {
  filtered: string
  setFiltered: Dispatch<SetStateAction<string>>
  activeCategory: number
  setActiveCategory: Dispatch<SetStateAction<number>>
}

const category = [
  { title: 'ALL' },
  { title: 'KOREA' },
  { title: 'UK' },
  { title: 'TRAVEL' },
]

const Category = ({
  filtered,
  setFiltered,
  activeCategory,
  setActiveCategory,
}: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  console.log(pathname, params)

  const handleFilter = useCallback(
    (title: string) => {
      setFiltered(title)
    },
    [filtered],
  )

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
            <Button onClick={() => handleFilter(title)}>
              <Heading
                as="h2"
                key={index}
                className={styles.categoryName}
                text={title}
              />
            </Button>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}

export default Category
