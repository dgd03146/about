import { Blog } from '@/components/Blog/Blog'
import { getPosts } from '@/services/notion'

const BlogPage = async () => {
  const posts = await getPosts()

  return <Blog posts={posts} />
}

export default BlogPage
