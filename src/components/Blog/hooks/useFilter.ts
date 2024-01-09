import type { PostInfo } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { getFilterPost } from '@/utils/getFilteredPosts'

export const useFilteredPosts = (
  initialPosts: PostInfo[],
  initialFilter = 'ALL',
) => {
  const [filtered, setFiltered] = useState(initialFilter)
  const [filteredPosts, setFilteredPosts] = useState(initialPosts)

  const handleFilterChange = useCallback((newFilter: string) => {
    setFiltered(newFilter)
  }, [])

  useEffect(() => {
    setFilteredPosts(getFilterPost(initialPosts, filtered))
  }, [filtered, initialPosts])

  return { filtered, filteredPosts, handleFilterChange }
}
