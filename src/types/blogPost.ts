type PropertyValue = string | string[] | undefined | number | null | boolean

export type PostContent = {
  [key: string]: PropertyValue
  id?: string
  slug?: string
  title?: string
  categories?: string[]
  date?: string
  tags?: string[]
  description?: string
  coverImage?: string
  coverImageHeight?: number
  created_time?: string
  last_edited_time?: string
}

export type PostSummary = Pick<
  PostContent,
  'title' | 'description' | 'tags' | 'categories' | 'date'
>
