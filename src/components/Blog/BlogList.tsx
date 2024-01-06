'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Flex, Box, Heading, Stack } from '@/system/components'
import * as styles from './BlogList.css'

const posts = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'adorable iris purity honey florence like cherish flutter',
    subtitle:
      'adorable iris purity honey florence like cherish flutter lucy asdas ',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle:
      'subtitle subtitle subtitle subtitle subtitle subtitle subtitlesubtitle',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle: 'subtitle subtitle subtitle subtitle subtitle subtitle',
  },
]

const cardBackground = ['red', 'orange', 'primary', 'green', 'blue'] as const

export const BlogList = () => {
  const [width, setWidth] = useState(0)

  const carouselRef = useRef<HTMLDivElement>(null)

  const updateWidth = () => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      )
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)

    // 초기 설정
    updateWidth()

    // cleanup function
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <Container>
      <motion.div
        ref={carouselRef}
        className={styles.carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {posts.map(({ src, title, id }, index) => (
            <motion.div
              key={id}
              className={styles.cardContainer}
              // FIXME: saparate animation style to css file
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.5 }}
            >
              <Box
                className={styles.card}
                background={cardBackground[index % cardBackground.length]}
              >
                <Box className={styles.front}>
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className={styles.frontImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
                <Box className={styles.back} fontFamily="playfair">
                  <Stack padding="medium" gapY="large">
                    <Flex justifyContent="space-between">
                      <Image src={src} alt={title} width={80} height={100} />
                      <Heading as="h4" text="15. July 2023" />
                    </Flex>
                    <Stack gapY="medium">
                      <Heading as="h3" text={title} fontWeight="bold" />
                      {/* <Heading as="h4" text={subtitle} /> */}
                    </Stack>
                  </Stack>
                  <Box
                    position="absolute"
                    bottom={0}
                    width="full"
                    textAlign="center"
                  >
                    <Link href="/">
                      <Heading
                        as="h4"
                        text="Read More"
                        color="white"
                        fontWeight="bold"
                        padding="medium"
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  )
}
