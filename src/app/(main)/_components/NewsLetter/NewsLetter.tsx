'use client'
import Button from '@app/_components/Button'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { IMAGES } from '@assets/img/constants'
import { Box, Flex, Text, TextInput, Title } from '@mantine/core'
import { clamp } from '@utils/clamp'
import styles from './newsLetter.module.css'

export function NewsLetter() {
  const { isDesktop } = useDeviceType()
  return (
    <Box pos={'relative'}>
      <Image
        src={IMAGES.NEWSLETTER_BG}
        alt={'newsletter-bg'}
        style={{ position: 'absolute', zIndex: '-10' }}
      />
      <Flex
        direction={isDesktop ? 'row' : 'column'}
        className={styles.container}
        gap={'2rem'}
      >
        <Flex direction={'column'} gap={'1rem'}>
          <Text size='14px'>SUSCRÍBETE AL NEWSLETTER</Text>
          <Title order={1} size={clamp(40, 48)} mb={'2rem'}>
            Únete a nuestra <br />
            comunidad
          </Title>
        </Flex>
        <Flex direction={'column'} gap={'2rem'}>
          <Text size={clamp(20, 24)}>
            Recibe todas nuestras novedades y promociones <br /> a traves de
            nuestro boletín informativo mensual.
          </Text>
          <Flex
            align={'center'}
            gap={'1rem'}
            direction={isDesktop ? 'row' : 'column'}
          >
            <TextInput
              type={'email'}
              description={'Email'}
              variant={'unstyled'}
              w={'100%'}
              radius={0}
              classNames={{
                input: styles.input,
                root: styles.root,
                description: styles.description
              }}
            />
            <Button type={'secondary'} className={styles.button}>
              SUSCRIBIR
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
