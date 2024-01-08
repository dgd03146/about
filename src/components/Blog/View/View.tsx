import GalleryViewIcon from '@/components/ui/icons/GalleryViewIcon'
import ListViewIcon from '@/components/ui/icons/ListViewIcon'

import { Flex } from '@/system/components'

const View = () => {
  return (
    <Flex gapX="small">
      <GalleryViewIcon />
      <ListViewIcon />
    </Flex>
  )
}

export default View
