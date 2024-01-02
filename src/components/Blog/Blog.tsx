import { Container, Stack } from '@/system/components'
import { BlogList } from './BlogList'
import * as S from './BlogList.css'
import Category from './Category/Category'

export const Blog = () => {
  return (
    <Container className={S.container}>
      <Stack height="full" justifyContent="center" gapX="large">
        <Category />
        <BlogList />
      </Stack>
    </Container>
  )
}
