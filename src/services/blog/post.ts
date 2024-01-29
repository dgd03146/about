import { cache } from 'react'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { getNotionDatabaseId } from '@/envs'
import { PostContent } from '@/types'
import { convertPageProperties } from './convertNotionData'
import { n2m, notionClient } from './notion'

export const getPosts = cache(async () => {
  const databaseQuery = await notionClient.databases.query({
    database_id: getNotionDatabaseId(),
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  })

  const pages = databaseQuery.results.map((pageData) => {
    const page = pageData as PageObjectResponse
    return convertPageProperties(page)
  })

  return pages
})

export const getPagebySlug = async (slug: string) => {
  const response = await notionClient.databases.query({
    database_id: getNotionDatabaseId(),
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  })
  return response.results[0]
}

export const getPostPage = async (slug: string) => {
  const page = await getPagebySlug(slug)
  const convertedPost = convertPageProperties(
    page as PageObjectResponse,
    'isDetail',
  )
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const markdown = n2m.toMarkdownString(mdBlocks).parent

  const post = {
    title: convertedPost.title,
    description: convertedPost.description,
    tags: convertedPost.tags,
    categories: convertedPost.categories,
    date: convertedPost.date,
  }

  return { post, markdown }
}

export const getFilteredPosts = (
  posts: PostContent[],
  filter: string,
): PostContent[] => {
  if (filter === 'ALL') {
    return posts
  }
  return posts.filter((post) => post.categories?.includes(filter))
}
