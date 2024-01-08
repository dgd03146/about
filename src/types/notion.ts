// export type TTag = {
//   color?: string
//   id: string
//   name: string
// }

// export type TNotionData = {
//   id: string
//   slug: string
//   cover: string
//   title?: string
//   tags: TTag[]
//   description: string
//   date: string
//   githubUrl: string
//   demoUrl: string
// }

// export type TPostDetail = {
//   post: TNotionData
//   markdown: string
// }

// export type Post = {
//   [key: string]: string | string[] | Tag[] | null | undefined
//   id: string
//   title?: string
//   date?: string
//   categories?: Tag[]
//   tags: Tag[]
//   coverImage: string
//   created_time: string
//   last_edited_time: string
// }

type PropertyValue =
  | string
  | string[]
  | Tag
  | Tag[]
  | number
  | null
  | undefined
  | boolean

export type PostInfo = {
  [key: string]: PropertyValue
  id: string
  title?: string
  categories?: Tag[]
  date?: string
  tags?: Tag[]
  description?: string
  coverImage: string
  coverImageHeight?: number
  created_time: string
  last_edited_time: string
}

export type Tag = {
  color?: string
  id: string
  name: string
}
