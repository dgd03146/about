'use client'

import { NotionRenderer } from 'react-notion-x'
// import dynamic from 'next/dynamic'
import nextImage from 'next/image'
import nextLink from 'next/link'
import { ExtendedRecordMap } from 'notion-types'
import 'react-notion-x/src/styles.css'

import { Box } from '@/system/components'
// import * as styles from './NotionPage.css'

// const Code = dynamic(
//   () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
//   {
//     ssr: false,
//   },
// )

// const Collection = dynamic(
//   () =>
//     import('react-notion-x/build/third-party/collection').then(
//       (m) => m.Collection,
//     ),
//   {
//     ssr: false,
//   },
// )

// const Equation = dynamic(
//   () =>
//     import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
//   {
//     ssr: false,
//   },
// )

// const Modal = dynamic(
//   () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
//   {
//     ssr: false,
//   },
// )

const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <Box>
      <NotionRenderer
        // className={styles.notionStyle}
        recordMap={recordMap}
        fullPage
        disableHeader
        showTableOfContents
        components={{
          // Code,
          // Collection,
          // Equation,

          // Modal,
          nextLink,
          nextImage,
        }}
      />
    </Box>
  )
}

export default NotionPage
