'use client'

import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Navbar } from './_components/Navbar'

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure()
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: !opened, mobile: !opened }
      }}
      style={{ scrollBehavior: 'smooth' }}
      pos='relative'
    >
      <Header toggle={toggle} />
      <Navbar opened={opened} toggle={toggle} />
      <AppShell.Main p={0}>{children}</AppShell.Main>
      <Footer />
    </AppShell>
  )
}
