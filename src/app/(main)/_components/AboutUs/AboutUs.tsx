/* eslint-disable react/no-unescaped-entities */
'use client'
import useDeviceType from '@app/_hooks/useDeviceType'
import { Flex } from '@mantine/core'
import AboutUsImage from './AboutUsImage/AboutUsImage'
import AboutUsQuote from './AboutUsQuote/AboutUsQuote'
import AboutUsText from './AboutUsText/AboutUsText'

export function AboutUs() {
  const { isDesktop } = useDeviceType()
  return (
    <>
      {isDesktop ? (
        <Flex justify={'space-between'} p={'3rem'} id='aboutUs'>
          <AboutUsImage />
          <Flex gap={'1rem'} direction={'column'} style={{ flex: 1 }}>
            <AboutUsText />
            <AboutUsQuote />
          </Flex>
        </Flex>
      ) : (
        <Flex direction={'column'} px={'3vw'} py={'5rem'}>
          <AboutUsText />
          <AboutUsImage />
          <AboutUsQuote />
        </Flex>
      )}
    </>
  )
}
