/* eslint-disable no-unused-vars */
import Image from '@app/_components/Image'
import { ICONS } from '@assets/svg/constants'
import { LocalInfo } from '@locals/mockups'
import { Button, Flex, Group, Text, Title } from '@mantine/core'

export function LocalInfo({ localInfo }: { localInfo: LocalInfo }) {
  return (
    <Flex
      p={'2.5rem'}
      direction={'column'}
      component={'section'}
      bg={'#1c1c1c'}
      c={'white'}
      justify={'space-between'}
      style={{ flex: 1 }}
      gap={'1rem'}
    >
      <Flex justify={'space-between'}>
        <Text size={'2rem'}>{localInfo.localNumber}</Text>
        <Flex gap={'.5rem'} align={'center'}>
          <Title size={'1rem'} fw={'600'}>
            VER INDICACIONES
          </Title>
          <Image
            src={ICONS.ARROW_INDICATIONS_WHITE}
            alt={'arrow indications'}
            w={'1rem'}
          />
        </Flex>
      </Flex>
      <Group>
        {localInfo.tags.map((tag) => (
          <Button variant={'default'} radius={'lg'} key={tag}>
            {tag}
          </Button>
        ))}
      </Group>
      <Flex direction={'column'}>
        <Text fw={'bold'}>Horarios de atención:</Text>
        <Text>{localInfo.schedule}</Text>
      </Flex>
    </Flex>
  )
}
