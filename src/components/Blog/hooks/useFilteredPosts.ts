'use client'

import type { PostContent } from '@/types'
import { useEffect, useState } from 'react'
import { INITIAL_CATEGORY } from '@/constants'
import { getFilteredPosts } from '@/services'

export const useFilteredPosts = (
  posts: PostContent[],
  filter: string | null = INITIAL_CATEGORY,
) => {
  const [filtered, setFiltered] = useState(filter || INITIAL_CATEGORY)
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFiltered(filter || INITIAL_CATEGORY)
  }, [filter])

  useEffect(() => {
    setFilteredPosts(getFilteredPosts(posts, filtered))
  }, [filtered, posts])

  return { filtered, setFiltered, filteredPosts }
}
