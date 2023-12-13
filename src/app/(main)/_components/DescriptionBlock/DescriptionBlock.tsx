import Image from '@app/_components/Image'
import { IMAGES } from '@assets/img/constants'
import { Box, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import styles from './descriptionBlock.module.css'

const DescriptionBlock = () => {
  return (
    <Box pos='relative'>
      <Image
        src={IMAGES.STICKER}
        alt='Sticker Arga'
        className={styles.sticker}
      />
      <Image
        src={IMAGES.DESCRIPTION_BLOCK_BG}
        alt='Fondo descripcion'
        className={styles.bgDescription}
      />
      <Flex
        pos='absolute'
        className={styles.description}
        top={0}
        h={'100%'}
        direction={'column'}
        justify={'center'}
      >
        <Title c={'white'} pr={'10vw'} size={clamp(24, 32)} pl={'3vw'}>
          ¿Pasas más tiempo conduciendo y visitando proveedores que diseñando
          tus proyectos de construcción?
        </Title>
        <br />
        <Text
          c={'white'}
          pr={'10vw'}
          size={clamp(20, 24)}
          pl={'3vw'}
          className={styles.descriptionText}
        >
          En ARGA, entendemos lo valioso que es tu tiempo y lo difícil que puede
          ser gestionarlo, especialmente cuando los proveedores están dispersos
          y te obligan a largas jornadas de conducción.
        </Text>
      </Flex>
    </Box>
  )
}
export default DescriptionBlock
