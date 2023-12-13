import Image from '@app/_components/Image'
import { Box, Text } from '@mantine/core'
import { StaticImageData } from 'next/image'
import styles from './localItem.module.css'

export type TLocalItem = {
  name: string
  icon: StaticImageData | string
  banner: StaticImageData
  category: string
}

type Props = {
  local: TLocalItem
  index: number
  minWidth?: string
}

const LocalItem = ({ local, index, minWidth }: Props) => {
  return (
    <div key={index} className={styles.item} style={{ minWidth }}>
      <Box className={styles.images}>
        <Image src={local.icon} alt='logo' className={styles.logos} />
        <Image
          src={local.banner}
          alt='background image'
          className={styles.bg}
          fill
          // TODO agregar prop sizes
        />
      </Box>
      <Box className={styles.category}>
        <Text>{local.category}</Text>
      </Box>
    </div>
  )
}
export default LocalItem
