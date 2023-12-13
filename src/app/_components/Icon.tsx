import { ICONS } from '@assets/svg/constants'
import { Image, ImageProps } from '@mantine/core'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

type Props = Omit<NextImageProps, 'src'> &
  ImageProps & {
    type: string
    alt: string
    className?: string
  }

const Types: Record<string, unknown> = {
  play: ICONS.PLAY_HERO_VIDEO
}

const Icon = ({ type, alt, className, ...rest }: Props) => {
  return (
    <Image
      component={NextImage}
      className={className}
      quality={100}
      src={Types[type]}
      alt={alt}
      {...rest}
    />
  )
}
export default Icon
