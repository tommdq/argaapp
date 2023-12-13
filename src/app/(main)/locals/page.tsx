'use client'

import { locals } from '@locals/mockups'
import { Container } from '@mantine/core'
import { LocalModal } from '../_components/LocalModal'
import { NewsLetter } from '../_components/NewsLetter'
import { ShoppingTour } from '../_components/ShoppingTour'
import WeAreArga from '../_components/WeAreArga/WeAreArga'
import Explorer from './_components/Explorer/Explorer'
import LocalsDescription from './_components/LocalsDescription/LocalsDescription'

type Props = {
  searchParams: Record<string, string> | null | undefined
}

export default function LocalsPage({ searchParams }: Readonly<Props>) {
  const selectedLocal = locals.find(
    (local) => local.name === searchParams?.localModal
  )
  return (
    <Container fluid p={0} pos={'relative'} h={'100%'}>
      <LocalsDescription />
      <Explorer />
      <WeAreArga />
      <ShoppingTour />
      <NewsLetter />
      {searchParams?.localModal && selectedLocal && (
        <LocalModal localData={selectedLocal} />
      )}
    </Container>
  )
}
