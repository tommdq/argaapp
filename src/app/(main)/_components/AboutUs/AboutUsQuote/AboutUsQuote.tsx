import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { Flex, Text } from '@mantine/core'
import styles from './aboutUsQuote.module.css'

const AboutUsQuote = () => {
  return (
    <Flex className={styles.quote}>
      <Image src={ICONS.QUOTE} alt={'quote'} w={'min-content'} />
      <Text size={'16px'} lh={'24px'}>
        Este concepto centralizado ahorra tiempo y esfuerzo al brindar acceso a
        una variedad de opciones en un mismo espacio, facilitando decisiones
        informadas y colaboración creativa.
      </Text>
      <Text size={'12px'} fw={'bold'}>
        José Luis & Juan Manuel Saldaña
      </Text>
      <Text size={'12px'} fw={'500'} lh={'0'}>
        Desarrolladores ARGA
      </Text>
    </Flex>
  )
}
export default AboutUsQuote
