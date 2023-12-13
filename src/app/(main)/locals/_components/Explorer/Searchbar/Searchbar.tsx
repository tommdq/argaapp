import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import styles from './searchbar.module.css'

type Props = {
  setQuery: (value: string) => void
  setFilter: (arg0: string) => void
  query: string
}

const Searchbar = React.memo(({ setFilter, setQuery, query }: Props) => {
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(query)
  }, [query])

  const handleFilter = (value: string) => {
    setSearchValue(value)
    setQuery(value)
    setFilter('todo')
  }
  return (
    <TextInput
      placeholder='Buscar'
      size='xs'
      leftSection={<Image src={ICONS.SEARCH} alt='Ícono de lupa' />}
      rightSectionWidth={70}
      styles={{ section: { pointerEvents: 'none' } }}
      onChange={(e) => handleFilter(e.target.value)}
      value={searchValue}
      mb='sm'
      classNames={{
        input: styles.input,
        wrapper: styles.wrapper,
        root: styles.root
      }}
    />
  )
})

Searchbar.displayName = 'Searchbar'

export default Searchbar
