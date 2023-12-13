import { Box, Flex, Title } from '@mantine/core'

import Image from '@app/_components/Image'
import styles from './homeContainer.module.css'
// TODO: importar desde constants
import { IMAGES } from '@assets/img/constants'
import heroImageRemoved from '@assets/img/hero-image-removed.png'
import { clamp } from '@utils/clamp'

const HomeContainer = () => {
  return (
    <section className={styles.homeContainer}>
      <Image
        src={heroImageRemoved}
        alt='Panorámica de las instalaciones'
        className={styles.heroImage}
        priority
      />
      <Image src={IMAGES.HEAVEN} alt='Cielo' className={styles.heaven} />
      <Box pos='relative' mt={'8rem'} mb={'30rem'} ml={'auto'} w={'100%'}>
        <Flex
          direction={'column'}
          align={'center'}
          className={styles.box}
          gap={'3rem'}
        >
          <Title
            c='white'
            size={clamp(54, 96)}
            order={1}
            className={styles.heroText}
          >
            Un solo lugar,
            <br />
            toda la construcción
          </Title>
          {/* <Button
            type='secondary'
            leftSection={<Icon type={'play'} alt='play' />}
          >
            CONOCÉ ARGA
          </Button> */}
        </Flex>
      </Box>
    </section>
  )
}
export default HomeContainer
