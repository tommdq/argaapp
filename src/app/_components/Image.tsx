import { Image as ImageMantine, ImageProps } from '@mantine/core'
import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData
} from 'next/image'

type Props = NextImageProps &
  ImageProps & {
    src: StaticImageData | string
    alt: string
    className?: string
  }

const Image = ({ src, alt, className, ...rest }: Props) => {
  return (
    <ImageMantine
      component={NextImage}
      className={className}
      quality={100}
      src={src}
      alt={alt}
      {...rest}
    />
  )
}
export default Image
