import React from 'react'
import { Box } from '@/design/components'
import { TPopularPost } from './PopularList'

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
