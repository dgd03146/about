import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import {
  MarkdownParagraph,
  MarkdownH1,
  MarkdownH2,
  MarkdownH3,
  MarkdownH4,
  MarkdownBlockQuote,
  MarkdownImage,
  PostBrief,
  PostDetail,
} from '@/components/Blog'

import { getPostPage } from '@/services'
import { Box } from '@/system/components'

type Params = {
  params: {
    slug: string
  }
}

const PostDetailPage = async ({ params: { slug } }: Params) => {
  const page = await getPostPage(slug)

  return (
    <PostDetail>
      <PostBrief post={page.post} />
      <Box paddingY="xxlarge">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <MarkdownH1 {...props} />,
            h2: (props) => <MarkdownH2 {...props} />,
            h3: (props) => <MarkdownH3 {...props} />,
            h4: (props) => <MarkdownH4 {...props} />,
            p: (props) => <MarkdownParagraph {...props} />,
            blockquote: (props) => <MarkdownBlockQuote {...props} />,
            img: ({ src, alt }) => (
              // FIXME: 이미지 없을때 대체할 이미지 넣기
              <MarkdownImage src={src || ''} alt={alt || ''} />
            ),
          }}
        >
          {page.markdown}
        </ReactMarkdown>
      </Box>
    </PostDetail>
  )
}

export default PostDetailPage
