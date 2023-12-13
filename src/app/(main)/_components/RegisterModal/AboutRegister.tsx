import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { Flex, Text, Title } from '@mantine/core'

export function AboutRegister({ isArquitect }: { isArquitect: boolean }) {
  return (
    <Flex
      style={{
        backgroundColor: '#1c1c1c',
        display: 'flex',
        flex: 1
      }}
      direction={'column'}
      p={'4rem 3rem'}
      gap={'2rem'}
      h={'100%'}
      c={'white'}
    >
      <Image
        src={isArquitect ? ICONS.ARQUITECT_FORM : ICONS.COMMUNITY_FORM}
        alt={'community form icon'}
        h={'80'}
        w={'80'}
      />
      {isArquitect ? (
        <>
          <Title fw={'400'}>
            Únete al programa de beneficios para arquitectos
          </Title>
          <Text fw={'300'} fz={'lg'} lh={'lg'}>
            ¿Te dedicas a la arquitectura? Obtén beneficios y descuentos
            especiales al unirte a nuestra lista exclusiva de profesionales e
            influyentes de la arquitectura de la región.
          </Text>
        </>
      ) : (
        <>
          <Title fw={'400'}>Únete a nuestro directorio de profesionales</Title>
          <Text fw={'300'} fz={'lg'} lh={'lg'}>
            Aumenta tu visibilidad en nuestra comunidad, resalta tus servicios y
            disfruta de beneficios exclusivos, como tarifas especiales en
            alquiler de espacios.
          </Text>
        </>
      )}
      <Flex style={{ marginTop: 'auto' }} gap={'1.3rem'}>
        <Image src={ICONS.FACEBOOK_WHITE} alt='logo-facebook' width={30} />
        <Image
          src={ICONS.INSTAGRAM_WHITE}
          alt='logo-ig'
          width={30}
          height={30}
        />
        <Image
          src={ICONS.LINKEDIN_WHITE}
          alt='logo-linkedin'
          width={30}
          height={30}
        />
      </Flex>
    </Flex>
  )
}
