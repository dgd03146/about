import React from 'react'
import { TPopularPost } from './PopularList'
import { Box } from '@/design/components'

const PopularItem = ({ id, firstName, lastName }: TPopularPost) => {
  return (
    <Box>
      {id}
      <p>{firstName}</p>
      <p>{lastName}</p>
    </Box>
  )
}

export default PopularItem
