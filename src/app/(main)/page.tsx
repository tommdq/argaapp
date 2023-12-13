import { Container } from '@mantine/core'
import { AboutUs } from './_components/AboutUs'
import { DescriptionBlock } from './_components/DescriptionBlock'
import { GridLocals } from './_components/GridLocals'
import { Highlights } from './_components/Highlights'
import { HomeContainer } from './_components/HomeContainer'
import { NewsLetter } from './_components/NewsLetter'
import { RegisterModal } from './_components/RegisterModal'
import { Registers } from './_components/Registers'
import { ShoppingTour } from './_components/ShoppingTour'
import { TrustUs } from './_components/TrustUs'
import WeAreArga from './_components/WeAreArga/WeAreArga'

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export default function Page({ searchParams }: Readonly<Props>) {
  return (
    <Container fluid p={0}>
      <HomeContainer />
      <DescriptionBlock />
      <GridLocals />
      <TrustUs />
      <Highlights />
      <WeAreArga />
      <ShoppingTour />
      <AboutUs />
      <Registers />
      <NewsLetter />
      {searchParams?.registerModal && <RegisterModal />}
    </Container>
  )
}
