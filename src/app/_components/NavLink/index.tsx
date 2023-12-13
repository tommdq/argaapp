import { MantineStyleProp, NavLink as NavLinkMantine } from '@mantine/core'
import NextLink from 'next/link'
import styles from './navlink.module.css'

type Props = {
  label: string
  href: string
  style?: MantineStyleProp
}

const NavLink = ({ label, href, style, ...rest }: Props) => {
  return (
    <NavLinkMantine
      className={styles.nav}
      label={label}
      component={NextLink}
      href={href}
      style={style}
      {...rest}
    />
  )
}
export default NavLink
