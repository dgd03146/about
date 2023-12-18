'use client'

import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import localFont from 'next/font/local'
import Link from 'next/link'
import { Flex, Heading } from '@/system/components'
import { HeaderStyle } from './Header.css'

const lot = localFont({
  src: '../../../public/fonts/Lot-Regular.woff2',
  variable: '--font-logo',
  display: 'swap',
})

export const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      className={`${lot.className} ${HeaderStyle}`}
    >
      <Link href="/">
        <Heading as="h1" text="JUNG" fontSize="2xl" />
      </Link>
      <Hamburger
        direction="left"
        toggled={isOpen}
        toggle={setOpen}
        label="Show menu"
      />
    </Flex>
  )
}
