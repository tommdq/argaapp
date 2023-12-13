'use client'
import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { Divider, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'

import useDeviceType from '@app/_hooks/useDeviceType'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import styles from './weAreArga.module.css'

const benefits = [
  {
    icon: ICONS.ICON_CIRCLE,
    title: 'Predio de Gran Dimensión',
    text: '30.000m2 de superficie y 15.000m2 cubiertos para crear sin límites.'
  },
  {
    icon: ICONS.ICON_DIAMOND,
    title: 'Ubicación estratégica',
    text: 'Nos encontramos a tan solo 10 minutos del centro de Mendoza.'
  },
  {
    icon: ICONS.ICON_SQUARE,
    title: 'Cómodo estacionamiento',
    text: 'Amplia zona de estacionamiento para clientes y proveedores.'
  },
  {
    icon: ICONS.ICON_SEMICIRCLE,
    title: 'Cobertura regional',
    text: 'Cubrimos la demanda de materiales y servicios de construcción en Mendoza.'
  }
]

const WeAreArga = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }))
  const { isDesktop } = useDeviceType()

  return (
    <Flex direction={'column'} px={'3vw'} py={'5rem'} gap={'4rem'}>
      <Flex direction={'column'}>
        <Text size='14px'>SOMOS ARGA</Text>
        <Title size={clamp(40, 48)}>
          Todo lo que necesitas para tus proyectos de construcción y diseño, en
          un solo lugar.
        </Title>
      </Flex>
      <Flex gap={'4rem'}>
        {isDesktop ? (
          benefits.map((benefit) => (
            <Flex
              direction='row'
              gap={'1.5rem'}
              className={styles.benefit}
              key={benefit.title}
            >
              <Divider orientation='vertical' />
              <Flex direction={'column'} gap={'1rem'} maw={'100vw'}>
                <Image
                  src={benefit.icon}
                  w={'4rem'}
                  h={'4rem'}
                  className={styles.icons}
                  alt='Icono de beneficio'
                />
                <Text fw={700} size='24px'>
                  {benefit.title}
                </Text>
                <Text pr={'5rem'}>{benefit.text}</Text>
              </Flex>
            </Flex>
          ))
        ) : (
          <Carousel
            withIndicators
            height={200}
            plugins={[autoplay.current]}
            withControls={false}
            slidesToScroll={1}
          >
            {benefits.map((benefit) => (
              <Carousel.Slide key={benefit.title} w={'25vw'}>
                <Flex direction='row' gap={'1.5rem'} className={styles.benefit}>
                  <Divider orientation='vertical' />
                  <Flex direction={'column'} gap={'1rem'} maw={'100vw'}>
                    <Image
                      src={benefit.icon}
                      w={'4rem'}
                      h={'4rem'}
                      className={styles.icons}
                      alt='Icono de beneficio'
                    />
                    <Text fw={700} size='24px'>
                      {benefit.title}
                    </Text>
                    <Text pr={'5rem'}>{benefit.text}</Text>
                  </Flex>
                </Flex>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </Flex>
    </Flex>
  )
}
export default WeAreArga
