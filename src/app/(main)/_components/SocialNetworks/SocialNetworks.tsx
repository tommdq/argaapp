import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { Flex } from '@mantine/core'

const SocialNetworks = () => {
  return (
    <Flex gap={'1.5rem'}>
      <Image
        src={ICONS.FACEBOOK_BLACK}
        alt='logo-ig'
        width={20}
        height={20}
        fit={'contain'}
      />
      <Image
        src={ICONS.INSTAGRAM_BLACK}
        alt='logo-ig'
        width={20}
        height={20}
        fit={'contain'}
      />
      <Image
        src={ICONS.LINKEDIN_BLACK}
        alt='logo-ig'
        width={20}
        height={20}
        fit={'contain'}
      />
    </Flex>
  )
}
export default SocialNetworks
