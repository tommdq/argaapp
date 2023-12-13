import { Flex, Text } from '@mantine/core'
import Link from 'next/link'
import styles from './links.module.css'

interface Props extends React.HTMLAttributes<HTMLElement> {
  toggle?: () => void
  fw?: 'light' | 'bold'
  gap?: string
  direction?: 'column' | 'row'
  size?: string
  color?: string
  align?: 'start' | 'center'
}

const links = [
  { label: 'QUIENES SOMOS', href: '/' },
  { label: 'NUESTRA HISTORIA', href: '#aboutUs' },
  { label: 'LOCALES', href: '#locals' }
] as { label: string; href: string }[]

const Links = ({
  toggle,
  fw = 'light',
  gap = '2rem',
  direction = 'column',
  size = '18px',
  color = 'black',
  align = 'start',
  ...rest
}: Props) => {
  const fontWeight = {
    light: 400,
    bold: 500
  }
  return (
    <Flex direction={direction} w={'100%'} gap={gap} align={align} {...rest}>
      {links.map(({ label, href }) => (
        <Link
          href={href}
          onClick={toggle}
          className={styles.link}
          key={label}
          tabIndex={0}
        >
          <Text
            size={size}
            tt='uppercase'
            fw={fontWeight[fw]}
            className={styles.text}
            c={color}
          >
            {label}
          </Text>
        </Link>
      ))}
    </Flex>
  )
}
export default Links
