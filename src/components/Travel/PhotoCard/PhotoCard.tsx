import type { Post } from '../Travel'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import { Box, Text } from '@/system/components'
import { ModalPortal } from '@/components/ui'
import { Modal, PhotoDetail } from '..'
import * as styles from './PhotoCard.css'

type Props = {
  post: Post
}
export const PhotoCard = ({ post }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <motion.div
        layoutId={`card-${post.id}`}
        className={styles.imageWrapper}
        whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenModal}
      >
        <Image
          className={styles.image}
          src={post.src}
          alt={post.title}
          fill
          // sizes="650px"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* <Box padding="medium">
        <Text text={post.title} fontWeight="bold" color="black" />
      </Box> */}
      </motion.div>
      {isOpenModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal}>
            <PhotoDetail post={post} />
          </Modal>
        </ModalPortal>
      )}
    </>
  )
}
