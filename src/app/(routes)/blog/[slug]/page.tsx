import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MarkdownBlockQuote from '@/components/Blog/Markdown/MarkdownBlockQuote'
import {
  MarkdownH1,
  MarkdownH2,
  MarkdownH3,
  MarkdownH4,
} from '@/components/Blog/Markdown/MarkdownHeading'
import { MarkdownImage } from '@/components/Blog/Markdown/MarkdownImage'
import MarkdownParagraph from '@/components/Blog/Markdown/MarkdownParagraph'
import PostDetail from '@/components/Blog/PostDetail/PostDetail'
import PostSummary from '@/components/Blog/PostSummary/PostSummary'
import { getPostPage } from '@/services/notion'
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
      <PostSummary post={page.post} />
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
