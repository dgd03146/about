'use client'

import { useState } from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { Button, Flex, Heading } from '@/system/components'
import { Drawer } from '../ui'
import { HamburgerIcon, SearchIcon } from '../ui/icons'
import * as styles from './Navbar.css'

const lot = localFont({
  src: '../../../public/fonts/Lot-Regular.woff2',
  variable: '--font-logo',
  display: 'swap',
})

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        className={styles.navbar}
        position="sticky"
        top={0}
        zIndex={40}
      >
        <Link href="/">
          <Heading
            as="h1"
            text="JUNG"
            fontSize="2xl"
            className={lot.className}
          />
        </Link>
        <Flex gapX="medium" alignItems="center">
          <Button>
            <Heading as="h1" fontSize="2xl" padding="none">
              <SearchIcon />
            </Heading>
          </Button>
          <Button variant="basic" onClick={handleDrawer}>
            <Heading as="h1" fontSize="2xl" padding="none">
              <HamburgerIcon />
            </Heading>
          </Button>
        </Flex>
      </Flex>
      {isOpen && <Drawer isOpen={isOpen} toggle={handleDrawer} />}
    </>
  )
}
