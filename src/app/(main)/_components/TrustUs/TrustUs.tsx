'use client'

import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { Box, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import styles from './trustUs.module.css'

const boxes = [
  {
    title: 'Empresas constructoras innovadoras',
    text: 'Entendemos las complejidades de la industria así que proporcionamos herramientas y recursos de vanguardia para llevar a cabo proyectos de construcción de alto nivel.'
  },
  {
    title: 'Empresas privadas que hacen realidad obras y sueños',
    text: 'Ya sea una renovación en el hogar o un proyecto comercial ambicioso, estamos para ofrecer orientación y guía en cada paso del camino.'
  },
  {
    title: 'Profesionales influyentes de la arquitectura',
    text: 'Reconocemos el poder de su visión y trabajamos estrechamente para transformar esas ideas en experiencias excepcionales. Su creatividad es nuestra inspiración.'
  }
]

const TrustUs = () => {
  const { isDesktop } = useDeviceType()
  return (
    <section className={styles.container}>
      <Box pos='relative'>
        <Image
          pos={'absolute'}
          src={IMAGES.TRUST_US_BG}
          alt='Fondo descripcion'
          className={styles.bgDescription}
        />
        <Box className={styles.description} py={'8rem'} px={'3vw'}>
          <Title c={'white'} pr={'10vw'} size={clamp(40, 48)} mb={'3rem'}>
            Confían en nosotros
          </Title>
          <Flex gap={'2rem'} direction={'column'}>
            {boxes.map((box) => (
              <Box
                key={box.title}
                px={isDesktop ? '4rem' : '2rem'}
                py={isDesktop ? '2rem' : '4rem'}
                className={styles.box}
              >
                <Flex direction={isDesktop ? 'row' : 'column'} gap={'2rem'}>
                  <Text
                    size={clamp(24, 32)}
                    pr={'2rem'}
                    className={styles.text}
                    c={'white'}
                  >
                    {box.title}
                  </Text>
                  <Text className={styles.text} c={'white'}>
                    {box.text}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </section>
  )
}
export default TrustUs
