import { Dispatch, SetStateAction, useCallback } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { motion } from 'framer-motion'
import { defaultAnimations } from '@/components/ui/Animation/AnimatedText'
import { Button, Container, Flex, Heading } from '@/system/components'
import { color } from '@/system/tokens/colors'
import { extractBaseUrl } from '@/utils/extractBaseUrl'
import { useQueryParam } from '../hooks'
import * as styles from './Category.css'

type Props = {
  filtered: string
  setFiltered: Dispatch<SetStateAction<string>>
}

const category = [
  { name: 'ALL' },
  { name: 'KOREA' },
  { name: 'UK' },
  { name: 'TRAVEL' },
]

const param = 'category'

export const Category = ({ filtered, setFiltered }: Props) => {
  const { router, pathname, pushRouteWithQuery } = useQueryParam(param)

  const handleFilter = useCallback(
    (name: string) => {
      if (name === 'ALL') {
        router.push(extractBaseUrl(pathname))
        return
      }
      setFiltered(name)
      pushRouteWithQuery(param, name)
    },
    [pathname],
  )

  return (
    <Container className={styles.container}>
      <Flex className={styles.categoryContainer}>
        {category.map(({ name }, index) => (
          // FIXME: 재사용 컴포넌트로 바꾸기. Image, category 두개에서 사용됨
          <motion.div
            key={name}
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: index * 0.5 }}
            variants={defaultAnimations}
            // FIXME: 애니메이션 공용으로 사용가능하게
            whileHover={{
              transform: [
                'scale3D(1,1,1)',
                'scale3D(1.1,0.85,1)',
                'scale3D(.75,1.25,1)',
                'scale3D(1.25,.85,1)',
                'scale3D(.9,1.05,1)',
                'scale3D(1,1,1)',
              ],

              transition: {
                times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
                duration: 1,
              },
            }}
          >
            <Button onClick={() => handleFilter(name)}>
              <Heading
                as="h2"
                key={index}
                className={styles.categoryName}
                text={name}
                style={assignInlineVars({
                  [styles.textColor]:
                    name === filtered ? color.primary : color.black,
                })}
              />
            </Button>
          </motion.div>
        ))}
      </Flex>
    </Container>
  )
}
