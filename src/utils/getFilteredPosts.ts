import type { PostInfo } from '@/types'

export const getFiltered = (posts: PostInfo[], filter: string): PostInfo[] => {
  if (filter === 'ALL') {
    return posts
  }
  return posts.filter((post) => post.categories?.includes(filter))
}
