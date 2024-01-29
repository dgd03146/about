import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export const MarkdownImage = ({ src, alt, ...props }: Props) => (
  <Image
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
)
