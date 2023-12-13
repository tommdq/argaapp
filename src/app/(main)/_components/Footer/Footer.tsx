import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { LOGOS } from '@assets/svg/constants'
import { Flex, Title } from '@mantine/core'
import CompanyData from '../CompanyData/CompanyData'
import { Links } from '../Links'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import styles from './footer.module.css'

export function Footer() {
  const { isDesktop } = useDeviceType()
  return (
    <>
      {isDesktop ? (
        <section className={styles.container} id={'contact'}>
          <Flex direction={'column'} gap={'3rem'} justify={'space-between'}>
            <Image
              src={LOGOS.LOGO_NAME_BLACK}
              alt={'logo arga footer'}
              w={'150px'}
            />
            <SocialNetworks />
            <Links size={'18px'} fw={'bold'} />
          </Flex>
          <Flex direction={'column'} gap={'2rem'}>
            <Title size={'24px'}>¡Cerca de todo!</Title>
            <CompanyData />
          </Flex>
          <Flex direction={'column'} justify={'space-between'}>
            <Image src={IMAGES.MAP} alt={'map'} />
            <div style={{ alignSelf: 'flex-end' }}>© 2023 ARGA</div>
          </Flex>
        </section>
      ) : (
        <Flex direction={'column'} className={styles.container} id={'contact'}>
          <Image
            src={LOGOS.LOGO_NAME_BLACK}
            alt={'logo arga footer'}
            w={'150px'}
          />
          <Image src={IMAGES.MAP} alt={'map'} maw={'30rem'} />
          <Flex direction={'column'} gap={'3rem'}>
            <Title size={'24px'}>¡Cerca de todo!</Title>
            <CompanyData />
            <Flex justify={'space-between'}>
              <Links size={'18px'} fw={'bold'} />
              <SocialNetworks />
            </Flex>
          </Flex>
          <div style={{ alignSelf: 'flex-end' }}>© 2023 ARGA</div>
        </Flex>
      )}
    </>
  )
}
