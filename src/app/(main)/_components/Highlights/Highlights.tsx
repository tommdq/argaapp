'use client'

import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { ICONS } from '@assets/svg/constants'
import { Box, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import styles from './highlights.module.css'

const numbers = [
  {
    title: '30 mil',
    text: 'm2 de superficie'
  },
  {
    title: '15 mil',
    text: 'm2 de superficie cubierta'
  },
  {
    title: '40',
    text: 'espacios comerciales'
  }
]

const Highlights = () => {
  const { isDesktop } = useDeviceType()
  return (
    <section className={styles.container}>
      <Image
        pos={'absolute'}
        src={IMAGES.HIGHLIGHTS_BG}
        alt='Fondo descripcion'
        className={styles.bgDescription}
      />
      <Box
        className={styles.description}
        mt={'8rem'}
        mb={isDesktop ? 0 : '10rem'}
      >
        <Flex gap={'8rem'} direction={isDesktop ? 'row' : 'column-reverse'}>
          <Box className={styles.block}>
            <Image
              src={IMAGES.HIGHLIGHT}
              style={{
                borderRadius: `${isDesktop ? '0 1rem 0 0' : undefined}`
              }}
              alt='Panorámica de las instalaciones'
            />
            <Image
              pos={'absolute'}
              src={ICONS.ARROW_CIRCLE}
              alt='Fondo descripcion'
              className={styles.arrow}
              top={isDesktop ? '50%' : '-5%'}
              right={isDesktop ? '-10%' : undefined}
              left={!isDesktop ? '10%' : undefined}
              style={{
                width: isDesktop ? '6rem' : '4rem',
                height: isDesktop ? '6rem' : '4rem'
              }}
            />
          </Box>
          <Flex
            gap={'2rem'}
            direction={'column'}
            px={'3vw'}
            className={styles.block}
          >
            <Text size='14px'>MÁS QUE UN CENTRO COMERCIAL</Text>
            <Title size={clamp(40, 48)}>
              Somos el primer mercado de obra integral del país
            </Title>
            <Text>
              Contamos con una planta de corte y doblado de hierro, un centro
              logístico y una fábrica de aberturas.
              <br />
              <br />
              Estamos profundamente involucrados en procesos industriales y
              logísticos relacionados con la construcción y ofrecemos un enfoque
              integral para satisfacer las necesidades de nuestros clientes y
              profesionales del sector.
            </Text>
          </Flex>
        </Flex>
        <Box
          pos={'absolute'}
          right={isDesktop ? undefined : 0}
          className={styles.box}
          style={{
            borderRadius: `${isDesktop ? '1rem 1rem 1rem 0' : '0 0 0 0'}`,
            padding: `${isDesktop ? '2rem 4rem' : '1rem 2rem'}`,
            bottom: `${isDesktop ? '-5%' : '-10%'}`,
            left: `${!isDesktop && 0}`
          }}
          ml={0}
        >
          <Flex
            gap={isDesktop ? '8rem' : '1rem'}
            direction={'row'}
            wrap={'wrap'}
            justify={'center'}
          >
            {numbers.map((num) => (
              <Flex
                key={num.title}
                direction={'column'}
                justify={'center'}
                align={'center'}
              >
                <Title
                  c={'primary'}
                  size={'48px'}
                  order={5}
                  className={styles.boxTitle}
                >
                  {num.title}
                </Title>
                <Text size={'14px'} tt={'uppercase'}>
                  {num.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </section>
  )
}
export default Highlights
