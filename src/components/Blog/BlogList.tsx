'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Container,
  Flex,
  // Stack,
  Box,
  // Heading,
  // Button,
} from '@/system/components'
import * as styles from './BlogList.css'

const posts = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '타이틀타이틀',
    subtitle:
      'subtitle subtitle subtitlesubtitle subitle subtitle subtitlehihihi',
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
]

export const BlogList = () => {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      )
    }
  }, [carouselRef?.current?.offsetWidth])

  return (
    <Container>
      <Flex>
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
                className={styles.item}
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.5 }}
              >
                <Box
                  position="relative"
                  width="full"
                  className={styles.imageWrapper}
                >
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Box>
                {/* <Heading as="h3" text={title} fontWeight="bold" />
                <Heading as="h4" text={subtitle} />
                <Button variant="black solid" background="black" text="READ" /> */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Flex>
    </Container>
  )
}
