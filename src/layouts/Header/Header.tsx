import { Flex, Heading } from '@/system/components'
import { HeaderStyle } from './Header.css'

export const Header = () => {
  return (
    <Flex as="header" alignItems="center" className={HeaderStyle}>
      <Heading as="h1" text="Jung" />
    </Flex>
  )
}
