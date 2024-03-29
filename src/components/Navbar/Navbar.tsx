'use client'

import { useState } from 'react'

import localFont from 'next/font/local'
import Link from 'next/link'

import { Drawer } from '@/components/ui'
import { Button, Flex, Heading } from '@/system/components'

import HamburgerIcon from '../ui/icons/HamburgerIcon'
import SearchIcon from '../ui/icons/SearchIcon'
import { NavbarStyle } from './Navbar.css'

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
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      className={NavbarStyle}
      position="sticky"
      top={0}
      zIndex={40}
    >
      <Link href="/">
        <Heading as="h1" text="JUNG" fontSize="2xl" className={lot.className} />
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
      {isOpen && <Drawer isOpen={isOpen} toggle={handleDrawer} />}
    </Flex>
  )
}
