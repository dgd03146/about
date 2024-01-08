// import { Blog } from '@/components/Blog/Blog'
import { Blog } from '@/components/Blog/Blog'
import BlogPosts from '@/components/Blog/BlogPosts/BlogPosts'
import { getPostDetail, getPosts } from '@/services/notion'

const BlogPage = async () => {
  const posts = await getPosts()

  return <Blog posts={posts} />
}

export default BlogPage
