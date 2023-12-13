'use client'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { DM_Sans, Space_Grotesk } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const theme = createTheme({
  fontFamily: dmSans.style.fontFamily,
  fontFamilyMonospace: dmSans.style.fontFamily,
  headings: { fontFamily: spaceGrotesk.style.fontFamily },
  colors: {
    primary: [
      '#E65C1F',
      '#fedfd1',
      '#f6bea5',
      '#ef9a74',
      '#ea7b4b',
      '#e76930',
      '#e65e22',
      '#cd4d16',
      '#b74410',
      '#a03807'
    ],
    secondary: [
      '#2A3A60',
      '#e0e4ec',
      '#bdc5d9',
      '#98a5c7',
      '#798ab8',
      '#6579af',
      '#5a70ac',
      '#4b5f97',
      '#415587',
      '#354979'
    ],
    gray: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#575757'
    ],
    white: [
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1',
      '#F1F1F1'
    ],
    black: [
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C',
      '#1C1C1C'
    ]
  }
})

export function Providers({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <SessionProvider>
    <MantineProvider theme={theme}>
      <Notifications position={'top-center'} />
      {children}
    </MantineProvider>
    // </SessionProvider>
  )
}
