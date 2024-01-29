import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { getNotionToken } from '@/envs'

export const notionClient = new Client({
  auth: getNotionToken(),
})

export const notion = new Client({
  auth: getNotionToken(),
})

export const n2m = new NotionToMarkdown({ notionClient: notion })
