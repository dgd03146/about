import { Dispatch, SetStateAction, useCallback } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { motion } from 'framer-motion'
import { useQueryParam } from '@/components/Blog'
import { BLOG_CATEGORY, BOUNCE_ANIMATION, TEXT_ANIMATION } from '@/constants'
import { Button, Container, Flex, Heading } from '@/system/components'
import { color } from '@/system/tokens'
import { extractBaseUrl } from '@/utils'
import * as styles from './Category.css'

type Props = {
  filtered: string
  setFiltered: Dispatch<SetStateAction<string>>
}

const PARAM = 'category'
const INITIAL_CATEGORY = 'ALL'

export const Category = ({ filtered, setFiltered }: Props) => {
  const { router, pathname, pushRouteWithQuery } = useQueryParam(PARAM)

  const handleFilter = useCallback(
    (name: string) => {
      if (name === INITIAL_CATEGORY) {
        router.push(extractBaseUrl(pathname))
        return
      }
      setFiltered(name)
      pushRouteWithQuery(PARAM, name)
    },
    [pathname],
  )

  return (
    <Container className={styles.container}>
      <Flex className={styles.categoryContainer}>
        {BLOG_CATEGORY.map(({ name }, index) => (
          // FIXME: 재사용 컴포넌트로 바꾸기. Image, category 두개에서 사용됨
          <motion.div
            key={name}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.5 }}
            variants={TEXT_ANIMATION}
            whileHover={BOUNCE_ANIMATION}
          >
            <Button onClick={() => handleFilter(name)}>
              <Heading
                as="h2"
                key={index}
                className={styles.categoryName}
                text={name}
                style={assignInlineVars({
                  [styles.textColor]:
                    name === filtered ? color.green : color.black,
                })}
              />
            </Button>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}
