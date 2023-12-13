import useDeviceType from '@app/_hooks/useDeviceType'
import { LOCALS_BG } from '@assets/img/constants'
import { BANNERS, LOGOS } from '@assets/locals/locals'
import { LOCALS_LOGOS } from '@assets/svg/constants'
import { locals as mockedLocals } from '@locals/mockups'
import { Flex } from '@mantine/core'
import { useMemo, useState } from 'react'
import { LocalsGrid } from '../LocalsGrid'
import Filters from './Filters/Filters'
import Searchbar from './Searchbar/Searchbar'

const mockLocal = {
  name: 'OROPEL',
  icon: LOGOS.OROPEL_LOGO,
  bg: BANNERS.OROPEL_BANNER,
  category: 'contruccion_y_ferretería',
  categoryName: 'FERRETERÍA'
}

const anotherMockLocals = [
  {
    name: 'ALOISIO',
    icon: LOCALS_LOGOS.ALOISIO_LOGO,
    bg: LOCALS_BG.ALOISIO_BG,
    category: 'tecnologia_y_seguridad',
    categoryName: 'TECNOLOGÍA'
  },
  {
    name: 'LTN',
    icon: LOCALS_LOGOS.LTN_LOGO,
    bg: LOCALS_BG.LTN_BG,
    category: 'energia_y_sustentabilidad',
    categoryName: 'AISLAMIENTOS'
  },
  {
    name: 'MANAGER ELECTRIC',
    icon: LOCALS_LOGOS.MANAGER_ELECTRIC_LOGO,
    bg: LOCALS_BG.MANAGER_ELECTRIC_BG,
    category: 'energia_y_sustentabilidad',
    categoryName: 'ELECTRICIDAD'
  }
]

const initialLocals = [
  ...Array(25)
    .fill(undefined)
    .map(() => ({ ...mockLocal })),
  ...anotherMockLocals
]

const Explorer = () => {
  const { isDesktop } = useDeviceType()
  const [locals] = useState(mockedLocals)
  const [filter, setFilter] = useState('todo')
  const [query, setQuery] = useState('')

  const filteredLocals = useMemo(() => {
    if (filter === 'todo' && query === '') return locals
    if (filter !== 'todo')
      return locals.filter((local) => local.category.toString() === filter)
    if (query !== '')
      return locals.filter((local) =>
        local.name.toLowerCase().includes(query.toLowerCase())
      )
  }, [locals, filter, query])

  return (
    <>
      <Flex
        align={'center'}
        justify={'space-between'}
        direction={isDesktop ? 'row' : 'column-reverse'}
        p={'1rem'}
      >
        <Filters setFilter={setFilter} setQuery={setQuery} filter={filter} />
        <Searchbar setFilter={setFilter} setQuery={setQuery} query={query} />
      </Flex>
      <LocalsGrid locals={filteredLocals ?? locals} />
    </>
  )
}
export default Explorer
