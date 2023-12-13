'use client'

import Button from '@app/_components/Button'
import Image from '@app/_components/Image'
import useDeviceType from '@app/_hooks/useDeviceType'
import { LOGOS } from '@assets/svg/constants'
import { AppShell, Box, Burger, Flex, Group } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Links } from '../Links'
import styles from './header.module.css'

type Props = {
  toggle: () => void
}

const Header = ({ toggle }: Props) => {
  const path = usePathname()
  const headerRef = useRef(null)
  const [headerBackground, setHeaderBackground] = useState('transparent')
  const [logoOpacity, setLogoOpacity] = useState(0)
  const [textColor, setTextColor] = useState('hsl(0,0%,100%,1)')
  const [scroll] = useWindowScroll()
  const { isMobile } = useDeviceType()

  const isHome = path === '/'

  const handleScroll = useCallback(() => {
    const scrollY = scroll.y / 3 / 100
    setHeaderBackground(`rgba(255, 255, 255, ${scrollY})`)
    setLogoOpacity(scrollY)
    setTextColor(`hsl(0,0%,${100 - scrollY * 100}%,1)`)
  }, [scroll.y])

  useEffect(() => {
    if (!isHome) return
    handleScroll()
  }, [scroll.y, handleScroll, isHome])

  if (typeof isMobile === 'undefined') {
    return <></>
  }

  return (
    <AppShell.Header
      withBorder={false}
      className={styles.header}
      pos={isHome ? 'fixed' : 'sticky'}
      ref={headerRef}
      w='100%'
      style={{
        backgroundColor: isHome ? headerBackground : 'white'
      }}
    >
      <Group w='100%' h='100%' px='3vw' py='1rem' justify={'space-between'}>
        {isMobile ? (
          <>
            <Box pos={'relative'} w={'10rem'} h={'2rem'}>
              <NextLink href='/'>
                <Image
                  alt='logo'
                  src={LOGOS.LOGO_NAME_BLACK}
                  style={{
                    opacity: isHome ? logoOpacity : 1,
                    position: 'absolute',
                    zIndex: 1
                  }}
                />
                {isHome && (
                  <Image
                    alt='logo'
                    src={LOGOS.LOCO_WHITE_NAME_WHITE}
                    style={{ position: 'absolute' }}
                  />
                )}
              </NextLink>
            </Box>
            <Burger
              onClick={toggle}
              size='sm'
              color={isHome ? textColor : 'black'}
              aria-label={'navigation-menu'}
              transitionDuration={0}
            />
          </>
        ) : (
          <>
            <Box pos={'relative'} w={'10rem'} h={'2rem'}>
              <NextLink href='/'>
                <Image
                  alt='logo'
                  src={LOGOS.LOGO_NAME_BLACK}
                  style={{
                    opacity: isHome ? logoOpacity : 1,
                    position: 'absolute',
                    zIndex: 1
                  }}
                />
                {isHome && (
                  <Image
                    alt='logo'
                    src={LOGOS.LOCO_WHITE_NAME_WHITE}
                    style={{ position: 'absolute' }}
                  />
                )}
              </NextLink>
            </Box>
            <Flex gap={'2rem'}>
              <Links
                direction='row'
                size='16px'
                color={isHome ? textColor : 'black'}
                align='center'
                className={styles.links}
              />
              <Button
                type='primary'
                h={'2.5rem'}
                radius={'.5rem'}
                className={styles.button}
              >
                CONTACTO
              </Button>
            </Flex>
          </>
        )}
      </Group>
    </AppShell.Header>
  )
}
export default Header
