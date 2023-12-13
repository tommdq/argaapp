'use client'
import Button from '@app/_components/Button'
import NavLink from '@app/_components/NavLink'
import useDeviceType from '@app/_hooks/useDeviceType'
import { locals } from '@locals/mockups'
import { Carousel } from '@mantine/carousel'
import { Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import LocalItem from '../LocalItem/LocalItem'
import styles from './gridLocals.module.css'

// const slidesApi: TLocalItem[] = [
//   {
//     name: 'abertec',
//     icon: LOGOS.ABERTEC_LOGO,
//     bg: LOCALS_BG.ABERTEC_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'aloisio',
//     icon: LOCALS_LOGOS.ALOISIO_LOGO,
//     bg: LOCALS_BG.ALOISIO_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'ltn',
//     icon: LOCALS_LOGOS.LTN_LOGO,
//     bg: LOCALS_BG.LTN_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'manager electric',
//     icon: LOCALS_LOGOS.MANAGER_ELECTRIC_LOGO,
//     bg: LOCALS_BG.MANAGER_ELECTRIC_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'millenium',
//     icon: LOCALS_LOGOS.MILLENIUM_LOGO,
//     bg: LOCALS_BG.MILLENIUM_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'mokka',
//     icon: LOCALS_LOGOS.MOKKA_LOGO,
//     bg: LOCALS_BG.MOKKA_BG,
//     category: 'Aberturas'
//   },
//   {
//     name: 'vivero arabia',
//     icon: LOCALS_LOGOS.VIVERO_ARABIA_LOGO,
//     bg: LOCALS_BG.VIVERO_ARABIA_BG,
//     category: 'Aberturas'
//   }
// ]

// function shuffleArray(array) {
//   return array.slice().sort(() => Math.random() - 0.5)
// }

// const locals1 = shuffleArray(locals)
// const locals2 = shuffleArray(locals)

const GridLocals = () => {
  const { isDesktop } = useDeviceType()
  const autoplay1 = useRef(Autoplay({ delay: 2500 }))
  const autoplay2 = useRef(Autoplay({ delay: 2500 }))
  return (
    <section>
      <Flex
        id='locals'
        w='100%'
        justify={'space-between'}
        px='3vw'
        gap={'2rem'}
        align={'center'}
        mt={'6rem'}
        direction={isDesktop ? 'row' : 'column'}
      >
        <Flex direction={'column'} align={'start'}>
          <Text size='14px'>NUESTRO MAYOR RESPALDO</Text>
          <Title size={clamp(40, 48)} fw={500}>
            Una amplia selección de expertos
          </Title>
        </Flex>
        <Button
          type='primary'
          h={'2.5rem'}
          radius={'.9rem'}
          className={styles.navbutton}
        >
          <NavLink href='/locals' label='CONOCE A NUESTROS PROVEEDORES' />
        </Button>
      </Flex>
      <Carousel
        withIndicators
        my={'2rem'}
        plugins={[autoplay1.current]}
        withControls={false}
        slidesToScroll={1}
        loop
        styles={{
          container: {
            gap: '2rem',
            paddingBlock: '1rem',
            paddingInline: '2rem'
          }
        }}
      >
        {locals.map((local, index: number) => (
          <LocalItem
            key={local.name}
            local={{
              name: local.name,
              icon: local.icon,
              banner: local.banner,
              category: local.categoryName
            }}
            index={index}
            minWidth={'240px'}
          />
        ))}
      </Carousel>
      {/* <Carousel
        withIndicators
        my={'2rem'}
        plugins={[autoplay2.current]}
        withControls={false}
        slidesToScroll={1}
        loop
        styles={{
          container: {
            gap: '2rem',
            paddingBlock: '1rem',
            paddingInline: '2rem'
          }
        }}
      >
        {shuffleArray(locals).map((slide, index: number) => (
          <LocalItem key={slide.name} local={slide} index={index} />
        ))}
      </Carousel> */}
    </section>
  )
}
export default GridLocals
