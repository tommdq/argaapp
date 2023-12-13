'use client'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { Button, Flex, Text, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import Link from 'next/link'

export function Registers() {
  const { isDesktop } = useDeviceType()
  return (
    <Flex p={'3rem'} gap={'lg'} direction={isDesktop ? 'row' : 'column'}>
      <Title size={clamp(40, 48)} lh={'50px'} style={{ flex: 1 }}>
        Formá parte <br />
        de nuestra <br />
        aventura
      </Title>
      <Flex gap={'3rem'} wrap={'wrap'} maw={'60rem'} m={'auto'}>
        <Flex direction={'column'} gap={'md'} style={{ flex: 1 }} miw={'20rem'}>
          <Link href={'?registerModal=professional'} scroll={false}>
            <Image
              src={IMAGES.PROFESSIONALS}
              alt={'Professionals logo'}
              style={{
                width: '500px',
                height: '600px',
                borderRadius: '1rem',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Text size={'14px'}>PARA PROFESIONALES</Text>
          <Text size={clamp(20, 24)} fw={'bold'} lh={'xs'}>
            Únete a nuestro directorio <br /> de profesionales
          </Text>
          <Text size={'16px'} lh={'24px'}>
            Aumenta tu visibilidad en nuestra comunidad, resalta tus servicios y
            disfruta de beneficios exclusivos, como tarifas especiales en
            alquiler de espacios.
          </Text>
          <Flex style={{ flex: 1 }} align={'flex-end'}>
            <Link href={'?registerModal=professional'} scroll={false}>
              <Button variant={'outline'} color={'orange.8'} radius={'md'}>
                ÚNETE AL DIRECTORIO
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={'md'} style={{ flex: 1 }} miw={'20rem'}>
          <Link href={'?registerModal=arquitect'} scroll={false}>
            <Image
              src={IMAGES.ARQUITECTS}
              alt={'Arquitects logo'}
              style={{
                width: '500px',
                height: '600px',
                borderRadius: '1rem',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Text size={'14px'}>PARA ARQUITECTOS</Text>
          <Text size={clamp(20, 24)} fw={'bold'} lh={'xs'}>
            Únete al programa <br /> de beneficios para arquitectos
          </Text>
          <Text size={'16px'} lh={'24px'}>
            ¿Te dedicas a la arquitectura? Obtén beneficios y descuentos
            especiales al unirte a nuestra lista de profesionales e influyentes
            de la arquitectura de la región.
          </Text>
          <Flex style={{ flex: 1 }} align={'flex-end'}>
            <Link href={'?registerModal=arquitect'} scroll={false}>
              <Button variant={'outline'} color={'orange.8'} radius={'md'}>
                ÚNETE A LA COMUNIDAD
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
