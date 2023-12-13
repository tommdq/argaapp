'use client'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { LOGOS } from '@assets/svg/constants'
import { Divider, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import styles from './shoppingTour.module.css'

const services = [
  {
    title: 'Café y Delicias',
    text: 'Descansa o conecta con otros creativos en nuestro café y restaurante.'
  },
  {
    title: 'Espacios Profesionales',
    text: 'Encuentra la oficina perfecta para trabajar con comodidad y eficiencia.'
  },
  {
    title: 'Reuniones Productivas',
    text: 'Reserva nuestras salas equipadas para reuniones y colaboración efectiva.'
  },
  {
    title: 'Escenario de Ideas',
    text: 'Presenta en nuestro auditorio, el lugar perfecto para tus eventos y charlas.'
  }
]

const ShoppingTour = () => {
  const { isDesktop } = useDeviceType()
  return (
    <section className={styles.container}>
      <Image
        pos={'absolute'}
        src={IMAGES.SHOPPING_TOUR_BG}
        alt='Fondo descripcion'
        className={styles.bgDescription}
      />
      <Flex
        direction={isDesktop ? 'row' : 'column'}
        className={styles.blenefitsContainer}
        py={'5rem'}
        px={'3vw'}
        gap={'4rem'}
      >
        <Flex
          direction={'column'}
          justify={'space-between'}
          align={'start'}
          className={styles.block}
        >
          <Flex direction={'column'}>
            <Text c={'white'} size='14px'>
              UNA EXPERIENCIA INTEGRAL Y PLACENTERA
            </Text>
            <Title c={'white'} size={clamp(40, 48)}>
              Visita también nuestro paseo de compras
            </Title>
          </Flex>
          {isDesktop && (
            <Image
              src={LOGOS.LOGO_NAME_WHITE}
              alt='Fondo descripcion'
              className={styles.argaLogo}
            />
          )}
        </Flex>
        <Flex gap={'2rem'} direction={'column'} className={styles.block}>
          {services.map((service) => (
            <Flex key={service.title} direction={'column'} gap={'1rem'}>
              <Text fw={700} size={clamp(20, 24)} c={'white'}>
                {service.title}
              </Text>
              <Text c={'white'}>{service.text}</Text>
              <Divider c={'white'} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </section>
  )
}
export default ShoppingTour
