import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react'
import Link from 'next/link'
import { Box, BoxProps } from '..'
import * as styles from './Button.css'

interface Props
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'transparent'
  text?: string
  icon?: ReactNode
  href?: string
}

type ButtonProps = BoxProps<'button', Props>
type ButtonComponent = (props: ButtonProps) => React.ReactNode | null

export const Button: ButtonComponent = forwardRef(
  ({ href, variant = 'solid', icon, text, children, ref }: ButtonProps) => {
    const buttonClass = styles.buttonStyle({ variant })

    const content = (
      <>
        {children}
        {text}
        {icon && (
          <Box display="inline" paddingLeft="xsmall">
            {icon}
          </Box>
        )}
      </>
    )

    return href ? (
      <Link href={href} className={buttonClass}>
        {content}
      </Link>
    ) : (
      <Box as="button" className={buttonClass} ref={ref}>
        {content}
      </Box>
    )
  },
)
