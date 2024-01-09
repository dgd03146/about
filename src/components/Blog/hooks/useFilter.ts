import type { PostInfo } from '@/types'
import { useEffect, useState } from 'react'
import { getFilterPost } from '@/services/getFilteredPosts'

const initialFilter = 'ALL'

export const useFilteredPosts = (
  posts: PostInfo[],
  filter: string | null = initialFilter,
) => {
  const [filtered, setFiltered] = useState(filter || initialFilter)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFiltered(filter || initialFilter)
  }, [filter])

  useEffect(() => {
    setFilteredPosts(getFilterPost(posts, filtered))
  }, [filtered, posts])

  return { filtered, setFiltered, filteredPosts }
}
