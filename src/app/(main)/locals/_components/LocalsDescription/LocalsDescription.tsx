import Image from '@app/_components/Image'
import { IMAGES } from '@assets/img/constants'
import { Box, Flex, Text, Title } from '@mantine/core'
import styles from './localsDescription.module.css'

const LocalsDescription = () => {
  return (
    <Box pos='relative'>
      <Image
        src={IMAGES.LOCALS_DESCRIPTION_BG}
        alt='Fondo descripcion'
        className={styles.bgDescription}
      />
      <Flex
        pos='absolute'
        className={styles.description}
        top={0}
        h={'100%'}
        w={'100%'}
        direction={'column'}
        wrap={'wrap'}
        justify={'center'}
        align={'center'}
        //   mt={'2rem'}
      >
        <Title c={'white'} pr={'10vw'} size={'40px'} pl={'3vw'}>
          Conoce nuestra red de expertos de la construcción
        </Title>
        <br />
        <Text
          c={'white'}
          pr={'10vw'}
          size={'24px'}
          pl={'3vw'}
          className={styles.descriptionText}
        >
          Hemos reunido a 40 especialistas en cada área de la construcción para
          ofrecerte productos y servicios de alta calidad, todo en un solo lugar
          sin complicaciones.
        </Text>
      </Flex>
    </Box>
  )
}
export default LocalsDescription
