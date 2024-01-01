'use client'

import { useState } from 'react'

import localFont from 'next/font/local'
import Link from 'next/link'

import { Drawer } from '@/components/ui'
import { Button, Flex, Heading } from '@/system/components'
import HamburgerIcon from '../ui/icons/HamburgerIcon'
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
    >
      <Link href="/">
        <Heading as="h1" text="JUNG" fontSize="2xl" className={lot.className} />
      </Link>
      <Button variant="basic" onClick={handleDrawer}>
        <Heading as="h1" fontSize="2xl" padding="none">
          <HamburgerIcon />
        </Heading>
      </Button>
      {isOpen && <Drawer toggle={handleDrawer} />}
    </Flex>
  )
}
