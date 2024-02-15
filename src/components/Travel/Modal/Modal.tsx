import React from 'react'
import { Box, Button, Flex, Heading } from '@/system/components'
import { CloseIcon } from '../../ui/icons'
import * as styles from './Modal.css'

type Props = {
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ onClose, children }: Props) => {
  return (
    <Box
      as="section"
      className={styles.container}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
        return event.stopPropagation()
      }}
    >
      <Box className={styles.modal}>
        <Flex justifyContent="flex-end">
          <Button variant="basic" onClick={onClose}>
            <Heading as="h3" color="white">
              <CloseIcon />
            </Heading>
          </Button>
        </Flex>
        {children}
      </Box>
    </Box>
  )
}
