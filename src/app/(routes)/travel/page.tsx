import { Travel } from '@/components/Travel/Travel'
import { posts } from '@/data/posts'

// FIXME: 서버컴포넌트에서 받아오기

const TravelPage = () => {
  return <Travel posts={posts} />
}

export default TravelPage
