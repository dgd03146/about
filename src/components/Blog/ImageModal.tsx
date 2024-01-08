import { Dispatch, SetStateAction } from 'react'

type Props = {
  selected: boolean | null
  setSelected: Dispatch<SetStateAction<null>>
}

const ImageModal = ({ selected, setSelected }: Props) => {
  return <div> imageModal</div>
}

export default ImageModal
