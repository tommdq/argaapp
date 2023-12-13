import { ScrollArea, Tabs } from '@mantine/core'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './filters.module.css'

type Props = {
  // eslint-disable-next-line no-unused-vars
  setQuery: (value: string) => void
  setFilter: Dispatch<SetStateAction<string>>
  filter: string
}

const filters = [
  { name: 'CONTRUCCION_Y_FERRETERIA', nice: 'Construcción & Ferretería' },
  { name: 'ENERGIA_Y_SUSTENTABILIDAD', nice: 'Energía & Sustentabilidad' },
  { name: 'TECNOLOGIA_Y_SEGURIDAD', nice: 'Tecnología & Seguridad' },
  { name: 'DECORACION_Y_MOBILIARIO', nice: 'Decoración & Mobiliario' }
]

// TODO -> No pasar por props hooks
const Filters = ({ filter, setFilter, setQuery }: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>('todo')

  useEffect(() => {
    if (filter === 'todo') setActiveTab('todo')
  }, [filter])

  const handleFilter = (filterName: string) => {
    setQuery('')
    // TODO -> arreglar tipado
    setFilter((prev: string) => (prev === filterName ? 'todo' : filterName))
  }

  return (
    <ScrollArea type='never' h={'fit-content'} className={styles.container}>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        classNames={{
          list: styles.tabs
        }}
      >
        <Tabs.List>
          {filters.map((filter) => (
            <Tabs.Tab
              onClick={() => handleFilter(filter.name)}
              key={filter.name}
              value={filter.name}
              color='primary'
            >
              {filter.nice}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </ScrollArea>
  )
}
export default Filters
