import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import { Box } from '..'
import * as styles from './Button.css'

interface ButtonLinkProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'transparent'
  text?: string
  icon?: ReactNode
  href?: string
}

export const Button = ({
  href,
  variant = 'solid',
  icon,
  text,
  children,
  ...props
}: ButtonLinkProps) => {
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
    <button className={buttonClass} {...props}>
      {content}
    </button>
  )
}
