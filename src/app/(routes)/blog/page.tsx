import { Blog } from '@/components/Blog'
import { getPosts } from '@/services'

const BlogPage = async () => {
  const posts = await getPosts()

  return <Blog posts={posts} />
}

export default BlogPage
