import { Dispatch, SetStateAction } from 'react'
import { Box } from '@/system/components'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  item: any
  setSelected: Dispatch<SetStateAction<null>>
}

const Card = ({ setSelected, item }: Props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Image src={item.src} width={500} height={500} alt="post image" />
    </motion.div>
  )
}

export default Card
