import Image from '@app/_components/Image'
import { IMAGES } from '@assets/img/constants'
import { Flex } from '@mantine/core'

const AboutUsImage = () => {
  return (
    <Flex>
      <Image
        src={IMAGES.ABOUT_US}
        alt={'about us'}
        style={{
          width: '500px',
          height: '600px',
          borderRadius: '1rem',
          maxWidth: '100%'
        }}
      />
    </Flex>
  )
}
export default AboutUsImage
